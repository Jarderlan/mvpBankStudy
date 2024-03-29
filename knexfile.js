module.exports = {
    client: 'pg',
    connection: {
        host: process.env.DB_HOST ?? "127.0.0.1",
        port: Number(process.env.DB_PORT) ?? 5432,
        user: process.env.DB_USERNAME ?? "postgres",
        password: process.env.DB_PASSWORD ?? "admin",
        database: process.env.DB_DATABASE ?? "bank"
    },
    migrations: {
        directory: process.env.NODE_ENV == 'production' ? './build/database/migrations' : './src/database/migrations',
    },
    seeds: {
        directory: process.env.NODE_ENV == 'production' ? './build/database/seeds' : './src/database/seeds',
    }
};
