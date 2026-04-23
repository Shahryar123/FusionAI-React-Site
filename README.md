# Fusion AI

**One Platform. Infinite Growth.**

Fusion AI is an end-to-end marketing and sales platform that unifies email/WhatsApp campaign management with CRM pipeline intelligence. Built as a modern React SPA, it showcases two integrated products: **MailFusion** and **SalesFusion**.

---

## Products

### MailFusion
Smart inbox sync, CSV data transformation, campaign builder, template studio, WhatsApp marketing, and analytics dashboards.

### SalesFusion
Kanban CRM pipeline, AI-powered lead scoring, activity tracking, smart reminders, team RBAC, and revenue forecasting.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Animation | GSAP 3 |
| Carousel | Swiper 12 |
| Styling | CSS (component-scoped) |
| Containerization | Docker + Nginx |
| Runtime | Node.js 20 |

---

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

App runs at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## Docker Setup

### Build & Run

```bash
# Build image
docker build -t fusion-ai:latest .

# Run in foreground
docker run -p 8080:80 --name fusion-ai fusion-ai:latest

# Run in background
docker run -d -p 8080:80 --name fusion-ai fusion-ai:latest
```

App available at `http://localhost:8080`

### Container Management

```bash
# View running containers
docker ps

# Stop container
docker stop fusion-ai

# View logs
docker logs fusion-ai

# Remove container
docker rm -f fusion-ai
```

### Image Management

```bash
docker images fusion-ai
docker rmi fusion-ai:latest
```

---

## Project Structure

```
fusion-ai/
├── src/
│   ├── App.jsx              # Root component, scroll reveal orchestration
│   ├── main.jsx             # React entry point
│   └── components/
│       ├── Navbar.jsx       # Responsive header with mobile menu
│       ├── Hero.jsx         # Animated canvas particles + dashboard mockup
│       ├── Products.jsx     # MailFusion & SalesFusion feature showcase
│       ├── Pricing.jsx      # 3-tier pricing with monthly/yearly toggle
│       ├── Testimonials.jsx # Swiper carousel
│       ├── HowItWorks.jsx
│       ├── Stats.jsx
│       ├── FAQ.jsx
│       ├── CTA.jsx
│       └── Footer.jsx
├── Dockerfile               # Multi-stage: Node build → Nginx serve
├── nginx.conf               # SPA routing + asset caching
└── vite.config.js
```

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## Cloud / Infrastructure (Optional)

### Azure CLI

```bash
az login
az account show
```

### Terraform

```bash
# Install via Chocolatey (Windows)
choco install terraform

terraform --version
```

---

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Node.js 20+](https://nodejs.org)
- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) *(optional)*
- [Terraform](https://developer.hashicorp.com/terraform/downloads) *(optional)*
