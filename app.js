// ANCHOR global variables

const menuItems = [
  {
    name: 'Sprinkles',
    price: 2,
    quantity: 0
  },
  {
    name: 'Chocolate Chip',
    price: 3,
    quantity: 0,
  },
  {
    name: 'Gummy Worms',
    price: 2,
    quantity: 0,
  },
  {
    name: 'Waffle Cone',
    price: 3,
    quantity: 0,
  },
  {
    name: 'Waffle Bowl',
    price: 4,
    quantity: 0,
  },
  {
    name: 'Dipped Cone',
    price: 5,
    quantity: 0,
  },
  {
    name: 'Vanilla Ice Cream',
    price: 3,
    quantity: 0,
  },
  {
    name: 'Chocolate Ice Cream',
    price: 4,
    quantity: 0,
  },
  {
    name: 'Strawberry Ice Cream',
    price: 4,
    quantity: 0,
  },
]

// ANCHOR action / logic

function addItemToCart(indexNumber) {
  const menuItem = menuItems[indexNumber]

  menuItem.quantity++

  drawCartName()
  drawCartQuantity()
  drawCartPrice()
  drawCartTotal()
  drawFullCartTotal()

}

function calculateCartTotal() {

  let total = 0

  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i]
    total += menuItem.price * menuItem.quantity
  }

  return total

}

function checkout() {
  const total = calculateCartTotal()

  if (total == 0) {
    window.alert("Please add something to your cart!!! 🤬")
  }

  window.alert(`Your order has been confirmed. your total was $${total}!`)

  clearCart()
  drawCartName()
  drawCartQuantity()
  drawCartPrice()
  drawCartTotal()
  drawFullCartTotal()
}

function clearCart() {
  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i]
    menuItem.quantity = 0
  }
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
function drawCartPrice() {
  let itemNames = ''

  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i]

    if (menuItem.quantity > 0) {
      itemNames += `<p>$${menuItem.price}<p/>`
    }

  }

  const priceListElem = document.getElementById('priceList')
  priceListElem.innerHTML = itemNames

}
function drawCartTotal() {
  let itemNames = ''

  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i]

    if (menuItem.quantity > 0) {
      itemNames += `<p>$${menuItem.price * menuItem.quantity}<p/>`
    }

  }

  const totalListElem = document.getElementById('totalList')
  totalListElem.innerHTML = itemNames

}

function drawFullCartTotal() {
  const cartTotalElem = document.getElementById('fullTotal')

  const cartTotal = calculateCartTotal()

  cartTotalElem.innerText = '$' + cartTotal

}

