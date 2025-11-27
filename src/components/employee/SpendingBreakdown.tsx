import { Coffee, Monitor, Plane, BookOpen, MoreHorizontal } from "lucide-react";

const categories = [
  { name: "Software & Tools", amount: 890, icon: Monitor, color: "bg-blue-500" },
  { name: "Travel", amount: 650, icon: Plane, color: "bg-purple-500" },
  { name: "Food & Meals", amount: 420, icon: Coffee, color: "bg-orange-500" },
  { name: "Learning & Dev", amount: 320, icon: BookOpen, color: "bg-primary" },
  { name: "Other", amount: 170, icon: MoreHorizontal, color: "bg-muted-foreground" },
];

const totalSpent = categories.reduce((sum, cat) => sum + cat.amount, 0);

const SpendingBreakdown = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 animate-fade-up">
            Where your money goes
          </h2>

          <div className="grid gap-3 animate-fade-up animation-delay-100">
            {categories.map((category, index) => {
              const percentage = (category.amount / totalSpent) * 100;
              const Icon = category.icon;
              
              return (
                <div 
                  key={category.name}
                  className="bg-card rounded-xl border border-border p-4 hover:border-primary/30 transition-colors cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground">{category.name}</span>
                        <span className="font-semibold text-foreground">${category.amount}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${category.color} rounded-full transition-all duration-500`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
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

export default SpendingBreakdown;
