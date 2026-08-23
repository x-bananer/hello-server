# Backend

Backend is a small Express API that returns a demo message from the `/api/message` endpoint.

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

Create environment files in `backend/`. Use example file. The server loads environment variables from:

- `.env.development` when running `npm run dev`
- `.env.production` when running `npm start`

## Local Run

```bash
nvm use # select node version
npm install # install deps
npm run dev # start back in dev mode
```

The API will be available at: `http://localhost:3000/api`

## Production Run

```bash
nvm use # select node version
npm install # install deps
npm start # start back in prod mode
```
