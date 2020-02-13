import API from './api.js'
import htmlFactory from './htmlFactory.js'

const ideasContainer = document.getElementById("ideas_container");

const render = {
  renderAllPlaces() {
    API.getAllPlaces()
      .then(places => {
        appContainer.innerHTML = "";
        places.forEach(place => appContainer.innerHTML += htmlFactory(place))
        events.addDeleteBtnListeners();
      })
  },
  renderAllInterests() {
    API.getAllInterests()
      .then(interests => {
        appContainer.innerHTML = "";
        interests.forEach(interest => appContainer.innerHTML += htmlFactory(interest))
        events.addDeleteBtnListeners();
      })
  }
}

export default render