const express = require('express');
const app = express();
const path = require('path');
const route = require('./routes/route');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const upload = require('express-fileupload');
const dotenv = require('dotenv');

dotenv.config({ path: "./config.env" });



// Serve Bootstrap and optional icons from node_modules
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist')));
app.use('/bootstrap-icons', express.static(path.join(__dirname, 'node_modules', 'bootstrap-icons', 'font')));

// Express middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload());
app.use(cookieParser());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'nodedemo'
}));

// EJS setup with layouts
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'partials/layout-vertical');
app.use(expressLayouts);

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', route);

// Error handling
app.use((err, req, res, next) => {
    let error = { ...err };
    if (error.name === 'JsonWebTokenError') {
        err.message = "Please login again";
        err.statusCode = 401;
        return res.status(401).redirect('view/login');
    }
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'errors';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
});

// Start server
const http = require("http").createServer(app);
const PORT = process.env.PORT || 8000;
http.listen(PORT, () => console.log(`Server is listening at http://localhost:${PORT}/`));
