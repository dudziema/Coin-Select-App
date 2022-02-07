<template>
  <div class="container__table--element">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Coin</th>
          <th>Price</th>
          <th>Price Change</th>
          <th>24 Volume</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>TestCoin</td>
          <td>24 USD</td>
          <td>0,65%</td>
          <td>11,40USD</td>
        </tr>
        <tr>
          <td>2</td>
          <td>TestCoin</td>
          <td>24 USD</td>
          <td>0,65%</td>
          <td>11,40USD</td>
        </tr>
        <tr>
          <td>3</td>
          <td>TestCoin</td>
          <td>24 USD</td>
          <td>0,65%</td>
          <td>11,40USD</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "CoinTable",
};
</script>
<style lang="sass" scoped>
// color pallet
$mint-cream: #F4FFFD
$oxford-blue: #011936
$black-coral: #465362
$naples-yellow: #F9DC5C
$red-crayola:#ED254E


table
    width:100%
    max-width: 100%
    margin-bottom:20px
    background-color: $mint-cream
    border-spacing: 0
    border-collapse: collapse
    display: table
    border-color: $oxford-blue
    border-spacing: 2px
    border: 1px solid $oxford-blue

tbody
    display: table-row-group
    vertical-align: middle
    border-color: inherit

tr
    display: table-row
    vertical-align: inherit
    border-color: inherit
    border: 1px solid $oxford-blue
th
    text-align: left
    padding:0
    border: 1px solid $oxford-blue

td
    display: table-cell
    vertical-align: inherit
    border: 1px solid $oxford-blue
</style>
