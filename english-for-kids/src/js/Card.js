export class Card { 
  constructor({word, translation, image, audioSrc}) {
    this.word = word;
    this.translation = translation;
    this.image = image;
    this.audioSrc = audioSrc;
  }

  generateCard() {
    let template = '';
    const oneCard = document.createElement('div');
    oneCard.className = 'card-wrap';
    const innerDiv = document.createElement('div');
    innerDiv.className = 'card-container voc-card';
    innerDiv.setAttribute('data-audio', this.audioSrc);

    if (this.image) {
      template += `<div class="front" style="background-image: url(${this.image})">`;
      if (this.word) {
        template += `<span class="card-name">${this.word}</span> </div>`
      }
      template += `<div class="back" style="background-image: url(${this.image})">`
      if (this.translation) {
        template += `<span class="card-name"> ${this.translation}</span>`;
      }
      template += ' </div>';
    }
    
    const rotate = document.createElement('div');
    rotate.className = 'rotate';
    rotate.innerHTML = '<img src="./src/img/rotate.svg" alt="rotate">';

    innerDiv.innerHTML = template;
    innerDiv.append(rotate);
    oneCard.append(innerDiv);

    return oneCard;
  }
}