function searchbar() {
    const searchTerm = document.getElementById('searchbar').value.trim().toLowerCase();
    const searchResultsContainer = document.getElementById('searchResults');

    if (searchTerm.length === 0) {
        searchResultsContainer.innerHTML = ''; 
        searchResultsContainer.style.display = 'none';
        return;
    }

    const searchResults = performSearch(searchTerm);

    if (searchResults.users.length > 0 || searchResults.projects.length > 0) {
        displaySearchResults(searchResults);
        searchResultsContainer.style.display = 'block'; 
    } else {
        searchResultsContainer.innerHTML = 'No matching users or projects found.';
        searchResultsContainer.style.display = 'block';
    }
}

function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('searchResults');
    

    if (results.users.length === 0 && results.projects.length === 0) {
        searchResultsContainer.textContent = 'Ingen søkeresultater funnet.';
    } else {

        if (results.users.length > 0) {
            results.users.forEach(user => {
                const userItem = document.createElement('div');
                userItem.setAttribute('onclick', `userClick(${user.id})`);
                userItem.textContent = `Bruker: ${user.username}`;
                searchResultsContainer.appendChild(userItem);
            });
        }

       
        if (results.projects.length > 0) {
            results.projects.forEach(project => {
                const projectItem = document.createElement('div');
                projectItem.setAttribute('onclick', `projectclick(${project.id})`);
                projectItem.textContent = `Prosjekt: ${project.name}`;
                searchResultsContainer.appendChild(projectItem);
            });
        }
    }
}

function performSearch(searchTerm) {
    const users = model.data.users;
    const projects = model.data.projects;

    const matchedUsers = users.filter(user => {
        return user.username.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const matchedProjects = projects.filter(project => {
        return project.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return { users: matchedUsers, projects: matchedProjects };
}

function userClick(userId){
console.log('clicked on user:', userId)
updateview('profileScreen', userId);
}

function projectclick(projectId){
console.log('click on project:', projectId)
updateview('projectpage', projectId);
}