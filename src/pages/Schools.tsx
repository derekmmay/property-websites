
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SchoolsHero from "@/components/schools/SchoolsHero";
import EducationStats from "@/components/schools/EducationStats";
import ElementarySchools from "@/components/schools/ElementarySchools";
import SecondarySchools from "@/components/schools/SecondarySchools";
import PrivateSchools from "@/components/schools/PrivateSchools";
import HigherEducation from "@/components/schools/HigherEducation";

const Schools = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <SchoolsHero />
      <EducationStats />
      
      <div className="max-w-7xl mx-auto px-4 py-24">
        <ElementarySchools />
        <SecondarySchools />
        <PrivateSchools />
        <HigherEducation />
      </div>
      
      <Footer />
    </div>
  );
};

export default Schools;
