import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false",
  withCredentials: false,
});

export default {
  getCoins(perPage, page) {
    return apiClient.get("/events?_limit=" + perPage + "&_page" + page);
  },
};
