// const numerical = document.getElementById('sort-numerical');
// numerical.addEventListener('click', toggle);

// const buttons = document.getElementsByTagName("button");
// const wrapper = document.querySelector('.chart');

// animateCSSGrid.wrapGrid(wrapper, { duration: 400 });

let names = '';
const elements = document.querySelectorAll('[class*="capacity"]');
const available = document.getElementById('available');
const unavailable = document.getElementById('unavailable');
const capacity = document.getElementById('capacity');

Array.from(elements).forEach(element => {
  element.addEventListener('mouseover', showNames, false);
  element.addEventListener('mouseout', removeNames, false);
})

function showNames (event) {
  available.innerHTML = event.target.dataset.available || '';
  unavailable.innerHTML = event.target.dataset.unavailable || '';
  capacity.innerHTML = event.target.dataset.capacity || '';
}

function removeNames (event) {
  available.innerHTML = '';
  unavailable.innerHTML = '';
  capacity.innerHTML = '';
}

function toggle(event) {
  const className = event.target.id;
  wrapper.classList = className;

  for (let button of buttons) {
    if (button.id === event.target.id) {
      event.target.classList = "active";
    } 
    else {
      button.classList.remove('active');
    }
  }
}