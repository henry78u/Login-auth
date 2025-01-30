/* 
const express = require('express');
const path = require('path');
const bcrytp = require('bcrypt');
const { render } = require('ejs');

const app = express();
// view engine

app.set("view engine", 'ejs');

app.get('/', (req, res) => {
    res/render("login");
});

app.get("/signup", (req, res) => {
    res/render("signup");
})



const port = 5000
app.listen(port, () => {
    console.log(`server running on port: ${port}}`)
})
*/

const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt'); // Fix typo: `bcrytp` → `bcrypt`

const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get('/', (req, res) => {
    res.render("login"); // Fix: `res/render` → `res.render"
});

app.get("/signup", (req, res) => {
    res.render("signup"); // Fix: `res/render` → `res.render`
});

// Start the server
const port = 5000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
