const express = require('express');
const bodyParser = require('body-parser');
const projectRoutes = require('./routes/projectRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/projects', projectRoutes);

app.listen(port, () => {
  console.log(`Project Management Microservice running on port ${port}`);
});
