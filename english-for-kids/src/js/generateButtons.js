export const generateButtons = () => {

  let sortBlock = document.createElement('div');
  sortBlock.className = 'sort-block';

  const nameButtons = ['sort-alphabet', 'sort-train', 'sort-error', 'sort-correct', 
                        'sort-percent', 'reset', 'repeat difficult words'];
  let fragment = document.createDocumentFragment();

  nameButtons.forEach((elem) => {
    let button = document.createElement('button');
    button.id = elem;
    button.textContent = elem;
    fragment.append(button);
  });

  sortBlock.append(fragment);
  document.getElementById('innerVocabulary').append(sortBlock);
}