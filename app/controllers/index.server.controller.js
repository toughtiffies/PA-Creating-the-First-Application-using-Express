exports.render = function (req, res) {
    if (req.session.lastVisit) {
        console.log("Last visit:", req.session.lastVisit);
    }
    req.session.lastVisit = new Date();

    res.render('index', {
        name: "Tiffany Parrott",
        title: "The MEAN Stack",
        definitions: [
            { tech: "MongoDB", description: "A NoSQL database that stores data in JSON-like documents, ensuring flexibility and scalability." },
            { tech: "Express", description: "A fast, unopinionated, and minimalist web framework for Node.js, used to build APIs and web applications." },
            { tech: "Angular", description: "A TypeScript-based front-end framework developed by Google for building dynamic web applications." },
            { tech: "Node.js", description: "A JavaScript runtime built on Chrome's V8 engine, enabling server-side scripting and scalable applications." }
        ]
    });
};
