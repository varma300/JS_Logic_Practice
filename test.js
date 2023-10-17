
// Define the API endpoint URL
const apiUrl = 'https://dummyjson.com/quotes';

// Function to fetch data from the API
function fetchData() {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Handle the fetched data here
      console.log('Fetched data:', data);
    })
    .catch((error) => {
      // Handle errors
      console.error('Error:', error);
    });
}

// Call the fetchData function to initiate the API request
fetchData();
