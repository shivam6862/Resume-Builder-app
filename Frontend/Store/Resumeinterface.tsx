import { v4 as uuidv4 } from "uuid";

interface UserAoi {
  item: string;
  id: string;
}
interface UserEducation {
  year: string;
  degree: string;
  field: string;
  institution: string;
  graduation: string;
  cgpa: string;
  id: string;
}
interface UserInternshipDetails {
  Company: string;
  Title: string;
  Description: string;
  StartDate: string;
  EndDate: string;
  id: string;
}
interface UserJobExperience {
  Position: string;
  Organisation: string;
  Description: string;
  StartDate: string;
  EndDate: string;
  id: string;
}
interface UserProject {
  name: string;
  under: string;
  time: string;
  description: string;
  startDate: string;
  endDate: string;
  id: string;
}
interface UserAsaaItem {
  type: string;
  trim: true;
}
interface UserAsaa {
  item: string;
  id: string;
}
interface UserPoraeC {
  name: string;
  under: string;
  time: string;
  description: string;
  id: string;
}
interface UserPublications {
  Title: string;
  Authors: string;
  Publisher: string;
  Year: string;
  Pages: string;
  Volumes: string;
  Journal: string;
  id: string;
}
interface UserReference {
  name: string;
  work: string;
  collegeCompanies: string;
  email: string;
  number: string;
  id: string;
}
interface ResumeInterfaceState {
  userid?: string;
  general: {
    name: string;
    semester: string;
    branch: string;
    number: string;
    email: string;
    registration: string;
    college: string;
  };
  college: string;
  aoi: UserAoi[];
  education: UserEducation[];
  InternshipDetails: UserInternshipDetails[];
  JobExperience: UserJobExperience[];
  projects: UserProject[];
  asaa: UserAsaa[];
  skills: {
    computerLanguages: string;
    softwarePackages: string;
    additionalCourses: string;
    languagesKnown: string;
  };
  poraec: UserPoraeC[];
  Publications: UserPublications[];
  references: UserReference[];
}
const initialState: ResumeInterfaceState = {
  userid: "",
  general: {
    name: "",
    semester: "",
    branch: "",
    number: "",
    email: "",
    registration: "",
    college: "",
  },
  college: "",
  aoi: [{ item: "", id: uuidv4() }],
  education: [
    {
      year: "",
      degree: "",
      field: "",
      institution: "",
      cgpa: "",
      graduation: "",
      id: uuidv4(),
    },
  ],
  InternshipDetails: [
    {
      Company: "",
      Title: "",
      Description: "",
      StartDate: "",
      EndDate: "",
      id: uuidv4(),
    },
  ],
  JobExperience: [
    {
      Position: "",
      Organisation: "",
      Description: "",
      StartDate: "",
      EndDate: "",
      id: uuidv4(),
    },
  ],
  projects: [
    {
      name: "",
      under: "",
      time: "",
      description: "",
      startDate: "",
      endDate: "",
      id: uuidv4(),
    },
  ],
  asaa: [
    {
      item: "",
      id: uuidv4(),
    },
  ],
  skills: {
    computerLanguages: "",
    softwarePackages: "",
    additionalCourses: "",
    languagesKnown: "",
  },
  poraec: [
    {
      name: "",
      under: "",
      time: "",
      description: "",
      id: uuidv4(),
    },
  ],
  Publications: [
    {
      Title: "",
      Authors: "",
      Publisher: "",
      Year: "",
      Pages: "",
      Volumes: "",
      Journal: "",
      id: uuidv4(),
    },
  ],
  references: [
    {
      name: "",
      work: "",
      collegeCompanies: "",
      email: "",
      number: "",
      id: uuidv4(),
    },
  ],
};

export default initialState;
