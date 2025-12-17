import { productCards } from "./product-cards.js";


const cardsTemplate = document.querySelector('.cards-template');

const cardsGroup = document.querySelector('.cards-group');

function showProductCards() {
  const result = Number(prompt('Сколько карточек отобразить?'))
  if (result < 1 || result > 5 || isNaN(result)) {
    return alert('Неверное значение!')
  } else {
    const productCards2 = productCards.slice(productCards.length - result)
    
    return productCards2.forEach(card => {
    const cardClone = cardsTemplate.content.cloneNode(true)
    cardClone.querySelector('.product-image').src = `/images/${card.image}.png`;
    cardClone.querySelector('.product-category').textContent = card.category;
    cardClone.querySelector('.product-name').textContent = card.name;
    cardClone.querySelector('.product-description').textContent = card.description;
    
    const compoundList = cardClone.querySelector('.product-compound');
    compoundList.innerHTML = '';
    card.compound.forEach(item => {
      const li = document.createElement('li');
      li.className = 'product-compound-item';
      li.textContent = item;
      compoundList.appendChild(li);
    });
    cardClone.querySelector('.product-price').textContent = `${card.price} \u20BD`;
    cardsGroup.appendChild(cardClone)
});
  }
}

showProductCards()


const cardsName = productCards.reduce((acc, card) => {
  acc.push(`${card.name};`)
  return acc
}, [])

console.log(cardsName)


const productInfo = productCards.reduce((acc, card) => {
  acc.push(`${card.name} - ${card.description}`);
  return acc
}, []);

console.log(productInfo);