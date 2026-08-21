const Brevo = require("@getbrevo/brevo");

const apiInstance = new Brevo.TransactionalEmailsApi();

apiInstance.authentications.apiKey.apiKey =
    "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";

const sendSmtpEmail = new Brevo.SendSmtpEmail();

sendSmtpEmail.subject = "Test email";
sendSmtpEmail.textContent = "Zdravo! Ovo je test poruka preko Brevo API-ja.";


sendSmtpEmail.sender = {
    name: "saferchoice",
    email: "mihajlovicpavle702@gmail.com"
};

sendSmtpEmail.to = [
    {
        email: "gvozdenovicmihajlo772@gmail.com"
    }
];

apiInstance.sendTransacEmail(sendSmtpEmail)
    .then(() => {
        console.log("EMAIL POSLAT!");
    })
    .catch((error) => {
        console.error("GRESKA:", error);
    });
