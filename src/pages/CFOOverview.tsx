import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CFOOverview = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-4xl font-bold text-foreground">CFO Overview</h1>
      </div>
    </div>
  );
};

export default CFOOverview;
