import EmployeeHeader from "@/components/employee/EmployeeHeader";
import EmployeeHero from "@/components/employee/EmployeeHero";
import SpendingBreakdown from "@/components/employee/SpendingBreakdown";
import RecentTransactions from "@/components/employee/RecentTransactions";
import QuickActions from "@/components/employee/QuickActions";
import MobileAppShowcase from "@/components/employee/MobileAppShowcase";

const EmployeePortal = () => {
  return (
    <div className="min-h-screen bg-background">
      <EmployeeHeader />
      <EmployeeHero />
      <MobileAppShowcase />
      <QuickActions />
      <SpendingBreakdown />
      <RecentTransactions />
      
      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              Need help? Contact your finance team or visit our{" "}
              <a href="#" className="text-primary hover:underline">help center</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EmployeePortal;
