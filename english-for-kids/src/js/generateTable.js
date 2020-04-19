import { Statistic } from './Statistic';

export const generateTable = (localCards) => {
  const theadTitle = ['Word-Translation', 'Train', 'Error', 'Correct', 'Percent'];

  const table = document.createElement('table');
  table.className = 'table';

  const thead = document.createElement('thead');
  thead.className = 'table__thead';
  const line = document.createElement('tr');
  line.className = 'thead__items';

  let template = '';
  for (let i = 0; i < theadTitle.length; i++) {
    template += `<td>${theadTitle[i]}</td>`;
  }

  line.innerHTML = template;
  thead.append(line);
  table.append(thead);

  generateLines(localCards).forEach((elem) => {
    table.append(elem.generateStatistic());
  });
  
  document.getElementById('innerVocabulary').append(table);
}

const generateLines = (cards) => {
  let allNextLine = [];
  cards.forEach((item) => {
    item.forEach((elem) => {
      allNextLine.push(new Statistic(elem));
    });
  });
  return allNextLine;
};
