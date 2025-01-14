const facultyData = [
  {
    imgUrl: "/faculty/director.webp",
    name: "Prof. Santanu Chattopadhyay",
    designation: "Professor and Director",
    eduaction: "",
    topicExpertie: [
      "VLSI and Embedded Systems",
      "Network-on-Chip Design and Test",
      "Low Power Digital Design and Testing",
      "Thermal Aware Testing",
      "Logic Encryption",
    ],
    email: ["director@iiitkalyani.ac.in"],
    more: "https://www.iitkgp.ac.in/department/EC/faculty/ec-santanu",
  },
  {
    imgUrl: "/faculty/bchanda.webp",
    name: "Prof. Bhabatosh Chanda",
    designation: "Professor (Visiting)",
    eduaction: "",
    topicExpertie: [
      "Digital Image Processing",
      "Pattern Recognition",
      "Computer Vision and Image Analysis",
      "Mathematical Morphology",
      "AI techniques in Computer Vision",
    ],
    email: ["chanda@iiitkalyani.ac.in , bchanda57@gmail.com"],
    more: "https://sites.google.com/view/bchanda/home?authuser=0",
  },
  {
    imgUrl: "/faculty/Amit Ranjan Azad.webp",
    name: "Dr. Amit Ranjan Azad",
    designation: "Assistant Professor",
    eduaction: "",
    topicExpertie: ["Microwave Circuits", "Microwave Filters", "Antennas"],
    email: ["amitranjanazad@iiitkalyani.ac.in"],
    more: "Dr_Amit_Ranjan_Azad",
  },
  {
    imgUrl: "/faculty/al.webp",
    name: "Dr. Anirban Lakshman",
    designation: "Assistant Professor",
    eduaction: "",
    topicExpertie: ["Mathematical Modeling", "Elastodynamics"],
    email: ["anirban@iiitkalyani.ac.in"],
    more: "Dr_Anirban_Lakshman",
  },
  {
    imgUrl: "/faculty/bb.webp",
    name: "Dr. Bhaskar Biswas",
    designation: "Assistant Professor",
    eduaction: "",
    topicExpertie: ["Coding Theory", "Cryptology"],
    email: ["bhaskar@iiitkalyani.ac.in"],
    more: "Dr_Bhaskar_Biswas",
  },
  {
    imgUrl: "/faculty/bapi.webp",
    name: "Dr. Bapi Kar",
    designation: "Assistant Professor (On Contract)",
    eduaction: "",
    topicExpertie: [
      "SVLSI EDA (Physical Design Automation)",
      "ML approaches in VLSI Physical Design Automation",
      "Low Power IC Design for ML HW Accelerators",
    ],
    email: ["bapik@iiitkalyani.ac.in"],
    more: "Dr_Bapi_Kar",
  },
  {
    imgUrl: "/faculty/dalia.webp",
    name: "Dr. Dalia Nandi (Das)",
    designation: "Assistant Professor",
    eduaction: "",
    topicExpertie: ["Radio Wave Propagation", "5G Communication"],
    email: ["dalia@iiitkalyani.ac.in"],
    more: "Dr_Dalia_Nandi_Das",
  },
  {
    imgUrl: "/faculty/db.webp",
    name: "Dr. Debasish Bera",
    designation: "Assistant Professor",
    eduaction: "",
    topicExpertie: [
      "Coding Theory",
      "Post-Quantum Cryptography",
      "Information Theory",
      "Statistical Analysis of Signal/Data",
      "Wireless Communication and Networks",
    ],
    email: ["debasish@iiitkalyani.ac.in"],
    more: "Dr_Debasish_Bera",
  },
  {
    imgUrl: "/faculty/imon.webp",
    name: "Dr. Imon Mukherjee",
    designation: "Assistant Professor",
    eduaction: "",
    topicExpertie: [
      "Information Security",
      "Computer Vision",
      "Data Analytics",
    ],
    email: ["imon@iiitkalyani.ac.in"],
    more: "Dr_Imon_Mukherjee",
  },
  {
    imgUrl: "/faculty/ob.webp",
    name: "Dr. Oishila Bandyopadhyay",
    designation: "Assistant Professor",
    eduaction: "",
    topicExpertie: [
      "Medical Image Processing",
      "Computer Vision",
      "Digital Geometry",
    ],
    email: ["oishila@iiitkalyani.ac.in"],
    more: "Dr_Oishila_Bandyopadhyay",
  },
  {
    imgUrl: "/faculty/pratik.webp",
    name: "Dr. Pratik Chakraborty",
    designation: "Assistant Professor",
    eduaction: "",
    topicExpertie: ["Communications and Signal Processing"],
    email: ["pratik@iiitkalyani.ac.in"],
    more: "Dr_Pratik_Chakraborty",
  },
  {
    imgUrl: "/faculty/rs.webp",
    name: "Dr. Rinky Sha",
    designation: "Assistant Professor",
    eduaction: "",
    topicExpertie: [
      "Semiconductor device physics",
      "Nano-electronics and Nanotechnology",
      "Flexible electronics",
      "Bio/chemical sensors",
      "Supercapacitors",
      "2D Nanomaterials",
    ],
    email: ["rinky@iiitkalyani.ac.in"],
    more: "Dr_Rinky_Sha",
  },
  {
    imgUrl: "/faculty/sc.webp",
    name: "Dr. Sanjay Chatterji",
    designation: "Assistant Professor",
    eduaction: "",
    topicExpertie: ["Natural Language Processing", "Information Retrieval"],
    email: ["sanjayc@iiitkalyani.ac.in"],
    more: "Dr_Sanjay_Chatterji",
  },
  {
    imgUrl: "/faculty/sp.webp",
    name: "Dr. Sanjoy Pratihar",
    designation: "Assistant Professor",
    eduaction: "",
    topicExpertie: [
      "Computer Vision",
      "Image Understanding",
      "Document Image Processing",
    ],
    email: ["sanjoy@iiitkalyani.ac.in"],
    more: "Dr_Sanjoy_Pratihar",
  },
  {
    imgUrl: "/faculty/skh.webp",
    name: "Dr. SK Hafizul Islam",
    designation: "Assistant Professor",
    eduaction: "",
    topicExpertie: ["Cryptography", "Information Security", "Network Security"],
    email: ["hafi786@iiitkalyani.ac.in"],
    more: "Dr_SK_Hafizul_Islam",
  },
  {
    imgUrl: "/faculty/sudeshna.webp",
    name: "Dr. Sudeshna Mondal",
    designation: "Assistant Professor (On Contract)",
    eduaction: "",
    topicExpertie: [
      "Mathematical Biology Ecological Modelling",
      "Nonlinear Dynamical Systems",
      "Population Dynamics",
    ],
    email: ["sudeshna@iiitkalyani.ac.in"],
    more: "Dr_Sudeshna_Mondal",
  },
  {
    imgUrl: "/faculty/ud.webp",
    name: "Dr. Uma Das",
    designation: "Assistant Professor",
    eduaction: "",
    topicExpertie: ["Upper Atmosphere", "Seismogenic Ionosphere", "Big Data"],
    email: ["uma@iiitkalyani.ac.in"],
    more: "Dr_Uma_Das",
  },
];

export default facultyData;
