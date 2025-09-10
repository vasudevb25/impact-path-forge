import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrustScore } from "@/components/TrustScore";
import { DonationRoadmap } from "@/components/DonationRoadmap";
import { ImpactChart } from "@/components/ImpactChart";
import { NGOCard } from "@/components/NGOCard";
import heroImage from "@/assets/hero-transparency.jpg";
import { Shield, Zap, Heart, Eye, Award, Users, TrendingUp, Lock } from "lucide-react";

const Index = () => {
  // Sample data for demonstration
  const sampleNGOs = [
    {
      id: "1",
      name: "Education First Foundation",
      description: "Providing quality education to underprivileged children across rural India",
      location: "Mumbai, Maharashtra",
      category: "Education",
      trustScore: 92,
      beneficiaries: 15000,
      currentCampaign: "Build 50 Smart Classrooms",
      verified: true
    },
    {
      id: "2",
      name: "HealthCare Heroes",
      description: "Emergency medical assistance and healthcare infrastructure development",
      location: "Bangalore, Karnataka",
      category: "Healthcare",
      trustScore: 87,
      beneficiaries: 8500,
      currentCampaign: "Mobile Health Units",
      verified: true
    },
    {
      id: "3",
      name: "Green Earth Initiative",
      description: "Environmental conservation and sustainable development projects",
      location: "Delhi, India",
      category: "Environment",
      trustScore: 75,
      beneficiaries: 25000,
      currentCampaign: "Plant 1 Million Trees",
      verified: false
    }
  ];

  const roadmapSteps = [
    {
      id: "1",
      title: "Donation Sent",
      description: "Your donation of ₹5,000 has been successfully received",
      status: "completed" as const,
      timestamp: "2 hours ago"
    },
    {
      id: "2", 
      title: "Funds Secured",
      description: "Amount locked in smart contract escrow for transparency",
      status: "completed" as const,
      timestamp: "2 hours ago"
    },
    {
      id: "3",
      title: "NGO Implementation",
      description: "Education First Foundation is implementing the project",
      status: "active" as const
    },
    {
      id: "4",
      title: "Proof Submission",
      description: "Awaiting receipts and impact reports from NGO",
      status: "locked" as const
    },
    {
      id: "5",
      title: "Impact Delivered",
      description: "Funds released after proof verification",
      status: "locked" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20">
              <Zap className="h-4 w-4 mr-2" />
              Blockchain-Powered Transparency
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Revolutionizing <br />
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Donation Transparency
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Track every rupee from your wallet to real impact. AI-powered NGO verification, 
              smart contract escrow, and real-time proof of impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                <Heart className="h-5 w-5 mr-2" />
                Start Donating
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Eye className="h-5 w-5 mr-2" />
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The first donation platform with end-to-end transparency, AI verification, and gamified giving
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-card rounded-lg p-8 shadow-soft border border-border/50 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">AI Trust Scoring</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced algorithms verify NGO credentials, check documents, and calculate real-time trust scores
              </p>
            </div>

            <div className="bg-gradient-card rounded-lg p-8 shadow-soft border border-border/50 text-center">
              <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Smart Escrow</h3>
              <p className="text-muted-foreground leading-relaxed">
                Funds locked until NGOs provide proof of impact through our blockchain-secured system
              </p>
            </div>

            <div className="bg-gradient-card rounded-lg p-8 shadow-soft border border-border/50 text-center">
              <div className="bg-warning/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-warning" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Real-time Tracking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Visual roadmaps show exactly where your money goes from donation to final impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Donation Dashboard
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track impact, view analytics, and manage your giving all in one place
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <ImpactChart />
            </div>
            <div>
              <DonationRoadmap 
                steps={roadmapSteps}
                donationAmount="₹5,000"
                ngoName="Education First Foundation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NGO Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Verified NGO Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All NGOs are AI-verified and continuously monitored for transparency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleNGOs.map((ngo) => (
              <NGOCard key={ngo.id} ngo={ngo} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">₹2.5Cr+</div>
              <div className="text-blue-200">Donations Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-200">Verified NGOs</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-200">Lives Impacted</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.2%</div>
              <div className="text-blue-200">Transparency Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-card rounded-2xl p-12 shadow-strong text-center border border-border/50">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Make Transparent Impact?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of donors who trust our platform for verified, trackable giving
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Heart className="h-5 w-5 mr-2" />
                Start Your First Donation
              </Button>
              <Button variant="trust" size="lg">
                <Users className="h-5 w-5 mr-2" />
                Register as NGO
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
