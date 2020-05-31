import { createFetch } from './createFetch';

export const translateWords = async (str, lang) => {
  const yandApiKey = 'trnsl.1.1.20200504T183529Z.cb3603e3ad5a2564.ae17d80755908eb850c5ec74d22ce14e1532b491';
  
  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${yandApiKey}
  &text=${str}&lang=${lang}`;
  
  const result = await createFetch(url);
  return result.text[0];
};
