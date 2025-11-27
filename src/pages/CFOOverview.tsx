import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, DollarSign, Users, CreditCard, AlertCircle, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const monthlySpendData = [
  { month: "Jan", spend: 125000, budget: 150000 },
  { month: "Feb", spend: 142000, budget: 150000 },
  { month: "Mar", spend: 138000, budget: 150000 },
  { month: "Apr", spend: 156000, budget: 160000 },
  { month: "May", spend: 149000, budget: 160000 },
  { month: "Jun", spend: 167000, budget: 170000 },
];

const departmentSpend = [
  { name: "Engineering", spend: 85000, color: "#9fe870" },
  { name: "Marketing", spend: 45000, color: "#163300" },
  { name: "Sales", spend: 38000, color: "#37d505" },
  { name: "Operations", spend: 29000, color: "#1a1f2c" },
  { name: "HR", spend: 18000, color: "#6bd147" },
];

const recentTransactions = [
  { id: 1, vendor: "AWS Cloud Services", amount: 12450, category: "Infrastructure", date: "Nov 26, 2025", status: "completed" },
  { id: 2, vendor: "Figma Enterprise", amount: 2400, category: "Software", date: "Nov 25, 2025", status: "completed" },
  { id: 3, vendor: "Delta Airlines", amount: 3200, category: "Travel", date: "Nov 24, 2025", status: "pending" },
  { id: 4, vendor: "WeWork Office Space", amount: 8500, category: "Facilities", date: "Nov 23, 2025", status: "completed" },
  { id: 5, vendor: "HubSpot CRM", amount: 1800, category: "Software", date: "Nov 22, 2025", status: "completed" },
];

const CFOOverview = () => {
  const totalSpend = 167000;
  const budgetTotal = 200000;
  const budgetUsedPercent = (totalSpend / budgetTotal) * 100;

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </Link>
            <div className="h-6 w-px bg-border" />
            <h1 className="text-xl font-semibold text-foreground">CFO Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="outline" size="sm">
              Export Report
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-lime-dark">
              Add Expense
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="animate-fade-up">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Spend (Nov)</CardTitle>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-lime-dark" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">${totalSpend.toLocaleString()}</div>
              <div className="flex items-center gap-1 mt-2">
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-destructive/10">
                  <TrendingUp className="w-3 h-3 text-destructive" />
                  <span className="text-xs text-destructive">+12.5%</span>
                </div>
                <span className="text-xs text-muted-foreground">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-up animation-delay-100">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Budget Remaining</CardTitle>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <CreditCard className="w-4 h-4 text-lime-dark" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">${(budgetTotal - totalSpend).toLocaleString()}</div>
              <div className="w-full bg-muted rounded-full h-2 mt-3">
                <div 
                  className="bg-primary h-2 rounded-full transition-all" 
                  style={{ width: `${budgetUsedPercent}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground mt-1 block">{budgetUsedPercent.toFixed(0)}% of budget used</span>
            </CardContent>
          </Card>

          <Card className="animate-fade-up animation-delay-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Approvals</CardTitle>
              <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                <AlertCircle className="w-4 h-4 text-amber-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">8</div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-xs text-muted-foreground">$24,500 awaiting review</span>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-up animation-delay-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Cardholders</CardTitle>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Users className="w-4 h-4 text-lime-dark" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">47</div>
              <div className="flex items-center gap-1 mt-2">
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10">
                  <TrendingUp className="w-3 h-3 text-lime-dark" />
                  <span className="text-xs text-lime-dark">+3</span>
                </div>
                <span className="text-xs text-muted-foreground">this month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Monthly Spend Trend */}
          <Card className="lg:col-span-2 animate-fade-up animation-delay-200">
            <CardHeader>
              <CardTitle className="text-lg">Monthly Spend vs Budget</CardTitle>
              <CardDescription>Track your spending against monthly budgets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlySpendData}>
                    <defs>
                      <linearGradient id="spendGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#9fe870" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#9fe870" stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
                    <XAxis dataKey="month" stroke="hsl(220, 13%, 46%)" fontSize={12} />
                    <YAxis stroke="hsl(220, 13%, 46%)" fontSize={12} tickFormatter={(value) => `$${value / 1000}k`} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(0, 0%, 100%)", 
                        border: "1px solid hsl(220, 13%, 91%)",
                        borderRadius: "8px",
                        color: "hsl(220, 26%, 14%)"
                      }}
                      formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="spend" 
                      stroke="#37d505" 
                      strokeWidth={3}
                      fill="url(#spendGradient)" 
                      name="Spend"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="budget" 
                      stroke="#1a1f2c" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      fill="transparent" 
                      name="Budget"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Department Breakdown */}
          <Card className="animate-fade-up animation-delay-300">
            <CardHeader>
              <CardTitle className="text-lg">Spend by Department</CardTitle>
              <CardDescription>November breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[180px] mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={departmentSpend}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="spend"
                    >
                      {departmentSpend.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: number) => `$${value.toLocaleString()}`}
                      contentStyle={{ 
                        backgroundColor: "hsl(0, 0%, 100%)", 
                        border: "1px solid hsl(220, 13%, 91%)",
                        borderRadius: "8px"
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3">
                {departmentSpend.map((dept) => (
                  <div key={dept.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: dept.color }} />
                      <span className="text-muted-foreground">{dept.name}</span>
                    </div>
                    <span className="font-medium text-foreground">${dept.spend.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card className="animate-fade-up animation-delay-400">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg">Recent Transactions</CardTitle>
              <CardDescription>Latest company expenses</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="text-lime-dark hover:bg-primary/10">
              View All
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Vendor</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Category</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((tx) => (
                    <tr key={tx.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                      <td className="py-4 px-4">
                        <span className="font-medium text-foreground">{tx.vendor}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm text-muted-foreground">{tx.category}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm text-muted-foreground">{tx.date}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          tx.status === "completed" 
                            ? "bg-primary/20 text-lime-dark" 
                            : "bg-amber-500/20 text-amber-600"
                        }`}>
                          {tx.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="font-semibold text-foreground">${tx.amount.toLocaleString()}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CFOOverview;
