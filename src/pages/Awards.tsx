import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, Award, Crown, Star, Zap, Heart, Download, Share2, Eye } from "lucide-react";
import { useState } from "react";

const Awards = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const nftAwards = [
    {
      id: "nft_001",
      title: "Education Pioneer",
      description: "Donated ₹1,00,000+ to education causes",
      image: "🎓",
      owner: "Rajesh Kumar",
      rarity: "Legendary",
      minted: "2024-01-10",
      traits: ["Education", "Large Donor", "Impact Verified"],
      value: "0.25 ETH",
      category: "education",
      downloads: 45
    },
    {
      id: "nft_002", 
      title: "Healthcare Hero",
      description: "Supported 5+ healthcare projects",
      image: "🏥",
      owner: "Priya Sharma",
      rarity: "Epic",
      minted: "2024-01-12",
      traits: ["Healthcare", "Multi-Project", "Consistent Giver"],
      value: "0.18 ETH",
      category: "healthcare",
      downloads: 32
    },
    {
      id: "nft_003",
      title: "Green Guardian", 
      description: "Environmental conservation champion",
      image: "🌱",
      owner: "Amit Patel",
      rarity: "Rare",
      minted: "2024-01-14",
      traits: ["Environment", "Sustainability", "Tree Planting"],
      value: "0.12 ETH",
      category: "environment",
      downloads: 28
    },
    {
      id: "nft_004",
      title: "Emergency Angel",
      description: "First responder to disaster relief",
      image: "🚨",
      owner: "Sneha Reddy",
      rarity: "Epic",
      minted: "2024-01-13",
      traits: ["Emergency", "Fast Response", "Crisis Support"],
      value: "0.20 ETH",
      category: "emergency",
      downloads: 51
    },
    {
      id: "nft_005",
      title: "Transparency Advocate",
      description: "100% verified donation track record",
      image: "🔍",
      owner: "Karan Singh", 
      rarity: "Legendary",
      minted: "2024-01-11",
      traits: ["Transparency", "Verified", "Trust Score 95+"],
      value: "0.30 ETH",
      category: "trust",
      downloads: 63
    },
    {
      id: "nft_006",
      title: "Community Builder",
      description: "Connected 50+ donors to causes",
      image: "🤝",
      owner: "Meera Joshi",
      rarity: "Rare",
      minted: "2024-01-15",
      traits: ["Community", "Networking", "Referrals"],
      value: "0.15 ETH",
      category: "community",
      downloads: 24
    }
  ];

  const categories = [
    { id: "all", label: "All Awards", icon: Award },
    { id: "education", label: "Education", icon: Star },
    { id: "healthcare", label: "Healthcare", icon: Heart },
    { id: "environment", label: "Environment", icon: Zap },
    { id: "emergency", label: "Emergency", icon: Trophy },
    { id: "trust", label: "Trust", icon: Crown },
    { id: "community", label: "Community", icon: Award }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary": return "bg-gradient-to-r from-purple-500 to-pink-500 text-white";
      case "Epic": return "bg-gradient-to-r from-blue-500 to-purple-500 text-white";
      case "Rare": return "bg-gradient-to-r from-green-500 to-blue-500 text-white";
      default: return "bg-gradient-primary text-white";
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case "Legendary": return "border-purple-500 shadow-purple-500/30";
      case "Epic": return "border-blue-500 shadow-blue-500/30";
      case "Rare": return "border-green-500 shadow-green-500/30";
      default: return "border-primary shadow-primary/30";
    }
  };

  const filteredNFTs = selectedCategory === "all" 
    ? nftAwards 
    : nftAwards.filter(nft => nft.category === selectedCategory);

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            NFT Award Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collect unique NFTs that prove your donation impact and unlock exclusive benefits
          </p>
          <Badge variant="outline" className="mt-4 bg-warning/10 text-warning border-warning/30">
            <Trophy className="h-4 w-4 mr-2" />
            Digital Proof of Impact
          </Badge>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-border/50 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">156</div>
              <div className="text-muted-foreground">Total NFTs Minted</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-border/50 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-success mb-2">89</div>
              <div className="text-muted-foreground">Unique Holders</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-border/50 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-warning mb-2">12</div>
              <div className="text-muted-foreground">Legendary Awards</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-border/50 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">2.4 ETH</div>
              <div className="text-muted-foreground">Total Volume</div>
            </CardContent>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="transition-all duration-200 hover:scale-105"
            >
              <category.icon className="h-4 w-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNFTs.map((nft) => (
            <Card 
              key={nft.id}
              className={`
                bg-gradient-card border-2 transition-all duration-300 hover:scale-105 hover:shadow-strong
                ${getRarityBorder(nft.rarity)} group cursor-pointer
              `}
            >
              <CardHeader className="pb-4">
                <div className="relative">
                  {/* NFT Image/Emoji */}
                  <div className="w-full h-48 bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg flex items-center justify-center text-6xl mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/20"></div>
                    <span className="relative z-10 animate-float">{nft.image}</span>
                  </div>
                  
                  {/* Rarity Badge */}
                  <Badge className={`absolute top-2 right-2 ${getRarityColor(nft.rarity)}`}>
                    {nft.rarity}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl">{nft.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{nft.description}</p>
              </CardHeader>

              <CardContent>
                {/* Owner */}
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/20 text-primary text-xs">
                      {nft.owner.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-medium">{nft.owner}</div>
                    <div className="text-xs text-muted-foreground">Minted {nft.minted}</div>
                  </div>
                </div>

                {/* Traits */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {nft.traits.map((trait, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {trait}
                    </Badge>
                  ))}
                </div>

                {/* Value and Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div>
                    <div className="text-lg font-bold text-foreground">{nft.value}</div>
                    <div className="text-xs text-muted-foreground">{nft.downloads} downloads</div>
                  </div>
                  
                  <div className="flex gap-1">
                    <Button size="sm" variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Download className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Share2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-hero text-white text-center">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold mb-4">Earn Your Next NFT Award</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Make verified donations and unlock exclusive NFT certificates that prove your impact
            </p>
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              <Heart className="h-5 w-5 mr-2" />
              Start Donating to Earn
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Awards;