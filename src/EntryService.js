import axios from 'axios';

const apiUrl = 'api/entries';

class EntryService {
    //Get all entries
    static async getEntries() {
        const data = await axios.get(apiUrl);
        return data.data;
    }
    //Create entry
    static createEntry(text) {
        return axios.post(apiUrl, {
            text
        });
    }
    //delete entry
    static deleteEntry(id) {
        return axios.delete(`${apiUrl}/${id}`);
    }
    //patch entry
    static patchEntry(id) {
        return axios.patch(`${apiUrl}/${id}`);
    }
}

export default EntryService;
