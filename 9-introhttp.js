const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(req);
  if (req.url === "/") {
    res.end("hello world");
  } else if (req.url === "/about") {
    res.end("about page");
  } else {
    res.end(
      `<h1>Oops!</h1><p>we can't find the page</p><a href="/">back home</a>`
    );
  }
});

server.listen(5000, () => {
  console.log("listening on port 5000");
});
