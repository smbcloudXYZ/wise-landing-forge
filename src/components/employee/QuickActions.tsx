import { Plus, Receipt, FileText, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
  { label: "Submit Expense", icon: Plus, primary: true },
  { label: "Upload Receipt", icon: Receipt, primary: false },
  { label: "View Reports", icon: FileText, primary: false },
  { label: "Get Help", icon: HelpCircle, primary: false },
];

const QuickActions = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 animate-fade-up">
            Quick actions
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up animation-delay-100">
            {actions.map((action) => {
              const Icon = action.icon;
              
              return (
                <Button
                  key={action.label}
                  variant={action.primary ? "default" : "outline"}
                  className={`h-auto py-6 flex flex-col gap-3 ${
                    action.primary 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                      : 'hover:border-primary/50 hover:bg-primary/5'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-sm font-medium">{action.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
