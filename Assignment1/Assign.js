// Mock job listings data
const jobListings = [
    { title: 'Software Engineer', location: 'Osaka', company: 'Tech Japan Inc.' },
    { title: 'Marketing Manager', location: 'Tokyo', company: 'Market Trends Ltd.' },
    { title: 'English Teacher', location: 'Kyoto', company: 'Global Education Center.' },
    { title: 'Full Stack Developer', location: 'Tokyo', company: 'Tech Japan Inc.' }
];

// Function to display job listings
function displayJobListings() {
    const jobListingsContainer = document.getElementById('job-listings-container');
    jobListingsContainer.innerHTML = '';

    jobListings.forEach(job => {
        const jobItem = document.createElement('div');
        jobItem.classList.add('job-item');
        jobItem.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Company:</strong> ${job.company}</p>
        `;
        jobListingsContainer.appendChild(jobItem);
    });
}

// Filter job listings based on search input
document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredListings = jobListings.filter(job => {
        return job.title.toLowerCase().includes(searchTerm) || 
               job.location.toLowerCase().includes(searchTerm) ||
               job.company.toLowerCase().includes(searchTerm);
    });

    const jobListingsContainer = document.getElementById('job-listings-container');
    jobListingsContainer.innerHTML = '';

    filteredListings.forEach(job => {
        const jobItem = document.createElement('div');
        jobItem.classList.add('job-item');
        jobItem.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Company:</strong> ${job.company}</p>
        `;
        jobListingsContainer.appendChild(jobItem);
    });
});

// Display job listings on page load
displayJobListings();
