const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const SendMail = require('./mail.js');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'; font-src 'self' https://fonts.gstatic.com; style-src 'self' https://fonts.googleapis.com;");
  next();
});


app.post('/submit-form', (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log(name, email, phone);
  
 
  
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  SendMail(name, email, phone, message);
 
  // Simulate form submission success
  res.status(200).json({ success: 'Form submitted successfully!' });
});
app.get('/', (req, res) => {
  res.send("");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});