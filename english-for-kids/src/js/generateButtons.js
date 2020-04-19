export const generateButtons = () => {

  let sortBlock = document.createElement('div');
  sortBlock.className = 'sortBlock';

  const nameButtons = ['sort-alphabet', 'sort-train', 'sort-error', 'sort-correct', 'sort-percent', 'reset'];

  nameButtons.forEach((elem) => {
    let button = document.createElement('button');
    button.id = elem;
    button.textContent = elem;
    sortBlock.append(button);
  });

  document.getElementById('innerVocabulary').append(sortBlock);
}