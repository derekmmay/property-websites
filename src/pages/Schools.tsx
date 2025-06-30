import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

const Schools = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(30, 41, 59, 0.4)), url('https://images.unsplash.com/photo-1543337724-5030f43ca996?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-extralight mb-8 tracking-[0.05em] text-white">
              Top-Rated Schools
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90 font-light tracking-wide">
              Exemplary Academic Institutions
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Explore the distinguished schools and educational opportunities surrounding 126 Monarch Bay, 
              ensuring an exceptional academic journey.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-light mb-12 text-slate-800 text-center">
          Premier Educational Opportunities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-medium text-slate-800 mb-3">
                Monarch Beach Elementary
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Public • Grades K-5 • 0.7 miles
              </p>
              <div className="flex space-x-2 mb-4">
                <Badge variant="secondary">Academics: A+</Badge>
                <Badge variant="secondary">Diversity: A</Badge>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Consistently ranked among California's top elementary schools, 
                Monarch Beach Elementary provides a nurturing and challenging academic environment.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-medium text-slate-800 mb-3">
                Marco Forster Middle School
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Public • Grades 6-8 • 2.1 miles
              </p>
              <div className="flex space-x-2 mb-4">
                <Badge variant="secondary">Academics: A</Badge>
                <Badge variant="secondary">Clubs: A+</Badge>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Known for its comprehensive curriculum and diverse extracurricular activities, 
                Marco Forster prepares students for high school success.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-medium text-slate-800 mb-3">
                San Clemente High School
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Public • Grades 9-12 • 3.5 miles
              </p>
              <div className="flex space-x-2 mb-4">
                <Badge variant="secondary">Academics: A-</Badge>
                <Badge variant="secondary">Sports: A+</Badge>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                A nationally recognized high school offering a wide range of AP courses, 
                championship sports teams, and a thriving arts program.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-medium text-slate-800 mb-3">
                St. Margaret's Episcopal School
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Private • Grades PK-12 • 6.2 miles
              </p>
              <div className="flex space-x-2 mb-4">
                <Badge variant="secondary">College Prep: A+</Badge>
                <Badge variant="secondary">Arts: A+</Badge>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                A leading private school known for its rigorous academic program, 
                exceptional arts offerings, and strong college placement record.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-medium text-slate-800 mb-3">
                Sage Hill School
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Private • Grades 9-12 • 18 miles
              </p>
              <div className="flex space-x-2 mb-4">
                <Badge variant="secondary">STEM: A+</Badge>
                <Badge variant="secondary">Global Studies: A</Badge>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                An innovative independent high school with a focus on STEM, 
                global studies, and experiential learning opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-medium text-slate-800 mb-3">
                University of California, Irvine
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Public University • 20 miles
              </p>
              <div className="flex space-x-2 mb-4">
                <Badge variant="secondary">Research: A+</Badge>
                <Badge variant="secondary">Innovation: A</Badge>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                A world-renowned research university offering a wide range of undergraduate 
                and graduate programs, with a strong emphasis on innovation and discovery.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Schools;
