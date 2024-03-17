const cors = require("cors");
const express = require("express");
const app = express();

// Allow requests from a specific origin (e.g., http://localhost:3000)
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,  // Enable credentials (cookies, authorization headers, etc.)
}));

// ... Rest of your Express server setup

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
