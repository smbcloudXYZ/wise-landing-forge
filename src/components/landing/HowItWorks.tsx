import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const steps = [{
  number: "01",
  title: "Sign up for free",
  description: "Create your account in minutes. All you need is your email address to get started."
}, {
  number: "02",
  title: "Choose your amount",
  description: "Tell us how much you want to send and where. We'll show you our fee upfront—no surprises."
}, {
  number: "03",
  title: "Add recipient details",
  description: "Enter your recipient's bank details. We'll make sure everything is correct."
}, {
  number: "04",
  title: "Send money",
  description: "Pay for your transfer and we'll do the rest. Track your money in real time."
}];
const HowItWorks = () => {
  return <section id="how-it-works" className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            How it works
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground/70">
            Sending money abroad should be as easy as sending a text. With Wise, it is.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => <div key={index} className="relative animate-fade-up" style={{
          animationDelay: `${index * 100}ms`
        }}>
              {/* Connector line */}
              {index < steps.length - 1 && <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/30" />}
              
              <div className="mb-4">
                <span className="text-6xl font-bold text-lime-400">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-secondary-foreground/70">{step.description}</p>
            </div>)}
        </div>

        <div className="mt-16 text-center">
          <Button variant="hero" size="lg">
            Get started now
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>;
};
export default HowItWorks;