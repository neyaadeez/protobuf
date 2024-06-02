const fs = require("fs")
const Schema = require("./employees_pb");

const mustafa = new Schema.Employee();
mustafa.setFname("mustafa");
mustafa.setLname("mokashi");
mustafa.setPhone(1245);

const ayan = new Schema.Employee();
ayan.setFname("ayan");
ayan.setLname("khan");
ayan.setPhone(12443);

const rohit = new Schema.Employee();
ayan.setFname("rohit");
ayan.setLname("suresh");
ayan.setPhone(12443);

const employees = new Schema.Employees();
employees.addEmployees(ayan)
employees.addEmployees(mustafa)
employees.addEmployees(rohit)

fs.writeFileSync("binarydata", employees.serializeBinary())
console.log(employees.serializeBinary());