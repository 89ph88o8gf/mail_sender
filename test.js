const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
        user: "TVOJ_BREVO_LOGIN",
        pass: "TVOJ_BREVO_SMTP_KEY"
    }
});

transporter.sendMail({
    from: "TVOJA_VERIFIKOVANA_EMAIL",
    to: "TVOJ_TEST_EMAIL",
    subject: "Test",
    text: "Ovo je test email preko Brevo-a."
})
.then(() => {
    console.log("EMAIL POSLAT!");
})
.catch(error => {
    console.error("GRESKA:", error);
});
