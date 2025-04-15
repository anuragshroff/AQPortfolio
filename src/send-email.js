const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// POST endpoint to handle contact form submission
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sendwebmaile@gmail.com",        // Replace with your Gmail address
      pass: "cpynjudlpvgtugmu",          // Use a Gmail App Password (not your Gmail password)
    },
  });

  // Email configuration
  const mailOptions = {
    from: email,
    to: "devanuragshroff@gmail.com",            // Where you want to receive the message
    subject: `New message from ${name}`,
    text: `You got a message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email", error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
