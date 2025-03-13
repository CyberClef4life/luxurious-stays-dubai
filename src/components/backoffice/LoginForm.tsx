
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm = ({ onLoginSuccess }: LoginFormProps) => {
  const [loginLoading, setLoginLoading] = useState(false);
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('password123');

  const handleSignIn = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    try {
      setLoginLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        console.error("Login error:", error);
        toast.error(`Login failed: ${error.message}`);
      } else {
        console.log("Login successful:", data);
        toast.success("Logged in successfully");
        onLoginSuccess();
      }
    } catch (err) {
      console.error("Unexpected login error:", err);
      toast.error("An unexpected error occurred during login");
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Backoffice Login</h1>
      <form onSubmit={handleSignIn} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input 
            id="password" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password" 
            required
          />
        </div>
        <Button 
          type="submit"
          className="w-full bg-brand-teal hover:bg-brand-teal/90"
          disabled={loginLoading}
        >
          {loginLoading ? "Signing in..." : "Sign In"}
        </Button>
      </form>
      <p className="mt-4 text-sm text-gray-500 text-center">
        Demo credentials are pre-filled for testing purposes.
      </p>
      <p className="mt-2 text-xs text-gray-400 text-center">
        Access URL: conciergesublime.com/backoffice
      </p>
    </div>
  );
};

export default LoginForm;
