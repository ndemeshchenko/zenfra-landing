
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-zenfra-darker relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Actionable Insights
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive visibility into your infrastructure with operational dashboards
          </p>
        </div>
        
        <div className="relative">
          {/* Decorative gradient */}
          <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-zenfra-200/30 to-transparent blur-sm opacity-75 -z-10"></div>
          
          <Card className="border border-white/10 bg-zenfra-dark/60 shadow-xl rounded-xl overflow-hidden">
            <div className="p-1 bg-gradient-to-r from-transparent via-zenfra-200/30 to-transparent">
              <div className="flex items-center px-4 py-2 bg-zenfra-darker">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-gray-400">zenfra-dashboard.internal</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-zenfra-darkest/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-zenfra-dark border border-white/5 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Infrastructure Health</h4>
                  <div className="flex items-end">
                    <span className="text-3xl font-bold text-white">98.7%</span>
                    <span className="ml-2 text-xs text-green-400">+0.3%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full mt-3">
                    <div className="h-2 bg-gradient-to-r from-green-400 to-zenfra-200 rounded-full" style={{ width: '98.7%' }}></div>
                  </div>
                </div>
                
                <div className="bg-zenfra-dark border border-white/5 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Drift Detection</h4>
                  <div className="flex items-end">
                    <span className="text-3xl font-bold text-white">3</span>
                    <span className="ml-2 text-xs text-yellow-400">resources</span>
                  </div>
                  <div className="grid grid-cols-5 gap-1 mt-3">
                    <div className="h-2 bg-gray-700 rounded-full"></div>
                    <div className="h-2 bg-gray-700 rounded-full"></div>
                    <div className="h-2 bg-yellow-400 rounded-full"></div>
                    <div className="h-2 bg-gray-700 rounded-full"></div>
                    <div className="h-2 bg-gray-700 rounded-full"></div>
                  </div>
                </div>
                
                <div className="bg-zenfra-dark border border-white/5 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Security Compliance</h4>
                  <div className="flex items-end">
                    <span className="text-3xl font-bold text-white">94%</span>
                    <span className="ml-2 text-xs text-amber-400">-2%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full mt-3">
                    <div className="h-2 bg-gradient-to-r from-amber-400 to-zenfra-200 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="bg-zenfra-dark border border-white/5 rounded-lg p-4 h-24">
                    <div className="h-3 w-24 bg-gray-700 rounded-full animate-pulse-slow"></div>
                    <div className="mt-4 h-8 w-full bg-gray-700/50 rounded-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
