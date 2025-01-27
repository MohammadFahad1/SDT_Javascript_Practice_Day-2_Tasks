const productContainer = document.getElementById("product-container");
const mealDetailsContainer = document.querySelector(".meal-details-container");

document.getElementById("search-btn").addEventListener("click", function () {
  const search = document.getElementById("search").value;
  productContainer.innerHTML = "<h1>Loading...</h1>";
  mealDetailsContainer.innerHTML = "";
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
      div.setAttribute("onclick", `getMealDetails(${meal.idMeal})`);
      div.innerHTML = `
        <img src="${meal.strMealThumb}" alt="">
        <h3>${meal.strMeal}</h3>
        `;
      productContainer.appendChild(div);
    });
  }
};

const getMealDetails = (id) => {
  mealDetailsContainer.innerHTML =
    "<h1 style='margin-top: 50px'>Loading...</h1>";
  scrollTo(0, 0);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetails(data.meals[0]));
};

const displayMealDetails = (meal) => {
  console.log(meal);

  mealDetailsContainer.innerHTML = `  
        <div class="meal-details">
          <img src="${meal.strMealThumb}" alt="">
          <h2>${meal.strMeal}</h2>
          <h4>Ingredients</h4>
          <ul>
            ${meal.strIngredient1 ? `<li>${meal.strIngredient1}</li>` : ""}
            ${meal.strIngredient2 ? `<li>${meal.strIngredient2}</li>` : ""}
            ${meal.strIngredient3 ? `<li>${meal.strIngredient3}</li>` : ""}
            ${meal.strIngredient4 ? `<li>${meal.strIngredient4}</li>` : ""}
            ${meal.strIngredient5 ? `<li>${meal.strIngredient5}</li>` : ""}
            ${meal.strIngredient6 ? `<li>${meal.strIngredient6}</li>` : ""}
            ${meal.strIngredient7 ? `<li>${meal.strIngredient7}</li>` : ""}
            ${meal.strIngredient8 ? `<li>${meal.strIngredient8}</li>` : ""}
            ${meal.strIngredient9 ? `<li>${meal.strIngredient9}</li>` : ""}
            ${meal.strIngredient10 ? `<li>${meal.strIngredient10}</li>` : ""}
            ${meal.strIngredient11 ? `<li>${meal.strIngredient11}</li>` : ""}
            ${meal.strIngredient12 ? `<li>${meal.strIngredient12}</li>` : ""}
            ${meal.strIngredient13 ? `<li>${meal.strIngredient13}</li>` : ""}
            ${meal.strIngredient14 ? `<li>${meal.strIngredient14}</li>` : ""}
            ${meal.strIngredient15 ? `<li>${meal.strIngredient15}</li>` : ""}
            ${meal.strIngredient16 ? `<li>${meal.strIngredient16}</li>` : ""}
            ${meal.strIngredient17 ? `<li>${meal.strIngredient17}</li>` : ""}
            ${meal.strIngredient18 ? `<li>${meal.strIngredient18}</li>` : ""}
            ${meal.strIngredient19 ? `<li>${meal.strIngredient19}</li>` : ""}
            ${meal.strIngredient20 ? `<li>${meal.strIngredient20}</li>` : ""}
          </ul>
        </div>
        `;
};
