import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions'

export function setSearchTearm (search) {
  return { type: SET_SEARCH_TERM, searchTerm } // returns correctly shaped action
}

export function addOMDBData (imdbID, omdbData) {
  return { type: ADD_OMDB_DATA, imdbID, omdbData}
}