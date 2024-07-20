const express = require('express');
const bodyParser = require('body-parser');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use('/notifications', notificationRoutes);

app.listen(port, () => {
  console.log(`Notifications Microservice running on port ${port}`);
});
