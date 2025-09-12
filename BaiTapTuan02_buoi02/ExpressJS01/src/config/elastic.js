// src/config/elastic.js
const { Client } = require('@elastic/elasticsearch');

const client = new Client({
  node: 'https://localhost:9200',
  auth: {
    username: 'elastic',
    password: 'lLn3zEbQhpO1J1u1=*4l',
  },
  tls: {
    rejectUnauthorized: false
  },
  compatibility: '8'   
});

module.exports = client;
