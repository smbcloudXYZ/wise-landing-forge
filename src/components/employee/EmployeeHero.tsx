import { TrendingUp, Wallet } from "lucide-react";

const EmployeeHero = () => {
  const budgetUsed = 2450;
  const budgetTotal = 5000;
  const percentUsed = (budgetUsed / budgetTotal) * 100;

  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Message */}
          <div className="text-center mb-10 animate-fade-up">
            <p className="text-sm font-medium text-primary mb-2">Welcome back, Sarah</p>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              You're doing great with your budget
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Engineering Department • Q4 2024
            </p>
          </div>

          {/* Main Budget Card */}
          <div className="bg-card rounded-2xl border border-border p-6 md:p-10 animate-fade-up animation-delay-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Department Budget</p>
                    <p className="text-2xl md:text-3xl font-bold text-foreground">
                      ${budgetTotal.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${percentUsed}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      ${budgetUsed.toLocaleString()} spent
                    </span>
                    <span className="text-foreground font-medium">
                      ${(budgetTotal - budgetUsed).toLocaleString()} remaining
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-6 md:gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-primary mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">12%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Under budget</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">18</p>
                  <p className="text-xs text-muted-foreground">Days left</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeHero;
