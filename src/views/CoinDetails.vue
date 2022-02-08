<template>
  <div class ="details__cointainer">
    <h1><img :src="coin.image.small" /> {{ coin.name }} ({{ coin.symbol }})</h1>
    <p>
      Website adress:
      <a :href="coin.links.homepage[0]">{{ coin.links.homepage[0] }}</a>
    </p>
    <p>Year of release: {{ coin.genesis_date }}</p>
   Description:<p v-html="coin.description.en"></p>
  </div>
</template>
<script>
import APIService from "../services/APIservice";

export default {
  data() {
    return {
      coin: null,
      coinId: "bitcoin",
    };
  },
  created() {
    APIService.getCoin(this.coinId)
      .then((response) => {
        this.coin = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

