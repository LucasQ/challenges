import axios from '../axios';

async function getData() {
  try {
    const result = await axios.get('/ifood');
    return result.data;
  } catch (err) {
    return err;
  }
}

export default getData;
