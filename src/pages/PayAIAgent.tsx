import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Bot, Copy, Send, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { toast } from "@/hooks/use-toast";

const agents = [
  {
    id: 1,
    name: "Expense Bot",
    icon: "🤖",
    color: "bg-primary",
    wallet: "0x7aB3...f9E2",
    balance: 12.4523,
    token: "$SNAC",
    status: "Processing 3 receipts",
  },
  {
    id: 2,
    name: "Report Agent",
    icon: "📊",
    color: "bg-blue-500",
    wallet: "0x9cD1...a4B7",
    balance: 8.2156,
    token: "$SNAC",
    status: "Generating monthly report",
  },
  {
    id: 3,
    name: "Approval Bot",
    icon: "✅",
    color: "bg-green-500",
    wallet: "0x2eF8...c3D9",
    balance: 5.8901,
    token: "$SNAC",
    status: "Reviewing 7 requests",
  },
  {
    id: 4,
    name: "Analytics Agent",
    icon: "📈",
    color: "bg-purple-500",
    wallet: "0x5bA2...e1F6",
    balance: 3.7234,
    token: "$SNAC",
    status: "Analyzing spending trends",
  },
];

const PayAIAgent = () => {
  const handleCopyWallet = (wallet: string) => {
    navigator.clipboard.writeText(wallet);
    toast({
      title: "Wallet copied",
      description: "Agent wallet address copied to clipboard",
    });
  };

  const handlePay = (agentName: string) => {
    toast({
      title: "Payment initiated",
      description: `Opening payment flow for ${agentName}`,
    });
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link to="/employee-portal" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline text-sm font-medium">Back to Portal</span>
          </Link>

          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-foreground">AI Agents</span>
          </div>

          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4">
        <div className="container max-w-2xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8 animate-fade-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Pay Your AI Agents
            </h1>
            <p className="text-muted-foreground text-lg">
              These agents are working hard for you. Reward them for their service.
            </p>
          </div>

          {/* Agent Cards */}
          <div className="space-y-4">
            {agents.map((agent, index) => (
              <Card 
                key={agent.id} 
                className="p-6 bg-background border-border hover:shadow-lg transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full ${agent.color} flex items-center justify-center text-2xl`}>
                      {agent.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">{agent.name}</h3>
                      <p className="text-sm text-muted-foreground">{agent.status}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-muted-foreground">
                    <MoreHorizontal className="w-5 h-5" />
                  </Button>
                </div>

                <div className="bg-muted/50 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Agent Balance</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground font-mono">{agent.wallet}</span>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-6 w-6 text-muted-foreground hover:text-foreground"
                        onClick={() => handleCopyWallet(agent.wallet)}
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-foreground">{agent.balance.toFixed(4)}</span>
                    <span className="text-lg text-muted-foreground font-medium">{agent.token}</span>
                  </div>
                </div>

                <Button 
                  onClick={() => handlePay(agent.name)}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 text-lg font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send
                </Button>
              </Card>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="mt-8 text-center animate-fade-up" style={{ animationDelay: '400ms' }}>
            <p className="text-sm text-muted-foreground">
              Payments are processed on the Snac network. <a href="#" className="text-primary hover:underline">Learn more</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PayAIAgent;
