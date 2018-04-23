const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// app.get('/', (req, res) => res.send('Hello World!'))
app.use('/', express.static(path.join(__dirname, 'dist')))
// // Angular DIST output folder
// app.use(express.static(path.join(__dirname, 'dist')));

// // API location
// // app.use('/api', api);

// // Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))