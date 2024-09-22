const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const SendMail = require('./mail.js');

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; font-src 'self' https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap;"); 
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});