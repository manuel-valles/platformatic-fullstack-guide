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
