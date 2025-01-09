const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Hello again from Express and Node, this time with Nodemon!'))
app.listen(port, () => console.log(`Listening on port ${port}!`))