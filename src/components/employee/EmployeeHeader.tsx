import { Button } from "@/components/ui/button";
import { ArrowLeft, Bell, User } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const EmployeeHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline text-sm font-medium">Back to Home</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-foreground">Snac</span>
          <span className="text-sm text-muted-foreground">| Employee Portal</span>
        </div>

        <div className="flex items-center gap-2">
          <Button 
            onClick={() => window.open('about:blank', '_blank')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-4"
          >
            Pay AI Agent
          </Button>
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5 text-muted-foreground" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default EmployeeHeader;
