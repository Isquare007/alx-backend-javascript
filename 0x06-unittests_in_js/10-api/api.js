const express = require('express');
const bodyParser = require('body-parser');

const port = 7865
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.end('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.end(`Payment methods for cart :${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  const availablePayments = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.json(availablePayments);
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});
