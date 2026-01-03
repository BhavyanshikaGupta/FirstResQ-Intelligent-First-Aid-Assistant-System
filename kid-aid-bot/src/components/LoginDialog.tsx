import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUser } from "./context/UserContext";

interface LoginDialogProps {
  onClose: () => void;
  onLogin: () => void;
}

const LoginDialog = ({ onClose, onLogin }: LoginDialogProps) => {
  const { setUser } = useUser(); // ✅ Context se user set karne ka hook

  // ✅ Yeh 3 state missing the
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ User save to context
    setUser({
      name: name || "User",
      email
    });

    onLogin();
  };

  const handleGuestContinue = () => {
    setUser({ name: "Guest User" });
    onLogin();
  };

  return (
    <div className="fixed bottom-8 right-8 w-96 bg-card rounded-3xl shadow-hover z-50 border border-border overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-border bg-primary/5">
        <h3 className="font-semibold text-card-foreground">Welcome</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
          <X className="w-4 h-4" />
        </Button>
      </div>

      <Tabs defaultValue="login" className="p-6">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="space-y-2">
              <Label>Password</Label>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            <Button type="submit" className="w-full">Login</Button>
          </form>
        </TabsContent>

        <TabsContent value="signup">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="space-y-2">
              <Label>Password</Label>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            <Button type="submit" className="w-full">Sign Up</Button>
          </form>
        </TabsContent>

        <div className="mt-6 pt-6 border-t border-border">
          <Button variant="outline" className="w-full" onClick={handleGuestContinue}>
            Continue as Guest
          </Button>
        </div>
      </Tabs>
    </div>
  );
};

export default LoginDialog;
