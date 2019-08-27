module.exports = {
    development: {
      username: "cube",
      password: "square",
      database: "moviestore",
      host: process.env.DB_HOST || "postgresql",
      dialect: "postgres"
    },
    test: {
      username: "cube",
      password: "square",
      database: "moviestore",
      host: process.env.DB_HOST || "postgresql",
      dialect: "postgres"
    },
    production: {
      username: "cube",
      password: "square",
      database: "moviestore",
      host: process.env.DB_HOST || "postgresql",
      dialect: "postgres"
    }
  }
  