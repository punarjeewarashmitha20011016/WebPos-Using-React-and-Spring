import axios from '../../axios/axios'

class UserService {
    fetchUsers = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('users')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }
    postUser = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('users', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    putUser = async (data, id) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('users/' + id, data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    deleteUser = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('users', {params: params})
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

export default new UserService();