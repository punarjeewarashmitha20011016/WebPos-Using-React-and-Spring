import axios from '../../axios/axios'

class ItemService {
    fetchItems = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('items')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }
    postItems = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('items', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    putItems = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('items', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    deleteItems = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('items', {params: params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };
}

export default new ItemService();