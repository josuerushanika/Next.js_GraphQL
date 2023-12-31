import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";
import { schema } from "../../graphql/schema";
import { resolvers } from "../../graphql/resolvers";
import { createContext } from "../../graphql/context";

const apolloServer = new ApolloServer({
  schema,
  resolvers,
  context: createContext,
});

// Ensure that apolloServer.start() is called once
const startServer = apolloServer.start();

const cors = Cors(); // Apply Cors middleware here

export default cors(async function (req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;

  if (req.method === "OPTIONS") {
    res.end();
    return;
  }

  return apolloServer.createHandler({ path: "/api/graphql" })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
