const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("Server radi!");
});

server.listen(PORT, "0.0.0.0", () => {
    console.log("SERVER RADI NA PORTU:", PORT);

    sendEmail();
});

async function sendEmail() {
    try {
        const response = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "api-key": "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",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                sender: {
                    name: "saferchoice",
                    email: "mihajlovicpavle702@gmail.com"
                },
                to: [
                    {
                        email: "gvozdenovicmihajlo772@gmail.com"
                    }
                ],
                subject: "Test email",
                textContent: "Zdravo! Ovo je test poruka preko Brevo API-ja."
            })
        });

        const data = await response.text();

        console.log("BREVO STATUS:", response.status);
        console.log("BREVO ODGOVOR:", data);

    } catch (error) {
        console.error("GREŠKA:", error);
    }
}
