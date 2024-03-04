import { Metadata } from "next";
import { skills } from "@/app/skills/data";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "abdullah sidd // skills",
  description:
    "Comprehensive collection of acquired tech skills including languages, libraries, frameworks, and databases.adtabase i acquire.",
};

const SkillsPage = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold pb-8 text-left w-full">Skills</h1>
      <div className="space-y-3 ">
        {skills.map((skill) => (
          <Button variant={"outline"} className="mr-3" key={skill}>
            {skill}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
