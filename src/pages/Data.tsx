
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
              Comprehensive property insights, market data, and historical information for 126 Monarch Bay Drive
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Market Overview</TabsTrigger>
              <TabsTrigger value="history">Property History</TabsTrigger>
              <TabsTrigger value="sales">Sales Comps</TabsTrigger>
              <TabsTrigger value="details">Property Details</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Market Trends</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
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
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Neighborhood Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
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
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="history" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Property Timeline</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="border-l-2 border-gray-200 pl-4 space-y-6">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full -ml-6 border-2 border-white"></div>
                          <span className="font-semibold">2024</span>
                          <Badge variant="outline">Current</Badge>
                        </div>
                        <p className="text-gray-600">Major architectural renovation completed featuring Japanese-influenced Wabi Sabi design elements</p>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full -ml-6 border-2 border-white"></div>
                          <span className="font-semibold">2019</span>
                        </div>
                        <p className="text-gray-600">Sold for $8.2M - Extensive renovation plans approved</p>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-3 h-3 bg-gray-400 rounded-full -ml-6 border-2 border-white"></div>
                          <span className="font-semibold">2015</span>
                        </div>
                        <p className="text-gray-600">Previous sale $6.8M - Original Mediterranean-style estate</p>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-3 h-3 bg-gray-400 rounded-full -ml-6 border-2 border-white"></div>
                          <span className="font-semibold">1992</span>
                        </div>
                        <p className="text-gray-600">Original construction completed in exclusive Monarch Bay community</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Renovation Highlights</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Architectural Updates (2020-2024)</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Complete interior redesign with custom millwork</li>
                        <li>• Imported Italian stone and French oak flooring</li>
                        <li>• Floor-to-ceiling glass installation</li>
                        <li>• Sculptural facade renovation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Luxury Amenities Added</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Dedicated wine sanctuary</li>
                        <li>• Infinity-edge pool with fire features</li>
                        <li>• Built-in entertainment spaces</li>
                        <li>• Spa-inspired primary bath</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Development Potential</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Approved Plans</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Additional Square Footage</span>
                          <span className="font-semibold">1,500 sq ft</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Adjacent Parcel Available</span>
                          <span className="font-semibold">0.5 acres</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Zoning</span>
                          <span className="font-semibold">R-1 Single Family</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Expansion Options</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Guest house or retreat construction</li>
                        <li>• Preserve natural landscape buffer</li>
                        <li>• Enhanced privacy and views</li>
                        <li>• Potential compound development</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sales" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Comparable Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Address</TableHead>
                        <TableHead>Sale Price</TableHead>
                        <TableHead>Sq Ft</TableHead>
                        <TableHead>Price/Sq Ft</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>123 Ocean Drive</TableCell>
                        <TableCell className="font-semibold">$3.2M</TableCell>
                        <TableCell>2,400</TableCell>
                        <TableCell>$1,333</TableCell>
                        <TableCell>Dec 15, 2024</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>456 Sunset Blvd</TableCell>
                        <TableCell className="font-semibold">$2.9M</TableCell>
                        <TableCell>2,100</TableCell>
                        <TableCell>$1,381</TableCell>
                        <TableCell>Dec 8, 2024</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>789 Coastal Way</TableCell>
                        <TableCell className="font-semibold">$4.1M</TableCell>
                        <TableCell>2,800</TableCell>
                        <TableCell>$1,464</TableCell>
                        <TableCell>Nov 28, 2024</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>321 Monarch Drive</TableCell>
                        <TableCell className="font-semibold">$5.8M</TableCell>
                        <TableCell>3,600</TableCell>
                        <TableCell>$1,611</TableCell>
                        <TableCell>Oct 22, 2024</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>654 Bay Vista</TableCell>
                        <TableCell className="font-semibold">$7.2M</TableCell>
                        <TableCell>4,200</TableCell>
                        <TableCell>$1,714</TableCell>
                        <TableCell>Sep 15, 2024</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="details" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Property Specifications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-gray-600 text-sm">Year Built</span>
                        <p className="font-semibold">1992</p>
                      </div>
                      <div>
                        <span className="text-gray-600 text-sm">Last Renovated</span>
                        <p className="font-semibold">2024</p>
                      </div>
                      <div>
                        <span className="text-gray-600 text-sm">Lot Size</span>
                        <p className="font-semibold">0.75 acres</p>
                      </div>
                      <div>
                        <span className="text-gray-600 text-sm">Property Type</span>
                        <p className="font-semibold">Single Family</p>
                      </div>
                      <div>
                        <span className="text-gray-600 text-sm">Parking</span>
                        <p className="font-semibold">3-car garage</p>
                      </div>
                      <div>
                        <span className="text-gray-600 text-sm">Pool</span>
                        <p className="font-semibold">Infinity Edge</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Financial Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Property Tax (Annual)</span>
                        <span className="font-semibold">$162,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">HOA Fees (Monthly)</span>
                        <span className="font-semibold">$2,850</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Insurance (Annual)</span>
                        <span className="font-semibold">$18,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price per Sq Ft</span>
                        <span className="font-semibold">$2,476</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Architectural Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Interior Materials</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">Italian Stone</Badge>
                          <Badge variant="secondary">French Oak</Badge>
                          <Badge variant="secondary">Limestone</Badge>
                          <Badge variant="secondary">Custom Millwork</Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Design Style</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Wabi Sabi</Badge>
                          <Badge variant="outline">Contemporary</Badge>
                          <Badge variant="outline">Mediterranean</Badge>
                          <Badge variant="outline">Coastal</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Community Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Gated Community</span>
                        <Badge variant="default">Yes</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">24/7 Security</span>
                        <Badge variant="default">Yes</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Ocean Access</span>
                        <Badge variant="default">Private</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Beach Club</span>
                        <Badge variant="default">Included</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Data;
