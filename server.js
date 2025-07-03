const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Basic API to test panel
app.get('/api/status', (req, res) => {
  res.json({ status: 'Panel is up!', time: new Date() });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
