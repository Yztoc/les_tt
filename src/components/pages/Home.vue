<template>
  <v-ons-page>
      <v-div class="main" style="display:block;margin-top: 52px">
        <v-ons-card v-for="i in 5" :key="i" style="background-color:transparent;color:white;box-shadow:none">
          <ons-row>
            <ons-col width="40%">
              <img src="https://www.egaliteetreconciliation.fr/local/cache-vignettes/L300xH300/arton46203-22af1.jpg" alt="Onsen UI" style="width: 100%">
            </ons-col>
            <ons-col width="5%"></ons-col>
            <ons-col width="55%" >
              <div class="title">
                      Soirée du sale
              </div>
              <v-ons-list style="background-color:transparent;color:white;box-shadow:none">
                <v-ons-list-item>Date</v-ons-list-item>
                <v-ons-list-item>Organisateur</v-ons-list-item>
                <v-ons-list-item>Lieu</v-ons-list-item>
              </v-ons-list>
            </ons-col>
          </ons-row>
        </v-ons-card>
      </v-div>
   </v-ons-page>
</template>


<script>
const homePage = {
  template: '#home',
  props: ['myProp']
};

const newsPage = {
  template: '#news'
};

const settingsPage = {
  template: '#settings'
};
export default {
  name: 'App',
  data() {
    return {
    }
  },
  methods: {
    
  },
  computed: {
 
  }
}
</script>


<style>


</style>
