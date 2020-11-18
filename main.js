// Init Github
const github = new GitHub;
// Init UI
const ui = new UI;


// Search input 
const searchUser = document.getElementById('searchUser');

//Search input event listener 

searchUser.addEventListener('keyup', () => {
	//Get input text 
	const userText = searchUser.value;

	if(userText !== '') {
		// Make http call
		github.getUser(userText)
		 .then(data => {
			 if(data.prifile.message === 'Not Found') {
				// Show Aler
				ui.showAlert('User not found', 'alert alert-danger');
			 }else {
				// Show Profile
				ui.showProfile(data.prifile);
				ui.showRepos(data.repos);
			 }
		 })
	}else {
		// Clear profile
		ui.clearProfile();
	}
})