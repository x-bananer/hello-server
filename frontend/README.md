# Frontend

Frontend is a React application built with Vite.

## Requirements

- Node.js (version from `.nvmrc`)
- npm
- nvm

## Node Version

This project uses the Node.js version from `.nvmrc`.

```bash
nvm use
```

## Environment Variables

Create environment files in `frontend/` using example file:

- `.env.development` when running `npm run dev`
- `.env.production` when running `npm run build`

Vite automatically loads the environment file based on the current mode.

## Local Run

```bash
nvm use # select node version
npm install # install deps
npm run dev # start front in dev mode
```

Frontend will be available at `http://localhost:5173`.

## Production Build

```bash
nvm use # select node version
npm install # install deps
npm run build # build static files fro prod, bundle will be created in `dist/`
npm run preview # preview the built files locally if needed
```
