import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Market Context</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-700 mb-4">
                        Dana Point's luxury real estate market has shown remarkable resilience, with waterfront properties like 126 Monarch Bay Drive representing the pinnacle of coastal living. The area has experienced consistent appreciation over the past decade.
                      </p>
                      <div className="grid grid-cols-2 gap-4 my-6">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">$2.8M</div>
                          <div className="text-sm text-gray-600">Neighborhood Median</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">28</div>
                          <div className="text-sm text-gray-600">Avg Days on Market</div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        The Monarch Bay community maintains its exclusivity with only <strong>23 active listings</strong> in a neighborhood of over <strong>1,200 properties</strong>, creating a unique supply-demand dynamic that supports property values.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Investment Perspective</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-700 mb-4">
                        This property represents a rare opportunity in one of Southern California's most sought-after coastal enclaves. The recent comprehensive renovation positions it as a modern luxury residence while maintaining its prestigious address.
                      </p>
                      <div className="grid grid-cols-2 gap-4 my-6">
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">$2,476</div>
                          <div className="text-sm text-gray-600">Price per Sq Ft</div>
                        </div>
                        <div className="text-center p-4 bg-orange-50 rounded-lg">
                          <div className="text-2xl font-bold text-orange-600">0.75</div>
                          <div className="text-sm text-gray-600">Acres</div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        The property's <strong>6,480 square feet</strong> of living space on a <strong>0.75-acre lot</strong> offers both luxury and privacy, with potential for future customization within the community's architectural guidelines.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="history" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Property Evolution</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="border-l-2 border-gray-200 pl-4 space-y-8">
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full -ml-6 border-2 border-white"></div>
                          <span className="font-semibold text-lg">2024 - Present</span>
                          <Badge variant="outline">Current Era</Badge>
                        </div>
                        <div className="prose prose-gray max-w-none">
                          <p className="text-gray-700 mb-3">
                            The property now stands as a masterpiece of contemporary coastal architecture, featuring a complete transformation that honors both Japanese Wabi Sabi principles and modern luxury living.
                          </p>
                          <div className="bg-blue-50 p-4 rounded-lg mb-4">
                            <div className="text-sm font-medium text-blue-800 mb-2">Transformation Highlights:</div>
                            <ul className="text-sm text-blue-700 space-y-1">
                              <li>• <strong>6,480 sq ft</strong> of reimagined living space</li>
                              <li>• <strong>5 bedrooms, 7 bathrooms</strong> with spa-like amenities</li>
                              <li>• <strong>Custom millwork</strong> throughout interior spaces</li>
                              <li>• <strong>Infinity-edge pool</strong> with integrated fire features</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full -ml-6 border-2 border-white"></div>
                          <span className="font-semibold text-lg">2019 - 2024</span>
                        </div>
                        <div className="prose prose-gray max-w-none">
                          <p className="text-gray-700 mb-3">
                            A five-year transformation period that saw the property evolve from a traditional Mediterranean estate into a contemporary architectural statement. The renovation investment exceeded <strong>$3 million</strong> in high-end materials and craftsmanship.
                          </p>
                          <div className="bg-green-50 p-4 rounded-lg">
                            <div className="text-sm font-medium text-green-800 mb-2">Major Renovations:</div>
                            <ul className="text-sm text-green-700 space-y-1">
                              <li>• Imported <strong>Italian stone</strong> and <strong>French oak</strong> flooring</li>
                              <li>• Floor-to-ceiling glass installation for ocean views</li>
                              <li>• Sculptural facade redesign with natural materials</li>
                              <li>• Integration of indoor-outdoor living spaces</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-3 h-3 bg-gray-400 rounded-full -ml-6 border-2 border-white"></div>
                          <span className="font-semibold text-lg">1992 - 2019</span>
                        </div>
                        <div className="prose prose-gray max-w-none">
                          <p className="text-gray-700 mb-3">
                            The original Mediterranean-style estate served the property well for nearly three decades. Built during the height of Monarch Bay's development, it featured traditional architectural elements typical of luxury coastal homes of that era.
                          </p>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="text-sm font-medium text-gray-800 mb-2">Original Features:</div>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• <strong>6,200 sq ft</strong> of living space</li>
                              <li>• Traditional tile roofing and stucco exterior</li>
                              <li>• Formal dining and living room layouts</li>
                              <li>• Mediterranean-inspired outdoor spaces</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Architectural Journey</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Design Philosophy Evolution</h4>
                      <div className="prose prose-gray max-w-none">
                        <p className="text-gray-700 mb-4">
                          The property's transformation reflects a shift from formal Mediterranean grandeur to a more intimate, nature-connected living experience. The current design embraces the Japanese concept of Wabi Sabi - finding beauty in imperfection and impermanence.
                        </p>
                        <div className="grid grid-cols-2 gap-4 my-6">
                          <div className="text-center p-4 bg-amber-50 rounded-lg">
                            <div className="text-2xl font-bold text-amber-600">5</div>
                            <div className="text-sm text-gray-600">Years of Planning</div>
                          </div>
                          <div className="text-center p-4 bg-indigo-50 rounded-lg">
                            <div className="text-2xl font-bold text-indigo-600">280</div>
                            <div className="text-sm text-gray-600">Sq Ft Added</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-3">Luxury Amenities Timeline</h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-blue-200 pl-4">
                          <div className="font-medium text-gray-900">Wine Sanctuary (2023)</div>
                          <p className="text-sm text-gray-600">Climate-controlled space for <strong>500+ bottle</strong> collection with tasting area</p>
                        </div>
                        <div className="border-l-4 border-green-200 pl-4">
                          <div className="font-medium text-gray-900">Infinity Pool Complex (2022)</div>
                          <p className="text-sm text-gray-600">Negative-edge design with integrated <strong>fire features</strong> and ocean views</p>
                        </div>
                        <div className="border-l-4 border-purple-200 pl-4">
                          <div className="font-medium text-gray-900">Primary Suite Renovation (2021)</div>
                          <p className="text-sm text-gray-600">Spa-inspired bathroom with <strong>ocean-view soaking tub</strong> and steam shower</p>
                        </div>
                        <div className="border-l-4 border-orange-200 pl-4">
                          <div className="font-medium text-gray-900">Kitchen Reimagining (2020)</div>
                          <p className="text-sm text-gray-600">Professional-grade appliances with <strong>butler's pantry</strong> and breakfast nook</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Neighborhood Legacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 mb-6">
                      Monarch Bay Drive represents one of Dana Point's most prestigious addresses, established in the early 1990s as an exclusive enclave of luxury homes. The community was designed to offer privacy and security while maintaining the natural beauty of the coastal bluffs.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                      <div className="text-center p-6 bg-slate-50 rounded-lg">
                        <div className="text-3xl font-bold text-slate-600 mb-2">32</div>
                        <div className="text-sm text-gray-600 mb-2">Years Established</div>
                        <p className="text-xs text-gray-500">Since 1992</p>
                      </div>
                      <div className="text-center p-6 bg-emerald-50 rounded-lg">
                        <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
                        <div className="text-sm text-gray-600 mb-2">Gated Security</div>
                        <p className="text-xs text-gray-500">Private entrance</p>
                      </div>
                      <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                        <div className="text-sm text-gray-600 mb-2">Ocean Access</div>
                        <p className="text-xs text-gray-500">Private beach club</p>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      The transformation of 126 Monarch Bay Drive reflects the evolution of luxury living standards in this prestigious community, setting new benchmarks for contemporary coastal architecture while respecting the neighborhood's commitment to privacy and natural beauty.
                    </p>
                  </div>
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
