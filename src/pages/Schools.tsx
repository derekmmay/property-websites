
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Schools = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="relative h-64 bg-gradient-to-r from-green-900 to-teal-800 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-light mb-4">Education Excellence</h1>
          <p className="text-xl opacity-90">Top-Rated Schools & Programs</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-light mb-6 text-gray-800">Capistrano Unified School District</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            126 Monarch Bay is served by the highly regarded Capistrano Unified School District, 
            consistently ranked among Orange County's premier educational systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium text-gray-800">Moulton Elementary</h3>
                <Badge className="bg-green-100 text-green-800">8/10</Badge>
              </div>
              <p className="text-gray-600 mb-4">Grades K-5 • 3.0 miles</p>
              <p className="text-sm text-gray-500">
                Highly rated elementary school known for strong academics and 
                supportive community environment.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium text-gray-800">Niguel Hills Middle</h3>
                <Badge className="bg-green-100 text-green-800">9/10</Badge>
              </div>
              <p className="text-gray-600 mb-4">Grades 6-8 • 4.6 miles</p>
              <p className="text-sm text-gray-500">
                California Distinguished School with excellent programs and 
                college preparatory curriculum.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium text-gray-800">Dana Hills High</h3>
                <Badge className="bg-blue-100 text-blue-800">Premier</Badge>
              </div>
              <p className="text-gray-600 mb-4">Grades 9-12 • 1.8 miles</p>
              <p className="text-sm text-gray-500">
                Renowned for music and athletics programs, recently upgraded 
                facilities, strong college preparation.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light mb-6 text-gray-800">Private School Options</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-800">Monarch Bay Montessori Academy</h4>
                  <p className="text-sm text-gray-600">Pre-K through 6th Grade • 0.3 miles</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Premium Montessori education within Monarch Bay Plaza
                  </p>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-medium text-gray-800">St. Anne's School</h4>
                  <p className="text-sm text-gray-600">K-8 • Laguna Niguel</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">JSerra Catholic High School</h4>
                  <p className="text-sm text-gray-600">9-12 • San Juan Capistrano</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light mb-6 text-gray-800">District Excellence</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Test scores consistently above state averages</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Multiple California Distinguished Schools</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Strong college preparation programs</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Convenient school bus service</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Excellent extracurricular offerings</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Schools;
