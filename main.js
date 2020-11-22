// Init Github
const github = new GitHub;
// Init UI
const ui = new UI;


// Search input 
const searchUser = document.getElementById('searchUser');
const searchBtn = document.getElementById('search-btn');
//Search input event listener 

searchBtn.addEventListener('click', () => {
	//Get input text 
	const userText = searchUser.value.replace(/\s+/g, '');
	
	if(userText !== '') {
		// Make http call
		github.getUser(userText)
		 .then(data => {
			 
			 if(data.profile.message === 'Not Found') {
				// Show Aler
				ui.showAlert('User not found', 'alert alert-danger');
			 }else if(data.status === 403){
				// Show Alert
				ui.showAlert('Request limit reached, please come back in an hour', 'alert alert-danger');
			 }else {
				// Show Profile
				ui.showProfile(data.profile);
				ui.showRepos(data.repos);
			 }
		 })
	}else {
		// Clear profile
		ui.clearProfile();
	}
})