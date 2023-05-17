<template>
  <div>
    <v-card width="400" minHeight="440">
      <v-img height="250" :src="set.set_img_url" cover>
        <v-toolbar color="rgba(0,0,0,0)" elevation="0" class="text-right">
          <v-row>
            <v-col cols="6" align="left" />
            <v-col cols="6" align="right">
              <v-btn v-if="!isSetInCollection(set)" @click="addSet(set)" elevation="3" color="green"><v-icon size="large"
                  color="white" class="pr-1">mdi-plus-circle</v-icon>Add</v-btn>
              <v-btn v-else @click="removeSet(set)" elevation="3" color="red"><v-icon size="large" color="white"
                  class="pr-1">mdi-close-circle</v-icon>Remove</v-btn>
            </v-col>
          </v-row>
        </v-toolbar>
      </v-img>
      <v-row>
        <v-col :cols="inCollection ? 6 : 12">
          <v-card-title style="word-break: break-word">
            <a :href="set.set_url" target="_blank">
              {{ set.name }}
            </a>
          </v-card-title>
        </v-col>
        <v-col v-if="inCollection">
          <v-select v-model="status" @change="updateStatus()" label="Status"
            :items="['Not Started', 'In Progress', 'Built']" :value="set.status" class="pr-4 pt-4 white--text" outlined
            dense> </v-select>
        </v-col>
      </v-row>
      <v-card-subtitle>{{ set.set_num }}</v-card-subtitle>
      <v-card-text class="white--text font-weight-bold">
        <v-row class="t-0 text-wrap">
          <v-col cols="6" align="left">
            Released {{ set.year }}
          </v-col>
          <v-col cols="6" align="right">
            {{ set.num_parts }} parts
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  props: {
    set: {
      type: Object,
      required: true
    },
    inCollection: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      status: this.set.status || ''
    }
  },
  computed: {
    ...mapGetters(['isSetInCollection'])
  },
  methods: {
    ...mapMutations(['addSet', 'removeSet', 'changeStatus']),
    updateStatus() {
      this.changeStatus({ set: this.set, newStatus: this.status })
    }
  }
}
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: inherit;
}
a:hover {
  text-decoration: underline;
}
</style>
