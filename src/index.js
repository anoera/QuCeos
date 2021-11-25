const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

const data = {
	projectName: 'QuCeos',
	sections: [
		{
			topic: 'Fondamentaux',
			subtopics: ['Qubits', 'Notations de Dirac', 'Conventions algorithmie'],
		},
		{
			topic: 'Algorithmie',
			subtopics: ['Porte logique à un qubit', 'Porte logique à deux qubits'],
		},
		{
			topic: 'Cybersécurité',
			subtopics: ['Algorithme de Shor', 'Algorithme BB84'],
		},
	],
};

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/assets', express.static('src/public/'));

app.get('/', (req, res) => {
	res.render('pages/index.ejs', data);
});

app.get('/index2', (req, res) => {
	res.render('pages/index2.ejs');
});

app.listen(port, () => console.log(`server listening on http://localhost:${port}`));
