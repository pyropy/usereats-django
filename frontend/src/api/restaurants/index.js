import axios from 'axios';

export const restaurants = {
    getRestaurants() {
        return axios.get("api/restaurants").then((res) => res.data);
    },

    getRestaurant(id) {
        return axios.get(`api/restaurants/${id}`).then((res) => res.data);
    },

    searchRestaurants(query) {
        return axios.get(`api/restaurants/?search=${query}`).then((res) => res.data);
    }
}