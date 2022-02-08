<template>
  <div class="searchbar__div">
    <SearchBar @search="handleSearch" />
  </div>
  <div class="table__div">
    <CoinTable :searchbarInput="searchbarInput" :page="page" />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import CoinTable from "@/components/CoinTable.vue";

export default {
  name: "HomePage",
  data() {
    return {
      searchbarInput: "",
    };
  },
  components: {
    SearchBar,
    CoinTable,
  },
  methods: {
    handleSearch(value) {
      this.searchbarInput = value;
    },
  },
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  watch: {
    page() {
      console.log("test");
    },
  },
};
</script>
<style lang="sass">

// color pallet
$grey: #e5e5e5
$white: #F0F0F0
$black: #000000

//Global style

*,
*::before,
*::after
  box-sizing:border-box

body
  font-family: Poppins-Regular
  font-size:1.2rem
  font-weight:400
  line-height:1rem
  margin:0
  background-color: $grey

body::before
  content:""
  position:fixed
  top:0
  left:0
  height:100%
  width:100%
  z-index:-1
  background-color: $grey

.table__div
  width:95%
  height:35rem
  margin:2rem auto auto auto

.searchbar__div
  width:95%
  height:3rem
  margin:0.6rem auto auto auto
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column

h1
  padding:2rem
  font-size: 3rem
  margin-top: 0rem
  margin-bottom: 0.5rem
  text-align: center
  color: black

h2
  padding:1rem
  margin: 0 0 0.5rem 0
  text-align:center

p
  text-align: center
  color: black

a:link
    text-decoration: none
    color:#021691

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
