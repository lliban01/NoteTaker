const path = require("path");
const fs = require("fs");
//adding our database
let db = require("../db/db.json")

//exporting data 
module.exports = (app) => {
    writetoDB = (arr) => {
        fs.writeFileSync("../DEVELOP/db/db.json", JSON.stringify(arr))
    }

    app.get("/api/notes", (req,res) => {
        res.json(db);
    })

    app.post("/api/notes", (req,res) => {
        const noteEntry = req.body

        noteEntry.id = db.length;
        db.push(noteEntry);

        writetoDB(db);
        return res.json(db);

    })

    app.delete("/api/notes/:id", (req,res) => {
        let id = req.params.id;
        for (let i = 0; i < db.length; i++) {
            if (db[i].id == id) {
                db.splice(i, 1);
                writetoDB(db);
                res.json(db)
                break;
            }
        }
    })
}