// CONTAINERS
flexbox = document.body.querySelector('#flexbox');


// BUTTONS
const removeBox = document.body.querySelector('#remove-box');
const addBox = document.body.querySelector('#add-box');
const toggleButton = document.body.querySelector('#button-display');
const toggleDirection = document.body.querySelector('#button-flex-direction');
const toggleReverse = document.body.querySelector('#button-toggle-reverse');
const toggleWrap = document.body.querySelector('#button-flex-wrap');
const toggleWrapReverse = document.body.querySelector('#button-flex-wrap-reverse');
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

const justifyContentObj = {
  'toggle': document.body.querySelector('#button-justify-content'),
  'textDisplay': document.body.querySelector('#text-justify-content'),
  'counter': 1
}

const alignItemsObj = {
  'toggle': document.body.querySelector('#button-align-items'),
  'textDisplay': document.body.querySelector('#text-align-items'),
  'counter': 1
}

const alignContentObj = {
  'toggle': document.body.querySelector('#button-align-content'),
  'textDisplay': document.body.querySelector('#text-align-content'),
  'counter': 1
}

const alignItemObj = {
  'start' : document.body.querySelector('#align-self-start'),
  'end' : document.body.querySelector('#align-self-end'),
  'center' : document.body.querySelector('#align-self-center'),
  'baseline' : document.body.querySelector('#align-self-baseline'),
  'stretch' : document.body.querySelector('#align-self-stretch'),
}

const flexGrowObj= {
  'submit' : document.body.querySelector('#grow-submit'),
  'input' : document.body.querySelector('#grow-input')
}

const flexShrinkObj = {
  'submit' : document.body.querySelector('#shrink-submit'),
  'input' : document.body.querySelector('#shrink-input')
}

const flexBasisObj = {
  'submit' : document.body.querySelector('#basis-submit'),
  'input' : document.body.querySelector('#basis-input')
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
    flexTextObj.display.innerText = 'display : flex'
  } else {
    flexbox.style.display = 'block';
    flexTextObj.display.innerText = 'display : block'
  }


})

toggleDirection.addEventListener('click', () => {
  if(flexbox.style.flexDirection === 'column') {
    flexbox.style.flexDirection = 'row'
    flexTextObj.direction.innerText = 'flex-direction : row'
  } else {
    flexbox.style.flexDirection = 'column'
    flexTextObj.direction.innerText = 'flex-direction : column'
  }
})

toggleReverse.addEventListener('click', () => {
  if(flexbox.style.flexDirection === 'row' || flexbox.style.flexDirection === 'row-reverse' || flexbox.style.flexDirection === '') {
    flexbox.style.flexDirection === 'row-reverse' ? flexbox.style.flexDirection = 'row' : flexbox.style.flexDirection = 'row-reverse';
    flexTextObj.direction.innerText === 'flex-direction : row' ? flexTextObj.direction.innerText = 'flex-direction : row-reverse' : flexTextObj.direction.innerText = 'flex-direction : row'
  } else {
    flexbox.style.flexDirection === 'column' ? flexbox.style.flexDirection = 'column-reverse' : flexbox.style.flexDirection = 'column';
    flexTextObj.direction.innerText === 'flex-direction : column' ? flexTextObj.direction.innerText = 'flex-direction : column-reverse' : flexTextObj.direction.innerText = 'flex-direction : column'
  }
})

toggleWrap.addEventListener('click', () => {
  if(flexbox.style.flexWrap === 'wrap') {
    flexbox.style.flexWrap = 'nowrap'
    flexTextObj.wrap.innerText = 'flex-wrap : nowrap'
  } else {
    flexbox.style.flexWrap = 'wrap'
    flexTextObj.wrap.innerText = 'flex-wrap : wrap'
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

// JUSTIFY CONTENT

justifyContentObj.toggle.addEventListener('click', () => {
  justifyContentCycle()
})

function justifyContentCycle() {
  switch(justifyContentObj.counter) {
    case 0:
      flexbox.style.justifyContent = 'flex-start'
      justifyContentObj.counter += 1
      break;
    case 1:
      flexbox.style.justifyContent = 'flex-end'
      justifyContentObj.counter += 1
      break;
    case 2:
      flexbox.style.justifyContent = 'center'
      justifyContentObj.counter += 1
      break;
    case 3:
      flexbox.style.justifyContent = 'space-between'
      justifyContentObj.counter += 1
      break;
    case 4:
      flexbox.style.justifyContent = 'space-around'
      justifyContentObj.counter += 1
      break;
  }
  justifyContentObj.textDisplay.innerText = `justify-content : ${flexbox.style.justifyContent}`;
  (justifyContentObj.counter === 5) ? justifyContentObj.counter = 0 : false;
}

// ALIGN ITEMS

alignItemsObj.toggle.addEventListener('click', () => {
  alignItemsCycle()
})

function alignItemsCycle() {
  switch(alignItemsObj.counter) {
    case 0:
    flexbox.style.alignItems = 'flex-start'
    alignItemsObj.counter += 1
      break;
    case 1:
    flexbox.style.alignItems = 'flex-end'
    alignItemsObj.counter += 1
      break;
    case 2:
    flexbox.style.alignItems = 'center'
    alignItemsObj.counter += 1
      break;
    case 3:
    flexbox.style.alignItems = 'baseline'
    alignItemsObj.counter += 1
      break;
    case 4:
    flexbox.style.alignItems = 'stretch'
    alignItemsObj.counter += 1
      break;
  }
  alignItemsObj.textDisplay.innerText = `align-items : ${flexbox.style.alignItems}`;
  (alignItemsObj.counter === 5) ? alignItemsObj.counter = 0 : false;
}
// ALIGN CONTENT MENU

toggleAlignContStart.addEventListener('click', () => {
  flexbox.style.alignContent = 'flex-start'
  flexTextObj.alignContent.innerText = 'align-content : flex-start'
})
toggleAlignContEnd.addEventListener('click', () => {
  flexbox.style.alignContent = 'flex-end'
  flexTextObj.alignContent.innerText = 'align-content : flex-end'
})
toggleAlignContCenter.addEventListener('click', () => {
  flexbox.style.alignContent = 'center'
  flexTextObj.alignContent.innerText = 'align-content : center'
})
toggleAlignContStretch.addEventListener('click', () => {
  flexbox.style.alignContent = 'stretch'
  flexTextObj.alignContent.innerText = 'align-content : stretch'
})
toggleAlignContBetween.addEventListener('click', () => {
  flexbox.style.alignContent = 'space-between'
  flexTextObj.alignContent.innerText = 'align-content : space-between'
})
toggleAlignContAround.addEventListener('click', () => {
  flexbox.style.alignContent = 'space-around'
  flexTextObj.alignContent.innerText = 'align-content : space-around'
})

// ORDER MENU

orderSubmit.addEventListener('click', (e) => {
  console.log(e.target.value);
  currentTarget.style.order = parseInt(orderInput.value) ;
})

// ALIGN SELF MENU

alignItemObj.start.addEventListener('click', () => {
  currentTarget.style.alignSelf = 'flex-start';
})
alignItemObj.end.addEventListener('click', () => {
  currentTarget.style.alignSelf = 'flex-end';
})
alignItemObj.center.addEventListener('click', () => {
  currentTarget.style.alignSelf = 'center';
})
alignItemObj.baseline.addEventListener('click', () => {
  currentTarget.style.alignSelf = 'baseline';
})
alignItemObj.stretch.addEventListener('click', () => {
  currentTarget.style.alignSelf = 'stretch';
})

// FLEX GROW AND SHRINK AND BASIS MENU

flexGrowObj.submit.addEventListener('click', () => {
  currentTarget.style.flexGrowObj = flexGrowObj.input.value
})


flexShrinkObj.submit.addEventListener('click', () => {
  currentTarget.style.flexShrinkObj = flexShrinkObj.input.value
})

flexBasisObj.submit.addEventListener('click', () => {
  currentTarget.style.flexBasisObj = flexBasisObj.input.value
})
