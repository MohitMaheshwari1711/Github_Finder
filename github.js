class Github {
    constructor() {
        this.client_id = '849776286bfef8781ef7';
        this.client_secret = 'e65600e3a5599296bc47338558ecb3d7c10d96ae';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
   
        return {
          profile,
          repos
        }
      }
    }