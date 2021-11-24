const express = require('express');

const app = express();
const port = 8080;

const data = {
	projectName: 'QuCeos',
	sections: [
		{
			topic: 'Fondamentaux',
			subtopics: ['Qubits', 'Superposition / intrication', 'Théorème du non-clonage', 'Téléportation quantique'],
		},
		{
			topic: 'Algorithmie',
			subtopics: [''],
		},
		{
			topic: 'Cybersécurité',
			subtopics: ['Algorithme de Shor', 'Quantum Key Distribution'],
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
