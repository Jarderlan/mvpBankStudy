module.exports = {
    client: 'pg',
    connection: {
        host: process.env.DB_HOST ?? "127.0.0.1",
        port: Number(process.env.DB_PORT) ?? "5432",
        user: process.env.DB_USERNAME ?? "bank",
        password: process.env.DB_PASSWORD ?? "postgres",
        database: process.env.DB_DATABASE ?? "admin"

    },
    migrations: {
        directory: process.env.NODE_ENV == 'production' ? './build/database/migrations' : './src/database/migrations',
    },
    seeds: {
        directory: process.env.NODE_ENV == 'production' ? './build/database/seeds' : './src/database/seeds',
    }
};
