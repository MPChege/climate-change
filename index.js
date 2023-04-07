// Get the HTML elements
const select = document.querySelector('#Information');
const output = document.querySelector('.output');
const cards = document.querySelectorAll('.cards');

// Define the API endpoints
const endpoints = {
  'EF': 'https://global-warming.org/api/ocean-warming-api',
  'NO': 'https://global-warming.org/api/methane-api',
  'CC': 'https://real-time-climate-index.p.rapidapi.com/api/climate-data'
};

// Define a function to fetch and display data
async function fetchData(endpoint) {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    // Display the data in the cards
    cards.forEach(card => card.innerHTML = JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
}

// Add an event listener to the search button
document.querySelector('#search-button').addEventListener('click', () => {
  const option = select.value;
  if (option) {
    output.innerText = `Showing ${option} information...`;
    fetchData(endpoints[option]);
  } else {
    output.innerText = 'Please select an option.';
  }
});
