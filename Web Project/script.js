/* ============================ GLOBAL VARIABLES ============================ */
var tableData = [['Lloyd', 8, 12],
			 ['Simon', 8, 20],
			 ['Dr. Little', 40, 26]];

var table = null;

/* =============================== FUNCTIONS =============================== */

function createTable() {
	// Initialize the global Table variable so the entire JS file can use it
	table = document.getElementById('myTable').getElementsByTagName('tbody')[0];

	// Loop over the initial tableData set in the Global Variables
	for (var i = 0; i < tableData.length; i++) {
		// Create the HTML Table elements
		var row = table.insertRow(0);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);

		// Fill the HTML Table elements using the global tableData variable
		cell1.innerHTML = tableData[i][0];
		cell2.innerHTML = tableData[i][1];
		cell3.innerHTML = tableData[i][2];
	};	
};

function addEntry() {
	// Grab the data from the input fields on the page
	var name = document.getElementById('entryName').value;
	var hours = document.getElementById('entryHours').value;
	var wage = document.getElementById('entryWage').value;

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
	document.getElementById('entryName').value = '';
	document.getElementById('entryHours').value = '';
	document.getElementById('entryWage').value = '';
}






