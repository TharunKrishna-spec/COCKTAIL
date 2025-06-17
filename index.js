import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const fetchCocktails = async (url) => {
  const response = await axios.get(url);
  const drinks = response.data.drinks;
  if (!drinks) return [];
  
  return drinks.map(drink => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}`];
      const measure = drink[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(measure ? `${measure.trim()} ${ingredient}` : ingredient);
      }
    }
    return { drink, ingredients };
  });
};

// Home route
app.get("/", (req, res) => {
  res.render("index", { cocktails: [], error: null });
});

app.post("/smart-search", async (req, res) => {
  const { searchInput, searchType } = req.body;
  let url = "";

  switch (searchType) {
    case "name":
      url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`;
      break;
    case "id":
      url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${searchInput}`;
      break;
    case "ingredient":
      url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInput}`;
      break;
    case "random":
      url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
      break;
    default:
      return res.render("index", { cocktails: [], error: "Invalid search type." });
  }

  try {
    const response = await axios.get(url);
    const drinks = response.data.drinks;

    if (!drinks) {
      return res.render("index", { cocktails: [], error: "No results found!" });
    }

    let cocktails = [];

    if (searchType === "ingredient") {
      // Safely fetch full details for each drink using ID
      const detailPromises = drinks.map(async (drink) => {
        try {
          const detailUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`;
          const detailResponse = await axios.get(detailUrl);
          const fullDrink = detailResponse.data.drinks[0];

          const ingredients = [];
          for (let i = 1; i <= 15; i++) {
            const ingredient = fullDrink[`strIngredient${i}`];
            const measure = fullDrink[`strMeasure${i}`];
            if (ingredient) {
              ingredients.push(measure ? `${measure.trim()} ${ingredient}` : ingredient);
            }
          }

          return { drink: fullDrink, ingredients };
        } catch (err) {
          console.error(`Error fetching details for ID ${drink.idDrink}:`, err.message);
          return null; // Skip this drink if error
        }
      });

      const detailedDrinks = await Promise.all(detailPromises);
      cocktails = detailedDrinks.filter(item => item !== null); // remove failed ones

    } else {
      cocktails = drinks.map((drink) => {
        const ingredients = [];
        for (let i = 1; i <= 15; i++) {
          const ingredient = drink[`strIngredient${i}`];
          const measure = drink[`strMeasure${i}`];
          if (ingredient) {
            ingredients.push(measure ? `${measure.trim()} ${ingredient}` : ingredient);
          }
        }
        return { drink, ingredients };
      });
    }

    res.render("index", { cocktails, error: null });

  } catch (err) {
   // console.error("Main Search Error:", err.message);
    res.render("index", { cocktails: [], error: "Something went wrong while fetching data." });
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
