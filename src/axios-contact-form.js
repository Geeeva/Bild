import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://bild-message-form.firebaseio.com/'
})

export default instance;