let express = require('express');
let technologger = require('technologger');
let parser = require('body-parser');
let plural = require('./public/main').plural;
let app = express();
let mailBase = {};

app.use('/', express.static('public'));

app.use(parser.json());
app.use(technologger);

app.post('/users', (req, res) => {
    console.log(req.body);
    res.send('100');
    if (!(req.body.email in mailBase))
        mailBase[req.body.email] = 1;
    else
        mailBase[req.body.email]++;
    console.log(mailBase[req.body.email] + " " + plural("отправка;отправки;отправок", mailBase[req.body.email]) +
        " для e-mail " + req.body.email);
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`App started on port ${process.env.PORT || 3000}`);
});
