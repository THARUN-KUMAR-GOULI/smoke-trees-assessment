const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});