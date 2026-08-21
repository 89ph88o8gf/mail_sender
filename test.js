const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
        user: "b64861001@smtp-brevo.com",
        pass: "bskbQFr1hwpWi0w"
    }
});

transporter.sendMail({
    from: "mihajlovicpavle702@gmail.com",
    to: "gvozdenovicmihajlo772@gmail.com",
    subject: "Test",
    text: "Ovo je test email preko Brevo-a."
})
.then(() => {
    console.log("EMAIL POSLAT!");
})
.catch(error => {
    console.error("GRESKA:", error);
});
