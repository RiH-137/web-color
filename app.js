const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route to render the main page
app.get('/', (req, res) => {
    res.render('index', { htmlCode: '', cssCode: '', jsCode: '' });
});

// Route to handle form submission
app.post('/compile', (req, res) => {
    const { htmlCode, cssCode, jsCode } = req.body;

    // Render the page with the submitted code
    res.render('index', { htmlCode, cssCode, jsCode });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
