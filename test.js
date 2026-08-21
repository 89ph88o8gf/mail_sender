const http = require("http");
const Brevo = require("@getbrevo/brevo");

const port = process.env.PORT || 3000;

// LIVE SERVER
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Server radi!");
});

server.listen(port, "0.0.0.0", () => {
    console.log("SERVER RADI NA PORTU " + port);

    sendEmail();
});

async function sendEmail() {
    try {
        const apiInstance = new Brevo.TransactionalEmailsApi();

        apiInstance.authentications.apiKey.apiKey =
            "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";

        const email = new Brevo.SendSmtpEmail();

        email.subject = "Test email";

        email.textContent =
            "Zdravo! Ovo je test poruka preko Brevo API-ja.";

        email.sender = {
            name: "saferchoice",
            email: "mihajlovicpavle702@gmail.com"
        };

        email.to = [
            {
                email: "gvozdenovicmihajlo772@gmail.com"
            }
        ];

        const result =
            await apiInstance.sendTransacEmail(email);

        console.log("EMAIL POSLAT!");
        console.log(result);

    } catch (error) {
        console.error("BREVO GRESKA:");
        console.error(error);
    }
}
