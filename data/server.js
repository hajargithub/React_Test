// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json'); // Replace 'db.json' with your JSON data file

// const middlewares = jsonServer.defaults({
//     noCors: false, // Disable JSON Server's default CORS
// });

// // Enable CORS for all origins
// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

// server.use(middlewares);
// server.use(router);

// const port = 3001; // Set the port for JSON Server

// server.listen(port, () => {
//     console.log(`JSON Server is running on port ${port}`);
// });