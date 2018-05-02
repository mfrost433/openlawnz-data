// populate the case_to_case table
// that table has two fields - case_id_1 and case_id_2 both integers and foreign keys referencing ids in the cases table
// case_id_1 is the referencing case
// case_id_2 is the case being referenced

"use strict";

// VARIABLES, DEPENDENCIES ETC
// ---------------------------
const mysql = require('mysql');
const fs = require('fs');
require('dotenv').config();


var connection = mysql.createConnection({
  host      : process.env.DB_HOST,
  user      : process.env.DB_USER,
  password  : process.env.DB_PASS,
  database  : 'cases',
  charset   : 'UTF8MB4_UNICODE_CI',
  multipleStatements: true
});

connection.connect();

var obj = [];

// connection.query("select * from case_citations; select * from cases", function(error, results, fields) {
    
connection.query("select * from case_citations; select * from cases", function(error, results, fields) {
    for (var i = 0; i<results[0].length; i++) {
        console.log(results[0][i]);
        obj.push(results[0][i])
        }
    fs.writeFileSync('citationJson.json', JSON.stringify(obj));
});	
connection.end();
	


