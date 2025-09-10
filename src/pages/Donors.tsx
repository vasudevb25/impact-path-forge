import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TrendingUp, Trophy, Crown, Star, Zap, Heart } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from "recharts";

const Donors = () => {
  const paymentData = [
    { name: "Education", value: 35, amount: 875000, color: "hsl(var(--success))" },
    { name: "Healthcare", value: 28, amount: 700000, color: "hsl(var(--primary))" },
    { name: "Environment", value: 20, amount: 500000, color: "hsl(var(--secondary))" },
    { name: "Emergency", value: 12, amount: 300000, color: "hsl(var(--warning))" },
    { name: "Others", value: 5, amount: 125000, color: "hsl(var(--accent))" },
  ];

  const monthlyData = [
    { month: "Jan", donations: 45000, donors: 120 },
    { month: "Feb", donations: 52000, donors: 145 },
    { month: "Mar", donations: 48000, donors: 132 },
    { month: "Apr", donations: 61000, donors: 178 },
    { month: "May", donations: 75000, donors: 203 },
    { month: "Jun", donations: 89000, donors: 245 },
  ];

  const topDonors = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "TechCorp India",
      totalDonated: 450000,
      trustScore: 98,
      donations: 23,
      tier: "Platinum",
      badge: "Corporate Leader",
      nfts: 15,
      impact: "2,400 lives"
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Green Industries",
      totalDonated: 320000,
      trustScore: 96,
      donations: 18,
      tier: "Gold",
      badge: "Eco Warrior",
      nfts: 12,
      impact: "1,800 lives"
    },
    {
      id: 3,
      name: "Amit Patel",
      company: "FinanceFirst",
      totalDonated: 275000,
      trustScore: 94,
      donations: 15,
      tier: "Gold",
      badge: "Education Hero",
      nfts: 10,
      impact: "1,200 lives"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      company: "HealthPlus",
      totalDonated: 189000,
      trustScore: 92,
      donations: 12,
      tier: "Silver",
      badge: "Health Champion",
      nfts: 8,
      impact: "950 lives"
    },
    {
      id: 5,
      name: "Karan Singh",
      company: "StartupHub",
      totalDonated: 145000,
      trustScore: 89,
      donations: 9,
      tier: "Silver",
      badge: "Rising Star",
      nfts: 6,
      impact: "680 lives"
    }
  ];

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case "Platinum": return <Crown className="h-5 w-5 text-warning" />;
      case "Gold": return <Trophy className="h-5 w-5 text-warning" />;
      case "Silver": return <Star className="h-5 w-5 text-muted-foreground" />;
      default: return <Heart className="h-4 w-4 text-primary" />;
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Platinum": return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "Gold": return "bg-gradient-to-r from-yellow-400 to-orange-500";
      case "Silver": return "bg-gradient-to-r from-gray-400 to-gray-600";
      default: return "bg-gradient-primary";
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Donor Analytics
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track donation patterns, celebrate top contributors, and discover impact leaders
          </p>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Payment Distribution */}
          <Card className="bg-gradient-card border-border/50 shadow-medium hover:shadow-strong transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
                Donation Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={paymentData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {paymentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value, name) => [`₹${paymentData.find(d => d.name === name)?.amount.toLocaleString()}`, name]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {paymentData.map((item, index) => (
                  <Badge key={index} variant="outline" className="flex items-center gap-1">
                    <div 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    {item.name}: {item.value}%
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Monthly Trends */}
          <Card className="bg-gradient-card border-border/50 shadow-medium hover:shadow-strong transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                  <Zap className="h-4 w-4 text-success" />
                </div>
                Monthly Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyData}>
                    <defs>
                      <linearGradient id="colorDonations" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))", 
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="donations" 
                      stroke="hsl(var(--primary))" 
                      fillOpacity={1} 
                      fill="url(#colorDonations)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leaderboard */}
        <Card className="bg-gradient-card border-border/50 shadow-strong">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              Top Trustworthy Donors
              <Badge variant="outline" className="bg-success/10 text-success border-success/30 ml-auto">
                Most Transparent
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topDonors.map((donor, index) => (
                <div 
                  key={donor.id}
                  className={`
                    relative p-6 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-medium
                    ${index === 0 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-warning/30' : 
                      index === 1 ? 'bg-gradient-to-r from-gray-50 to-blue-50 border-primary/30' :
                      index === 2 ? 'bg-gradient-to-r from-orange-50 to-red-50 border-secondary/30' :
                      'bg-gradient-card border-border/50'}
                  `}
                >
                  {index < 3 && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  )}

                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-14 w-14 ring-2 ring-primary/20">
                        <AvatarFallback className={getTierColor(donor.tier) + " text-white font-bold"}>
                          {donor.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-lg text-foreground">{donor.name}</h3>
                          {getTierIcon(donor.tier)}
                        </div>
                        <p className="text-muted-foreground font-medium">{donor.company}</p>
                        <Badge variant="secondary" className="mt-1">
                          {donor.badge}
                        </Badge>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        ₹{donor.totalDonated.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">Total Donated</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-border/50">
                    <div className="text-center">
                      <div className="text-xl font-bold text-success">{donor.trustScore}</div>
                      <div className="text-xs text-muted-foreground">Trust Score</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-foreground">{donor.donations}</div>
                      <div className="text-xs text-muted-foreground">Donations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-warning">{donor.nfts}</div>
                      <div className="text-xs text-muted-foreground">NFT Awards</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-accent">{donor.impact}</div>
                      <div className="text-xs text-muted-foreground">Lives Impacted</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Donors;