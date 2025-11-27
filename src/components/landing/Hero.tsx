import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Building3DViewer from "./Building3DViewer";
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

        {/* 3D Building Model */}
        <div className="mt-16 md:mt-24 max-w-4xl mx-auto animate-fade-up animation-delay-400">
          <Building3DViewer />
        </div>
      </div>
    </section>;
};
export default Hero;