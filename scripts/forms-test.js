import { fetchCached } from './fetch-util.js';

export async function getEmailForm() {
debugger;
  const response = await getConfig('email-form.json');
  const result = {};
  response.data.forEach((row) => {
    result[row.ID] = row.Value;
  });
  return result;
}

async function getConfig(filename) {
  if (!filename) throw new Error('filename is required');
  try {
    return await fetchCached(`${filename}`);
  } catch (error) {
    throw new Error(`Error fetching ${filename}: ${error}`, error);
  }
}