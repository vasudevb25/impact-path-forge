import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrustScore } from "./TrustScore";
import { Heart, MapPin, Users, Target } from "lucide-react";

interface NGOCardProps {
  ngo: {
    id: string;
    name: string;
    description: string;
    location: string;
    category: string;
    trustScore: number;
    beneficiaries: number;
    currentCampaign: string;
    verified: boolean;
  };
}

export const NGOCard = ({ ngo }: NGOCardProps) => {
  const verificationDetails = {
    kycVerified: ngo.verified,
    documentsRecent: ngo.trustScore > 70,
    socialProof: ngo.trustScore > 60,
    pastImpact: ngo.trustScore > 50
  };

  return (
    <div className="bg-gradient-card rounded-lg p-6 shadow-soft border border-border/50 hover:shadow-medium transition-smooth">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-foreground">{ngo.name}</h3>
            {ngo.verified && (
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                Verified
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
            {ngo.description}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {ngo.location}
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {ngo.beneficiaries.toLocaleString()} helped
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <Target className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Current: {ngo.currentCampaign}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <TrustScore 
          score={ngo.trustScore} 
          ngoName={ngo.name}
          verificationDetails={verificationDetails}
        />
      </div>

      <div className="flex gap-2">
        <Button variant="hero" size="sm" className="flex-1">
          <Heart className="h-4 w-4 mr-2" />
          Donate Now
        </Button>
        <Button variant="trust" size="sm">
          View Details
        </Button>
      </div>
    </div>
  );
};