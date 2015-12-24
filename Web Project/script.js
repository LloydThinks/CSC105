
/* ============================ GLOBAL VARIABLES ============================ */
var tableData = [['Lloyd', 8, 12],
			 ['Simon', 8, 20],
			 ['Dr. Little', 40, 26]];

var table = null;

/* =============================== FUNCTIONS =============================== */

function createTable() {
	table = document.getElementById('myTable').getElementsByTagName('tbody')[0];

	for (var i = 0; i < tableData.length; i++) {
		var row = table.insertRow(0);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		cell1.innerHTML = tableData[i][0];
		cell2.innerHTML = tableData[i][1];
		cell3.innerHTML = tableData[i][2];
	};	
};

function addEntry() {
	var name = document.getElementById('entryName').value;
	var hours = document.getElementById('entryHours').value;
	var wage = document.getElementById('entryWage').value;

	var row = table.insertRow(0);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);

	cell1.innerHTML = name;
	cell2.innerHTML = hours;
	cell3.innerHTML = wage;
}