const fs = require("fs");
const Schema = require("./employees_pb");

const bytes = fs.readFileSync("binarydata");
const employeesdata = Schema.Employees.deserializeBinary(bytes);
console.log(employeesdata.getEmployeesList())