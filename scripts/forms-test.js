import { fetchCached } from './fetch-util.js';

export async function getEmailForm() {
  const response = await getConfig('email-form.json');

  /*
  const result = {};
  response.data.forEach((row) => {
    result[row.ID] = row;
  });

  console.log('RESULT');
  console.log(result);


  return result;

  */

  return response;
}

async function getConfig(filename) {
  if (!filename) throw new Error('filename is required');
  try {
    return await fetchCached(`${filename}`);
  } catch (error) {
    throw new Error(`Error fetching ${filename}: ${error}`, error);
  }
}