document.addEventListener('DOMContentLoaded', function() {
  const reqresBtn = document.querySelector('#fetchReqresBtn');
  const reqresStore = document.querySelector('#reqresData');

  reqresBtn.addEventListener('click', async function() {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const data = await response.json();
      displayData(data.data);
      console.log("clicked");
    } catch (error) {
      console.error('something went wrong, please try again after sometime', error);
    }
  });

  function displayData(persons){
    reqresStore.innerHTML = "";

    persons.forEach(person => {
      const personDiv = document.createElement('div');
      personDiv.classList.add('personDiv');
      personDiv.className = "masterDiv"

      const avatar = document.createElement('img');
      avatar.src = person.avatar;
      
      const name = document.createElement('p');
      name.textContent = person.first_name + " " + person.last_name;

      const email = document.createElement('p');
      email.textContent = person.email;

      personDiv.append(avatar, name, email);
      reqresStore.appendChild(personDiv);
    });
  }
});