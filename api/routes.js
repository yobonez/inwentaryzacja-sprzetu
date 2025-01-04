const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
    res.json({ message: 'Hello from API!' });
});

// router.get('/data', (req, res) => {
    // i tu na przykład odpytujemy se postgresa i potem zwracamy użytkownikowi końcowemu rzeczy czy coś
//     res.json({ users: ['Alice', 'Bob', 'Charlie'] });
// });

module.exports = router;