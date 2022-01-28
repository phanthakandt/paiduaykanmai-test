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