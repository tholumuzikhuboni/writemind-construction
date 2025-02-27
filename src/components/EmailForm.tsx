import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
      toast.success("Thanks for subscribing! We'll keep you updated.");
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-2">
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-12 bg-white/90 border-white/20 backdrop-blur-sm"
          required
        />
        <Button 
          type="submit" 
          disabled={isLoading}
          className="h-12 px-8 transition-all duration-300 font-medium text-white hover:opacity-90"
          style={{ backgroundColor: "#206BC4" }}
        >
          {isLoading ? 'Subscribing...' : 'Notify Me'}
        </Button>
      </div>
    </form>
  );
}
