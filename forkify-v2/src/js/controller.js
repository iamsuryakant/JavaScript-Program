import * as model from './modal.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
import paginationView from './views/paginationView';
import bookmarkView from './views/bookmarkView';
import addRecipeView from './views/addRecipeView';




import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { state } from './modal.js';
import { MODAL_CLOSE_SEC } from './config';

// if(module.hot){
//   module.hot.accept();
// }


const controlRecipes = async function(){
  try{
    const id = window.location.hash.slice(1);

    // console.log(id);
    if(!id) return
    recipeView.renderSpinner();

    resultsView.update(model.getSearchResultPage());

    bookmarkView.update(model.state.bookmarks);

    //Loading recipe

    await model.loadRecipe(id);
    const { recipe } = model.state;


    // Rendering Recipe
    recipeView.render(model.state.recipe);




  }catch (err){
    recipeView.renderError();
  }




};


const controlSearchResults = async function(){

  try{

    resultsView.renderSpinner();
    // Get Search Query
    const query = searchView.getQuery();

    if(!query) return;


    // load search
    await model.loadSearchResults(query);


    // console.log(model.state.search.results);

    // resultsView.render(model.state.search.results);

    resultsView.render(model.getSearchResultPage());

    // Render initial pagination

    paginationView.render(model.state.search);

  }catch(err){
    console.log(err);
  }
};

const controlPagination = function(goToPage){
  // Render New Search Results
  resultsView.render(model.getSearchResultPage(goToPage));

  // Render New pagination buttons

  paginationView.render(model.state.search);
}

const controlServings = function(newServings){

  // Update the recipe servings(in state)
  model.updateServings(newServings);

  // update the recipe view

  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);

};

const controlAddBookmark = function(){
  // 1. Add or remove bookmark
  if(!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2. Update recipe view
  recipeView.update(model.state.recipe);

  // 3. Render bookmarks

  bookmarkView.render(model.state.bookmarks)
};

const controlBookmarks = function(){

  bookmarkView.render(model.state.bookmarks);
};


const controlAddRecipe = async function(newRecipe){

  try{
    // Show Loading Spinner

    addRecipeView.renderSpinner();

   await model.uploadRecipe(newRecipe);

  // console.log(model.state.recipe);

   // Render Recipe
    recipeView.render(model.state.recipe);

    //Success Message

    addRecipeView.renderMessage();

    // Render Bookmark View
    bookmarkView.render(model.state.bookmarks);

    //Change id in the url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);


    //close form window
    setTimeout(function(){
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC*1000);
  }catch(err){
    console.error(err);
    addRecipeView.renderError(err.message);
  }
  //upload the new Recipe data


}


const init = function(){
  bookmarkView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);

}

init();
