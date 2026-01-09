import 'dotenv/config'
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  typedSql: {
    path: "prisma/sql"
  },
  datasource: {
    url: env("DATABASE_URL")
  }
});
