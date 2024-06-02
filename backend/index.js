const express = require('express')

const PORT = 3001

const app = express()

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`)
})

app.get('/api', (req, res) => {
    res.json({
        message: "hello from backend"
    })
})

// const SteamAuth = require("node-steam-openid")

// const steam = new SteamAuth({
//     realm: "http://localhost:3001",
//     returnUrl: "http://localhost:5173",
//     apiKey: "D6CF074C044036770E87BDFA12A5EF46"
//     }
// )

// app.get("/auth/steam", async (req, res) => {
//     const redirectUrl = await steam.getRedirectUrl();
//     return res.redirect(redirectUrl);
//   });