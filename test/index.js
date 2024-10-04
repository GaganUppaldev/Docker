const express = require('express');
const app = express();
const port = 3000;

// Set up a simple route
app.get('/', (req, res) => {
  res.send('On the way to Pipelines CI and CD ');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
