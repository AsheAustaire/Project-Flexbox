
flexbox = document.body.querySelector('#flexbox'); //Main FlexBox

//===========================================
//===========================================
// FLEX-BOX TOOLS
//===========================================
//===========================================

// FLEX-BOX SQUARE ELEMENTS

const boxTools = {
  removeBox: document.body.querySelector('#remove-box'),
  addBox: document.body.querySelector('#add-box')
}

let boxCounter = 5;
let currentTarget = 'none';

flexbox.innerHTML = flexbox.innerHTML.replace(/\s+$/, ''); // White Space Fix

boxTools.addBox.addEventListener('click', (e) => {
  if(boxCounter < 50){
    boxCounter += 1;
    flexbox.innerHTML += addBoxHTML(boxCounter);
  } else {
    console.log('cannot add more boxes');
  }
})

boxTools.removeBox.addEventListener('click', () => {
  if(boxCounter > 5) {
    boxCounter -= 1;
    flexbox.innerHTML = removeBoxHTML()
    lastColor = flexbox.lastElementChild.className.split(' ').pop()
  } else {
    console.log('cannot remove anymore boxes');
  }
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

//===========================================
//===========================================
// OBJECTUALIZED FLEX-CONTAINER
//===========================================
//===========================================

const displayObj = {
  'toggle': document.body.querySelector('#button-display'),
  'textDisplay': document.body.querySelector('#text-display'),
  'counter': 1
}

const flexDirectionObj = {
  'toggle': document.body.querySelector('#button-flex-direction'),
  'textDisplay': document.body.querySelector('#text-flex-direction'),
  'counter': 1
}

const flexWrapObj = {
  'toggle': document.body.querySelector('#button-flex-wrap'),
  'textDisplay': document.body.querySelector('#text-flex-wrap'),
  'counter': 1
}

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

//===========================================
//===========================================
// OBJECTUALIZED FLEX-ITEM
//===========================================
//===========================================

const order = {
    'textDisplay': document.body.querySelector('#text-order'),
    'orderInput': document.body.querySelector('#order-input'),
    'orderSubmit': document.body.querySelector('#order-submit')
}

const alignSelfObj = {
  'textDisplay': document.body.querySelector('#text-align-self'),
  'start' : document.body.querySelector('#button-align-self-flex-start'),
  'end' : document.body.querySelector('#button-align-self-flex-end'),
  'center' : document.body.querySelector('#button-align-self-center'),
  'baseline' : document.body.querySelector('#button-align-self-baseline'),
  'stretch' : document.body.querySelector('#button-align-self-stretch'),
}

const flexGrowObj= {
  'textDisplay': document.body.querySelector('#text-grow'),
  'submit' : document.body.querySelector('#grow-submit'),
  'input' : document.body.querySelector('#grow-input')
}

const flexShrinkObj = {
  'textDisplay': document.body.querySelector('#text-shrink'),
  'submit' : document.body.querySelector('#shrink-submit'),
  'input' : document.body.querySelector('#shrink-input')
}

const flexBasisObj = {
  'textDisplay': document.body.querySelector('#text-basis'),
  'submit' : document.body.querySelector('#submit-basis'),
  'input' : document.body.querySelector('#basis-input')
}


//===========================================
//===========================================
// FLEX-CONTAINER EVENTS
//===========================================
//===========================================


// FLEX DISPLAY

//select the flexbox item
flexbox.addEventListener('click', (e) => {
if(e.target.tabIndex === 0) {
  currentTarget = e.target;
  flexBasisObj.textDisplay.innerText = `flex-basis : ${currentTarget.style.flexBasis}`;
  flexGrowObj.textDisplay.innerText = `flex-grow : ${currentTarget.style.flexGrow}`
  flexShrinkObj.textDisplay.innerText = `flex-shrink : ${currentTarget.style.flexShrink}`
  alignSelfObj.textDisplay.innerText = `align-self : ${currentTarget.style.alignSelf}`
  order.textDisplay.innerText = `order : ${currentTarget.style.order}`
}
})

displayObj.toggle.addEventListener('click', () => {
displayCycle()
})

function displayCycle() {
  if(flexbox.style.display === 'block') {
    flexbox.style.display = 'flex'
  } else {
    flexbox.style.display = 'block';
  }
  displayObj.textDisplay.innerText = `display : ${flexbox.style.display}`
}

//FLEX DIRECTION

flexDirectionObj.toggle.addEventListener('click', () => {
  if(flexbox.style.flexDirection === 'column') {
    flexbox.style.flexDirection = 'row'
  } else {
    flexbox.style.flexDirection = 'column'
  }
  flexDirectionObj.textDisplay.innerText = `flex-direction : ${flexbox.style.flexDirection}`
})

// FLEX WRAP
flexbox.style.flexWrap = 'nowrap'

flexWrapObj.toggle.addEventListener('click', () => {
  flexWrapCycle()
})

function flexWrapCycle() {
  if(flexbox.style.flexWrap === 'nowrap') {
    flexbox.style.flexWrap = 'wrap'
  } else if (flexbox.style.flexWrap === 'wrap') {
    flexbox.style.flexWrap = 'wrap-reverse'
  } else if (flexbox.style.flexWrap === 'wrap-reverse') {
    flexbox.style.flexWrap = 'nowrap'
  }
  flexWrapObj.textDisplay.innerText = `flex-wrap : ${flexbox.style.flexWrap}`
}


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
// ALIGN CONTENT

alignContentObj.toggle.addEventListener('click', () => {
  alignContentCycle()
})

function alignContentCycle() {
  switch(alignContentObj.counter) {
    case 0 :
      flexbox.style.alignContent = 'flex-start'
      alignContentObj.counter += 1
      break;
    case 1:
      flexbox.style.alignContent = 'flex-end'
      alignContentObj.counter += 1
      break;
    case 2:
      flexbox.style.alignContent = 'center'
      alignContentObj.counter += 1
      break;
    case 3:
      flexbox.style.alignContent = 'stretch'
      alignContentObj.counter += 1
      break;
    case 4:
      flexbox.style.alignContent = 'space-between'
      alignContentObj.counter += 1
      break;
    case 5:
      flexbox.style.alignContent = 'space-around'
      alignContentObj.counter += 1
      break;
    case 6:
      break;
  }
  alignContentObj.textDisplay.innerText = `align-content : ${flexbox.style.alignContent}`;
  alignContentObj.counter === 6 ? alignContentObj.counter = 0 : false;
  }

//===========================================
//===========================================
// FLEX-ITEM EVENTS
//===========================================
//===========================================


// ORDER MENU

order.orderSubmit.addEventListener('click', (e) => {
  currentTarget.style.order = parseInt(order.orderInput.value) ;
  currentTarget.innerText = order.orderInput.value;
  order.orderInput.value = '';
})

// ALIGN SELF MENU

alignSelfObj.start.addEventListener('click', () => {
  currentTarget.style.alignSelf = 'flex-start';

})
alignSelfObj.end.addEventListener('click', () => {
  currentTarget.style.alignSelf = 'flex-end';
})
alignSelfObj.center.addEventListener('click', () => {
  currentTarget.style.alignSelf = 'center';
})
alignSelfObj.baseline.addEventListener('click', () => {
  currentTarget.style.alignSelf = 'baseline';
})
alignSelfObj.stretch.addEventListener('click', () => {
  currentTarget.style.alignSelf = 'stretch';
})

// FLEX GROW AND SHRINK AND BASIS MENU

flexBasisObj.submit.addEventListener('click', () => {
  console.log('test');
  currentTarget.style.flexBasis = `${flexBasisObj.input.value}px`;
  flexBasisObj.input.value = ''
})

flexGrowObj.submit.addEventListener('click', () => {
  currentTarget.style.flexGrow = flexGrowObj.input.value;
  flexGrowObj.input.value = ''
})

flexShrinkObj.submit.addEventListener('click', () => {
  currentTarget.style.flexShrink = flexShrinkObj.input.value;
  flexShrinkObj.input.value = ''
})
