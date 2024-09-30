const createServer = require('./src/server');

const port = 8080 ;

const app = createServer();

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
