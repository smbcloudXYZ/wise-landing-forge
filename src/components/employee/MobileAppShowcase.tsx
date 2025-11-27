import { Button } from "@/components/ui/button";
import { Smartphone, Download, Star, Zap, Shield, QrCode } from "lucide-react";
import appScreenshotHome from "@/assets/app-screenshot-home.png";
import appScreenshotPay from "@/assets/app-screenshot-pay.png";
import appScreenshotProfile from "@/assets/app-screenshot-profile.png";

const features = [
  { icon: Zap, label: "Instant Payments", description: "Send money in seconds" },
  { icon: Shield, label: "Bank-Level Security", description: "Your data is protected" },
  { icon: QrCode, label: "QR Scan & Pay", description: "Easy contactless payments" },
  { icon: Star, label: "Track Expenses", description: "Real-time spending insights" },
];

const MobileAppShowcase = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 rounded-full text-lime mb-6">
              <Smartphone className="w-4 h-4" />
              <span className="text-sm font-medium">Now Available on Mobile</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Take Snac Everywhere
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Manage your expenses, send money, and track your budget on the go. 
              Download the Snac app today and take control of your finances.
            </p>
          </div>

          {/* Phone Mockups */}
          <div className="relative flex justify-center items-end gap-4 md:gap-8 mb-12 md:mb-16">
            {/* Left Phone - Pay Screen */}
            <div className="relative animate-fade-up animation-delay-100 hidden sm:block">
              <div className="relative w-48 md:w-56 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-lime/20 to-primary/20 rounded-[2.5rem] blur-2xl" />
                <div className="relative bg-navy rounded-[2.5rem] p-2 shadow-2xl">
                  <img 
                    src={appScreenshotPay} 
                    alt="Snac App Pay Screen" 
                    className="w-full h-auto rounded-[2rem]"
                  />
                </div>
              </div>
            </div>

            {/* Center Phone - Home Screen (Featured) */}
            <div className="relative z-10 animate-fade-up">
              <div className="relative w-56 md:w-72 transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-lime/30 to-primary/30 rounded-[3rem] blur-3xl" />
                <div className="relative bg-navy rounded-[3rem] p-2 shadow-2xl ring-4 ring-lime/20">
                  <img 
                    src={appScreenshotHome} 
                    alt="Snac App Home Screen" 
                    className="w-full h-auto rounded-[2.5rem]"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-lime text-navy px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-bounce">
                  NEW
                </div>
              </div>
            </div>

            {/* Right Phone - Profile Screen */}
            <div className="relative animate-fade-up animation-delay-200 hidden sm:block">
              <div className="relative w-48 md:w-56 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-lime/20 to-primary/20 rounded-[2.5rem] blur-2xl" />
                <div className="relative bg-navy rounded-[2.5rem] p-2 shadow-2xl">
                  <img 
                    src={appScreenshotProfile} 
                    alt="Snac App Profile Screen" 
                    className="w-full h-auto rounded-[2rem]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 animate-fade-up animation-delay-300">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.label}
                  className="bg-card border border-border rounded-2xl p-4 md:p-6 text-center hover:border-lime/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-lime/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-lime" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.label}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-400">
            <Button 
              size="lg" 
              className="bg-navy hover:bg-navy/90 text-white gap-3 h-14 px-6 rounded-xl w-full sm:w-auto"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="text-base font-semibold">App Store</div>
              </div>
            </Button>

            <Button 
              size="lg" 
              className="bg-navy hover:bg-navy/90 text-white gap-3 h-14 px-6 rounded-xl w-full sm:w-auto"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">GET IT ON</div>
                <div className="text-base font-semibold">Google Play</div>
              </div>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-center animate-fade-up animation-delay-500">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-lime text-lime" />
              ))}
              <span className="ml-2 text-muted-foreground">4.9 Rating</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="text-muted-foreground">
              <span className="font-semibold text-foreground">50K+</span> Downloads
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="text-muted-foreground">
              <span className="font-semibold text-foreground">100+</span> Countries
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppShowcase;
