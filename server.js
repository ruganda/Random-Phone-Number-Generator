
const express = require('express');
const fs = require('fs');
var bodyParser = require('body-parser');

const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());



app.post('/', (req, res)=>{

    const { number } = req.body
    if (number < 1 || number> 10000) res.send({message: "Number should be between 1 to 1000"})
    const numbers =[];
    while (numbers.length < number){
       const phoneNumber = `0${Math.floor(Math.random() * 999999999)}`;
       numbers.push(phoneNumber);
    }
    fs.writeFileSync('./data.text', numbers)
    res.status(201).send({numbers})
})

app.get('/', (req, res)=>{
    const numbers = fs.readFileSync('./data.text', 'utf8');
    const numsArray = numbers.split(",")
    const sortedNumbers = numsArray.sort()
    const min = sortedNumbers[1]
    const max = sortedNumbers[sortedNumbers.length -1]
    const totalNumbers = sortedNumbers.length
    res.status(200).send({
        min,
        max,
        totalNumbers,
        numbers:numsArray, 
    })
  })

app.listen(port, function(err){
  if(err){
    console.log(err)
  }else{
    console.log(`App running at http://localhost:${port}`)
  }
});

module.exports = app
