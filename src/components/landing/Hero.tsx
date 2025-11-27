import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import buildingModel from "@/assets/building-3d-model.png";
const Hero = () => {
  return <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-background overflow-hidden">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-up">Blockchain Expense Management</h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">For CFOs with cross-border transactions, international payments & th</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-200">
            <Button variant="hero" size="lg">
              Open an account
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="navy-outline" size="lg">
              Send money now
            </Button>
          </div>
        </div>

        {/* Hero visual element */}
        <div className="mt-16 md:mt-24 relative animate-fade-up animation-delay-300">
          <div className="max-w-3xl mx-auto">
            {/* Card mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl transform scale-95" />
              <div className="relative bg-secondary rounded-3xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Wise Card */}
                  <div className="w-64 h-40 bg-primary rounded-2xl p-6 flex flex-col justify-between shadow-2xl transform hover:-rotate-2 transition-transform duration-300">
                    <div className="flex justify-between items-start">
                      <div className="w-10 h-8 bg-primary-foreground/20 rounded" />
                      <span className="text-primary-foreground font-bold text-lg">wise</span>
                    </div>
                    <div className="text-primary-foreground">
                      <p className="text-sm opacity-80">•••• •••• •••• 4242</p>
                      <p className="text-sm font-medium mt-1">JOHN DOE</p>
                    </div>
                  </div>
                  
                  {/* Transfer info */}
                  <div className="flex-1 text-secondary-foreground text-center md:text-left">
                    <p className="text-sm opacity-70">You send exactly</p>
                    <p className="text-4xl font-bold mt-1">1,000.00 EUR</p>
                    <div className="mt-4 flex items-center justify-center md:justify-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <p className="text-sm opacity-70">Recipient gets 1,085.67 USD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Building Model */}
        <div className="mt-16 md:mt-24 flex justify-center animate-fade-up animation-delay-400">
          <div className="relative max-w-2xl">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-3xl" />
            <img 
              src={buildingModel} 
              alt="3D Building Model" 
              className="relative w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;