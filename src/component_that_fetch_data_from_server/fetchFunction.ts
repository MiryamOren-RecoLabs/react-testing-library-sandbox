import axios from 'axios';

export const fetchData = async ()=> {
    try {
        const res = await axios.get(`https://run.mocky.io/v3/af122629-9783-4552-ae64-d8980c75f47c`);
        return res.data.string_to_display;
    } catch (e) {
        console.error(e);
        return `An error occurred while trying to fetch data, please try again in few minutes`
    }
};