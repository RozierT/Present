const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers
}));
app.listen(4000);
console.log(`🚀 Server ready at http://localhost:4000/graphql`);

const { MongoClient } = require('mongodb');

const context = () => MongoClient.connect('mongodb://username:password@localhost:27017/database_name', { useNewUrlParser: true })
  .then(client => client.db('database_name'));

  app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    context
  }));
  