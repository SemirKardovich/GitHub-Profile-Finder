
class GitHub {
    constructor() {
        this.client_id = '56402a3fc4a48a47faec';
        this.client_secret = 'eaac37e043d047b6ba93b2fa9e30a9edd7f7587b';
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