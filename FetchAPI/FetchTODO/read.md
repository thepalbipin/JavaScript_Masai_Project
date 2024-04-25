<!--
document.addEventListener('DOMContentLoaded', function() {
  const fetchTodosBtn = document.getElementById('fetchTodosBtn');
  const todoList = document.getElementById('todoList');

  fetchTodosBtn.addEventListener('click', function() {
      fetchTodos();
  });

  function fetchTodos() {
      fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .then(data => {
              displayTodos(data);
          })
          .catch(error => {
              console.error('Error fetching todos:', error);
          });
  }

  function displayTodos(todos) {
      todoList.innerHTML = ''; // Clear previous todos

      todos.forEach(todo => {
          const li = document.createElement('li');
          li.textContent = todo.title;
          todoList.appendChild(li);
      });
  }
}); -->

document.addEventListener('DOMContentLoaded', function() {
const countriesElement = document.querySelector('#countries');
const fetchCountryBtn = document.querySelector("#fetchCountry");

fetchCountryBtn.addEventListener('click', async function() {
try {
const response = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries');
const data = await response.json();
displayData(data);
console.log("clicked");
} catch (error) {
console.log("something went wrong, please try again after sometime", error);
}
});

function displayData(countries){
countriesElement.innerHTML = "";

    // Display countries in cards
    countries.forEach(country => {
      const card = document.createElement('div');
      card.classList.add('card');

      const countryName = document.createElement('h3');
      countryName.textContent = country.country;

      const CountryRank = document.createElement('p');
      CountryRank.textContent = country.Rank;

      const countryPopulation = document.createElement('p');
      countryPopulation.textContent = country.population;

      card.append(countryName, CountryRank, countryPopulation);
      countriesElement.append(card);
    });

}

// getCountries();
});
