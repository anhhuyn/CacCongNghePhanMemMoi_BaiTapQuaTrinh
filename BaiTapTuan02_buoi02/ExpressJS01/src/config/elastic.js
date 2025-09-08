// src/config/elastic.js
const { Client } = require('@elastic/elasticsearch');

const client = new Client({
  node: 'https://localhost:9200',
  auth: {
    username: 'elastic',
    password: 'aU4RDU9UA3cL2ha=Xe0*',
  },
  tls: {
    rejectUnauthorized: false
  },
  compatibility: '8'   // ✅ ép về version 8
});

module.exports = client;
