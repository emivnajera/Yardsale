const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoshoppingCartContainer);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoshoppingCartContainer() {
  shoppingCartContainer.classList.toggle("inactive");
}

/*<div class="cards-container">
<div class="product-card">
    <img
      src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/switch/site-design-update/oled-model-promo"
      alt=""
    />
    <div class="product-info">
      <div>
        <p>$120.00</p>
        <p>Nintendo Switch</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="" />
      </figure>
    </div>
  </div>
</div>*/

function renderProducts(producList) {
  for (product of producList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    productCard.appendChild(productImg);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");

    productName.innerText =
      "La nueva consola cuenta con una vibrante pantalla OLED de 7 pulgadas (17.78 cm), un soporte ajustable y amplio, una base con puerto LAN para conexión por cable, almacenamiento interno de 64 GB y audio mejorado.";

    productCard.appendChild(productInfo);

    productInfo.appendChild(productInfoDiv);

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");

    productInfo.appendChild(productInfoFigure);

    const addToCartImg = document.createElement("img");
    addToCartImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(addToCartImg);

    cardsContainer.appendChild(productCard);
  }
}

const producList = [];

producList.push({
  name: "Nintendo Switch",
  price: 120,
  image:
    "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/switch/site-design-update/oled-model-promo",
});

producList.push({
  name: "Nintendo Switch",
  price: 120,
  image:
    "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/switch/site-design-update/oled-model-promo",
});

producList.push({
  name: "Nintendo Switch",
  price: 120,
  image:
    "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/switch/site-design-update/oled-model-promo",
});

producList.push({
  name: "Nintendo Switch",
  price: 120,
  image:
    "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/switch/site-design-update/oled-model-promo",
});

producList.push({
  name: "Nintendo Switch",
  price: 120,
  image:
    "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/switch/site-design-update/oled-model-promo",
});

producList.push({
  name: "Nintendo Switch",
  price: 120,
  image:
    "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/switch/site-design-update/oled-model-promo",
});

producList.push({
  name: "Nintendo Switch",
  price: 120,
  image:
    "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/switch/site-design-update/oled-model-promo",
});

renderProducts(producList);
