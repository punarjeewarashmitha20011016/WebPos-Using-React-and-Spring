import axios from "../axios";

class ProductService{
    postProduct = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('products', data)  
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    };

    fetchProduct = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    fetchAsingleProduct= async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products',{params:params})    
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    };

    fetchAllProductCategories = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products/categories')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    fetchLimitGetAllProducts= async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products',{params:params})    
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    };

    putProduct = async (data) => {
        const promise = new Promise((resolve, reject) => {
           axios.put('products', data)
           .then((res) => {
               return resolve(res)
           })
           .catch((err) => {
               return resolve(err)
           })
        })
        return await promise;
   };

    deleteProduct = async (params) => {
        const promise = new Promise((resolve, reject) => {
           axios.delete('products', {params: params})
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

export default new ProductService();