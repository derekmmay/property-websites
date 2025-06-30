
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { GraduationCap, Award, Users, BookOpen, Globe, Star } from "lucide-react";

const Schools = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1543337724-5030f43ca996?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <span className="inline-block px-6 py-2 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full text-sm tracking-[0.2em] uppercase mb-8">
                Academic Excellence
              </span>
            </div>
            <h1 className="text-7xl md:text-9xl font-extralight mb-12 tracking-[-0.02em] text-white leading-none">
              Premier Education
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light tracking-wide opacity-95">
              California's Finest Academic Institutions
            </p>
            <p className="text-lg mb-16 max-w-4xl mx-auto opacity-90 leading-relaxed font-light">
              Access to the region's most distinguished schools and universities, ensuring exceptional 
              educational opportunities from elementary through higher education.
            </p>
          </div>
        </div>
      </div>

      {/* Education Excellence Stats */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-light text-black mb-16 text-center tracking-wide">Academic Excellence</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-extralight text-black mb-4">98%</div>
              <p className="text-gray-600 font-light">College Acceptance Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extralight text-black mb-4">A+</div>
              <p className="text-gray-600 font-light">Average School Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extralight text-black mb-4">15:1</div>
              <p className="text-gray-600 font-light">Student-Teacher Ratio</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extralight text-black mb-4">12</div>
              <p className="text-gray-600 font-light">Top Universities Nearby</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        
        {/* Elementary Schools */}
        <div className="mb-24">
          <div className="flex items-center justify-center mb-16">
            <GraduationCap className="w-8 h-8 text-black mr-4" />
            <h3 className="text-4xl font-light text-black">Elementary Education</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white overflow-hidden">
              <CardContent className="p-8">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-light text-black mb-2">Monarch Beach Elementary</h4>
                    <p className="text-gray-600 font-light">Public • Grades K-5 • 0.7 miles</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-lg font-medium">9.8</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-black text-white">Academics: A+</Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-black">STEM Excellence</Badge>
                </div>
                <p className="text-gray-600 leading-relaxed font-light">
                  Consistently ranked among California's top elementary schools, offering innovative 
                  STEAM programs and personalized learning experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white overflow-hidden">
              <CardContent className="p-8">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-light text-black mb-2">Sea View Elementary</h4>
                    <p className="text-gray-600 font-light">Public • Grades K-6 • 1.2 miles</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-lg font-medium">9.5</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-black text-white">Arts: A+</Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-black">Technology</Badge>
                </div>
                <p className="text-gray-600 leading-relaxed font-light">
                  Award-winning programs in creative arts, environmental science, and technology 
                  integration with exceptional support for gifted students.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Secondary Schools */}
        <div className="mb-24">
          <div className="flex items-center justify-center mb-16">
            <BookOpen className="w-8 h-8 text-black mr-4" />
            <h3 className="text-4xl font-light text-black">Secondary Education</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white overflow-hidden">
              <CardContent className="p-8">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-500 to-slate-600"></div>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-light text-black mb-2">Marco Forster Middle School</h4>
                    <p className="text-gray-600 font-light">Public • Grades 6-8 • 2.1 miles</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-lg font-medium">9.2</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-black text-white">Academics: A</Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-black">Leadership: A+</Badge>
                </div>
                <p className="text-gray-600 leading-relaxed font-light">
                  Comprehensive middle school experience with advanced placement preparation 
                  and nationally recognized academic excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white overflow-hidden">
              <CardContent className="p-8">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-500 to-slate-600"></div>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-light text-black mb-2">San Clemente High School</h4>
                    <p className="text-gray-600 font-light">Public • Grades 9-12 • 3.5 miles</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-lg font-medium">8.9</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-black text-white">AP Programs: A+</Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-black">College Prep</Badge>
                </div>
                <p className="text-gray-600 leading-relaxed font-light">
                  National Blue Ribbon School with 30+ AP courses and 98% college acceptance rate 
                  to top-tier universities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Private Schools */}
        <div className="mb-24">
          <div className="flex items-center justify-center mb-16">
            <Award className="w-8 h-8 text-black mr-4" />
            <h3 className="text-4xl font-light text-black">Private Institutions</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-black to-gray-800 text-white overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-light mb-2">St. Margaret's Episcopal School</h4>
                    <p className="text-white/80 font-light">Private • Grades PK-12 • 6.2 miles</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-lg font-medium text-white">9.7</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="border-white/30 text-white">College Prep: A+</Badge>
                  <Badge variant="outline" className="border-white/30 text-white">Global Program</Badge>
                </div>
                <p className="text-white/80 leading-relaxed font-light">
                  Premier independent school with rigorous academics, exceptional arts programs, 
                  and 100% college placement to prestigious universities worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white overflow-hidden">
              <CardContent className="p-8">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600"></div>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-light text-black mb-2">Sage Hill School</h4>
                    <p className="text-gray-600 font-light">Private • Grades 9-12 • 18 miles</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-lg font-medium">9.4</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-black text-white">Innovation: A+</Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-black">Entrepreneurship</Badge>
                </div>
                <p className="text-gray-600 leading-relaxed font-light">
                  Cutting-edge independent school emphasizing innovation, entrepreneurship, 
                  and global citizenship with state-of-the-art facilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Higher Education */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-16">
            <Globe className="w-8 h-8 text-black mr-4" />
            <h3 className="text-4xl font-light text-black">Higher Education</h3>
          </div>
          
          <Card className="border-0 shadow-xl bg-gradient-to-r from-gray-900 to-black text-white">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <h4 className="text-3xl font-light mb-6">University of California, Irvine</h4>
                  <p className="text-white/80 font-light mb-6">World-renowned research university • 20 miles</p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <Badge variant="outline" className="border-white/30 text-white">Research: A+</Badge>
                    <Badge variant="outline" className="border-white/30 text-white">Top 10 Public</Badge>
                  </div>
                  <p className="text-white/80 leading-relaxed font-light">
                    AAU research university with top-ranked programs in business, engineering, 
                    medicine, and computer science. Part of the prestigious UC system.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between py-4 border-b border-white/20">
                    <span className="text-white/80">US News Ranking</span>
                    <span className="text-white font-medium">#10 Public Universities</span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-white/20">
                    <span className="text-white/80">Student Population</span>
                    <span className="text-white font-medium">36,000+</span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-white/20">
                    <span className="text-white/80">Research Funding</span>
                    <span className="text-white font-medium">$523M Annually</span>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <span className="text-white/80">Notable Alumni</span>
                    <span className="text-white font-medium">Tech & Business Leaders</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Schools;
