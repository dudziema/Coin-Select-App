<template>
  <div class="container__searchbar--input">
    <input
      @change="handleChange"
      @keydown="handleChange"
      v-model="searchCoin"
      id="searchbar"
      type="text"
      placeholder="Search coin"
    />
  </div>
</template>
<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchCoin: "",
    };
  },
  methods: {
    handleChange() {
      this.$emit("search", this.searchCoin);
    },
  },
};
</script>
<style lang="sass" scoped>

.container__searchbar--input
    position: relative
    width:100%
    display: flex

    input
      width:100%
      margin: 0 1rem 0 1rem
      padding: 12px 12px
      color: black
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
