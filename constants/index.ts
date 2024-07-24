export const GenderOptions = ["male", "female", "other"];

export const StudentFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  parentContact: "",
  parentContactNumber: "",
  classTeacher: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  upiCode: "",
  currentClass: "",
  gradesHistory: "",
  schoolHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Teachers = [
  {
    image: "/assets/images/tr-green.png",
    name: "John Green",
  },
  {
    image: "/assets/images/tr-cameron.png",
    name: "Leila Cameron",
  },
  {
    image: "/assets/images/tr-livingston.png",
    name: "David Livingston",
  },
  {
    image: "/assets/images/tr-peter.png",
    name: "Evan Peter",
  },
  {
    image: "/assets/images/tr-powell.png",
    name: "Jane Powell",
  },
  {
    image: "/assets/images/tr-remirez.png",
    name: "Alex Ramirez",
  },
  {
    image: "/assets/images/tr-lee.png",
    name: "Jasmine Lee",
  },
  {
    image: "/assets/images/tr-cruz.png",
    name: "Alyana Cruz",
  },
  {
    image: "/assets/images/tr-sharma.png",
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};