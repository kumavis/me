// i know kung-foo
console.log('%c+', 'font-size: 1px; padding: 180px 320px; line-height: 360px; background: url(http://i.imgur.com/kZfvHRV.gif); background-size: 640px 360px; color: transparent;')

var cardElements = [].slice.apply(document.querySelectorAll('.project-card-container'))
cardElements.forEach(function(cardElement) {
  cardElement.addEventListener('mouseover', selectCard.bind(null, cardElement), false);
  cardElement.addEventListener('touchstart', selectCard.bind(null, cardElement), false);
})

function selectCard(cardElement, event) {
  deselectAllCards()
  cardElement.classList.add('selected')
}

function deselectAllCards() {
  cardElements.forEach(function(cardElement) {
    cardElement.classList.remove('selected')
  })
}
