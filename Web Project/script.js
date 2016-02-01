/* ============================== INITIAL DATA ============================= */
var clientData = [
	['1', 'Alpha Client'],
	[2, 'Beta Client']
];

var projectData = [
	[1, 'Project Alpha', 1, 'Alpha Client', 25, 0, 18, 'No Value'],
	[2, 'Project Beta', 2, 'Beta Client', 30, 50, 10, 20],
	[3, 'Project Gamma', 2, 'Beta Client', 40, 20, 10, 50]
];

var hoursData = [
	['Lloyd', 8, 12],
	['Simon', 8, 20],
	['Dr. Little', 40, 26]
];

/* =============================== FUNCTIONS =============================== */


/*
 *
 *
 *
 */
function addClient() {

	// Grab the data from the input fields on the page
	var id = document.clientForm.id.value;
	var name = document.clientForm.name.value;

	// Clear the fields after using the data from them
	document.clientForm.id.value = '';
	document.clientForm.name.value = '';

	clientData.push([id, name]);

	populateTable('clientTable', clientData);
}

/*
 *
 *
 *
 */
function addHours() {

	// Grab the data from the input fields on the page
	var name = document.hoursForm.name.value;
	var hours = document.hoursForm.hours.value;
	var wage = document.hoursForm.wage.value;

	// Clear the fields after using the data from them
	document.hoursForm.name.value = '';
	document.hoursForm.hours.value = '';
	document.hoursForm.wage.value = '';

	hoursData.push([name, hours, wage]);

	populateTable('hoursTable', hoursData);
}

/*
 *
 *
 *
 */
function addProject() {

	// Grab the data from the input fields on the page
	var projectId = document.projectForm.projectId.value;
	var name = document.projectForm.name.value;
	var clientId = document.projectForm.clientId.value;
	var rate = document.projectForm.rate.value;
	var hoursEstimated = document.projectForm.hoursEstimated.value;

	// Clear the fields after using the data from them
	document.projectForm.projectId.value = '';
	document.projectForm.name.value = '';
	document.projectForm.clientId.value = '';
	document.projectForm.rate.value = '';
	document.projectForm.hoursEstimated.value = '';

	// Find the Client Name using the Client ID
	var clientName = ''
	for (var i = 0; i < clientData.length; i++) {
		if (clientId == clientData[i][0])
			clientName = clientData[i][1]
	};

	projectData.push([projectId, name, clientId, clientName, rate, hoursEstimated, '', '']);

	populateTable('projectTable', projectData);
}

/* ============================ HELPER FUNCTIONS ============================ */

/* populateTable(tableName, tableData)
 *
 * Purpose: To fill in tables in your HTML code with data you provide
 * 
 * Parameters:
 * 		tableName - The HTML ID of the table you want information in
 * 		tableData - The information you want in the table
 */
function populateTable(tableName, tableData) {

	// Create a new Table Body element to populate with our data
	var tableBody = document.createElement('tbody');

	// Loop over all entries in tableData
	for (var i = tableData.length - 1; i >= 0; i--) {
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


	// Grab the table from the HTML page so we can replace
	// it's Body element with the new one we just built
	oldTableBody = document.getElementById(tableName).getElementsByTagName('tbody')[0];
	oldTableBody.parentNode.replaceChild(tableBody, oldTableBody)


}


/* ========================== TO RUN ON PAGE LOAD ========================== */

populateTable('hoursTable', hoursData);
populateTable('clientTable', clientData);
populateTable('projectTable', projectData);


