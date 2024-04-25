const countriesContainerElement = document.getElementById('countries-container');

async function createCountryCard(country) {
  try {
    const card = document.createElement('div');
    card.classList.add('country-card');

    const name = document.createElement('h3');
    name.textContent = country.country;
    card.appendChild(name);

    const details = document.createElement('ul');
    details.innerHTML = `
      <li>Rank: ${country.Rank}</li>
      <li>Population: ${country.population}</li>
    `;
    card.appendChild(details);

    return card;
  } catch (error) {
    console.error('Error creating country card:', error);
    throw error; // Rethrow the error to be caught by fetchCountries function
  }
}

async function fetchCountries() {
  try {
    const response = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries');
    const data = await response.json();

    for (const country of data) {
      const card = await createCountryCard(country);
      countriesContainerElement.appendChild(card);
    }
  } catch (error) {
    console.error('Error fetching countries:', error);
    const message = document.createElement('p');
    message.textContent = 'Error fetching countries. Please try again later.';
    countriesContainerElement.appendChild(message);
  }
}

fetchCountries();
