const numberError = ['401', '403', '404', '405', '406', '409', '411', '412', '413', '415', 
'416', '422', '423', '429', '500', '503', '504', '507', '509'];

export const createFetch = async (fetchURL) => {
  let resFetch = null;
  try {
    resFetch = await fetch(fetchURL);
    if (resFetch.Response && numberError.includes(resFetch.Response.status)) {
      throw new Error;
    }
  }
  catch (err) {
    console.log('error, sorry');
  }
  const resultResp = await resFetch.json();
  
  return resultResp;
};
