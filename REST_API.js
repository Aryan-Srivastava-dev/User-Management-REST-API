const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "test",
    password: "password",
    port: 5432
});

app.get("/api/users/get", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM userbase ORDER BY id;");
        return res.json(result.rows);
    }
    catch(err) {
        console.error("Error executing query");
        return res.status(500).send("Server error");
    }
});

app.get("/api/users/get/:id", async (req, res) => {
    const id = req.params.id;
    const isIdThere = await pool.query(`SELECT 1 FROM userbase WHERE id = ${id} LIMIT 1;`);
    if(isIdThere.rowCount === 0) {
        return res.json(`User with ID ${id} not found`);
    }
    try {
        const result = await pool.query(`SELECT * FROM userbase WHERE id = $1`, [id]);
            return res.json(result.rows);
    }
    catch(err) {
        console.error(`Could not find user with ID ${id}`);
            return res.status(500).send("Server error");
    }
});

app.route("/api/users/:id")
    .patch(async (req, res) => {
        const id = req.params.id;
        const name = req.body.name;
        const email = req.body.email;
        const dob = req.body.dob;

        const isIdThere = await pool.query(`SELECT 1 FROM userbase WHERE id = ${id} LIMIT 1;`);
        if(isIdThere.rowCount === 0) {
            return res.send(`User with ID ${id} not found`);
        }
        if(name != undefined) {
            try {
                await pool.query(`UPDATE userbase SET name = $1 WHERE id = $2;`, [name, id]);
            }
            catch(err) {
                console.error("Error in updation");
                return res.status(500).send("Server error");
            }
        }
        if(email != undefined || email === null) {
            try {
                if(email === null)
                    await pool.query(`UPDATE userbase SET email = $1 WHERE id = $2;`, [null, id]);
                else
                    await pool.query(`UPDATE userbase SET email = $1 WHERE id = $2;`, [email, id]);
            }
            catch(err) {
                console.error("Error in updation");
                return res.status(500).send("Server error");
            }
        }
        if(dob != undefined) {
            try {
                await pool.query(`UPDATE userbase SET dob = $1 WHERE id = $2;`, [dob, id]);
            }
            catch(err) {
                console.error("Error in updation", err);
                return res.status(500).send("Server error");
            }
        }

        return res.send("Updated succesfully");
    })
    .delete(async (req, res) => {
        const id = req.params.id;
        const isIdThere = await pool.query(`SELECT 1 FROM userbase WHERE id = ${id} LIMIT 1;`);
        if(isIdThere.rowCount === 0) {
            return res.send(`User with ID ${id} not found`);
        }
        try {
            await pool.query(`DELETE FROM userbase WHERE id = $1`, [id]);
            return res.send("User deleted successfully");
        }
        catch(err) {
            console.error("Error in deleting...", err);
            return res.status(500).send("Server error");
        }
    });

app.post("/api/users/post", async (req, res) => {
    try {
        await pool.query("INSERT INTO userbase(name, email, dob) VALUES($1, $2, $3);",
            [req.body.name, req.body.email, req.body.dob]);
        return res.send("User added successfully");
    }
    catch(err) {
        console.error("Error in posting...", err);
        return res.status(500).send("Server error");
    }
});

app.listen(PORT, () => console.log(`Connected to Server at port: ${PORT}`));

process.on("SIGINT", async () => {
    console.log("\nClosing the server...");
    pool.end();
    process.exit(0);
});
