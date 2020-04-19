export const generateButtons = () => {

  let sortBlock = document.createElement('div');
  sortBlock.className = 'sortBlock';

  const nameButtons = ['sort alphabet', 'sort train', 'sort error', 'sort correct', 'sort percent', 'RESET'];

  nameButtons.forEach((elem) => {
    let button = document.createElement('button');
    button.textContent = `${elem}`;
    sortBlock.append(button);
  });

  document.getElementById('innerVocabulary').append(sortBlock);
}