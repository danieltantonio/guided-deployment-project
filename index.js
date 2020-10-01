const port = process.env.PORT || 5000;
const server = require('./api/server');

server.listen(port, () => console.log(`Server started on port: ${port}...`));