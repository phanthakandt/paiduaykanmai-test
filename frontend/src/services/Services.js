const axios = require('axios')

export async function create_shop(data) {
    return await axios.post(`${process.env.REACT_APP_API_URL}/add-new-shop`, data)
}

export async function get_shop() {
    return await axios.get(`${process.env.REACT_APP_API_URL}/get-shop`)

}

export async function get_shop_by_id(id) {
    return await axios.get(`${process.env.REACT_APP_API_URL}/get-shop-by-id/${id}`)

}

export async function update_shop(data) {
    return await axios.put(`${process.env.REACT_APP_API_URL}/update-shop`, data)
}

export async function create_product(data) {
    return await axios.post(`${process.env.REACT_APP_API_URL}/add-new-product`, data)
}

export async function get_product() {
    return await axios.get(`${process.env.REACT_APP_API_URL}/get-product`)

}

export async function get_product_by_id(id) {
    return await axios.get(`${process.env.REACT_APP_API_URL}/get-product-by-id/${id}`)

}

export async function get_product_by_owner_id(id) {
    return await axios.get(`${process.env.REACT_APP_API_URL}/get-product-by-owner-id/${id}`)

}

export async function update_product(data) {
    return await axios.put(`${process.env.REACT_APP_API_URL}/update-product`, data)
}

export async function delete_product(id) {
    return await axios.delete(`${process.env.REACT_APP_API_URL}/delete-product/${id}`)
}