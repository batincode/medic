# Medic

This repository contains the frontend for the Medic device management system.

## Frontend

The React application lives under `frontend/` and follows a clean architecture folder structure:

```
frontend/
  src/
    application/    # application services and context
    domain/          # domain entities
    presentation/    # UI components, pages, routes
```

To run the development server:

```bash
cd frontend
npm install
npm run dev
```

The list of runtime and development dependencies can be found in
`frontend/requirements.txt`. It enumerates the npm packages and versions
used by the project; running `npm install` inside `frontend/` will install
all of them automatically. The project targets Node.js 18 or higher.

Current UI features include:

- Login screen with role selection (Admin, Technician, Warehouse, Staff)
- Role-aware sidebar navigation
- Placeholder pages for assignments, maintenance schedule, stock transactions
- QR code scanner to identify devices

