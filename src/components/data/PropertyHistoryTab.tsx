
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PropertyHistoryTab = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Property Evolution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-2 border-gray-200 pl-4 space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-black rounded-full -ml-6 border-2 border-white"></div>
                  <span className="font-semibold text-lg">2024 - Present</span>
                  <Badge variant="outline">Current Era</Badge>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 mb-3">
                    The property now stands as a masterpiece of contemporary coastal architecture, featuring a complete transformation that honors both Japanese Wabi Sabi principles and modern luxury living.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="text-sm font-medium text-black mb-2">Transformation Highlights:</div>
                    <ul className="text-sm text-gray-700 space-y-1">
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
                  <div className="w-3 h-3 bg-gray-600 rounded-full -ml-6 border-2 border-white"></div>
                  <span className="font-semibold text-lg">2019 - 2024</span>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 mb-3">
                    A five-year transformation period that saw the property evolve from a traditional Mediterranean estate into a contemporary architectural statement. The renovation investment exceeded <strong>$3 million</strong> in high-end materials and craftsmanship.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm font-medium text-black mb-2">Major Renovations:</div>
                    <ul className="text-sm text-gray-700 space-y-1">
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
                    <div className="text-sm font-medium text-black mb-2">Original Features:</div>
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
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-black mb-4">5</div>
                    <div className="text-sm text-gray-600">Years of Planning</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-black mb-4">280</div>
                    <div className="text-sm text-gray-600">Sq Ft Added</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3">Luxury Amenities Timeline</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-gray-200 pl-4">
                  <div className="font-medium text-gray-900">Wine Sanctuary (2023)</div>
                  <p className="text-sm text-gray-600">Climate-controlled space for <strong>500+ bottle</strong> collection with tasting area</p>
                </div>
                <div className="border-l-4 border-gray-200 pl-4">
                  <div className="font-medium text-gray-900">Infinity Pool Complex (2022)</div>
                  <p className="text-sm text-gray-600">Negative-edge design with integrated <strong>fire features</strong> and ocean views</p>
                </div>
                <div className="border-l-4 border-gray-200 pl-4">
                  <div className="font-medium text-gray-900">Primary Suite Renovation (2021)</div>
                  <p className="text-sm text-gray-600">Spa-inspired bathroom with <strong>ocean-view soaking tub</strong> and steam shower</p>
                </div>
                <div className="border-l-4 border-gray-200 pl-4">
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
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-black mb-2">32</div>
                <div className="text-sm text-gray-600 mb-2">Years Established</div>
                <p className="text-xs text-gray-500">Since 1992</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-black mb-2">24/7</div>
                <div className="text-sm text-gray-600 mb-2">Gated Security</div>
                <p className="text-xs text-gray-500">Private entrance</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-black mb-2">100%</div>
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
    </div>
  );
};

export default PropertyHistoryTab;
