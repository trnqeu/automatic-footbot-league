# Automatic Footbot League (Project Pitch)

**Automatic Footbot League** is an autonomous "Football God Game" where the user takes the role of a pure observer. The system simulates an entire football ecosystem that evolves over time without direct human intervention.

## ⚽ Project Vision
The game world is composed of a multi-tiered league system (Promotion/Relegation) with realistic players who age, improve, decline, and eventually retire, being replaced by new young prospects (Regens).

## 🛠️ Tech Stack
The project uses a modern, scalable, and "API-centric" architecture, fully containerized:

### Backend (The Engine & API)
- **Runtime:** Node.js (TypeScript)
- **Framework:** Express.js
- **ORM:** Prisma (PostgreSQL)
- **Documentation:** Swagger UI (OpenAPI 3.0)
- **Core Logic:** Tick-based Match Engine (a match event is generated every 5 seconds).

### Frontend (The Observer Dashboard)
- **Framework:** React.js (TypeScript)
- **Tooling:** Vite
- **Communication:** Exclusive consumption of documented REST APIs.

### Infrastructure & Database
- **Database:** PostgreSQL 15 (managed via Docker locally, Hetzner VPS in production).
- **Containerization:** Docker & Docker Compose for identical development and production environments.
- **Environment:** Centralized management via `.env` file.

## ⚙️ Core Mechanics
### 1. Step-by-Step Match Engine
- Real-time simulation with events calculated every 5 seconds (Passes, Shots, Goals, Fouls).
- Dynamic performance ratings (4.0 - 10.0 scale) fluctuating during the match based on actions.

### 2. Manager AI (Budget & Need)
- Teams act as autonomous agents.
- Roster analysis to identify gaps (e.g., fewer than 2 goalkeepers) and budget usage for targeted signings.

### 3. Lifecycle (Aging & Regens)
- Players age by 1 year every season.
- Physical and technical decline after age 32.
- Automatic generation of young talents to maintain a constant player pool.

## 📂 Project Structure
```text
automatic-footbot-league/
├── backend/            # API, Match Engine, and Business Logic
├── frontend/           # User Interface (Observer Dashboard)
├── docker-compose.yaml # Service Orchestrator (App, API, DB)
└── .env                # Global Configuration Variables
```