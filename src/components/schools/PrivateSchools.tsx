
import { Award } from "lucide-react";
import SchoolCard from "./SchoolCard";

const PrivateSchools = () => {
  const schools = [
    {
      name: "St. Margaret's Episcopal School",
      type: "Private • Grades PK-12",
      distance: "6.2 miles",
      rating: "9.7",
      badges: [
        { text: "College Prep: A+", variant: "outline" as const },
        { text: "Global Program", variant: "outline" as const }
      ],
      description: "Premier independent school with rigorous academics, exceptional arts programs, and 100% college placement to prestigious universities worldwide.",
      variant: "dark" as const
    },
    {
      name: "Sage Hill School",
      type: "Private • Grades 9-12",
      distance: "18 miles",
      rating: "9.4",
      badges: [
        { text: "Innovation: A+", variant: "secondary" as const },
        { text: "Entrepreneurship" }
      ],
      description: "Cutting-edge independent school emphasizing innovation, entrepreneurship, and global citizenship with state-of-the-art facilities.",
      colorAccent: "amber"
    }
  ];

  return (
    <div className="mb-24">
      <div className="flex items-center justify-center mb-16">
        <Award className="w-8 h-8 text-black mr-4" />
        <h3 className="text-4xl font-light text-black">Private Institutions</h3>
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
            variant={school.variant}
            colorAccent={school.colorAccent}
          />
        ))}
      </div>
    </div>
  );
};

export default PrivateSchools;
