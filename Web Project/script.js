/* ============================ GLOBAL VARIABLES ============================ */
var hoursData = [
	['Lloyd', 8, 12],
	['Simon', 8, 20],
	['Dr. Little', 40, 26]
];

var clientData = [
	[1, 'Alpha Client'],
	[2, 'Beta Client']
];

var table = null;

/* =============================== FUNCTIONS =============================== */



/* ============================ HELPER FUNCTIONS ============================ */

/* createTable(tableName, tableData)
 *
 * Purpose: To fill in tables in your HTML code with data you provide
 * 
 * Parameters:
 * 		tableName - The HTML ID of the table you want information in
 * 		tableData - The information you want in the table
 */
function createTable(tableName, tableData) {
	// Initialize the global Table variable so the entire JS file can use it
	table = document.getElementById(tableName).getElementsByTagName('tbody')[0];

	// Loop over all entries in tableData
	for (var i = 0; i < tableData.length; i++) {
		// Create the HTML Table elements
		var row = table.insertRow(0);

		// Loop over all data in the tableData row
		for (var j = 0; j < tableData[i].length; j++) {

			// Create a new row in our table
			var tempCell = row.insertCell(j);
			// Fill the HTML Table element using the tableData variable
			tempCell.innerHTML = tableData[i][j];
		};
	};	
}; 

function addEntry() {
	// Grab the data from the input fields on the page
	var name = document.hoursForm.name.value;
	var hours = document.hoursForm.hours.value;
	var wage = document.hoursForm.wage.value;

	// Create the HTML Table elements
	var row = table.insertRow(0);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);

	// Fill the HTML Table elements we just created
	cell1.innerHTML = name;
	cell2.innerHTML = hours;
	cell3.innerHTML = wage;

	// Clear the fields after using the data from them
	document.hoursForm.name.value = '';
	document.hoursForm.hours.value = '';
	document.hoursForm.wage.value = '';
}


/* ================================= TO RUN ================================= */


createTable('hoursTable', hoursData);
createTable('clientTable', clientData);


