<template>
  <div class="container__searchbar--input">
    <input id="searchbar" type="text" placeholder="Search coin" />

  </div>
</template>
<script>
export default {
  name: "SearchBar",
};
</script>
<style lang="sass" scoped>
// color pallet
$mint-cream: #F4FFFD
$oxford-blue: #011936
$black-coral: #465362
$naples-yellow: #F9DC5C
$red-crayola:#ED254E


.container__searchbar--input
    position: relative
    width:100%
    display: flex


    input
      width:100%
      margin: 0 1rem 0 1rem
      padding: 12px 12px
      color: $black-coral
      border: 1px solid rgba(0,0,0,.12)
      border-radius: 8px
      transition: .15s all ease-in-out
      background: white
      font-size: 20px


      &::-webkit-input-placeholder
          font-size: 20px
          color: rgba(0,0,0,.50)
          font-weight: 100
</style>
