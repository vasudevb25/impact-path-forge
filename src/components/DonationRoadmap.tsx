import { Check, Clock, Lock, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  status: "completed" | "active" | "locked";
  timestamp?: string;
}

interface DonationRoadmapProps {
  steps: RoadmapStep[];
  donationAmount: string;
  ngoName: string;
}

export const DonationRoadmap = ({ steps, donationAmount, ngoName }: DonationRoadmapProps) => {
  const getStepIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <Check className="h-4 w-4 text-success" />;
      case "active":
        return <Clock className="h-4 w-4 text-warning animate-pulse-glow" />;
      case "locked":
        return <Lock className="h-4 w-4 text-muted-foreground" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStepColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-success bg-success/10";
      case "active":
        return "border-warning bg-warning/10";
      case "locked":
        return "border-muted bg-muted/10";
      default:
        return "border-muted bg-muted/10";
    }
  };

  return (
    <div className="bg-gradient-card rounded-lg p-6 shadow-soft border border-border/50">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-foreground">Donation Journey</h3>
          <p className="text-sm text-muted-foreground">
            {donationAmount} to {ngoName}
          </p>
        </div>
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
          <Zap className="h-3 w-3 mr-1" />
          Live Tracking
        </Badge>
      </div>

      <div className="relative">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-start gap-4 mb-6 last:mb-0">
            {/* Timeline line */}
            {index < steps.length - 1 && (
              <div className="absolute left-5 top-10 w-0.5 h-16 bg-border" />
            )}
            
            {/* Step indicator */}
            <div className={`
              flex items-center justify-center w-10 h-10 rounded-full border-2 relative z-10
              ${getStepColor(step.status)}
            `}>
              {getStepIcon(step.status)}
            </div>

            {/* Step content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-foreground">{step.title}</h4>
                {step.timestamp && (
                  <span className="text-xs text-muted-foreground">{step.timestamp}</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};