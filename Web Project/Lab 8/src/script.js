function addClient() {

	// Grab the data from the input fields on the page
	var clientID = document.clientForm.id.value;
	var clientName = document.clientForm.name.value;

	document.getElementById('firstID').innerHTML = clientID;
}