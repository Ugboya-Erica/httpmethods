const http = require('http');
const PORT = 5500;
const hostname = '127.0.0.1';



const httpMethods = http.createServer((req, res) => {
    console.log(req.method, req.url);
    const books = {
        book1: "A Tale Of Two Cities",
        book2: "The Little Prince",
        book3: "Harry potter and the Philosopher's Stone",
        book4: "And Then There Were None",
        book5: "Dream Of The Red Chamber",
        book6: "The Hobbit"
    }

    const author = {
        "A Tale Of Two Cities": "Charles Dickens",
        "The Little Prince": "Antoine de Saint-Exupery",
        "Harry potter and the Philosopher's Stone": "J.K Rowling",
        "And Then There Were None": "Agatha Christie",
        "Dream Of The Red Chamber": "Cao Xueqin",
        "The Hobbit": "J. R. R. Tolkien"
    }

    if (req.method === "GET" && req.url === "/books"){
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify(books));
    }

    if (req.method === "PUT" && req.url === "/books"){
        res.write("Congratulations! Your book has been updated");
        res.end();
    }

    if (req.method === "DELETE" && req.url === "/books"){
        res.write("The Item has been Deleted");
        res.end();
    }

    if (req.method === "GET" && req.url === "/books/author/"){
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify(author));
    }

    if (req.method === "POST" && req.url === "/books/author/") {
        res.write("Welcome!");
        res.end();
    }

    if (req.method === "PUT" && req.url === "/books/author/"){
        res.write("Congratulations! Your book and its author has been updated");
        res.end();
    }
});


httpMethods.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}`)
})



