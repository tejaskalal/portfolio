export const personalInfo = {
  name: "Tejas Kalal",
  firstName: "Tejas",
  lastName: "Kalal",
  role: "Full Stack Developer",
  location: "Maharashtra, India",
  email: "tejaskalal@email.com",
  github: "https://github.com/tejaskalal",
  linkedin: "https://linkedin.com/in/tejaskalal",
  resumeUrl: "https://drive.google.com/file/d/1yhf4P-Xj3vUucYc4QooygLFTeG0N4t8j/view?usp=drive_link",
  bio: `I'm a passionate Full Stack Developer from Maharashtra, India, specializing in the
  MERN stack with a growing focus on DevOps and cloud infrastructure. My journey started
  with building web applications and has evolved into deploying distributed AI inference
  systems, GitOps pipelines, and Kubernetes-orchestrated microservices in production.`,
  tagline:
    "I don't just write code.I architect systems that scale.",
  roles: [
    "Full Stack Developer",
    "MERN Stack Engineer",
    "DevOps Engineer",
    "Cloud & AI Builder",
    "Kubernetes Practitioner",
  ],
};

export const stats = [
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "Technologies", value: 20, suffix: "+" },
  { label: "DevOps Tools", value: 8, suffix: "+" },
];

export const skills = [
  {
    category: "Frontend",
    icon: "⬡",
    color: "blue",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion" , "Bootstrap"],
  },
  {
    category: "Backend",
    icon: "⬡",
    color: "purple",
    items: ["Node.js", "Express.js", "Python", "REST APIs"],
  },
  {
    category: "DevOps",
    icon: "⬡",
    color: "green",
    items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "ArgoCD", "Linux" , "Jenkins" , "Ansible"],
  },
  {
    category: "Database",
    icon: "⬡",
    color: "amber",
    items: ["MongoDB", "Redis" , "MySQL"],
  },
  {
    category: "Cloud & Tools",
    icon: "⬡",
    color: "teal",
    items: ["AWS", "GitHub", "Git", "VS Code"],
  },
];

export const projects = [
  {
    id: "01",
    title: "LifeAI — Health Analysis Platform",
    category: "AI Platform",
    description:
      "An AI-powered health analysis platform that provides intelligent health insights using local AI models and user health metrics with a comprehensive scoring system.",
    features: [
      "BMI analysis & hydration tracking",
      "AI-generated health insights",
      "Chatbot support & REST API",
      "Health score dashboard",
      "Sleep tracking integration",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "Ollama Phi", "Bootstrap"],
    gradient: "from-blue-500/10 to-purple-500/10",
    accentColor: "#4f8ef7",
    github: "https://github.com/tejaskalal/LifeAI.git",
    demo: "#",
  },
  {
    id: "02",
    title: "Distributed AI-Inference Platform using III-Engine",
    category: "Infrastructure",
    description:
      "A distributed AI inference platform using the III Engine, deploying RPC-connected workers across private cloud VMs to serve GGUF-based LLM responses through a scalable JSON HTTP API.",
    features: [
      "Multi-VM AI deployment",
      "RPC worker communication",
      "GGUF model serving",
      "Infrastructure automation",
      "Scalable cloud architecture",
    ],
    tech: ["Terraform", "Python", "TypeScript", "Linux", "Docker", "Cloud Infrastructure"],
    gradient: "from-purple-500/10 to-pink-500/10",
    accentColor: "#8b5cf6",
    github: "https://github.com/tejaskalal/Distributed-AI-Inference-Platform-using-III-Engine.git",
    demo: "#",
  },
  {
    id: "03",
    title: "Cloud-Native DevOps Platform for AI-based Log Analytics",
    category: "DevOps",
    description:
      "A DevOps-based distributed log processing system using microservices with Redis queue architecture. Deployed via GitHub Actions, Docker, ArgoCD, and Kubernetes with full monitoring.",
    features: [
      "Redis queue architecture",
      "CI/CD with GitHub Actions",
      "ArgoCD GitOps deployment",
      "Kubernetes + monitoring",
      "Dockerized microservices",
    ],
    tech: ["Docker", "Kubernetes", "Redis", "GitHub Actions", "ArgoCD", "Node.js", "Linux" , "Grafana" , "Prometheus"],
    gradient: "from-green-500/10 to-teal-500/10",
    accentColor: "#06d6a0",
    github: "https://github.com/tejaskalal/log-analytics-app.git",
    demo: "#",
  },
  {
  id: "04",
  title: "Automated CI/CD Pipeline with Security Integration",
  category: "DevOps",
  description:
    "A DevOps-based CI/CD pipeline integrating Jenkins, SonarQube, OWASP Dependency Check, Trivy, and Docker for automated code quality analysis, security scanning, containerization, and deployment workflows.",
  features: [
    "Automated CI/CD workflows",
    "SonarQube code analysis",
    "OWASP dependency scanning",
    "Trivy container security scanning",
    "Dockerized deployment pipeline",
  ],
  tech: [
    "AWS",
    "GitHub",
    "Jenkins",
    "SonarQube",
    "OWASP",
    "Docker",
    "Trivy",
    "Node.js",
  ],
  gradient: "from-cyan-500/10 to-blue-500/10",
  accentColor: "#06b6d4",
  github: "https://github.com/tejaskalal/devops-project-1.git",
  demo: "#",
},,
];

export const timeline = [
  {
    phase: "Phase 1",
    title: "MERN Stack Foundations",
    description:
      "Deep-dived into React, Node.js, Express, and MongoDB. Built full-stack applications with authentication, REST APIs, and responsive UIs. Established core JavaScript and TypeScript skills.",
    tags: ["React", "Node.js", "MongoDB", "JavaScript"],
    color: "blue",
  },
  {
    phase: "Phase 2",
    title: "Backend API Development",
    description:
      "Expanded to scalable backend architecture — RESTful APIs, middleware design, database optimization, Redis caching, and third-party service integrations. Built JeevDan as a capstone.",
    tags: ["Express.js", "REST APIs", "Redis", "Authentication"],
    color: "purple",
  },
  {
    phase: "Phase 3",
    title: "Cloud & DevOps Engineering",
    description:
      "Introduced Docker containerization, AWS cloud services, and Linux system administration. Started thinking about applications as distributed systems requiring infrastructure planning.",
    tags: ["Docker", "AWS", "Linux", "Networking"],
    color: "green",
  },
  {
    phase: "Phase 4",
    title: "Kubernetes & Terraform",
    description:
      "Mastered container orchestration with Kubernetes, infrastructure-as-code with Terraform, and GitOps workflows with ArgoCD. Deployed multi-node clusters and automated infrastructure.",
    tags: ["Kubernetes", "Terraform", "ArgoCD", "Helm"],
    color: "amber",
  },
  {
    phase: "Phase 5",
    title: "AI Deployment Systems",
    description:
      "Built distributed AI inference infrastructure using GGUF models, RPC workers across private cloud VMs, and the III Engine. Integrated AI capabilities into full-stack products.",
    tags: ["AI Inference", "GGUF Models", "RPC", "Python"],
    color: "teal",
  },
  {
    phase: "Now",
    title: "CI/CD & Production Engineering",
    description:
      "Implementing complete CI/CD pipelines with GitHub Actions, ArgoCD GitOps, monitoring stacks, and security best practices. Building production-grade systems end-to-end.",
    tags: ["GitHub Actions", "CI/CD", "Monitoring", "Security"],
    color: "green",
    current: true,
  },
];

export const githubStats = {
  repos: "35+",
  commits: "500+",
  prs: "45+",
  issues: "30+",
  contributions: "350+",
};

export const languages = [
  { name: "JavaScript", pct: 75, color: "#4f8ef7" },
  { name: "TypeScript", pct: 55, color: "#8b5cf6" },
  { name: "Python", pct: 45, color: "#06d6a0" },
  { name: "Shell / HCL", pct: 25, color: "#f59e0b" },
  { name: "YAML / Docker", pct: 35, color: "#e879f9" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];
