
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { CheckIcon, ArrowRightIcon } from "lucide-react";

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
    
    // Simulate API call
    setTimeout(() => {
      setForm(prev => ({ ...prev, loading: false, submitted: true }));
      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
      });
    }, 1500);
  };
  
  if (form.submitted) {
    return (
      <div className="text-center space-y-4 p-6 rounded-lg bg-white/70 border border-gray-100">
        <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-green-50">
          <CheckIcon className="h-6 w-6 text-green-500" />
        </div>
        <h3 className="text-xl font-medium text-gray-900">Thanks for joining!</h3>
        <p className="text-gray-600">
          We'll notify you when iwant_ is ready. Get excited for a personalized culinary journey!
        </p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
    </form>
  );
};

export default WaitlistForm;
