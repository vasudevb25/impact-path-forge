import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Shield, Award, CheckCircle } from "lucide-react";

interface TrustScoreProps {
  score: number;
  ngoName: string;
  verificationDetails: {
    kycVerified: boolean;
    documentsRecent: boolean;
    socialProof: boolean;
    pastImpact: boolean;
  };
}

export const TrustScore = ({ score, ngoName, verificationDetails }: TrustScoreProps) => {
  const getTrustLevel = (score: number) => {
    if (score >= 80) return { level: "High", color: "bg-trust-high", variant: "default" as const };
    if (score >= 60) return { level: "Medium", color: "bg-trust-medium", variant: "secondary" as const };
    return { level: "Low", color: "bg-trust-low", variant: "destructive" as const };
  };

  const trust = getTrustLevel(score);

  return (
    <div className="bg-gradient-card rounded-lg p-6 shadow-soft border border-border/50">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">Trust Score</h3>
        </div>
        <Badge variant={trust.variant} className="font-semibold">
          {score}/100 - {trust.level}
        </Badge>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">{ngoName}</span>
            <span className="font-medium text-foreground">{score}%</span>
          </div>
          <Progress value={score} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            {verificationDetails.kycVerified ? (
              <CheckCircle className="h-4 w-4 text-success" />
            ) : (
              <div className="h-4 w-4 rounded-full bg-muted" />
            )}
            <span className="text-sm text-muted-foreground">KYC Verified</span>
          </div>
          
          <div className="flex items-center gap-2">
            {verificationDetails.documentsRecent ? (
              <CheckCircle className="h-4 w-4 text-success" />
            ) : (
              <div className="h-4 w-4 rounded-full bg-muted" />
            )}
            <span className="text-sm text-muted-foreground">Recent Docs</span>
          </div>
          
          <div className="flex items-center gap-2">
            {verificationDetails.socialProof ? (
              <CheckCircle className="h-4 w-4 text-success" />
            ) : (
              <div className="h-4 w-4 rounded-full bg-muted" />
            )}
            <span className="text-sm text-muted-foreground">Social Proof</span>
          </div>
          
          <div className="flex items-center gap-2">
            {verificationDetails.pastImpact ? (
              <CheckCircle className="h-4 w-4 text-success" />
            ) : (
              <div className="h-4 w-4 rounded-full bg-muted" />
            )}
            <span className="text-sm text-muted-foreground">Past Impact</span>
          </div>
        </div>
      </div>
    </div>
  );
};