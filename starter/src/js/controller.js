import 'core-js/stable'; //polyph anything else
import 'regenerator-runtime/runtime'; //polyph async/await
import * as model from './model.js';
import recipeView from './views/recipeView.js'

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// API https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



const controlRecipes = async function () {

  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    //loading recipe
    await model.loadRecipe(id);

    //Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
}

controlRecipes();

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipes))
// https://forkify-api.herokuapp.com/api/v2/recipes

