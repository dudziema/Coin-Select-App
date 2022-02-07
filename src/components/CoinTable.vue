<template>
  <div class="container__table--element">
    <table>
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index">
            {{ column.field }}
          </th>
        </tr>
      </thead>
      <tbody>
        <CoinRow
          v-for="(coins, index) in coinsInfo"
          :key="index"
          :coins="coins"
        />
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import CoinRow from "@/components/CoinRow.vue";

export default {
  name: "CoinTable",
  components: {
    CoinRow,
  },
  data() {
    return {
      columns: [
        {
          label: "#",
          field: "#",
        },
        {
          label: "coin-name",
          field: "Coin",
        },
        {
          label: "coin-price",
          field: "Price",
        },
        {
          label: "coin_price_change",
          field: "Price change",
        },
        {
          label: "24_volume",
          field: "24 Volume",
        },
      ],
      coinsInfo: null,
      loading: true,
      errored: false,
    };
  },
  mounted() {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        this.coinsInfo = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>
<style lang="sass">
// color pallet
$grey: #e5e5e5


.container__table--element
    position: relative
    width:100%
    display: flex

    table
        width:100%
        max-width: 100%
        margin-bottom:20px
        background-color: $grey
        border-spacing: 0
        overflow:hidden
        border-collapse: collapse

        display: table
        border-spacing: 2px
        margin: 0 1rem 0 1rem

    thead
        background-color: $grey
        color: black
        height: 2rem

    tbody
        display: table-row-group
        vertical-align: middle
        border-color: inherit

    tr
        display: table-row
        vertical-align: inherit
        border-color: inherit
        height: 3rem

    th
        text-align: left
        padding:0.5rem
        border-bottom: 1px solid black

    th:nth-child(1)
        border-radius: 0.5rem 0 0 0.5rem

    th:nth-child(5)
        border-radius:  0 0.5rem 0.5rem 0

    td
        display: table-cell
        vertical-align: inherit
        padding:0.5rem
        border-bottom: 1px solid rgba(0,0,0,.12)
</style>
