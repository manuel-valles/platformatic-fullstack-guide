# Fullstack Guide with Platformatic Services

This guide will help you setup and run your first full-stack Platformatic app (a movie quotes app to add, like and delete quotes from popular movies).

## 1. Install Platformatic Watt

- `npx wattpm@latest init`
- `npm i`

## 2. Add Platformatic DB

- `npm create platformatic@latest`
  ![Config DB](./images/plaformatic-db.png)
- `npm run dev`. This will automatically serve REST and GraphQL interfaces for your SQL database

## 3. Update DB

- Add a ![migration script](./web/movies-api/migrations/002.do.sql) to include the `quotes` table, and
  the property `likes`
- Apply schema migrations (from the path `./web/movies-api/migrations`): `npx platformatic db migrations apply`

> _NOTE_: You will need to install the package `fluent-json-schema` in the directory `web/movies-api/`: `npm i fluent-json-schema`

## 4. Add Composer Service

[Platformatic Composer](https://platformatic.dev/docs/next/composer/overview) is designed to automatically integrate microservices into one ecosystem, providing a single public API for more efficient management and deployment.

- `npx create-platformatic`
- ![Composer Config](./images/platformatic-composer.png)

## 5. Add a React App

- `cd web`
- `npm create vite@5 frontend -- --template react`
- `cd frontend`
- `npm i`
- `npm run dev`

> _NOTE_: There is an issue with the latest versions. Meanwhile this is sorted out by Platformatic team, you can use Vite v5

## 6. Generate a Platformatic Frontend Client

To get a more efficient communication between your frontend and Platformatic DB and composer service,
we need to generate a [Platformatic frontend client](https://docs.platformatic.dev/docs/client/frontend):
`npx platformatic client --frontend http://0.0.0.0:3042 --name next-client web/frontend/src`
.
