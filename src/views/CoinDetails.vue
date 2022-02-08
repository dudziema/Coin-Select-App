<template>
  <div class="container__details">
    <div v-if="errored" class="container__details--error">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </div>

    <div class="container__details--loading" v-else>
      <div v-if="loading">Loading...</div>

      <div v-else class="container__details--coin">
        <h1>
          <img :src="coin.image.small" /> {{ coin.name }} ({{ coin.symbol }})
        </h1>
        <p>
          <a :href="coin.links.homepage[0]">{{ coin.links.homepage[0] }}</a>
        </p>
        <p>Created: {{ coin.genesis_date }}</p>

        <p
          v-html="coin.description.en"
          style="text-decoration: none, color: black "
          id="description"
        ></p>
      </div>
    </div>
  </div>
</template>
<script>
import APIService from "../services/APIservice";

export default {
  props: {
    coinId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      coin: null,
      loading: true,
      errored: false,
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
<style lang="sass" scoped>
.container__details
    position: relative

    display: flex
    flex-direction: column
    margin: 2rem

.container__details--coin
    margin: 3rem
    padding: 1rem
    background-color: white
    border-radius: 18px
p 
    margin: 1rem
#description
    text-align: left
    text-decoration: none
    color: black
    line-height: 1.2
    a:link
        text-decoration: none
        color: black
    a:visited
        text-decoration: none
        color: black
    a:hover
        text-decoration: none
        color: black
    a:active
        text-decoration: none
        color: black
</style>
