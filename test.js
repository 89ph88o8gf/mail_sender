const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/ok", async (req, res) => {

    await sendEmail();

    res.send("OK");
});

async function sendEmail() {

    const response = await fetch(
        "https://api.brevo.com/v3/smtp/email",
        {
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
        }
    );

    console.log("BREVO STATUS:", response.status);

    return response.status === 201;
}

app.listen(PORT, () => {
    console.log(`Server radi na portu ${PORT}`);
});
