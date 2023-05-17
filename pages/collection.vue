<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-select v-model="filter" label="Filter" :items="['Not Started', 'In Progress', 'Built', 'No Status']" clearable ></v-select>
      </v-col>
    </v-row>
    <v-divider class="pb-8" />
    <LegoSetCardDisplay v-if="getAllSets().length > 0" :sets="getAllSets(filter)" inCollection />
    <h3 v-else>No sets added yet... Add sets from search</h3>
    
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      filter: ''
    }
  },
  computed: {
    ...mapGetters(['getAllSets'])
  }
}
</script>
