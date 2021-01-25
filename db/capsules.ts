import { createCapsule } from "../utils/db";

const ALL_CAPSULES = [
  createCapsule({
    category: "Master Origins",
    name: "India",
    description: "Coffee with robusta monsoon",
    intensity: 11,
    cupSizes: ["md", "lg"],
    aromaticProfile: "Intense & Spicy",
    aromaticNotes: "Spicy",
    origin: "India",
    price: 2.9,
    color: "#5D764E",
    thumbnailUrl:
      "https://www.nespresso.com/ecom/medias/sys_master/public/10840367792158/C-0359-India-2000x2000.png",
    headerUrl:
      "https://www.nespresso.com/ecom/medias/sys_master/public/13245116383262/C-0359-Main-PDP-MasterOrigin-India-OL.jpg",
  }),
  createCapsule({
    category: "Master Origins",
    name: "Colombia",
    description: "Coffee with late harvest arabica",
    intensity: 6,
    cupSizes: ["md", "lg"],
    aromaticProfile: "Fruity & Vibrant",
    aromaticNotes: "Winey",
    origin: "Colombia",
    price: 2.9,
    color: "#AF7982",
    thumbnailUrl:
      "https://www.nespresso.com/ecom/medias/sys_master/public/10842190675998.png",
    headerUrl:
      "https://www.nespresso.com/ecom/medias/sys_master/public/13245169401886/C-0361-Main-PDP-MasterOrigin-Colombia-OL.jpg",
  }),
  createCapsule({
    category: "Master Origins",
    name: "Nicaragua",
    description: 'Coffee with "black-honey" processed arabica',
    intensity: 5,
    cupSizes: ["md", "lg"],
    aromaticProfile: "Sweet & Harmonious",
    aromaticNotes: "Honey, Cereal",
    origin: "Nicaragua",
    price: 2.9,
    color: "#C1A976",
    thumbnailUrl:
      "https://www.nespresso.com/ecom/medias/sys_master/public/10838071672862/C-0362-nicaragua-2000x2000.png",
    headerUrl:
      "https://www.nespresso.com/ecom/medias/sys_master/public/13245178773534/C-0362-Main-PDP-MasterOrigin-Nicaragua-OL.jpg",
  }),
  createCapsule({
    category: "Master Origins",
    name: "Ethiopia",
    description: "Coffee with dry processed arabica",
    intensity: 4,
    cupSizes: ["md", "lg"],
    aromaticProfile: "Flowery & Bright",
    aromaticNotes: "Flowery",
    origin: "Ethiopia",
    price: 2.9,
    color: "#B3724F",
    thumbnailUrl:
      "https://www.nespresso.com/ecom/medias/sys_master/public/10831332802590/C-0363-Ethiopia-2000x2000.png",
    headerUrl:
      "https://www.nespresso.com/ecom/medias/sys_master/public/13245189226526/C-0363-Main-PDP-MasterOrigin-Ethiopia-OL.jpg",
  }),
  createCapsule({
    category: "Master Origins",
    name: "Indonesia",
    description: "Wet-hulled coffee",
    intensity: 8,
    cupSizes: ["md", "lg"],
    aromaticProfile: "Rich & Woody",
    aromaticNotes: "Woody",
    origin: "Indonesia",
    price: 2.9,
    color: "#477489",
    thumbnailUrl:
      "https://www.nespresso.com/ecom/medias/sys_master/public/10820727865374/C-0360-Indonesia-2000x2000.png",
    headerUrl:
      "https://www.nespresso.com/ecom/medias/sys_master/public/13245126475806/C-0360-Main-PDP-MasterOrigin-Indonesia-OL.jpg",
  }),
  createCapsule({
    category: "Ispirazione Italiana",
    name: "Napoli",
    description: "Exceptionally dark and creamy coffee",
    intensity: 13,
    cupSizes: ["md", "lg"],
    aromaticProfile: "Exceptionally Dark & Creamy",
    aromaticNotes: "Cocoa, Intensely roasted",
    price: 2.5,
    color: "#940911",
    thumbnailUrl:
      "https://www.nespresso.com/ecom/medias/sys_master/public/12807335641118/Desktop-Standard-2000x2000.png?impolicy=product&imwidth=130",
    headerUrl:
      "https://www.nespresso.com/ecom/medias/sys_master/public/13245214097438/C-0471-Main-PDP-IspirazioneItaliana-Napoli-OL.jpg",
  }),
  createCapsule({
    category: "Espresso & Lungo",
    name: "Volluto",
    description: "Sweet and light coffee",
    intensity: 4,
    cupSizes: ["md"],
    price: 2.5,
    color: "#BE9748",
    thumbnailUrl:
      "https://www.nespresso.com/ecom/medias/sys_master/public/10386858278942/C-0039-2000x2000.png",
    headerUrl:
      "https://www.nespresso.com/ecom/medias/sys_master/public/13245009199134/C-0039-Main-PDP-Espresso-Volluto-OL.jpg",
  }),
  createCapsule({
    category: "Espresso & Lungo",
    name: "Cosi",
    description: "Mild and delicately toasted coffee",
    intensity: 4,
    cupSizes: ["md"],
    price: 2.5,
    color: "#735649",
    thumbnailUrl:
      "https://www.nespresso.com/ecom/medias/sys_master/public/10386856312862/C-0004-2000x2000.png",
    headerUrl:
      "https://www.nespresso.com/ecom/medias/sys_master/public/13244944121886/C-0004-Main-PDP-Espresso-Cosi-OL.jpg",
  }),
  createCapsule({
    category: "Espresso & Lungo",
    name: "Linizio Lungo",
    description: "Round and smooth coffee",
    intensity: 4,
    cupSizes: ["lg"],
    price: 2.5,
    color: "#E09340",
    thumbnailUrl:
      "https://www.nespresso.com/ecom/medias/sys_master/public/10386858541086/C-0057-2000x2000.png",
    headerUrl:
      "https://www.nespresso.com/ecom/medias/sys_master/public/10386858704926/C-0057-PDP-Background.jpg",
  }),
  createCapsule({
    category: "Espresso & Lungo",
    name: "Vivalto Lungo",
    description: "Complex and balanced coffee",
    intensity: 4,
    cupSizes: ["lg"],
    price: 2.5,
    color: "#6191CC",
    thumbnailUrl:
      "https://www.nespresso.com/ecom/medias/sys_master/public/10386858082334/C-0038-2000x2000.png",
    headerUrl:
      "https://www.nespresso.com/ecom/medias/sys_master/public/10386858213406/C-0038-PDP-Background.jpg",
  }),
];

export default ALL_CAPSULES;
