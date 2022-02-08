<template>
  <div class="details__container">
    <div v-if="didServerFail" class="details__container--error">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </div>

    <div class="details__container--loading" v-else>
      <div v-if="isLoading">
        <div class="details__container--loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <p id="loading">Loading ...</p>
        </div>
      </div>

      <div v-else class="details__container--coin">
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
      isLoading: true,
      didServerFail: false,
    };
  },
  created() {
    APIService.getCoinDetails(this.coinId)
      .then((response) => {
        this.coin = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.didServerFail = true;
      })
      .finally(() => (this.isLoading = false));
  },
};
</script>
<style lang="sass" scoped>

// color pallet
$grey: #e5e5e5
$white: #F0F0F0
$black: #000000

%link-style
    text-decoration: none
    color: black

.details__container
    position: relative
    justify-content: center
    display: flex
    flex-direction: column
    margin: 3rem

.details__container--coin
    margin: 3rem
    padding: 1rem
    background-color: $white
    border-radius: 18px

@media (max-width: 28.75em)
    .details__container--coin
        margin: 0rem
    p
        margin: 1rem

#description
    text-align: left
    text-decoration: none
    color: $black
    line-height: 1.2

a:link
    @extend %link-style

a:visited
    @extend %link-style

a:hover
    @extend %link-style

a:active
    @extend %link-style

// Loader Stylization

details__container--loading
    display: flex
    flex-direction: column
    flex-wrap: wrap
    align-content: center
    justify-content: center
    align-items: center
    height: 80vh
    margin:4rem
    text-align: center

#loading
    color: #fff
    font-weight: 300
    position: relative
    top: 5rem
    left: 3rem
.details__container--loader
    display: flex
    flex-direction: column
    flex-wrap: wrap
    align-content: center
    justify-content: center
    align-items: center

// Loader animation

.details__container--loader div
  animation: details__container--loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite
  transform-origin: 40px 40px

.details__container--loader div:after
  content: " "
  display: block
  position: absolute
  width: 10px
  height: 10px
  border-radius: 50%
  background: #fff
  margin: -4px 0 0 -4px

.details__container--loader div:nth-child(1)
  animation-delay: -0.036s

.details__container--loader div:nth-child(1):after
  top: 63px
  left: 63px

.details__container--loader div:nth-child(2)
  animation-delay: -0.072s

.details__container--loader div:nth-child(2):after
  top: 68px
  left: 56px

.details__container--loader div:nth-child(3)
  animation-delay: -0.108s

.details__container--loader div:nth-child(3):after
  top: 71px
  left: 48px

.details__container--loader div:nth-child(4)
  animation-delay: -0.144s

.details__container--loader div:nth-child(4):after
  top: 72px
  left: 40px

.details__container--loader div:nth-child(5)
  animation-delay: -0.18s

.details__container--loader div:nth-child(5):after
  top: 71px
  left: 32px

.details__container--loader div:nth-child(6)
  animation-delay: -0.216s

.details__container--loader div:nth-child(6):after
  top: 68px
  left: 24px

.details__container--loader div:nth-child(7)
  animation-delay: -0.252s

.details__container--loader div:nth-child(7):after
  top: 63px
  left: 17px

.details__container--loader div:nth-child(8)
  animation-delay: -0.288s

.details__container--loader div:nth-child(8):after
  top: 56px
  left: 12px

@keyframes details__container--loader
  0%
    transform: rotate(0deg)

  100%
    transform: rotate(360deg)
</style>
