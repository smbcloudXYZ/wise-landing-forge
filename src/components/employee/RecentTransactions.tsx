import { ArrowUpRight, Coffee, Monitor, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const transactions = [
  { 
    id: 1, 
    description: "Figma Pro Subscription", 
    category: "Software", 
    amount: -15.00, 
    date: "Today",
    icon: Monitor,
    status: "approved"
  },
  { 
    id: 2, 
    description: "Team Lunch - Pizza Hut", 
    category: "Food & Meals", 
    amount: -89.50, 
    date: "Yesterday",
    icon: Coffee,
    status: "approved"
  },
  { 
    id: 3, 
    description: "Flight to NYC - Conference", 
    category: "Travel", 
    amount: -324.00, 
    date: "Nov 22",
    icon: Plane,
    status: "pending"
  },
  { 
    id: 4, 
    description: "AWS Credits", 
    category: "Software", 
    amount: -120.00, 
    date: "Nov 20",
    icon: Monitor,
    status: "approved"
  },
];

const RecentTransactions = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6 animate-fade-up">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              Recent activity
            </h2>
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              View all <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="bg-card rounded-2xl border border-border overflow-hidden animate-fade-up animation-delay-100">
            {transactions.map((transaction, index) => {
              const Icon = transaction.icon;
              
              return (
                <div 
                  key={transaction.id}
                  className={`flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors cursor-pointer ${
                    index !== transactions.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">{transaction.category} • {transaction.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">
                      ${Math.abs(transaction.amount).toFixed(2)}
                    </p>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      transaction.status === 'approved' 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400'
                    }`}>
                      {transaction.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentTransactions;
