<!-- eslint-disable space-before-function-paren -->
<template>
  <v-container>
    <v-form class="pb-8" @submit.prevent="buttonOnClick()">
      <v-text-field v-model="query" id="search-input" label="Lego Set Name or Set Number" />
      <v-btn @click="buttonOnClick()">Search</v-btn>
    </v-form>
    <div v-if="$route.query.q && !$fetchState.pending">
      <v-divider class="pb-8" />
      <LegoSetCardDisplay :sets="results.results" />
    </div>
  </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      query: '',
      results: {}
    }
  },
  async fetch() {
    this.results = await fetch(
      `http://147.182.138.48/search/${this.$route.query.q}`
    ).then(res => res.json())
  },
  methods: {
    buttonOnClick() {
      this.$router.replace({ path: this.$route.path, query: { q: this.query } }).then(() => this.$nuxt.refresh())
    }
  }
}

</script>
