// выбираю корневой элемент
const root = document.querySelector('#root')

// создаем секцию, добавляем класс и вешаем на корневой элемент
const firstSection = document.createElement('section')
firstSection.classList.add('first-section')
root.appendChild(firstSection)

// создаем h1, добавляем текст
const heading = document.createElement('h1')
heading.textContent = 'РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В МИРЕ'

// создаем p, добавляем текст
const paragraphsSection = document.createElement('p')
paragraphsSection.textContent = 'стадионы, газопроводы, мосты, дамбы'

//создаем элемент
const divForNumberItems = document.createElement('div')
divForNumberItems.classList.add('div-for-number-items')

// создаем 4 дива
for (let i = 0; i <= 3; i++) {
  const numberItem = document.createElement('div')
  numberItem.classList.add('number-item')
  const headerNumberItem = document.createElement('h3')
  headerNumberItem.textContent = '26'
  const secondNumberItem = document.createElement('h4')
  secondNumberItem.textContent = 'лет'
  const thirdNumberItem = document.createElement('h5')
  thirdNumberItem.textContent = 'на рынке'
  numberItem.appendChild(headerNumberItem)
  numberItem.appendChild(secondNumberItem)
  numberItem.appendChild(thirdNumberItem)
  divForNumberItems.appendChild(numberItem)
}

// вешаем  все элементы на первую секцию
firstSection.appendChild(heading)
firstSection.appendChild(paragraphsSection)
firstSection.appendChild(divForNumberItems)








