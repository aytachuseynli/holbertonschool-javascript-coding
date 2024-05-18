#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const characterId = '18';

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const films = JSON.parse(body).results;
  const count = films.reduce((total, film) => {
    const characters = film.characters;
    if (characters.includes(`https://swapi-api.hbtn.io/api/people/${characterId}/`)) {
      total++;
    }
    return total;
  }, 0);
  console.log(count);
});

