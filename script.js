document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = `https://api.thedogapi.com/v1/breeds`;
  const row = document.getElementById("dogs-row");

  const fetchBreedData = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      displayCard(data.slice(0, 99));
    } catch (error) {
      console.error("API HATASI :" + error);
    }
  };

  const displayCard = (breeds) => {
    const card = breeds.map((breed) => {
      return `<div class="col-lg-6">
            <div class="card">
              <h3 class="card-title">${breed.name}</h3>
              <p class="card-text">${breed.breed_group || "Bilinmiyor"}</p>
              <a href="details.html?id=${
                breed.id
              }" class="btn btn-dark">Detayları</a>
            </div>
        </div>`;
    });

    row.insertAdjacentHTML("afterend", card);
  };

  fetchBreedData();
});
