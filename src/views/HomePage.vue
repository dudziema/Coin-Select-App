<template>
  <div class="container__searchbar"><p>Searchbar here</p></div>
  <div class="container__table"><h1>Table component here</h1></div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "HomePage",
};
</script>
<style lang="sass">
// color pallet
$mint-cream: #F4FFFD
$oxford-blue: #011936
$black-coral: #465362
$naples-yellow: #F9DC5C
$red-crayola:#ED254E




%containers
  background-color: $oxford-blue
  border-radius: 18px
  position:relative


*,
*::before,
*::after
  box-sizing:border-box

body
  font-family:Arial, Helvetica, sans-serif
  font-size:1.2rem
  font-weight:400
  line-height:1rem
  margin:0
  background-color: $mint-cream

body::before
  content:""
  position:fixed
  top:0
  left:0
  height:100%
  width:100%
  z-index:-1
  background-color: $mint-cream


.container__table
  @extend %containers
  width:95%
  height:35rem
  margin:2rem auto auto auto

.container__searchbar
  @extend %containers
  width:95%
  height:2rem
  margin:0.6rem auto auto auto


h1
  padding:2rem
  font-size: 3rem
  margin-top: 0rem
  margin-bottom: 0.5rem
  text-align:center
  color: $mint-cream



h2
  padding:1rem
  margin: 0 0 0.5rem 0
  text-align:center

p
  text-align: center
  color: $mint-cream
</style>
