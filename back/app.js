const express = require('express');

const config = require.main.require('./config');

const app = express();

app.use(
    express.json(),
    require.main.require('./middlewares/auth')
);

config.models.forEach(
    model => {
        app.use(
            `/${model}`,
            require.main.require(`./validators/${model}`),
            require.main.require(`./routers/${model}`)
        );

        return;
    }
);

// Errors
app.use(
    require.main.require('./middlewares/not-found'),
    require.main.require('./middlewares/error')
);

app.listen(8000);