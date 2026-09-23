# ERPForge AI

ERPForge AI converts natural-language business requirements into configurable ERP systems using AI. The MVP uses a safe, metadata-driven ERP engine: AI produces a validated blueprint and the platform renders modules, workflows, permissions, and operating views from that blueprint.

## Features

- Natural-language ERP generation
- AI requirement analysis
- Dynamic ERP blueprint
- AI recommendations
- Dynamic modules
- Role-based permissions
- Workflow generation
- Multi-tenant architecture foundation
- AI ERP Copilot architecture
- Demo ERP

## Tech stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- PostgreSQL
- Prisma
- Zod
- OpenAI-ready provider boundary

## Getting started

```bash
git clone <repository-url>
cd erpforge-ai
npm install
```

Create `.env.local` from `.env.example`. `DATABASE_URL` is only required when enabling Prisma-backed persistence; the demo AI path runs without external services.

```bash
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Architecture

```text
Natural Language
       ↓
AI Requirement Analysis
       ↓
ERP Blueprint
       ↓
Recommendations
       ↓
Validated Metadata
       ↓
ERP Engine
       ↓
Dynamic ERP
```

`app/api/ai/analyze` is the controlled AI boundary. It validates input and blueprint output with Zod; it never executes generated SQL. `prisma/schema.prisma` defines the fixed multi-tenant platform envelope, while generated entity data is stored as controlled metadata.

## Development notes

The deterministic demo analyzer is enabled by default. A production AI provider can be added behind the existing service boundary without scattering model calls across the application.

As of the MVP validation, `npm audit` reports three dependency-tree vulnerabilities. They have not been force-upgraded to avoid introducing breaking dependency changes immediately before the initial release.
