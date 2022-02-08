import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins",
});

export default {
  getCoins(perPage, page) {
    return apiClient.get("/markets", {
      params: {
        vs_currency: "eur",
        order: "market_cap_desc",
        per_page: perPage,
        page: page,
        sparkline: false,
      },
    });
  },
  getCoin(coinId) {
    return apiClient.get("/"+ coinId);
  },
};
