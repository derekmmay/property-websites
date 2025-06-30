
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MarketOverviewTab from "@/components/data/MarketOverviewTab";
import PropertyHistoryTab from "@/components/data/PropertyHistoryTab";
import PropertyDetailsTab from "@/components/data/PropertyDetailsTab";
import UtilitiesTab from "@/components/data/UtilitiesTab";

const Data = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[120vh] flex items-center justify-center bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-wide">
            Property Data
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto">
            Comprehensive insights and historical information for 126 Monarch Bay Drive
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="overview">Market Overview</TabsTrigger>
              <TabsTrigger value="history">Property History</TabsTrigger>
              <TabsTrigger value="details">Property Details</TabsTrigger>
              <TabsTrigger value="utilities">Utilities</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <MarketOverviewTab />
            </TabsContent>

            <TabsContent value="history">
              <PropertyHistoryTab />
            </TabsContent>

            <TabsContent value="details">
              <PropertyDetailsTab />
            </TabsContent>

            <TabsContent value="utilities">
              <UtilitiesTab />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Data;
