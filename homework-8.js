import { productCards } from "./product-cards.js";


const cardsTemplate = document.querySelector('.cards-template');

const cardsGroup = document.querySelector('.cards-group');

prompt('Сколько карточек отобразить на странице?')

productCards.forEach(card => {
  const cardClone = cardsTemplate.content.cloneNode(true)
  cardClone.querySelector('.product-image').src = card.image;
  cardClone.querySelector('.product-category').textContent = card.category;
  cardClone.querySelector('.product-name').textContent = card.name;
  cardClone.querySelector('.product-description').textContent = card.description;
  cardClone.querySelector('.composition').textContent = card.composition;
  
  const compoundList = cardClone.querySelector('.product-compound');
  compoundList.innerHTML = '';
  card.productCompound.forEach(item => {
    const li = document.createElement('li');
    li.className = 'product-compound-item';
    li.textContent = item;
    compoundList.appendChild(li);
  });
  cardClone.querySelector('.product-price-label').textContent = card.priceLabel;
  cardClone.querySelector('.product-price').textContent = card.price;
  cardsGroup.appendChild(cardClone)
});



const cardsName = productCards.reduce((acc, card) => {
  acc.push(`${card.name};`)
  return acc
}, [])

console.log(cardsName)


const productInfo = productCards.reduce((acc, card) => {
  acc.push(`${card.name} - ${card.description}`);
  return acc
}, []);

console.log(productInfo)






