import { ApolloServer } from "apollo-server";
import { typeDefs } from "../../graphql/schema";
import { resolvers } from "../../graphql/resolvers";
import Cors from 'micro-cors';


const apolloServer = new ApolloServer({ typeDefs, resolvers});

const startServer = apolloServer.start();

export default Cors( async function handler(req, res) {
    await startServer;

    await apolloServer.createHandler ({
        path: '/api/graphql',
    }) (req, res); 
});

export const config = {
    api: {
        bodyParser: false,
    }
}
