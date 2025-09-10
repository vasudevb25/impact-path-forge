import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const pieData = [
  { name: 'Education', value: 35, color: '#3B82F6' },
  { name: 'Healthcare', value: 25, color: '#10B981' },
  { name: 'Disaster Relief', value: 20, color: '#F59E0B' },
  { name: 'Environment', value: 15, color: '#8B5CF6' },
  { name: 'Others', value: 5, color: '#6B7280' }
];

const barData = [
  { month: 'Jan', donations: 12000 },
  { month: 'Feb', donations: 15000 },
  { month: 'Mar', donations: 18000 },
  { month: 'Apr', donations: 22000 },
  { month: 'May', donations: 25000 },
  { month: 'Jun', donations: 28000 }
];

export const ImpactChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Fund Distribution Pie Chart */}
      <div className="bg-gradient-card rounded-lg p-6 shadow-soft border border-border/50">
        <h3 className="font-semibold text-foreground mb-4">Fund Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`₹${value}K`, 'Amount']}
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-soft)'
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Monthly Donation Trend */}
      <div className="bg-gradient-card rounded-lg p-6 shadow-soft border border-border/50">
        <h3 className="font-semibold text-foreground mb-4">Donation Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <XAxis 
              dataKey="month" 
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
            />
            <YAxis 
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
            />
            <Tooltip 
              formatter={(value) => [`₹${value}`, 'Donations']}
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-soft)'
              }}
            />
            <Bar 
              dataKey="donations" 
              fill="hsl(var(--primary))" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};