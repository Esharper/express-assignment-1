import express from "express"; // Use import if your package.json has "type": "module"

const app = express(); // Initialize the app

app.get("/", (req, res) => {
    res.send("Welcome to the Express Server!");
});

app.get("/about", (req, res) => {
    res.send("This is the about page.");
});

app.post("/data", (req, res) => {
    res.type("json");
    res.send(`{
        "name": "Elgin",
        "age": 9
    }`);
});

app.listen(3000, () => {
    console.log("Express server initialized on port 3000");
});
