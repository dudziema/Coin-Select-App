<template>
  <div class="container--searchbar--input">
    <input type="text" v-model="search" placeholder="Search coin" />
    <label>Search coin:</label>
  </div>
</template>
<script>
export default {
  name: "SearchBar",
};
</script>
