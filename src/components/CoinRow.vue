<template>
  <tr>
    <td>{{ id}}</td>
    <td><img :src = coins.image />{{ coins.name }} {{ coins.symbol }}</td>
    <td>{{ coins.current_price }}</td>
    <td>{{ coins.price_change_percentage_24h }}</td>
    <td>{{ coins.total_volume }}</td>
  </tr>
</template>
<script>
export default {
  name: "CoinRow",
  data() {
    return {
        id: 0
    };
  },
  props: {
    coins: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="sass" scoped>
img
    width:20px
    margin: 0.2rem 01rem
</style>
