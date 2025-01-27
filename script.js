const productContainer = document.getElementById("product-container");

document.getElementById("search-btn").addEventListener("click", function () {
  const search = document.getElementById("search").value;
  productContainer.innerHTML = "<h1>Loading...</h1>";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchResult(data.meals));
});

const displaySearchResult = (meals) => {
  productContainer.innerHTML = "";
  if (meals === null) {
    productContainer.innerHTML = `<h2 class="text-center">No Meals Found</h2>`;
  } else {
    meals.forEach((meal) => {
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
        <img src="${meal.strMealThumb}" alt="">
        <h3>${meal.strMeal}</h3>
        `;
      productContainer.appendChild(div);
    });
  }
};
