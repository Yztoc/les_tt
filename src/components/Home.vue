<template id="main-page">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-toolbar-button icon="ion-navicon, material: md-menu"></v-ons-toolbar-button>
        
      </div>
      <div class="center">Les TT</div>
      <div class="right">
        <v-ons-toolbar-button icon="ion-navicon, material: md-heart"></v-ons-toolbar-button>
        <v-ons-toolbar-button icon="ion-navicon, material: md-search"></v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>

    <v-ons-card v-for="i in 10" :key="i">
      <ons-row>
        <ons-col width="40%">
          <img src="https://www.egaliteetreconciliation.fr/local/cache-vignettes/L300xH300/arton46203-22af1.jpg" alt="Onsen UI" style="width: 100%">
        </ons-col>
        <ons-col width="2%"></ons-col>
        <ons-col width="58%">
          <div class="title">
                  Soirée du sale
          </div>
          <v-ons-list>
            <v-ons-list-item>Vue</v-ons-list-item>
            <v-ons-list-item>Angular</v-ons-list-item>
            <v-ons-list-item>React</v-ons-list-item>
          </v-ons-list>
        </ons-col>
      </ons-row>
    </v-ons-card>

    <p style="text-align: center">
      <v-ons-button @click="$ons.notification.alert('Hello World!')">
        Click moi!
      </v-ons-button>
    </p>
  </v-ons-page>
</template>

<style>
  /* CSS goes here */
</style>

<script>
</script>