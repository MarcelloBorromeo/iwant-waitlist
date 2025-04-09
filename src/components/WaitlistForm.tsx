
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { CheckIcon, ArrowRightIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

interface FormState {
  email: string;
  phone?: string;
  submitted: boolean;
  loading: boolean;
}

const WaitlistForm = () => {
  const [form, setForm] = useState<FormState>({
    email: "",
    phone: "",
    submitted: false,
    loading: false,
  });
  
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    // Phone validation (optional)
    if (form.phone && !/^\+?[0-9\s()-]{7,15}$/.test(form.phone)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid phone number",
        variant: "destructive",
      });
      return;
    }
    
    setForm(prev => ({ ...prev, loading: true }));
    
    try {
      console.log("Submitting to waitlist:", { 
        email: form.email, 
        phone_num: form.phone || null 
      });
      
      // Insert data into Supabase with explicit table name
      const { data, error } = await supabase
        .from('iwant-waitlist')
        .insert([
          { 
            email: form.email, 
            phone_num: form.phone || null,
            created_at: new Date().toISOString() 
          }
        ]);
      
      console.log("Supabase response:", { data, error });
      
      if (error) {
        console.error("Supabase error:", error);
        
        // Handle different error cases
        let errorMessage = "We couldn't add you to the waitlist. Please try again.";
        
        if (error.code === '23505') {
          // Duplicate email error
          errorMessage = "This email is already on our waitlist!";
          setForm(prev => ({ ...prev, loading: false, submitted: true }));
          toast({
            title: "Already registered",
            description: errorMessage,
          });
          return;
        } else if (error.code === '23502') {
          errorMessage = "Please fill in all required fields.";
        } else if (error.code === '42501') {
          errorMessage = "Permission error. Please try again.";
        } else if (error.message) {
          // Show the specific error message from Supabase
          errorMessage = error.message;
        }
        
        toast({
          title: "Submission failed",
          description: errorMessage,
          variant: "destructive",
        });
        setForm(prev => ({ ...prev, loading: false }));
        return;
      }
      
      // Success
      console.log("Successfully added to waitlist!");
      setForm(prev => ({ ...prev, loading: false, submitted: true }));
      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      toast({
        title: "Submission failed",
        description: "We couldn't add you to the waitlist. Please try again later.",
        variant: "destructive",
      });
      setForm(prev => ({ ...prev, loading: false }));
    }
  };
  
  return (
    <AnimatePresence mode="wait">
      {form.submitted ? (
        <motion.div
          key="confirmation"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-center space-y-4 p-6 rounded-lg bg-white/70 border border-gray-100"
        >
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-green-50">
            <CheckIcon className="h-6 w-6 text-green-500" />
          </div>
          <h3 className="text-xl font-medium text-gray-900">You're all set!</h3>
          <p className="text-gray-600">
            We'll notify you when iwant_ is ready. Get excited for a personalized culinary journey!
          </p>
        </motion.div>
      ) : (
        <motion.form 
          key="form"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onSubmit={handleSubmit} 
          className="space-y-4"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              required
              value={form.email}
              onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
              className="mt-1 w-full"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number <span className="text-gray-400">(optional)</span>
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={form.phone}
              onChange={(e) => setForm(prev => ({ ...prev, phone: e.target.value }))}
              className="mt-1 w-full"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full transition-all duration-300 bg-gray-900 text-white hover:bg-gray-800"
            disabled={form.loading}
          >
            {form.loading ? "Submitting..." : (
              <>
                Join Waitlist 
                <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
              </>
            )}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
};

export default WaitlistForm;
