// union types
type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
type FullstackDeveloper = "fakibazDeveloper" | "expertDeveloper";

const newDeveloper: FrontendDeveloper = "juniorDeveloper";

type User = {
  name: string;
  email?: string;
  gender: "male" | "female";
  bloodGroup: "O+" | "A+" | "B+" | "AB+";
};

const user1: User = {
  name: "Mithun Biswas",
  gender: "male",
  bloodGroup: "B+",
};

type Developer = FrontendDeveloper | FullstackDeveloper;

// Itersection types
type JuniorSofwareDeveloper = {
  skills: string[];
  designation1: "Junior Sofware Developer";
};

type SeniorSofwareDeveloper = {
  skills: string[];
  designation2: "Senior Sofware Developer";
};

type FullstackSoftwareDeveloper = JuniorSofwareDeveloper &
  SeniorSofwareDeveloper;
const fullstackSoftwareDeveloper: FullstackSoftwareDeveloper = {
  skills: ["HTML", "CSS", "Javascript"],
  designation1: "Junior Sofware Developer",
  designation2: "Senior Sofware Developer",
};
