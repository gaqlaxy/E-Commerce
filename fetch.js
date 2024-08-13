const mostPopProducts = document.querySelector(".gallery");

const jsonFile = "./products.json";

fetch(jsonFile)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        data.map((product) => {
            const { id, name, price, images } = product;
            console.log(id, name, price, images);
            mostPopProducts.innerHTML += `
        <li data-product-id="${id}">
          <figure>
            <img class="allproducts-images" src="${product.images}" alt="${name}"
            />
            <figcaption>
              <main>
                <h3 class="category">${name} <em>Sarees</em></h3>
                <p class="description-product">${product.description}</p>
              </main>
              <footer>
                <div>
                  <p class="small">From</p>
                  <p class="price">&#8377;${price}</p>
                </div>
                <a href="https://wa.link/lasa0t" target=_blank>
                <img src="Images/arrow-icon.svg" alt="Icon" /></a>
              </footer>
            </figcaption>
          </figure>
        </li>
        `;
        });
    });
