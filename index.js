const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 3000 // this is very important
const urlEncodedParser = bodyParser.urlencoded({ extended: false })

const lesEvents = [
		{
			nomEvent:"chouilleee",
			dateDebut: 1,
			dateFin: 2
		},
		{
			nomEvent:"Barrrrrr",
			dateDebut: 3,
			dateFin: 4
		}
];
// INSTALLER ->   https://expressjs.com/en/resources/middleware/cors.html

const lesInscrits = [
		{
			nomInscrit:"Flo",
			idInscrit:"1234",
			pswInscrit:"1234"
		},
		{
			nomInscrit:"Aure",
			idInscrit:"1234",
			pswInscrit:"1234"
		}
];

app.get('/', function (req, res) {
  res.send('Calendrier en construction')
})

app.get('/events', function(req, res) {

  res.send(req.session.toDo)
})

app.post('/events/add/', urlEncodedParser, function(req, res) {

  lesEvents.push({
  		nomEvent: req.body.nomE,
  		dateDebut: req.body.dateD,
  		dateFin: req.body.dateF
  	})

  console.log(lesEvents)
  res.send('events')
})

app.post('/events/del/', urlEncodedParser, function(req, res) {
  console.log(req.body.email)



});

  console.log(lesEvents)
  res.send('events')
})


app.get('/inscription', function(req, res) {

  res.send(req.session.toDo)
})

function remove(array, element) {
  const index = array.indexOf(element);
  array.splice(index, 1);
}

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT)
})