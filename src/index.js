// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code

  // Update Ramen Detail section
  const ramenDetailImage = document.querySelector('.detail-image');
  const ramenDetailName = document.querySelector('.name');
  const ramenDetailRestaurant = document.querySelector('.restaurant');
  ramenDetailImage.src = ramen.image
  ramenDetailName.textContent = ramen.name
  ramenDetailRestaurant.textContent = ramen.restaurant

  // Update Rating section
  const ramenRatingScore = document.getElementById('rating-display')
  const ramenRatingComment = document.getElementById('comment-display')
  ramenRatingScore.textContent = ramen.rating
  ramenRatingComment.textContent = ramen.comment
};

const addSubmitListener = () => {
  // Add code
  const newRamenForm = document.getElementById('new-ramen');
  const ramenMenu = document.getElementById('ramen-menu');
  newRamenForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const newRamenName = document.getElementById('new-name');
    const newRamenRestaurant = document.getElementById('new-restaurant');
    const newRamenImage = document.getElementById('new-image');
    const newRamenRating = document.getElementById('new-rating');
    const newRamenComment = document.getElementById('new-comment');
    const newRamenElement = document.createElement('img');
    newRamenElement.src = newRamenImage.value
    newRamenElement.addEventListener('click', (event) => {
      handleClick(ramen);
    })
    ramenMenu.appendChild(newRamenElement)

  })
}

const displayRamens = () => {
  // Add code
  const ramenMenu = document.getElementById("ramen-menu")
  fetch('http://localhost:3000/ramens')
  .then(response => response.json())
  .then(ramens => {
    ramens.forEach(ramen => {
      const ramenImage = document.createElement('img');
      ramenImage.src = ramen.image
      ramenMenu.appendChild(ramenImage)
      ramenImage.addEventListener('click', (event) => {
        handleClick(ramen)
      })
    });
  })
};

const main = () => {
  document.addEventListener("DOMContentLoaded", () => {
    // Invoke displayRamens here
    displayRamens()
    // Invoke addSubmitListener here
    addSubmitListener()

})

}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
