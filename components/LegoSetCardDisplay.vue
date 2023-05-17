<template>
  <v-row>
    <v-col v-for="set in sets" :key="set.set_num" cols="3">
      <LegoSetCard :set="set" :inCollection="inCollection"/>
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
  }
}
</script>
