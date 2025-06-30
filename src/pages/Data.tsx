
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MarketOverviewTab from "@/components/data/MarketOverviewTab";
import PropertyHistoryTab from "@/components/data/PropertyHistoryTab";
import PropertyDetailsTab from "@/components/data/PropertyDetailsTab";

const Data = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Property Data & History
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive property insights and historical information for 126 Monarch Bay Drive
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
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
