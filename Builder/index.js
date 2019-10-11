
let i = 0
let total = 0
function buttonPress() {
  if (item && amount) {
    document.querySelector('button').removeAttribute('disabled')
addItem()
  }
}
function addItem() {
  i++
  const trashCan = document.createElement('img')
  trashCan.src = "../assets/trash_can.svg"
  trashCan.setAttribute('onclick', 'removeItem(event)')
  const boxForAll = document.createElement('li')
  let item = document.getElementById('name').value
  let amount = document.getElementById('amnt').value
  const boxForItem = document.createElement('span')
  boxForItem.innerText = `${item}`
  const boxForAmount = document.createElement('p')
  boxForAmount.setAttribute('class', 'amount-total')
  boxForAmount.innerText = `${amount}`
  const unList = document.getElementById('list')
  const liBox = unList.appendChild(boxForAll)
  liBox.appendChild(trashCan)
  liBox.insertBefore(boxForAmount, trashCan)
  liBox.insertBefore(boxForItem, boxForAmount)
  totalReturn()
  // console.log(item, amount)
  
}


function totalReturn() {
  let amounts = document.querySelectorAll('.amount-total')
  let total = 0
  for (var j = 0; j < amounts.length; j++) {
    total += Number(amounts[j].innerText)
  }
  let totalDisplay = document.getElementById('amount')
  totalDisplay.innerText = `$${total}`
  let inputClear = document.getElementsByTagName('input')
  inputClear[0].value = ''
  inputClear[1].value = ''
}


function removeItem (event) {
  let clear = event.target.parentNode
  clear.remove()
  totalReturn()
}
