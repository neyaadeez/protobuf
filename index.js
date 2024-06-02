const file = require("fs")
const employees = []
employees.push(
    {
        "fname":"mustafa",
        "lname":"mokashi",
        "phone": 123
    },
    {
        "fname":"ronal",
        "lname":"ford",
        "phone": 123
    },
    {
        "fname":"john",
        "lname":"bary",
        "phone": 123
    },
    {
        "fname":"spencer",
        "lname":"gary",
        "phone": 123
    }
)

file.writeFileSync("jsondata.json", JSON.stringify(employees))