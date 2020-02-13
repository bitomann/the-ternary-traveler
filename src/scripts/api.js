const baseUrl = "http://localhost:5000/";

const API = {

    getAllPlaces(){
        return fetch(`${baseUrl}places`)
        .then(response => response.json())
    },

    getAllInterests(){
        return fetch(`${baseUrl}interests`)
        .then(response => response.json())
    }

}