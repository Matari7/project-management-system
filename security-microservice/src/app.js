const express = require('express');
const bodyParser = require('body-parser');
const securityRoutes = require('./routes/securityRoutes');

const app = express();
const port = process.env.PORT || 3002;

app.use(bodyParser.json());
app.use('/security', securityRoutes);

app.listen(port, () => {
  console.log(`Security Microservice running on port ${port}`);
});
