import 'core-js/stable'; //polyph anything else
import 'regenerator-runtime/runtime'; //polyph async/await
import * as model from './model.js';
import recipeView from './views/recipeView.js'

const recipeContainer = document.querySelector('.recipe');

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
    console.log(err);
  }
}

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
}

init();