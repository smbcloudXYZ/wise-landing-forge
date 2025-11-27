import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "No hidden fees",
  "Real exchange rate",
  "Fast transfers",
  "Bank-level security",
];

const CTA = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-muted rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Join millions of people and businesses who trust Wise to move their money around the world.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg">
              Create free account
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              Compare pricing
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Free to create an account. Terms apply.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
