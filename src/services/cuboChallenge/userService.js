import axios from '../axios';

async function getData() {
  try {
    const result = await axios.get('/cubo');
    return result.data;
  } catch (err) {
    return err;
  }
}

async function insertUser(data) {
  try {
    const result = await axios.post('/cubo', data);
    return result.data;
  } catch (err) {
    return err;
  }
}

export { insertUser, getData };
