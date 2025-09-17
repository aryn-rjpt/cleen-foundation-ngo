import missionImg from "../../assets/course.jpg"

const coursesData = [
  // --- AI & Data Science ---
  {
    id: 1,
    title: "Introduction to Artificial Intelligence",
    description:
      "Basics of AI including search strategies, logic, reasoning, and intelligent agents.",
    instructor: "Dr. P. Sharma",
    duration: "8 Weeks",
    category: "AI & Data Science",
    image: missionImg,
  },
  {
    id: 2,
    title: "Machine Learning Foundations",
    description:
      "Supervised, unsupervised learning and practical ML applications.",
    instructor: "Dr. A. Iyer",
    duration: "10 Weeks",
    category: "AI & Data Science",
    image: missionImg,
  },
  {
    id: 3,
    title: "Deep Learning",
    description:
      "Neural networks, CNNs, RNNs, and applications in vision and NLP.",
    instructor: "Dr. A. Verma",
    duration: "8 Weeks",
    category: "AI & Data Science",
    image: missionImg,
  },
  {
    id: 4,
    title: "Big Data Analytics",
    description:
      "Hadoop, Spark, and distributed data analytics tools and methods.",
    instructor: "Dr. N. Das",
    duration: "10 Weeks",
    category: "AI & Data Science",
    image: missionImg,
  },
  {
    id: 5,
    title: "Natural Language Processing",
    description:
      "Text processing, sentiment analysis, and machine translation basics.",
    instructor: "Prof. S. Chandra",
    duration: "8 Weeks",
    category: "AI & Data Science",
    image: missionImg,
  },

  // --- Computer Science & Programming ---
  {
    id: 6,
    title: "Data Structures and Algorithms",
    description:
      "In-depth understanding of data structures and algorithmic problem-solving.",
    instructor: "Prof. R. Mehta",
    duration: "12 Weeks",
    category: "Computer Science",
    image: missionImg,
  },
  {
    id: 7,
    title: "Cloud Computing Essentials",
    description:
      "Learn about cloud platforms, virtualization, and distributed systems.",
    instructor: "Dr. S. Banerjee",
    duration: "6 Weeks",
    category: "Computer Science",
    image: missionImg,
  },
  {
    id: 8,
    title: "Programming in Java",
    description:
      "Object-oriented programming concepts and Java application development.",
    instructor: "Prof. K. Gupta",
    duration: "8 Weeks",
    category: "Programming",
    image: missionImg,
  },
  {
    id: 9,
    title: "Introduction to Python",
    description:
      "Python programming from basics to advanced data handling and scripting.",
    instructor: "Dr. R. Nair",
    duration: "6 Weeks",
    category: "Programming",
    image: missionImg,
  },
  {
    id: 10,
    title: "Database Management Systems",
    description:
      "Relational databases, SQL, and transaction management in DBMS.",
    instructor: "Prof. A. Rao",
    duration: "8 Weeks",
    category: "Computer Science",
    image: missionImg,
  },
  {
    id: 11,
    title: "Operating System Fundamentals",
    description:
      "Concepts of OS including process scheduling, memory, and file systems.",
    instructor: "Dr. P. Mukherjee",
    duration: "10 Weeks",
    category: "Computer Science",
    image: missionImg,
  },
  {
    id: 12,
    title: "Compiler Design",
    description:
      "Lexical analysis, parsing, semantic analysis, and code generation.",
    instructor: "Prof. N. Joshi",
    duration: "12 Weeks",
    category: "Computer Science",
    image: missionImg,
  },
  {
    id: 13,
    title: "Computer Networks",
    description:
      "Networking concepts including TCP/IP, routing, and data transmission.",
    instructor: "Prof. B. Rao",
    duration: "8 Weeks",
    category: "Computer Science",
    image: missionImg,
  },
  {
    id: 14,
    title: "Software Engineering",
    description:
      "Software development lifecycle, agile methods, and project management.",
    instructor: "Dr. S. Patel",
    duration: "12 Weeks",
    category: "Computer Science",
    image: missionImg,
  },
  {
    id: 15,
    title: "Cyber Security Basics",
    description:
      "Introduction to cybersecurity, cryptography, and secure systems.",
    instructor: "Prof. V. Singh",
    duration: "6 Weeks",
    category: "Cybersecurity",
    image: missionImg,
  },
  {
    id: 16,
    title: "Blockchain Technology",
    description:
      "Blockchain fundamentals, cryptocurrencies, and smart contracts.",
    instructor: "Dr. M. Kulkarni",
    duration: "8 Weeks",
    category: "Computer Science",
    image: missionImg,
  },
  {
    id: 17,
    title: "Full Stack Web Development",
    description:
      "Frontend and backend development with modern frameworks.",
    instructor: "Prof. R. Srinivasan",
    duration: "12 Weeks",
    category: "Programming",
    image: missionImg,
  },
  {
    id: 18,
    title: "Mobile App Development",
    description:
      "Building Android and iOS apps with cross-platform tools.",
    instructor: "Dr. K. Thomas",
    duration: "8 Weeks",
    category: "Programming",
    image: missionImg,
  },

  // --- Electrical Engineering ---
  {
    id: 19,
    title: "Control Systems",
    description:
      "Study of feedback systems, stability, and industrial applications.",
    instructor: "Dr. A. Chakraborty",
    duration: "12 Weeks",
    category: "Electrical Engineering",
    image: missionImg,
  },
  {
    id: 20,
    title: "Signals and Systems",
    description:
      "Continuous and discrete signals, Fourier transform, and filters.",
    instructor: "Prof. L. Desai",
    duration: "8 Weeks",
    category: "Electrical Engineering",
    image: missionImg,
  },
  {
    id: 21,
    title: "Power Electronics",
    description:
      "Semiconductor devices, converters, and applications in energy systems.",
    instructor: "Dr. H. Singh",
    duration: "12 Weeks",
    category: "Electrical Engineering",
    image: missionImg,
  },
  {
    id: 22,
    title: "Digital Signal Processing",
    description:
      "DSP algorithms, FFT, and real-time applications.",
    instructor: "Prof. C. Varma",
    duration: "10 Weeks",
    category: "Electrical Engineering",
    image: missionImg,
  },
  {
    id: 23,
    title: "Electrical Machines",
    description:
      "Transformers, motors, and generators with performance analysis.",
    instructor: "Dr. B. Roy",
    duration: "12 Weeks",
    category: "Electrical Engineering",
    image: missionImg,
  },
  {
    id: 24,
    title: "Smart Grid Technologies",
    description:
      "Concepts of smart grid, energy management, and automation.",
    instructor: "Prof. J. Dutta",
    duration: "8 Weeks",
    category: "Electrical Engineering",
    image: missionImg,
  },

  // --- Mechanical Engineering ---
  {
    id: 25,
    title: "Engineering Thermodynamics",
    description:
      "Fundamentals of thermodynamic systems and applications.",
    instructor: "Prof. S. Krishnan",
    duration: "12 Weeks",
    category: "Mechanical Engineering",
    image: missionImg,
  },
  {
    id: 26,
    title: "Fluid Mechanics",
    description:
      "Fluid properties, flow analysis, and hydraulic machines.",
    instructor: "Dr. M. Raj",
    duration: "10 Weeks",
    category: "Mechanical Engineering",
    image: missionImg,
  },
  {
    id: 27,
    title: "Heat Transfer",
    description:
      "Conduction, convection, and radiation heat transfer concepts.",
    instructor: "Prof. G. Menon",
    duration: "8 Weeks",
    category: "Mechanical Engineering",
    image: missionImg,
  },
  {
    id: 28,
    title: "Refrigeration and Air Conditioning",
    description:
      "Principles of cooling, HVAC systems, and design.",
    instructor: "Dr. N. Kulkarni",
    duration: "12 Weeks",
    category: "Mechanical Engineering",
    image: missionImg,
  },
  {
    id: 29,
    title: "Automobile Engineering",
    description:
      "Vehicle dynamics, engines, and automotive systems.",
    instructor: "Prof. D. Shetty",
    duration: "8 Weeks",
    category: "Mechanical Engineering",
    image: missionImg,
  },
  {
    id: 30,
    title: "Robotics Engineering",
    description:
      "Design, kinematics, and control of robotic systems.",
    instructor: "Dr. T. Kumar",
    duration: "10 Weeks",
    category: "Mechanical Engineering",
    image: missionImg,
  },

  // --- Civil Engineering ---
  {
    id: 31,
    title: "Structural Analysis",
    description:
      "Study of structures under various load conditions.",
    instructor: "Prof. R. Jain",
    duration: "12 Weeks",
    category: "Civil Engineering",
    image: missionImg,
  },
  {
    id: 32,
    title: "Geotechnical Engineering",
    description:
      "Soil mechanics, foundation design, and earth retaining structures.",
    instructor: "Dr. A. Pillai",
    duration: "10 Weeks",
    category: "Civil Engineering",
    image: missionImg,
  },
  {
    id: 33,
    title: "Transportation Engineering",
    description:
      "Highway design, traffic flow, and pavement engineering.",
    instructor: "Prof. S. Yadav",
    duration: "8 Weeks",
    category: "Civil Engineering",
    image: missionImg,
  },
  {
    id: 34,
    title: "Environmental Engineering",
    description:
      "Water treatment, waste management, and pollution control.",
    instructor: "Dr. V. Kumar",
    duration: "12 Weeks",
    category: "Civil Engineering",
    image: missionImg,
  },
  {
    id: 35,
    title: "Construction Project Management",
    description:
      "Planning, scheduling, and management of construction projects.",
    instructor: "Prof. K. Reddy",
    duration: "8 Weeks",
    category: "Civil Engineering",
    image: missionImg,
  },
  {
    id: 36,
    title: "Hydrology and Water Resources",
    description:
      "Hydrological cycle, rainfall analysis, and irrigation systems.",
    instructor: "Dr. L. Shah",
    duration: "10 Weeks",
    category: "Civil Engineering",
    image: missionImg,
  },

  // --- Management & Humanities ---
  {
    id: 37,
    title: "Principles of Management",
    description:
      "Management functions, leadership, and organizational behavior.",
    instructor: "Prof. A. Sinha",
    duration: "8 Weeks",
    category: "Management",
    image: missionImg,
  },
  {
    id: 38,
    title: "Financial Accounting",
    description:
      "Accounting principles, balance sheets, and financial statements.",
    instructor: "Dr. P. Malhotra",
    duration: "10 Weeks",
    category: "Management",
    image: missionImg,
  },
  {
    id: 39,
    title: "Marketing Management",
    description:
      "Market analysis, branding, and consumer behavior.",
    instructor: "Prof. S. Iqbal",
    duration: "8 Weeks",
    category: "Management",
    image: missionImg,
  },
  {
    id: 40,
    title: "Human Resource Management",
    description:
      "Recruitment, training, and performance management strategies.",
    instructor: "Dr. J. Banerjee",
    duration: "12 Weeks",
    category: "Management",
    image: missionImg,
  },
  {
    id: 41,
    title: "Business Communication",
    description:
      "Professional communication, presentations, and negotiation skills.",
    instructor: "Prof. K. Anand",
    duration: "6 Weeks",
    category: "Management",
    image: missionImg,
  },
  {
    id: 42,
    title: "Entrepreneurship Development",
    description:
      "Startup ecosystem, business models, and funding strategies.",
    instructor: "Dr. N. Patel",
    duration: "10 Weeks",
    category: "Management",
    image: missionImg,
  },

  // --- Humanities & Social Sciences ---
  {
    id: 43,
    title: "Psychology of Learning",
    description:
      "Cognitive development, behavior theories, and motivation.",
    instructor: "Prof. R. Menon",
    duration: "8 Weeks",
    category: "Humanities",
    image: missionImg,
  },
  {
    id: 44,
    title: "Indian Society and Culture",
    description:
      "Understanding Indian traditions, diversity, and social systems.",
    instructor: "Dr. A. Shukla",
    duration: "6 Weeks",
    category: "Humanities",
    image: missionImg,
  },
  {
    id: 45,
    title: "Ethics in Engineering",
    description:
      "Professional ethics, case studies, and corporate responsibility.",
    instructor: "Prof. G. Bhat",
    duration: "8 Weeks",
    category: "Humanities",
    image: missionImg,
  },
  {
    id: 46,
    title: "Technical Writing",
    description:
      "Documentation, reports, and research paper writing skills.",
    instructor: "Dr. C. Nair",
    duration: "6 Weeks",
    category: "Humanities",
    image: missionImg,
  },
  {
    id: 47,
    title: "Economics for Engineers",
    description:
      "Economic principles, cost analysis, and decision-making for engineers.",
    instructor: "Prof. T. Ghosh",
    duration: "10 Weeks",
    category: "Humanities",
    image: missionImg,
  },
  {
    id: 48,
    title: "Environmental Sustainability",
    description:
      "Sustainable development, renewable energy, and conservation practices.",
    instructor: "Dr. V. Pillai",
    duration: "8 Weeks",
    category: "Humanities",
    image: missionImg,
  },
  {
    id: 49,
    title: "Digital Literacy",
    description:
      "Online collaboration, digital safety, and productivity tools.",
    instructor: "Prof. D. Rao",
    duration: "6 Weeks",
    category: "Humanities",
    image: missionImg,
  },
  {
    id: 50,
    title: "Professional Development",
    description:
      "Career planning, soft skills, and workplace effectiveness.",
    instructor: "Dr. S. Kapoor",
    duration: "8 Weeks",
    category: "Humanities",
    image: missionImg,
  },
];

export default coursesData;
