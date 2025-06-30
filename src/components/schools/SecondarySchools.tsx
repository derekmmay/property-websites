
import { BookOpen } from "lucide-react";
import SchoolCard from "./SchoolCard";

const SecondarySchools = () => {
  const schools = [
    {
      name: "Marco Forster Middle School",
      type: "Public • Grades 6-8",
      distance: "2.1 miles",
      rating: "9.2",
      badges: [
        { text: "Academics: A", variant: "secondary" as const },
        { text: "Leadership: A+" }
      ],
      description: "Comprehensive middle school experience with advanced placement preparation and nationally recognized academic excellence."
    },
    {
      name: "San Clemente High School",
      type: "Public • Grades 9-12",
      distance: "3.5 miles",
      rating: "8.9",
      badges: [
        { text: "AP Programs: A+", variant: "secondary" as const },
        { text: "College Prep" }
      ],
      description: "National Blue Ribbon School with 30+ AP courses and 98% college acceptance rate to top-tier universities."
    }
  ];

  return (
    <div className="mb-24">
      <div className="flex items-center justify-center mb-16">
        <BookOpen className="w-8 h-8 text-black mr-4" />
        <h3 className="text-4xl font-light text-black">Secondary Education</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {schools.map((school, index) => (
          <SchoolCard
            key={index}
            name={school.name}
            type={school.type}
            distance={school.distance}
            rating={school.rating}
            badges={school.badges}
            description={school.description}
            colorAccent="slate"
          />
        ))}
      </div>
    </div>
  );
};

export default SecondarySchools;
