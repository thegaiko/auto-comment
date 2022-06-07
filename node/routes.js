const router = app => {
    app.get('/vk', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });

    const users = [{
        id: 1,
        name: "Richard Hendricks",
        email: "richard@piedpiper.com",
    },
    {
        id: 2,
        name: "Bertram Gilfoyle",
        email: "gilfoyle@piedpiper.com",
    },
    ];

    app.get('/users', (request, response) => {
        response.send(users);
    });

    app.post('/about', function (req, res) {
        res.send('About this wiki');
    })

}

// Export the router
module.exports = router;