const htmlFactory = (placesOfInterest) => {
    return `
    <section>
    <h3>${interests.name}</h3>
    <p>${interests.description}</p>
    <p>Rating: ${interests.cost}</p>
    <button id="delete--${interests.review}" class="delete_btn">DELETE</button>
    </section>
    `
  }
  
  export default htmlFactory;