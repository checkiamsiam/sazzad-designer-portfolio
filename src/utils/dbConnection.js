import mysql from "mysql";

const connection = mysql.createConnection({
  host: "mysql.sazzad portfolio.dreamhosters.com",
  user: "sazzad portfolio_dev",
  password: "sazzad portfolio24K$24",
  database: "sazzad portfolio_database",
});

export default connection;
