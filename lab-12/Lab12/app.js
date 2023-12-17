const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

app.use('/users', usersRouter);
app.use('/products', productsRouter);


app.use((req, res) => {
  res.status(200).send("Thanks For Watching My Output");
});



app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(600).send('Something went wrong!');
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});








