/* ============================ GLOBAL VARIABLES ============================ */
var hoursData = [
	['Name', 'Hours Worked', 'Wage/h'],
	['Lloyd', 8, 12],
	['Simon', 8, 20],
	['Dr. Little', 40, 26]
];

var clientData = [
	['Client ID', 'Client Name'],
	[1, 'Alpha Client'],
	[2, 'Beta Client']
];

/* =============================== FUNCTIONS =============================== */


/*
 *
 *
 *
 */
function addClient() {

	// Grab the table from the HTML page so we can add information to it
	table = document.getElementById('clientTable').getElementsByTagName('tbody')[0];

	// Grab the data from the input fields on the page
	var id = document.clientForm.id.value;
	var name = document.clientForm.name.value;

	// Create the HTML Table elements
	var row = table.insertRow(0);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);

	// Fill the HTML Table elements we just created
	cell1.innerHTML = id;
	cell2.innerHTML = name;

	// Clear the fields after using the data from them
	document.clientForm.id.value = '';
	document.clientForm.name.value = '';
}

/*
 *
 *
 *
 */
function addHours() {

	// Grab the table from the HTML page so we can add information to it
	table = document.getElementById('hoursTable').getElementsByTagName('tbody')[0];

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
	// Grab the table from the HTML page so we can add information to it
	table = document.getElementById(tableName);
	tableHeader = table.getElementsByTagName('thead')[0]
	tableBody = table.getElementsByTagName('tbody')[0]

	/* ============ Fill in the Header ============ */

	// Create the HTML Table element
	var header = tableHeader.insertRow(0);
	for (var j = 0; j < tableData[0].length; j++) {
		// Create a new row in our table
		var tempCell = header.insertCell(j);
		// Fill the HTML Table element using the tableData variable
		tempCell.innerHTML = tableData[0][j];
	};

	/* ============= Fill in the body ============= */

	// Loop over all entries in tableData
	for (var i = 1; i < tableData.length; i++) {
		// Create the HTML Table element
		var row = tableBody.insertRow(0);

		// Loop over all data in the tableData row
		for (var j = 0; j < tableData[i].length; j++) {

			// Create a new row in our table
			var tempCell = row.insertCell(j);
			// Fill the HTML Table element using the tableData variable
			tempCell.innerHTML = tableData[i][j];
		};
	};	
}; 




/* ================================= TO RUN ================================= */


createTable('hoursTable', hoursData);
createTable('clientTable', clientData);


