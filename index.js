const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema'); 

const app = express();
const PORT = process.env.PORT || 3005;

app.use('/', graphqlHTTP({ 
  schema, 
  graphiql: true
}));

app.listen(PORT, (err) => {
  err ? console.log(error) : console.log('Server started...');
});
