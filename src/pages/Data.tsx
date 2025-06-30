
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MarketOverviewTab from "@/components/data/MarketOverviewTab";
import PropertyHistoryTab from "@/components/data/PropertyHistoryTab";
import PropertyDetailsTab from "@/components/data/PropertyDetailsTab";

const Data = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/c7bd3545-bf9d-403a-9fe3-75e0e8f93c33.png')",
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
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="overview">Market Overview</TabsTrigger>
              <TabsTrigger value="history">Property History</TabsTrigger>
              <TabsTrigger value="details">Property Details</TabsTrigger>
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
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Data;
