<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td><img :src="coins.image" />{{ coins.name }} {{ coins.symbol }}</td>
    <td>{{ coins.current_price }} &#8364;</td>
    <td>{{ coins.price_change_percentage_24h }} &#37;</td>
    <td>{{ tousandsCoverter(coins.total_volume) }} &#8364;</td>
  </tr>
</template>
<script>
export default {
  name: "CoinRow",
  data() {
    return {};
  },
  props: {
    coins: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    tousandsCoverter(volume) {
      return new Intl.NumberFormat().format(volume);
    },
  },
};
</script>
<style lang="sass" scoped>
img
    width:20px
    margin: 0.2rem 01rem
</style>
