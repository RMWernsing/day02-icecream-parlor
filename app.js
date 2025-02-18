// ANCHOR global variables

const menuItems = [
  {
    name: 'sprinkles',
    price: 2,
    quantity: 0
  },
  {
    name: 'chocolate chip',
    price: 3,
    quantity: 0,
  },
  {
    name: 'gummy worms',
    price: 2,
    quantity: 0,
  },
]

// ANCHOR action / logic

function addItemToCart(indexNumber) {
  const menuItem = menuItems[indexNumber]

  if (menuItem == undefined) {
    console.warn(`${indexNumber} is not a valid index`)
  }

  menuItem.quantity++

  drawCartName()
  drawCartQuantity()

}

// ANCHOR drawing (DOM manipulation)

function drawCartName() {
  let itemNames = ''

  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i]

    if (menuItem.quantity > 0) {
      itemNames += `<p>${menuItem.name}<p/>`
    }

  }

  const nameListElem = document.getElementById('nameList')
  nameListElem.innerHTML = itemNames

}
function drawCartQuantity() {
  let itemNames = ''

  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i]

    if (menuItem.quantity > 0) {
      itemNames += `<p>${menuItem.quantity}<p/>`
    }

  }

  const quantityListElem = document.getElementById('quantityList')
  quantityListElem.innerHTML = itemNames

}
function drawCartQuantity() {
  let itemNames = ''

  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i]

    if (menuItem.quantity > 0) {
      itemNames += `<p>${menuItem.quantity}<p/>`
    }

  }

  const quantityListElem = document.getElementById('quantityList')
  quantityListElem.innerHTML = itemNames

}
