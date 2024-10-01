document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = `https://api.thedogapi.com/v1/breeds`;
  const row = document.getElementById("dogs-row");

  const getBreedId = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  };

  const fetchBreedDetail = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`);
      const data = await response.json();
      console.log(data);
      displayCard(data);
    } catch (err) {
      console.error("API HATASI :" + err);
    }
  };

  const displayCard = (breeds) => {
    const card = `
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  ${breeds.name}
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p class="card-text">Köken: ${breeds.origin}</p>
                  <p class="card-text">Kilo: ${breeds.weight.imperial}</p>
                  <p class="card-text">Boyu: ${breeds.height.imperial}</p>
                  <p class="card-text">Yaşı:  ${breeds.life_span}</p>
                </div>
              </div>
            </div>
          </div>

    `;

    row.innerHTML = card;
  };

  const breedId = getBreedId();
  if (breedId) {
    fetchBreedDetail(breedId);
  } else {
    row.innerHTML =
      "<p class='text-danger'>Veriler yüklenirken hata oluştu</p>";
  }
});
