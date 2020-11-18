
class GitHub {
    constructor() {
        this.client_id = '56402a3fc4a48a47faec';
        this.client_secret = '4a55c93d31f0cc9c7e766fbb760c12f48f342497';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profileData = await profileResponse.json();
        const reposData = await reposResponse.json();


        return {
            prifile: profileData,
            repos: reposData
        }
    }
}
