import * as api from './api';
import config from '../config.js';

export function getDetails(accessToken) {
    return api.get(`${config.serverUrl}/me?access_token=${accessToken}&fields=id,name,email,gender,picture`);
}
