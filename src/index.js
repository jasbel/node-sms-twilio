const app = require('./server');
require("./database")

const port = 3000;


app.listen(port, () => console.log(`Example app listening on port ${port}!`));