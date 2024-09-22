const nodemailer = require("nodemailer");
const config = require("dotenv");

// Load env variables
config.config();
 // Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
});

const SendMail = (name, email, message, phoneNumber) => {
 
 

  // Set up email options
  const mailOptions1 = {
    from: email,
    to: process.env.TO_EMAIL,
    subject: ` New Message from ${name}`,
    text: `



Hi there,

You’ve received a message from ${name}. Here are the details:

Name: ${name}
Email: ${email}
Phone Number: ${phoneNumber}
Message:
"${message}"



`,
  };
  const mailOptions2 = {
    from: email,
    to: email,
    subject: ` Confirmation: Your Message Has Been Received`,
    text: `
Dear ${name},

Thank you for reaching out to us. We’ve successfully received your message and our team will review it shortly.

Rest assured, we will get back to you as soon as possible to assist with your inquiry.

If you need immediate assistance, feel free to reach out to us at 6200463198.

Best regards,
Vishwajeet Kumar
`,
  };

  // Send email
  transporter.sendMail(mailOptions1, (error, info) => {
    if (error) {
      console.log(error);
      // Handle error (e.g., log error or return a response)
    } else {
      console.log('Email sent: ' + info.response);
      // Handle success (e.g., log success or return a response)
    }
  });
  transporter.sendMail(mailOptions2, (error, info) => {
    if (error) {
      console.log(error);
      // Handle error (e.g., log error or return a response)
    } else {
      console.log('Email sent: ' + info.response);
      // Handle success (e.g., log success or return a response)
    }
  });
};


module.exports = SendMail;