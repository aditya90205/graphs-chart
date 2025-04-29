import { useState, useEffect } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area, LineChart, Line, PieChart, Pie, Sector, Cell,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from "recharts";
import { Calendar, Clock, TrendingUp, User, Package, DollarSign, ChevronDown, ShoppingCart, Activity, Search } from "lucide-react";

// Dummy Data
const salesData = [
  { month: "Jan", sales: 4000, profit: 2400, target: 3000 },
  { month: "Feb", sales: 3000, profit: 1398, target: 3000 },
  { month: "Mar", sales: 2000, profit: 9800, target: 3000 },
  { month: "Apr", sales: 2780, profit: 3908, target: 3000 },
  { month: "May", sales: 1890, profit: 4800, target: 3000 },
  { month: "Jun", sales: 2390, profit: 3800, target: 3000 },
  { month: "Jul", sales: 3490, profit: 4300, target: 3000 },
  { month: "Aug", sales: 3190, profit: 4100, target: 3000 },
  { month: "Sep", sales: 3590, profit: 5300, target: 3000 },
  { month: "Oct", sales: 4290, profit: 3300, target: 3000 },
  { month: "Nov", sales: 3890, profit: 2300, target: 3000 },
  { month: "Dec", sales: 5200, profit: 3700, target: 3000 },
];

const productPerformance = [
  { name: "Electronics", sales: 4000, views: 2400, stock: 98 },
  { name: "Clothing", sales: 3000, views: 1398, stock: 120 },
  { name: "Home", sales: 2000, views: 9800, stock: 43 },
  { name: "Sports", sales: 2780, views: 3908, stock: 76 },
  { name: "Beauty", sales: 1890, views: 4800, stock: 35 },
];

const customerData = [
  { name: "New", value: 400 },
  { name: "Returning", value: 300 },
  { name: "VIP", value: 200 },
  { name: "Inactive", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const geographicData = [
  { region: "North America", sales: 34000 },
  { region: "Europe", sales: 28000 },
  { region: "Asia", sales: 42000 },
  { region: "Australia", sales: 12000 },
  { region: "Africa", sales: 8000 },
  { region: "South America", sales: 16000 },
];

const radarData = [
  {
    subject: "Performance",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Quality",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Delivery",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Price",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Support",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Returns",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const recentOrders = [
  { id: "#ORD-001", product: "iPhone 13 Pro", customer: "John Doe", status: "Delivered", amount: "$1,199" },
  { id: "#ORD-002", product: "MacBook Air", customer: "Jane Smith", status: "Processing", amount: "$999" },
  { id: "#ORD-003", product: "AirPods Pro", customer: "Robert Johnson", status: "Shipped", amount: "$249" },
  { id: "#ORD-004", product: "iPad Mini", customer: "Emma Wilson", status: "Delivered", amount: "$499" },
  { id: "#ORD-005", product: "Apple Watch", customer: "Michael Brown", status: "Processing", amount: "$399" },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Delivered": return "bg-green-500";
    case "Processing": return "bg-blue-500";
    case "Shipped": return "bg-yellow-500";
    default: return "bg-gray-500";
  }
};

export default function Dashboard() {
  const [activePieIndex, setActivePieIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  const onPieEnter = (_, index) => {
    setActivePieIndex(index);
  };

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#999">{`Customers: ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };
  
  const stats = [
    { 
      title: "Total Revenue", 
      value: "$124,563.00", 
      change: "+14.2%", 
      isPositive: true,
      icon: <DollarSign className="h-6 w-6 text-green-500" />
    },
    { 
      title: "Total Orders", 
      value: "12,354", 
      change: "+8.4%", 
      isPositive: true,
      icon: <ShoppingCart className="h-6 w-6 text-blue-500" />
    },
    { 
      title: "Active Customers", 
      value: "8,642", 
      change: "+6.2%", 
      isPositive: true,
      icon: <User className="h-6 w-6 text-purple-500" />
    },
    { 
      title: "Conversion Rate", 
      value: "3.6%", 
      change: "-1.8%", 
      isPositive: false,
      icon: <Activity className="h-6 w-6 text-yellow-500" />
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold text-indigo-400">EvelyticsDash</div>
            <div className="hidden md:flex space-x-4">
              <button className="px-3 py-1 text-sm rounded-md bg-gray-700 hover:bg-gray-600 transition">Dashboard</button>
              <button className="px-3 py-1 text-sm rounded-md hover:bg-gray-700 transition">Analytics</button>
              <button className="px-3 py-1 text-sm rounded-md hover:bg-gray-700 transition">Reports</button>
              <button className="px-3 py-1 text-sm rounded-md hover:bg-gray-700 transition">Settings</button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-gray-700 rounded-md px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <div className="flex items-center space-x-2 border-l border-gray-600 pl-4">
              <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
                <span className="font-medium text-sm">AD</span>
              </div>
              <span className="hidden md:inline text-sm">Admin</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 bg-gray-800 p-4 border-r border-gray-700">
          <nav className="space-y-6 mt-4">
            <div>
              <h3 className="text-xs uppercase text-gray-400 font-medium mb-2">Analytics</h3>
              <ul className="space-y-1">
                <li className="bg-indigo-500 text-white px-3 py-2 rounded-md flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>Dashboard</span>
                </li>
                <li className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md flex items-center space-x-2">
                  <Package className="h-4 w-4" />
                  <span>Products</span>
                </li>
                <li className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Customers</span>
                </li>
                <li className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md flex items-center space-x-2">
                  <ShoppingCart className="h-4 w-4" />
                  <span>Orders</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs uppercase text-gray-400 font-medium mb-2">Reports</h3>
              <ul className="space-y-1">
                <li className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">Sales Reports</li>
                <li className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">Inventory Reports</li>
                <li className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">Customer Insights</li>
              </ul>
            </div>
          </nav>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-xs text-gray-400">
                  {currentTime.toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-xs text-gray-400">
                  {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Dashboard Overview</h1>
            <p className="text-gray-400">Welcome back! Here's what's happening with your store today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-400 text-sm">{stat.title}</p>
                    <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  </div>
                  <div className="p-2 rounded-md bg-gray-700">
                    {stat.icon}
                  </div>
                </div>
                <div className={`mt-4 text-sm ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change} from last month
                </div>
              </div>
            ))}
          </div>

          {/* Charts Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Sales Performance Chart */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium">Sales Performance</h2>
                <select className="bg-gray-700 text-gray-300 text-sm rounded-md px-3 py-1.5 border border-gray-600">
                  <option>This Year</option>
                  <option>Last Year</option>
                  <option>Last 6 Months</option>
                </select>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={salesData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151' }} />
                    <Legend />
                    <Area type="monotone" dataKey="sales" stroke="#8884d8" fillOpacity={1} fill="url(#colorSales)" />
                    <Area type="monotone" dataKey="profit" stroke="#82ca9d" fillOpacity={1} fill="url(#colorProfit)" />
                    <Line type="monotone" dataKey="target" stroke="#ff7300" strokeDasharray="5 5" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Customer Segmentation */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium">Customer Segmentation</h2>
                <select className="bg-gray-700 text-gray-300 text-sm rounded-md px-3 py-1.5 border border-gray-600">
                  <option>All Time</option>
                  <option>This Year</option>
                  <option>This Month</option>
                </select>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      activeIndex={activePieIndex}
                      activeShape={renderActiveShape}
                      data={customerData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      onMouseEnter={onPieEnter}
                    >
                      {customerData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                {customerData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                    <div className="text-sm">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-gray-400 ml-1">({((item.value / customerData.reduce((acc, curr) => acc + curr.value, 0)) * 100).toFixed(1)}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Charts Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Product Performance */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium">Product Performance</h2>
                <select className="bg-gray-700 text-gray-300 text-sm rounded-md px-3 py-1.5 border border-gray-600">
                  <option>By Category</option>
                  <option>By Brand</option>
                  <option>By Price Range</option>
                </select>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={productPerformance}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151' }} />
                    <Legend />
                    <Bar dataKey="sales" name="Sales" fill="#8884d8" />
                    <Bar dataKey="views" name="Views" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Geographic Distribution */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium">Sales by Region</h2>
                <select className="bg-gray-700 text-gray-300 text-sm rounded-md px-3 py-1.5 border border-gray-600">
                  <option>This Year</option>
                  <option>Last Year</option>
                  <option>Last Quarter</option>
                </select>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={geographicData}
                    margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis type="number" stroke="#6b7280" />
                    <YAxis dataKey="region" type="category" width={100} stroke="#6b7280" />
                    <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151' }} />
                    <Legend />
                    <Bar dataKey="sales" name="Sales" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Charts Row 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Performance Radar */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium">Performance Metrics</h2>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart outerRadius={90} data={radarData}>
                    <PolarGrid stroke="#4b5563" />
                    <PolarAngleAxis dataKey="subject" stroke="#6b7280" />
                    <PolarRadiusAxis stroke="#6b7280" />
                    <Radar name="This Year" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="Last Year" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Legend />
                    <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151' }} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="lg:col-span-2 bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium">Recent Orders</h2>
                <button className="text-indigo-400 text-sm hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Order ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Product</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {recentOrders.map((order, index) => (
                      <tr key={index} className="hover:bg-gray-700 transition">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{order.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{order.product}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{order.customer}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)} bg-opacity-20`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{order.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}