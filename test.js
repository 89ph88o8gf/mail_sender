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
        console.log("POKUSAVAM DA POSALJEM EMAIL...");

        const response = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "api-key": process.env.BREVO_API_KEY,
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

        console.log("BREVO STATUS:", response.status);

        const data = await response.text();

        console.log("BREVO ODGOVOR:", data);

    } catch (error) {
        console.error("BREVO ERROR:", error);
    }
}
    } catch (error) {
        console.error("GREŠKA:", error);
    }
}
