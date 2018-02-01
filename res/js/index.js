// CONTAINERS
flexbox = document.body.querySelector('#flexbox')

// BUTTONS
toggleButton = document.body.querySelector('#toggle-flex');
toggleDirection = document.body.querySelector('#toggle-direction')
toggleReverse = document.body.querySelector('#toggle-reverse')

toggleButton.addEventListener('click', () => {
  flexbox.style.display === 'flex' ? flexbox.style.display = 'block' : flexbox.style.display = 'flex';
})

toggleDirection.addEventListener('click', () => {
  flexbox.style.flexDirection === 'row' ? flexbox.style.flexDirection = 'column' : flexbox.style.flexDirection = 'row';
})

toggleReverse.addEventListener('click', () => {
  if(flexbox.style.flexDirection === 'row' || flexbox.style.flexDirection === 'row-reverse' || flexbox.style.flexDirection === '') {
    flexbox.style.flexDirection === 'row' ? flexbox.style.flexDirection = 'row-reverse' : flexbox.style.flexDirection = 'row';
  } else {
    flexbox.style.flexDirection === 'column' ? flexbox.style.flexDirection = 'column-reverse' : flexbox.style.flexDirection = 'column';
  }
})
