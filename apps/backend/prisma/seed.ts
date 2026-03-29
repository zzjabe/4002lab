import "dotenv/config";
import { prisma } from "../src/api/v1/db/prisma";

async function main() {
  const departments = [
    { id: "dep-1", name: "Administration" },
    { id: "dep-2", name: "Audit" },
    { id: "dep-3", name: "Banking Operations" },
    { id: "dep-4", name: "Communications" },
    { id: "dep-5", name: "Corporate Services" },
    { id: "dep-6", name: "Facilities" },
    { id: "dep-7", name: "Financial Services" },
    { id: "dep-8", name: "Human Resources" },
    { id: "dep-9", name: "Information Technology" },
    { id: "dep-10", name: "IT Technician" },
  ];

  await prisma.department.createMany({
    data: departments,
    skipDuplicates: true,
  });

  const employees = [
    {
      id: "emp-1",
      firstName: "Zoë",
      lastName: "Robins",
      departmentId: "dep-1",
    },
    {
      id: "emp-2",
      firstName: "Madeleine",
      lastName: "Madden",
      departmentId: "dep-1",
    },

    {
      id: "emp-3",
      firstName: "Josha",
      lastName: "Sadowski",
      departmentId: "dep-2",
    },
    {
      id: "emp-4",
      firstName: "Kate",
      lastName: "Fleetwood",
      departmentId: "dep-2",
    },

    {
      id: "emp-5",
      firstName: "Priyanka",
      lastName: "Bose",
      departmentId: "dep-3",
    },
    {
      id: "emp-6",
      firstName: "Hammed",
      lastName: "Animashaun",
      departmentId: "dep-3",
    },
    {
      id: "emp-7",
      firstName: "Álvaro",
      lastName: "Morte",
      departmentId: "dep-3",
    },
    {
      id: "emp-8",
      firstName: "Taylor",
      lastName: "Napier",
      departmentId: "dep-3",
    },
    {
      id: "emp-9",
      firstName: "Alan",
      lastName: "Simmonds",
      departmentId: "dep-3",
    },

    {
      id: "emp-10",
      firstName: "Gil",
      lastName: "Cardinal",
      departmentId: "dep-4",
    },
    {
      id: "emp-11",
      firstName: "Richard J.",
      lastName: "Lewis",
      departmentId: "dep-4",
    },
    {
      id: "emp-12",
      firstName: "Randy",
      lastName: "Bradshaw",
      departmentId: "dep-4",
    },

    {
      id: "emp-13",
      firstName: "Tracey",
      lastName: "Cook",
      departmentId: "dep-5",
    },
    {
      id: "emp-14",
      firstName: "Lubomir",
      lastName: "Mykytiuk",
      departmentId: "dep-5",
    },
    {
      id: "emp-15",
      firstName: "Dakota",
      lastName: "House",
      departmentId: "dep-5",
    },

    {
      id: "emp-16",
      firstName: "Lori Lea",
      lastName: "Okemah",
      departmentId: "dep-6",
    },
    {
      id: "emp-17",
      firstName: "Renae",
      lastName: "Morrisseau",
      departmentId: "dep-6",
    },
    {
      id: "emp-18",
      firstName: "Rick",
      lastName: "Belcourt",
      departmentId: "dep-6",
    },
    {
      id: "emp-19",
      firstName: "Selina",
      lastName: "Hanusa",
      departmentId: "dep-6",
    },

    {
      id: "emp-20",
      firstName: "Buffy",
      lastName: "Gaudry",
      departmentId: "dep-7",
    },
    {
      id: "emp-21",
      firstName: "Shaneen Ann",
      lastName: "Fox",
      departmentId: "dep-7",
    },
    {
      id: "emp-22",
      firstName: "Allan",
      lastName: "Little",
      departmentId: "dep-7",
    },
    {
      id: "emp-23",
      firstName: "Danny",
      lastName: "Rabbit",
      departmentId: "dep-7",
    },

    {
      id: "emp-24",
      firstName: "Jesse Ed",
      lastName: "Azure",
      departmentId: "dep-8",
    },
    {
      id: "emp-25",
      firstName: "Stacy",
      lastName: "Da Silva",
      departmentId: "dep-8",
    },
    {
      id: "emp-26",
      firstName: "Vladimír",
      lastName: "Valenta",
      departmentId: "dep-8",
    },
    {
      id: "emp-27",
      firstName: "Samone",
      lastName: "Sayeses-Whitney",
      departmentId: "dep-8",
    },
    {
      id: "emp-28",
      firstName: "Paul",
      lastName: "Coeur",
      departmentId: "dep-8",
    },

    {
      id: "emp-29",
      firstName: "Graham",
      lastName: "Greene",
      departmentId: "dep-9",
    },
    {
      id: "emp-30",
      firstName: "Sandika",
      lastName: "Evergreen",
      departmentId: "dep-9",
    },
    {
      id: "emp-31",
      firstName: "Jennifer",
      lastName: "Rodriguez",
      departmentId: "dep-9",
    },

    {
      id: "emp-32",
      firstName: "Aiyana",
      lastName: "Littlebear",
      departmentId: "dep-10",
    },
    {
      id: "emp-33",
      firstName: "Inara",
      lastName: "Thunderbird",
      departmentId: "dep-10",
    },
    {
      id: "emp-34",
      firstName: "Kaya",
      lastName: "Runningbrook",
      departmentId: "dep-10",
    },
    {
      id: "emp-35",
      firstName: "Elara",
      lastName: "Firehawk",
      departmentId: "dep-10",
    },
    {
      id: "emp-36",
      firstName: "Siona",
      lastName: "Moonflower",
      departmentId: "dep-10",
    },
    {
      id: "emp-37",
      firstName: "Kaiyu",
      lastName: "Greywolf",
      departmentId: "dep-10",
    },
    {
      id: "emp-38",
      firstName: "Ayawamat",
      lastName: "Nightwind",
      departmentId: "dep-10",
    },
    {
      id: "emp-39",
      firstName: "Tala",
      lastName: "Braveheart",
      departmentId: "dep-10",
    },
    {
      id: "emp-40",
      firstName: "Iniko",
      lastName: "Stonebear",
      departmentId: "dep-10",
    },
    {
      id: "emp-41",
      firstName: "Onatah",
      lastName: "Redhawk",
      departmentId: "dep-10",
    },
  ];

  await prisma.employee.createMany({
    data: employees,
    skipDuplicates: true,
  });

  const roles = [
    { id: "r1", title: "CEO / Chair of Board", name: "Jo-Anne Sinclair" },
    { id: "r2", title: "COO / VP Operations", name: "Jackson Smith" },
    { id: "r3", title: "CFO / VP Administration", name: "Susan Thomas" },
    { id: "r4", title: "VP Client Services", name: "Richa Kaur" },
    { id: "r5", title: "CIO", name: "Josee Benjamin" },
    { id: "r6", title: "VP Sales & Marketing", name: "Vincent Grey" },
    {
      id: "r7",
      title: "Director Financial and Audit Services",
      name: "Rupa Kharki",
    },
    { id: "r8", title: "Director Human Resources", name: "Xun Kuang" },
    { id: "r9", title: "Director Legal Services", name: "Stien Pedersen" },
    {
      id: "r10",
      title: "Director Information Technology",
      name: "Sandra Bear",
    },
    {
      id: "r11",
      title: "Director Information Security and CISSO",
      name: "Gus Blue",
    },
    { id: "r12", title: "Director Accounting", name: "Sam Kong" },
    { id: "r13", title: "Director Physical Security", name: "Valentine Smith" },
    { id: "r14", title: "Director Facilities", name: "Mariya Kaperski" },
    {
      id: "r15",
      title: "Manager, Business Continuity and Disaster Recovery",
      name: "Abd al-Hamid Alami",
    },

    { id: "r16", title: "Manager, Internal Audit", name: "Victoria Gray" },
    { id: "r17", title: "Chief Architect", name: "Cheryl Guru" },
    { id: "r18", title: "Manager, Security Architecture", name: "Jean Ngoy" },
    {
      id: "r19",
      title: "Solution Architect, Online Banking",
      name: "Kris Gold",
    },
    { id: "r20", title: "Manager, Application Solutions", name: "Isaac Smith" },

    {
      id: "r21",
      title: "Lead Developer, Online Banking",
      name: "Payton Frost",
    },
    { id: "r22", title: "Manager, Operational Risk", name: "Samantha Nettle" },
    { id: "r23", title: "Manager, Vendor Relations", name: "Yolanda Ferreira" },
    { id: "r24", title: "Manager, Purchasing", name: "Samir Hassan" },
    { id: "r25", title: "Manager, Communications", name: "Yuna Aikawa" },

    {
      id: "r26",
      title: "Manager, Customer Experience and Community Engagement",
      name: "Jonathan Carberry",
    },
    { id: "r27", title: "Manager of Sales", name: "Roland Wei" },
    { id: "r28", title: "Manager, Marketing", name: "Pran Singh" },
    {
      id: "r29",
      title: "Business Analyst, Online Banking",
      name: "Linda Analyst",
    },
    { id: "r30", title: "Manager, Contract Management", name: "Esra Sedge" },

    { id: "r31", title: "Manager, Compliance Management", name: "Pranee Tan" },
    {
      id: "r32",
      title: "Manager IT End User Service Desk",
      name: "Karmen Spruce",
    },
    {
      id: "r33",
      title: "Manager IT End User Computing",
      name: "Haydar Katirci",
    },
    {
      id: "r34",
      title: "Manager IT Telecom and Infrastructure",
      name: "Jill Harkness",
    },
    {
      id: "r35",
      title: "Manager, Data Center and Hosting Services",
      name: "Tim Morrison",
    },

    {
      id: "r36",
      title: "Manager of IT Risk Management",
      name: "Aleksandr Milosevic",
    },
    {
      id: "r37",
      title: "Manager IT, Project Management Office",
      name: "Jim Wingnut",
    },
  ];

  await prisma.role.createMany({
    data: roles,
    skipDuplicates: true,
  });

  console.log("Seed completed");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
