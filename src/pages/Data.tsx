
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Data = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Market Data & Analytics
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive market insights and property data for informed decision making
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Market Trends
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Median Home Price</span>
                  <span className="font-semibold text-green-600">$2.8M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Price Change (YoY)</span>
                  <span className="font-semibold text-green-600">+12.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Days on Market</span>
                  <span className="font-semibold">28 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Inventory Level</span>
                  <span className="font-semibold text-orange-600">Low</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Neighborhood Stats
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Properties</span>
                  <span className="font-semibold">1,247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Active Listings</span>
                  <span className="font-semibold">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sales This Month</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Price per Sq Ft</span>
                  <span className="font-semibold">$1,420</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Recent Sales Activity
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Address</th>
                    <th className="text-left py-3 px-4">Sale Price</th>
                    <th className="text-left py-3 px-4">Sq Ft</th>
                    <th className="text-left py-3 px-4">Price/Sq Ft</th>
                    <th className="text-left py-3 px-4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">123 Ocean Drive</td>
                    <td className="py-3 px-4 font-semibold">$3.2M</td>
                    <td className="py-3 px-4">2,400</td>
                    <td className="py-3 px-4">$1,333</td>
                    <td className="py-3 px-4">Dec 15, 2024</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">456 Sunset Blvd</td>
                    <td className="py-3 px-4 font-semibold">$2.9M</td>
                    <td className="py-3 px-4">2,100</td>
                    <td className="py-3 px-4">$1,381</td>
                    <td className="py-3 px-4">Dec 8, 2024</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">789 Coastal Way</td>
                    <td className="py-3 px-4 font-semibold">$4.1M</td>
                    <td className="py-3 px-4">2,800</td>
                    <td className="py-3 px-4">$1,464</td>
                    <td className="py-3 px-4">Nov 28, 2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Data;
