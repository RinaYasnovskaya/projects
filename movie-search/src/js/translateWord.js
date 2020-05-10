export const translateWord = async (word) => {
  
  const yandApiKey = 'trnsl.1.1.20200504T183529Z.cb3603e3ad5a2564.ae17d80755908eb850c5ec74d22ce14e1532b491';
  const translateTitle = await fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${yandApiKey}
    &text=${word}&lang=ru-en`);
  const result = await translateTitle.json();
  
  return result.text[0];
};