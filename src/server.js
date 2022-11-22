const express = require("express");
const cors = require('cors')
const router = require('./routes/uploadRoutes')

const app = express();
app.use(cors())
const port = process.env.PORT || 5001;

app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});