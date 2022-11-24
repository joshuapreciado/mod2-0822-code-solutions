const express = require('express');
const app = express();

app.listen(3000, () => {

});

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const emptyArray = [];
  for (const key in grades) {
    emptyArray.push(grades[key]);
  }
  res.json(emptyArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = {
    id: nextId,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  };
  res.status(201);
  res.json(grades[nextId]);
  nextId++;
});
