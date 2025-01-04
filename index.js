const express = require('express');
const path = require('path');
const apiRoutes = require('./api/routes');

const app = express();
const PORT = process.env.PORT || 3000;

// zawartość folderu "website" dostępna publicznie (zasób statyczny w ExpressJS)
// 127.0.0.1:3000/index.html,
// 127.0.0.1:3000/css/style.css itp itd
app.use(express.static(path.join(__dirname, 'website')));

// endpointy API
app.use('/api', apiRoutes);

// otwarcie się, gdy nie w trybie testowania
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

module.exports = app;