// CONTAINERS
flexbox = document.body.querySelector('#flexbox');


// BUTTONS
removeBox = document.body.querySelector('#remove-box');
addBox = document.body.querySelector('#add-box');
toggleButton = document.body.querySelector('#toggle-flex');
toggleDirection = document.body.querySelector('#toggle-direction');
toggleReverse = document.body.querySelector('#toggle-reverse');
toggleWrap = document.body.querySelector('#toggle-wrap');
toggleWrapReverse = document.body.querySelector('#toggle-wrap-reverse');
toggleJustStart = document.body.querySelector('#just-start');
toggleJustEnd = document.body.querySelector('#just-end');
toggleCenter = document.body.querySelector('#just-center');
toggleSpaceBetween = document.body.querySelector('#just-between');
toggleSpaceAround = document.body.querySelector('#just-around');
toggleAlignStart = document.body.querySelector('#align-start');
toggleAlignEnd = document.body.querySelector('#align-end');
toggleAlignCenter = document.body.querySelector('#align-center');
toggleAlignBaseline = document.body.querySelector('#align-baseline');
toggleAlignStretch = document.body.querySelector('#align-stretch');
toggleAlignContStart = document.body.querySelector('#align-cont-start');
toggleAlignContEnd = document.body.querySelector('#align-cont-end');
toggleAlignContCenter = document.body.querySelector('#align-cont-center');
toggleAlignContStretch = document.body.querySelector('#align-cont-stretch');
toggleAlignContBetween = document.body.querySelector('#align-cont-between');
toggleAlignContAround = document.body.querySelector('#align-cont-around');

// CONTENT EVENT LISTENERS //

let boxCounter = 5;
flexbox.innerHTML = flexbox.innerHTML.replace(/\s+$/, '');

addBox.addEventListener('click', () => {
  if(boxCounter < 15){
    boxCounter += 1;
    flexbox.innerHTML += addBoxHTML(boxCounter)
    console.log(boxCounter);
  } else {
    console.log('cannot add more boxes');
  }
})

removeBox.addEventListener('click', () => {
  if(boxCounter > 5) {
    boxCounter -= 1;
    flexbox.innerHTML = removeBoxHTML()
  } else {
    console.log('cannot remove anymore boxes');
  }
  })

// BOX HELPER FUNCTIONS //

  function addBoxHTML(colorId) {

    let color;

    switch(colorId){
      case 6 :
      case 11 :
        color = 'red'
        break;
      case 7 :
      case 12:
        color = 'green'
        break;
      case 8 :
      case 13 :
        color = 'blue'
        break;
      case 9 :
      case 14 :
        color = 'purple'
        break;
      case 10 :
      case 15 :
        color = 'orange'
        break;
    }
    return `\n      <div id='${colorId}' class='box ${color}'></div>`
  }

  function removeBoxHTML() {
    let currentBoxesArr = flexbox.innerHTML.split('      ')
    currentBoxesArr.pop()
    let currentBoxHTML = currentBoxesArr.join('      ')
    return currentBoxHTML
  }

// CSS EVENT LISTENERS //
toggleButton.addEventListener('click', () => {
  flexbox.style.display === 'block' ? flexbox.style.display = 'flex' : flexbox.style.display = 'block';
})

toggleDirection.addEventListener('click', () => {
  flexbox.style.flexDirection === 'column' ? flexbox.style.flexDirection = 'row' : flexbox.style.flexDirection = 'column';
})

toggleReverse.addEventListener('click', () => {
  if(flexbox.style.flexDirection === 'row' || flexbox.style.flexDirection === 'row-reverse' || flexbox.style.flexDirection === '') {
    flexbox.style.flexDirection === 'row' ? flexbox.style.flexDirection = 'row-reverse' : flexbox.style.flexDirection = 'row';
  } else {
    flexbox.style.flexDirection === 'column' ? flexbox.style.flexDirection = 'column-reverse' : flexbox.style.flexDirection = 'column';
  }
})

toggleWrap.addEventListener('click', () => {
  console.log(flexbox.style.flexWrap);
  flexbox.style.flexWrap === 'wrap' ? flexbox.style.flexWrap = 'nowrap' : flexbox.style.flexWrap = 'wrap';
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
  console.log('test');
  flexbox.style.justifyContent = 'flex-start'
})
toggleJustEnd.addEventListener('click', () => {
  console.log('test')
  flexbox.style.justifyContent = 'flex-end'
})
toggleCenter.addEventListener('click', () => {
  console.log('test')
  flexbox.style.justifyContent = 'center'
})
toggleSpaceBetween.addEventListener('click', () => {
  console.log('test')
  flexbox.style.justifyContent = 'space-between'
})
toggleSpaceAround.addEventListener('click', () => {
  console.log('test')
  flexbox.style.justifyContent = 'space-around'
})

// ALIGN ITEMS MENU

toggleAlignStart.addEventListener('click', () => {
  console.log('test');
  flexbox.style.alignItems = 'flex-start'
})
toggleAlignEnd.addEventListener('click', () => {
  console.log('test')
  flexbox.style.alignItems = 'flex-end'
})
toggleAlignCenter.addEventListener('click', () => {
  console.log('test')
  flexbox.style.alignItems = 'center'
})
toggleAlignBaseline.addEventListener('click', () => {
  console.log('test')
  flexbox.style.alignItems = 'baseline'
})
toggleAlignStretch.addEventListener('click', () => {
  console.log('test')
  flexbox.style.alignItems = 'stretch'
})

// ALIGN CONTENT MENU

toggleAlignContStart.addEventListener('click', () => {
  console.log('test');
  flexbox.style.alignContent = 'flex-start'
})
toggleAlignContEnd.addEventListener('click', () => {
  console.log('test');
  flexbox.style.alignContent = 'flex-end'
})
toggleAlignContCenter.addEventListener('click', () => {
  console.log('test');
  flexbox.style.alignContent = 'center'
})
toggleAlignContStretch.addEventListener('click', () => {
  console.log('test');
  flexbox.style.alignContent = 'stretch'
})
toggleAlignContBetween.addEventListener('click', () => {
  console.log('test');
  flexbox.style.alignContent = 'space-between'
})
toggleAlignContAround.addEventListener('click', () => {
  console.log('test');
  flexbox.style.alignContent = 'space-around'
})
