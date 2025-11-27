import { Globe, Zap, Shield, CreditCard } from "lucide-react";
const features = [
  {
    icon: Globe,
    title: "Global Settlement Layer",
    description: "Send money to 80+ countries with the real exchange rate. No hidden fees, ever.",
  },
  {
    icon: Zap,
    title: "Low Cost Cross Border Transactions",
    description: "Most transfers arrive in seconds. Track your money every step of the way.",
  },
  {
    icon: Shield,
    title: "Faster knowledge of Internal Spending",
    description: "We're regulated by the world's most respected authorities. Your money is always protected.",
  },
  {
    icon: CreditCard,
    title: "AI Agent Ready",
    description: "Spend abroad with the real exchange rate. Works everywhere Mastercard is accepted.",
  },
];
const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Why Blockchain?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Of course there are other ways to do Expense Management </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-muted hover:bg-primary/10 transition-all duration-300 animate-fade-up"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
