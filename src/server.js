require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";

const PORT = process.env.PORT || 3000;

const server = new GraphQLServer({ schema });

server.start({ port: PORT }, () =>
  console.log(`http://localhost:${PORT} 열림`)
);
