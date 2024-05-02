const fs = require('fs');

const filepath = "./models/data.json";
const data = JSON.parse(fs.readFileSync(filepath));

async function persist() {
    return new Promise((res, rej) => {
        fs.writeFileSync(filepath, JSON.stringify(data), (err) => {
            if (err === null) {
                res();
            } else {
                rej(err);
            }
        });
    })
}

function getAll() {
    return data;
}

function getById(id) {
    return data.find(i => i.id === id);
}

module.exports = {
    getAll,
    getById
}