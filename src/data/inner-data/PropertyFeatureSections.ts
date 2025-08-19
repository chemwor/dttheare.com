// src/data/inner-data/PropertyFeatureSections.ts
export interface Section {
   id: number;
   title: string;
   text: string;
}

const property_feature_sections: Section[] = [
   {
      id: 1,
      title: "Vibe",
      text: "Cool, laid-back, and casual.",
   },
   {
      id: 2,
      title: "Artists & Credits",
      text: "Written by J. Carter; directed by A. Mensah; featuring L. Price, T. Jordan, and M. Okoro.",
   },
   {
      id: 3,
      title: "Event Details",
      text: "75 min · Age 13+ · Doors 30 min early · General admission · PWYW (approval).",
   },
];

export default property_feature_sections;
