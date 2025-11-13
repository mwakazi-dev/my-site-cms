/**
 * Strapi Content Seeding Script
 *
 * This script will add default content (experiences and projects) to your local Strapi
 *
 * Prerequisites:
 * 1. Strapi must be running locally (npm run develop)
 * 2. You must have created the content types first (Experience, Project, Contact-Message)
 * 3. Public permissions must be enabled for creating entries
 *
 * Usage: node seed-data.js
 */

const STRAPI_URL = "http://localhost:1337";

// Default Experience Data
const experiences = [
  {
    company: "CIO Africa by dx5",
    role: "Fullstack Engineer",
    description:
      "Leading development of enterprise-level content management systems and digital platforms. Working with Next.js, React, Node.js, and cloud infrastructure to build scalable solutions for Africa's leading technology publication.",
    startDate: "2024-06-01",
    endDate: null,
    current: true,
    website: "https://cioafrica.co/",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "AWS",
    ],
    location: "Remote",
  },
  {
    company: "Powered by People",
    role: "Senior Frontend Engineer",
    description:
      "Built and maintained responsive e-commerce platforms and B2B marketplaces. Implemented modern UI/UX patterns and optimized performance. Collaborated with product teams to deliver features that improved user engagement.",
    startDate: "2023-04-01",
    endDate: "2024-04-01",
    current: false,
    website: "https://poweredbypeople.com/",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
    location: "Remote",
  },
  {
    company: "MjengoSmart",
    role: "Frontend Engineer",
    description:
      "Developed construction management web applications with focus on mobile responsiveness and user experience. Collaborated with cross-functional teams to deliver features on schedule.",
    startDate: "2020-04-01",
    endDate: "2021-03-01",
    current: false,
    website: "https://www.mjengosmart.com/",
    technologies: ["React", "JavaScript", "Material-UI", "REST APIs"],
    location: "Nairobi, Kenya",
  },
];

// Default Project Data
const projects = [
  {
    title: "CIO Africa Platform",
    description:
      "Enterprise content management and publishing platform for Africa's leading technology publication. Features include real-time content editing, multi-region support, and advanced analytics dashboard.",
    url: "https://cioafrica.co/",
    featured: true,
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    category: "Web Platform",
  },
  {
    title: "Powered by People",
    description:
      "B2B e-commerce platform connecting sustainable brands with retailers. Includes inventory management, order processing, and supplier onboarding systems. Built for scale and performance.",
    url: "https://poweredbypeople.com/",
    featured: true,
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Shopify API",
    ],
    category: "E-commerce",
  },
  {
    title: "Virtual Assets Chamber",
    description:
      "Professional website for Africa's leading virtual assets advocacy organization. Features event management, membership portals, and resource libraries. Focus on modern design and user experience.",
    url: "https://www.virtualassetchamber.com/",
    featured: true,
    technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
    category: "Corporate Website",
  },
  {
    title: "DHA Kenya",
    description:
      "Government digital platform for healthcare administration. Includes patient registration, appointment scheduling, and healthcare provider management. Built with security and accessibility in mind.",
    url: "https://dha.go.ke/",
    featured: true,
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    category: "Government Portal",
  },
  {
    title: "MjengoSmart",
    description:
      "Construction management platform streamlining project workflows, resource allocation, and team collaboration for construction projects. Designed for ease of use and mobile access.",
    url: "https://www.mjengosmart.com/",
    featured: false,
    technologies: ["React", "Material-UI", "REST APIs"],
    category: "Project Management",
  },
];

async function createEntry(collectionType, data) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/${collectionType}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(
        `Failed to create ${collectionType}: ${response.status} - ${error}`
      );
    }

    const result = await response.json();
    console.log(`✅ Created ${collectionType}:`, data.company || data.title);
    return result;
  } catch (error) {
    console.error(`❌ Error creating ${collectionType}:`, error.message);
    return null;
  }
}

async function seedData() {
  console.log("🌱 Starting data seeding...\n");

  // Check if Strapi is running
  try {
    const response = await fetch(`${STRAPI_URL}/_health`);
    if (!response.ok) {
      throw new Error("Strapi is not responding");
    }
    console.log("✅ Strapi is running\n");
  } catch (error) {
    console.error(
      "❌ Error: Strapi is not running or not accessible at",
      STRAPI_URL
    );
    console.error("   Please start Strapi first: npm run develop\n");
    process.exit(1);
  }

  // Seed Experiences
  console.log("📝 Creating experiences...");
  for (const experience of experiences) {
    await createEntry("experiences", experience);
  }
  console.log("");

  // Seed Projects
  console.log("🎨 Creating projects...");
  for (const project of projects) {
    await createEntry("projects", project);
  }
  console.log("");

  console.log("✅ Seeding complete!\n");
  console.log("📊 Summary:");
  console.log(`   - ${experiences.length} experiences created`);
  console.log(`   - ${projects.length} projects created\n`);
  console.log("🔗 View in Strapi:");
  console.log(`   - Admin: ${STRAPI_URL}/admin/content-manager`);
  console.log(`   - Experiences API: ${STRAPI_URL}/api/experiences`);
  console.log(`   - Projects API: ${STRAPI_URL}/api/projects\n`);
  console.log("⚠️  Remember to PUBLISH the entries in the Strapi admin panel!");
}

// Run the seeding
seedData().catch(console.error);
