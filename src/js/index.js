// global app container
import Search from './models/Search';

const state = {};

const controlSearch = async () => {
  state.search = new Search('pizza');

  await state.search.getRecipes();

  console.log(state.search.result);
};

controlSearch();
