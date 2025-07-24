const { httpGet } = require('./mock-http-interface');

const createRequest = async(url) => {
  try{
    const response = await httpGet(url);
    const {message} = JSON.parse(response.body);
    if (response.status === 200) {
      return {'Arnie Quote':message};
    }else {
      return{'FAILURE':message};
    }
  }catch (error) {
    console.error('Error fetching Arnie quote:', error);
    return {'FAILURE': 'Error fetching quote'};
  }
}

const getArnieQuotes = async (urls) => {
  const promises = urls.map(url => createRequest(url));
  return Promise.all(promises);
}

module.exports = {
  getArnieQuotes,
};
