const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/", async (req, res) => {
    const { firstName, lastName, phone, message, email, inquiryType } = req.body;

    if (!firstName || !lastName || !phone || !message || !email || !inquiryType) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,  // use your Gmail here
            to: "fatima68.05.07@gmail.com",
            subject: "New Contact Form Submission",
            text: `
New inquiry received:

Name: ${firstName} ${lastName}
Phone: ${phone}
Email: ${email}
Inquiry Type: ${inquiryType}
Message:
${message}
    `,
            replyTo: email,  // user email for replies
        });

        res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Failed to send email", error: error.message });
    }


});

module.exports = router;
