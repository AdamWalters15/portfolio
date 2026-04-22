// RENDER PROJECTS
import { fetchJSON, renderProjects } from './global.js';

const projects = await fetchJSON('./lib/projects.json');
const latestProjects = projects.slice(0, 3);

const projectsContainer = document.querySelector('.projects');

renderProjects(latestProjects, projectsContainer, 'h2');

// GITHUB STATS
const githubData = await fetchJSON('https://api.github.com/users/adamwalters15');

const profileStats = document.querySelector('#profile-stats');

profileStats.innerHTML = `
  <p><strong>Followers:</strong> ${githubData.followers}</p>
  <p><strong>Following:</strong> ${githubData.following}</p>
  <p><strong>Public Repos:</strong> ${githubData.public_repos}</p>
  <p><strong>Public Gists:</strong> ${githubData.public_gists}</p>
`;