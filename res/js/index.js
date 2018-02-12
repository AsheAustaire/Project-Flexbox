// CONTAINERS
flexbox = document.body.querySelector('#flexbox');


// BUTTONS
const removeBox = document.body.querySelector('#remove-box');
const addBox = document.body.querySelector('#add-box');
const toggleButton = document.body.querySelector('#toggle-flex');
const toggleDirection = document.body.querySelector('#toggle-direction');
const toggleReverse = document.body.querySelector('#toggle-reverse');
const toggleWrap = document.body.querySelector('#toggle-wrap');
const toggleWrapReverse = document.body.querySelector('#toggle-wrap-reverse');
const toggleJustStart = document.body.querySelector('#just-start');
const toggleJustEnd = document.body.querySelector('#just-end');
const toggleCenter = document.body.querySelector('#just-center');
const toggleSpaceBetween = document.body.querySelector('#just-between');
const toggleSpaceAround = document.body.querySelector('#just-around');
const toggleAlignStart = document.body.querySelector('#align-start');
const toggleAlignEnd = document.body.querySelector('#align-end');
const toggleAlignCenter = document.body.querySelector('#align-center');
const toggleAlignBaseline = document.body.querySelector('#align-baseline');
const toggleAlignStretch = document.body.querySelector('#align-stretch');
const toggleAlignContStart = document.body.querySelector('#align-cont-start');
const toggleAlignContEnd = document.body.querySelector('#align-cont-end');
const toggleAlignContCenter = document.body.querySelector('#align-cont-center');
const toggleAlignContStretch = document.body.querySelector('#align-cont-stretch');
const toggleAlignContBetween = document.body.querySelector('#align-cont-between');
const toggleAlignContAround = document.body.querySelector('#align-cont-around');
const orderInput = document.body.querySelector('#order-input')
const orderSubmit = document.body.querySelector('#order-submit')

// I have changed the way I want to organize my selected items.

const alignItems = {
  'start' : document.body.querySelector('#align-self-start'),
  'end' : document.body.querySelector('#align-self-end'),
  'center' : document.body.querySelector('#align-self-center'),
  'baseline' : document.body.querySelector('#align-self-baseline'),
  'stretch' : document.body.querySelector('#align-self-stretch'),
}

const flexGrow = {
  'submit' : document.body.querySelector('#grow-submit'),
  'input' : document.body.querySelector('#grow-input')
}

const flexShrink = {
  'submit' : document.body.querySelector('#shrink-submit'),
  'input' : document.body.querySelector('#shrink-input')
}

const flexBasis = {
  'submit' : document.body.querySelector('#basis-submit'),
  'input' : document.body.querySelector('#basis-input')
}

const flexText = {
  'display': document.body.querySelector('#text-display'),
  'wrap': document.body.querySelector('#text-wrap'),
  'direction': document.body.querySelector('#text-direction'),
  'justifyContent': document.body.querySelector('#text-justify-content'),
  'alignItems': document.body.querySelector('#text-align-items'),
  'alignContent': document.body.querySelector('#text-align-content'),
}


// CONTENT EVENT LISTENERS //

let boxCounter = 5;
let currentTarget;

flexbox.innerHTML = flexbox.innerHTML.replace(/\s+$/, '');

addBox.addEventListener('click', (e) => {
  if(boxCounter < 70){
    boxCounter += 1;
    flexbox.innerHTML += addBoxHTML(boxCounter);
  } else {
    console.log('cannot add more boxes');
  }
})

removeBox.addEventListener('click', () => {
  if(boxCounter > 5) {
    boxCounter -= 1;
    flexbox.innerHTML = removeBoxHTML()
    lastColor = flexbox.lastElementChild.className.split(' ').pop()
  } else {
    console.log('cannot remove anymore boxes');
  }
  })

  //select the flexbox item
flexbox.addEventListener('click', (e) => {
  if(e.target.tabIndex === 0)
  currentTarget = e.target
})


// FLEX-BOX HELPER FUNCTIONS //

  let lastColor = 'orange'

  function addBoxHTML(colorId) {

    let color;

    color = Math.random()

    if(color > .8) {
      color = 'red'
    } else if(color > .6) {
      color = 'green'
    } else if(color > .4) {
      color = 'blue'
    } else if (color > .2) {
      color = 'orange'
    } else {
      color = 'purple'
    }

    if(color === lastColor) {
      return addBoxHTML(colorId)
    } else {
      lastColor = color
      return `\n      <div id='box${colorId}' class='box ${color}' tabindex="0"></div>`
    }
  }

  function removeBoxHTML() {
    let currentBoxesArr = flexbox.innerHTML.split('      ')
    currentBoxesArr.pop()
    let currentBoxHTML = currentBoxesArr.join('      ')
    return currentBoxHTML
  }



// CSS EVENT LISTENERS //
toggleButton.addEventListener('click', () => {
  if(flexbox.style.display === 'block') {
    flexbox.style.display = 'flex'
    flexText.display.innerText = 'display : flex'
  } else {
    flexbox.style.display = 'block';
    flexText.display.innerText = 'display : block'
  }


})

toggleDirection.addEventListener('click', () => {
  if(flexbox.style.flexDirection === 'column') {
    flexbox.style.flexDirection = 'row'
    flexText.direction.innerText = 'flex-direction : row'
  } else {
    flexbox.style.flexDirection = 'column'
    flexText.direction.innerText = 'flex-direction : column'
  }
})

toggleReverse.addEventListener('click', () => {
  if(flexbox.style.flexDirection === 'row' || flexbox.style.flexDirection === 'row-reverse' || flexbox.style.flexDirection === '') {
    flexbox.style.flexDirection === 'row-reverse' ? flexbox.style.flexDirection = 'row' : flexbox.style.flexDirection = 'row-reverse';
    flexText.direction.innerText === 'flex-direction : row' ? flexText.direction.innerText = 'flex-direction : row-reverse' : flexText.direction.innerText = 'flex-direction : row'
  } else {
    flexbox.style.flexDirection === 'column' ? flexbox.style.flexDirection = 'column-reverse' : flexbox.style.flexDirection = 'column';
    flexText.direction.innerText === 'flex-direction : column' ? flexText.direction.innerText = 'flex-direction : column-reverse' : flexText.direction.innerText = 'flex-direction : column'
  }
})

toggleWrap.addEventListener('click', () => {
  if(flexbox.style.flexWrap === 'wrap') {
    flexbox.style.flexWrap = 'nowrap'
    flexText.wrap.innerText = 'flex-wrap : nowrap'
  } else {
    flexbox.style.flexWrap = 'wrap'
    flexText.wrap.innerText = 'flex-wrap : wrap'
  }
})

toggleWrapReverse.addEventListener('click', () => {

  if(flexbox.style.flexWrap === 'wrap') {
    flexbox.style.flexwrap = 'wrap-reverse';
    console.log('test');
  } else if (flexbox.style.flexWrap === 'nowrap') {
    console.log('Set Flexbox Container to Wrap First');
  } else if (flexbox.style.flexwrap === 'wrap-reverse' ) {
    flexbox.style.flextwrap = 'wrap'
  } else {
  }
})

// JUSTIFY CONTENT MENU

toggleJustStart.addEventListener('click', () => {
  flexbox.style.justifyContent = 'flex-start'
  flexText.justifyContent.innerText = 'justify-content : flex-start'
})
toggleJustEnd.addEventListener('click', () => {
  flexbox.style.justifyContent = 'flex-end'
  flexText.justifyContent.innerText = 'justify-content : flex-end'
})
toggleCenter.addEventListener('click', () => {
  flexbox.style.justifyContent = 'center'
  flexText.justifyContent.innerText = 'justify-content : center'
})
toggleSpaceBetween.addEventListener('click', () => {
  flexbox.style.justifyContent = 'space-between'
  flexText.justifyContent.innerText = 'justify-content : space-between'
})
toggleSpaceAround.addEventListener('click', () => {
  flexbox.style.justifyContent = 'space-around'
  flexText.justifyContent.innerText = 'justify-content : space-around'
})

// ALIGN ITEMS MENU

toggleAlignStart.addEventListener('click', () => {
  flexbox.style.alignItems = 'flex-start'
  flexText.alignItems.innerText = 'align-items : flex-start'
})
toggleAlignEnd.addEventListener('click', () => {
  flexbox.style.alignItems = 'flex-end'
  flexText.alignItems.innerText = 'align-items : flex-end'
})
toggleAlignCenter.addEventListener('click', () => {
  flexbox.style.alignItems = 'center'
  flexText.alignItems.innerText = 'align-items : center'
})
toggleAlignBaseline.addEventListener('click', () => {
  flexbox.style.alignItems = 'baseline'
  flexText.alignItems.innerText = 'align-items : baseline'
})
toggleAlignStretch.addEventListener('click', () => {
  flexbox.style.alignItems = 'stretch'
  flexText.alignItems.innerText = 'align-items : stretch'
})

// ALIGN CONTENT MENU

toggleAlignContStart.addEventListener('click', () => {
  flexbox.style.alignContent = 'flex-start'
  flexText.alignContent.innerText = 'align-content : flex-start'
})
toggleAlignContEnd.addEventListener('click', () => {
  flexbox.style.alignContent = 'flex-end'
  flexText.alignContent.innerText = 'align-content : flex-end'
})
toggleAlignContCenter.addEventListener('click', () => {
  flexbox.style.alignContent = 'center'
  flexText.alignContent.innerText = 'align-content : center'
})
toggleAlignContStretch.addEventListener('click', () => {
  flexbox.style.alignContent = 'stretch'
  flexText.alignContent.innerText = 'align-content : stretch'
})
toggleAlignContBetween.addEventListener('click', () => {
  flexbox.style.alignContent = 'space-between'
  flexText.alignContent.innerText = 'align-content : space-between'
})
toggleAlignContAround.addEventListener('click', () => {
  flexbox.style.alignContent = 'space-around'
  flexText.alignContent.innerText = 'align-content : space-around'
})

// ORDER MENU

orderSubmit.addEventListener('click', (e) => {
  console.log(e.target.value);
  currentTarget.style.order = parseInt(orderInput.value) ;
})

// ALIGN SELF MENU

alignItems.start.addEventListener('click', () => {
  currentTarget.style.alignSelf = 'flex-start';
})
alignItems.end.addEventListener('click', () => {
  currentTarget.style.alignSelf = 'flex-end';
})
alignItems.center.addEventListener('click', () => {
  currentTarget.style.alignSelf = 'center';
})
alignItems.baseline.addEventListener('click', () => {
  currentTarget.style.alignSelf = 'baseline';
})
alignItems.stretch.addEventListener('click', () => {
  currentTarget.style.alignSelf = 'stretch';
})

// FLEX GROW AND SHRINK AND BASIS MENU

flexGrow.submit.addEventListener('click', () => {
  currentTarget.style.flexGrow = flexGrow.input.value
})


flexShrink.submit.addEventListener('click', () => {
  currentTarget.style.flexShrink = flexShrink.input.value
})

flexBasis.submit.addEventListener('click', () => {
  currentTarget.style.flexBasis = flexBasis.input.value
})
