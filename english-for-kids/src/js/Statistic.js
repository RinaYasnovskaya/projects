export class Statistic {
  constructor({word, translation, train, error, correct}) {
    this.word = word;
    this.translation = translation;
    this.train = train;
    this.error = error;
    this.correct = correct;
  }

  generateStatistic() {
    let template = '';
    const nextLina = document.createElement('tr');

    template += `<td>${this.word}-${this.translation}</td>`;
    template += `<td>${this.train}</td>`;
    template += `<td>${this.error}</td>`;
    template += `<td>${this.correct}</td>`;

    nextLina.innerHTML = template;

    return nextLina;
  }
}