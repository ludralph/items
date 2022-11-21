const express = require('express');
require('dotenv').config();
const itemRouter = require('./routes/item')
const app = express();

app.use(express.json());



app.use('/items',itemRouter);

// default route
app.get('/', (req, res) =>{
    res.json({
        message: 'Welcome to the API'
    });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})