const express = require('express');

const app = express();
const port = 8080;

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/assets', express.static('src/public/'));

app.get('/', (req, res) => {
	res.render('pages/index.ejs');
});

app.listen(port, () => console.log(`server listening on localhost:${port}`));
