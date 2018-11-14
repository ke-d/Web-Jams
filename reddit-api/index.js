const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000
const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// /api/calc/add/5/7
app.get('/api/calc/add/:num1/:num2', (req, res) => {
  const { num1, num2 } = req.params;
  res.json({ result: parseInt(num1, 10) + parseInt(num2, 10) });
});

// /api/calc/add?num1=5&num2=7
app.get('/api/calc/add', (req, res) => {
  const { num1, num2 } = req.query;
  res.json({ result: parseInt(num1, 10) + parseInt(num2, 10) });
});

// Need to add a header: Content-Type: application/json
// Body: {  "num1":"5",  "num2":"7"}
app.post('/api/calc/add', (req, res) => {
  console.log(req.body)
  const { num1, num2 } = req.body;
  res.json({ result: parseInt(num1, 10) + parseInt(num2, 10) });
});


app.get('/api/reddit/getsubredditnames', (req, res) => {
  res.json({ names: ['awesomesubreddit1', 'firefox', 'chrome'] });
});


const posts = [];