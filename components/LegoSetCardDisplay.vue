<template>
  <v-row>
    <v-col v-for="set in sets" :key="set.set_num" :cols="cols" sm="12">
      <LegoSetCard :set="set" :inCollection="inCollection" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    sets: {
      type: Array,
      required: true
    },
    inCollection: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    cols() {
      console.log(this.$vuetify.breakpoint.name)
      switch (this.$vuetify.breakpoint.name) {
        case 'sm': case 'xs': return 12
        default: return 3
      }
    }
  }
}
</script>
