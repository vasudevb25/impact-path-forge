import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Network, Zap, CheckCircle, Clock, Lock, ArrowRight, Blocks, Shield } from "lucide-react";
import { useState } from "react";

const Transactions = () => {
  const [selectedTx, setSelectedTx] = useState<string | null>(null);

  const transactions = [
    {
      id: "tx_001",
      donor: "Rajesh Kumar",
      ngo: "Education First Foundation",
      amount: 50000,
      status: "completed",
      timestamp: "2024-01-15 14:30",
      blockHash: "0x7f9f...e4a2",
      gasUsed: "21,000",
      steps: [
        { id: 1, title: "Donation Initiated", status: "completed", time: "14:30:00" },
        { id: 2, title: "Smart Contract Escrow", status: "completed", time: "14:30:15" },
        { id: 3, title: "NGO Verification", status: "completed", time: "14:35:22" },
        { id: 4, title: "Proof Submitted", status: "completed", time: "16:45:10" },
        { id: 5, title: "Impact Verified", status: "completed", time: "16:50:33" },
        { id: 6, title: "Funds Released", status: "completed", time: "16:51:00" }
      ]
    },
    {
      id: "tx_002",
      donor: "Priya Sharma",
      ngo: "HealthCare Heroes",
      amount: 75000,
      status: "active",
      timestamp: "2024-01-15 16:20",
      blockHash: "0x9a1b...c3d4",
      gasUsed: "23,500",
      steps: [
        { id: 1, title: "Donation Initiated", status: "completed", time: "16:20:00" },
        { id: 2, title: "Smart Contract Escrow", status: "completed", time: "16:20:12" },
        { id: 3, title: "NGO Verification", status: "completed", time: "16:25:45" },
        { id: 4, title: "Proof Submission", status: "active", time: "Pending" },
        { id: 5, title: "Impact Verification", status: "locked", time: "Waiting" },
        { id: 6, title: "Funds Release", status: "locked", time: "Waiting" }
      ]
    },
    {
      id: "tx_003",
      donor: "Amit Patel",
      ngo: "Green Earth Initiative",
      amount: 25000,
      status: "pending",
      timestamp: "2024-01-15 18:45",
      blockHash: "0x5e8c...f7g9",
      gasUsed: "19,800",
      steps: [
        { id: 1, title: "Donation Initiated", status: "completed", time: "18:45:00" },
        { id: 2, title: "Smart Contract Escrow", status: "active", time: "Processing" },
        { id: 3, title: "NGO Verification", status: "locked", time: "Waiting" },
        { id: 4, title: "Proof Submission", status: "locked", time: "Waiting" },
        { id: 5, title: "Impact Verification", status: "locked", time: "Waiting" },
        { id: 6, title: "Funds Release", status: "locked", time: "Waiting" }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-4 w-4 text-success" />;
      case "active": return <Zap className="h-4 w-4 text-warning animate-pulse-glow" />;
      case "pending": return <Clock className="h-4 w-4 text-muted-foreground" />;
      case "locked": return <Lock className="h-4 w-4 text-muted-foreground" />;
      default: return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-success/10 text-success border-success/30";
      case "active": return "bg-warning/10 text-warning border-warning/30";
      case "pending": return "bg-muted text-muted-foreground border-border";
      case "locked": return "bg-muted/50 text-muted-foreground border-border";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blockchain Transaction Paths
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow every donation from wallet to impact through our transparent blockchain network
          </p>
          <Badge variant="outline" className="mt-4 bg-primary/10 text-primary border-primary/30">
            <Network className="h-4 w-4 mr-2" />
            Live Blockchain Monitoring
          </Badge>
        </div>

        {/* Network Overview */}
        <Card className="mb-8 bg-gradient-card border-border/50 shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Blocks className="h-6 w-6 text-white" />
              </div>
              Network Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-success/5 rounded-lg border border-success/20">
                <div className="text-3xl font-bold text-success mb-2">2,847</div>
                <div className="text-sm text-muted-foreground">Total Transactions</div>
              </div>
              <div className="text-center p-4 bg-warning/5 rounded-lg border border-warning/20">
                <div className="text-3xl font-bold text-warning mb-2">23</div>
                <div className="text-sm text-muted-foreground">Active Escrows</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">₹2.5Cr</div>
                <div className="text-sm text-muted-foreground">Funds Processed</div>
              </div>
              <div className="text-center p-4 bg-accent/5 rounded-lg border border-accent/20">
                <div className="text-3xl font-bold text-accent mb-2">99.2%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transaction List */}
        <div className="space-y-6">
          {transactions.map((tx) => (
            <Card 
              key={tx.id}
              className={`
                bg-gradient-card border-2 transition-all duration-300 hover:shadow-medium cursor-pointer
                ${selectedTx === tx.id ? 'border-primary shadow-medium' : 'border-border/50'}
              `}
              onClick={() => setSelectedTx(selectedTx === tx.id ? null : tx.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{tx.donor}</h3>
                      <p className="text-muted-foreground">→ {tx.ngo}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">₹{tx.amount.toLocaleString()}</div>
                    <Badge className={getStatusColor(tx.status)}>
                      {getStatusIcon(tx.status)}
                      <span className="ml-1 capitalize">{tx.status}</span>
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mt-4">
                  <div>Block: {tx.blockHash}</div>
                  <div>Gas: {tx.gasUsed}</div>
                  <div>{tx.timestamp}</div>
                </div>
              </CardHeader>

              {selectedTx === tx.id && (
                <CardContent>
                  <div className="border-t border-border/50 pt-6">
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Network className="h-5 w-5 text-primary" />
                      Transaction Path
                    </h4>
                    
                    <div className="relative">
                      {/* Connection Line */}
                      <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-warning to-success"></div>
                      
                      <div className="space-y-6">
                        {tx.steps.map((step, index) => (
                          <div key={step.id} className="flex items-center gap-4 relative z-10">
                            <div 
                              className={`
                                w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-300
                                ${step.status === 'completed' ? 'bg-success border-success text-white' :
                                  step.status === 'active' ? 'bg-warning border-warning text-white animate-pulse-glow' :
                                  'bg-muted border-border text-muted-foreground'}
                              `}
                            >
                              {getStatusIcon(step.status)}
                            </div>
                            
                            <div className="flex-1">
                              <h5 className="font-semibold text-foreground">{step.title}</h5>
                              <p className="text-sm text-muted-foreground">
                                {step.status === 'completed' ? `Completed at ${step.time}` :
                                 step.status === 'active' ? 'Currently processing...' :
                                 'Waiting for previous step'}
                              </p>
                            </div>
                            
                            {step.status === 'active' && (
                              <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30 animate-pulse-glow">
                                Processing
                              </Badge>
                            )}
                            
                            {index < tx.steps.length - 1 && (
                              <ArrowRight className="h-4 w-4 text-muted-foreground" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          Smart Contract Address: <span className="font-mono">0x742d35Cc6cb184c5b...a9E25A5</span>
                        </div>
                        <Button variant="outline" size="sm">
                          <Network className="h-4 w-4 mr-2" />
                          View on Explorer
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;