import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Users, Network, Award, Wallet, TrendingUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: Home, label: "Home", badge: null },
    { path: "/donors", icon: Users, label: "Donors", badge: "NEW" },
    { path: "/transactions", icon: Network, label: "Blockchain", badge: "LIVE" },
    { path: "/awards", icon: Award, label: "NFT Awards", badge: null },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <Wallet className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TransparentGive
            </span>
          </Link>

          <div className="flex items-center space-x-1 bg-muted/50 rounded-full p-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={`
                      relative rounded-full transition-all duration-200 hover:scale-105
                      ${isActive 
                        ? "bg-primary text-primary-foreground shadow-medium" 
                        : "hover:bg-background/50"
                      }
                    `}
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.label}
                    {item.badge && (
                      <Badge 
                        variant="secondary" 
                        className="ml-2 text-xs animate-pulse-glow bg-success text-success-foreground"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </Button>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-success/10 text-success border-success/30">
              <TrendingUp className="h-3 w-3 mr-1" />
              ₹2.5Cr+ Donated
            </Badge>
          </div>
        </div>
      </div>
    </nav>
  );
};