import axios from 'axios';

export const currencyApi = {
    getCurrency() {
        return axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`)
            .then(res => res.data)
            .catch(e => console.log(e));
    }
};
