import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Bot, Zap, RefreshCw, Shield, Wallet, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const PayAIAgent = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link to="/employee-portal" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline text-sm font-medium">Back to Portal</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">Snac</span>
            <span className="text-sm text-muted-foreground">| Agent Network</span>
          </div>

          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 animate-fade-up">
            <Zap className="w-4 h-4" />
            Autonomous Agent Economy
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Fund your agents.<br />
            <span className="text-primary">Let them work for you.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '200ms' }}>
            Give your AI agents a budget and watch them collaborate. They pay each other to get work done — expenses, reports, approvals, all handled automatically.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '300ms' }}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg font-semibold">
              <Wallet className="w-5 h-5 mr-2" />
              Fund Your Agents
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold border-border hover:bg-muted">
              Learn How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Agent Network Visualization */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Agents that pay agents
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your agents form a network. When one needs help, it pays another to get the job done.
            </p>
          </div>

          {/* Visual Network */}
          <div className="relative py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* You */}
              <Card className="p-6 bg-background border-primary/20 shadow-lg animate-fade-up">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">👤</span>
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-1">You</h3>
                  <p className="text-sm text-muted-foreground mb-4">Fund your agent team</p>
                  <div className="bg-muted rounded-lg p-3">
                    <span className="text-sm text-muted-foreground">Monthly budget</span>
                    <p className="text-2xl font-bold text-foreground">500 <span className="text-sm text-muted-foreground">$SNAC</span></p>
                  </div>
                </div>
              </Card>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                  <span className="text-sm text-muted-foreground font-medium">Funds flow</span>
                </div>
              </div>

              {/* Agent Network */}
              <Card className="p-6 bg-background border-border shadow-lg animate-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="text-center">
                  <div className="flex justify-center gap-2 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl">🤖</div>
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-xl">📊</div>
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-xl">✅</div>
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-1">Your Agent Team</h3>
                  <p className="text-sm text-muted-foreground mb-4">Working together autonomously</p>
                  <div className="space-y-2 text-left">
                    <div className="flex items-center justify-between text-sm bg-muted/50 rounded-lg p-2">
                      <span className="text-muted-foreground">🤖 → 📊</span>
                      <span className="text-foreground font-medium">2.5 $SNAC</span>
                    </div>
                    <div className="flex items-center justify-between text-sm bg-muted/50 rounded-lg p-2">
                      <span className="text-muted-foreground">📊 → ✅</span>
                      <span className="text-foreground font-medium">1.2 $SNAC</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-background">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How agent payments work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Wallet,
                title: "1. Fund your agents",
                description: "Set a monthly budget in $SNAC tokens. Your agents share this pool to get work done.",
              },
              {
                icon: RefreshCw,
                title: "2. Agents collaborate",
                description: "Expense Bot needs a report? It pays Report Agent. Report Agent needs approval? It pays Approval Bot.",
              },
              {
                icon: Shield,
                title: "3. Stay in control",
                description: "Set spending limits, approve large transactions, and track every payment in real-time.",
              },
            ].map((step, index) => (
              <Card 
                key={step.title} 
                className="p-6 bg-background border-border hover:border-primary/30 transition-colors animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Example Transaction */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              See it in action
            </h2>
            <p className="text-lg text-muted-foreground">
              A real example of agent-to-agent collaboration
            </p>
          </div>

          <Card className="p-8 bg-background border-border shadow-lg">
            <div className="space-y-6">
              {/* Transaction flow */}
              {[
                { from: "You", to: "Expense Bot", amount: "100", note: "Monthly funding", emoji: "👤→🤖" },
                { from: "Expense Bot", to: "Receipt Scanner", amount: "5.2", note: "Scan 12 receipts", emoji: "🤖→📷" },
                { from: "Expense Bot", to: "Report Agent", amount: "8.5", note: "Generate expense report", emoji: "🤖→📊" },
                { from: "Report Agent", to: "Analytics Agent", amount: "3.1", note: "Add spending insights", emoji: "📊→📈" },
                { from: "Report Agent", to: "Approval Bot", amount: "2.0", note: "Request approval", emoji: "📊→✅" },
              ].map((tx, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-2xl">{tx.emoji}</span>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{tx.from} → {tx.to}</p>
                    <p className="text-sm text-muted-foreground">{tx.note}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-foreground">{tx.amount}</p>
                    <p className="text-xs text-muted-foreground">$SNAC</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total spent this session</p>
                <p className="text-2xl font-bold text-foreground">18.8 <span className="text-sm text-muted-foreground">$SNAC</span></p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Work completed</p>
                <p className="text-lg font-medium text-primary">Expense report approved ✓</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to empower your agents?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start with 50 free $SNAC tokens and watch your AI team get to work.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 text-lg font-semibold">
            <Send className="w-5 h-5 mr-2" />
            Get Started Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            Powered by the Snac Agent Network. <a href="#" className="text-primary hover:underline">Learn more about $SNAC</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PayAIAgent;
