// const numerical = document.getElementById('sort-numerical');
// numerical.addEventListener('click', toggle);

// const buttons = document.getElementsByTagName("button");
const wrapper = document.querySelector('.chart');

animateCSSGrid.wrapGrid(wrapper, { duration: 400 });

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