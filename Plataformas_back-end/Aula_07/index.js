document.addEventListener('DOMContentLoaded', () => {
  const animalTypeSelect = document.getElementById('animalType');
  const searchButton = document.getElementById('searchButton');
  const animalList = document.getElementById('animalList');

  searchButton.addEventListener('click', () => {
      const selectedType = animalTypeSelect.value;
      fetch(`${selectedType}.json`)
          .then(response => response.json())
          .then(data => {
              animalList.innerHTML = '';

              data.forEach(animal => {
                  const card = document.createElement('div');
                  card.className = 'card mb-3';
                  card.innerHTML = `
                      <div class="card-body">
                          <h5 class="card-title">${animal.name}</h5>
                          <p class="card-text">${animal.description}</p>
                      </div>
                  `;
                  animalList.appendChild(card);
              });
          })
          .catch(error => console.error(error));
  });
});
