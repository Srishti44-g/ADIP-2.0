const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.querySelector('.close-search');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchBtn.addEventListener('click', () => {
    searchOverlay.style.display = 'block';
    searchInput.focus();
});

closeSearch.addEventListener('click', () => {
    searchOverlay.style.display = 'none';
});

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    // Add your search logic here
    // This is a simple example:
    const results = performSearch(query);
    displayResults(results);
});

function performSearch(query) {
    // Add your search implementation
    // This is a placeholder
    const topics = [
        'Digital Image Fundamentals',
        'Image Segmentation',
        'Feature Representation',
        'Registration and Fusion',
        'Object Recognition'
    ];
    
    return topics.filter(topic => 
        topic.toLowerCase().includes(query)
    );
}

function displayResults(results) {
    searchResults.innerHTML = results
        .map(result => `<div class="search-result">${result}</div>`)
        .join('');
}
