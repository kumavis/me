console.log('%c+', 'font-size: 1px; padding: 180px 320px; line-height: 360px; background: url(http://fc00.deviantart.net/fs71/f/2013/161/6/f/x7f4e8_0ca0a36a67662_000_by_jglascock-d68ks3j.gif); background-size: 640px 360px; color: transparent;')

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
