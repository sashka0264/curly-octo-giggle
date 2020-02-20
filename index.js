const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema'); 

const app = express();
const PORT = process.env.PORT || 3005;

app.get('/', (req, res) => {
  res.end(`
    <div>Hello</div>
  `)
})

app.use('/graphql', graphqlHTTP({ 
  schema, 
  graphiql: true
}));

app.listen(PORT, (err) => {
  err ? console.log(error) : console.log('Server started...');
});
