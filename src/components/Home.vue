<template>
  <v-ons-page>
    <div  class="main">
      <v-ons-toolbar class="titulo" modifier="material noshadow">
        <div class="center">Les TT</div>
        <div class="right">
          <v-ons-toolbar-button icon="ion-navicon, material: md-heart"></v-ons-toolbar-button>
          <v-ons-toolbar-button icon="ion-navicon, material: md-search"></v-ons-toolbar-button>
        </div>
      </v-ons-toolbar>

      <v-ons-card v-for="i in 10" :key="i" style="background-color:transparent;color:white;box-shadow:none">
        <ons-row>
          <ons-col width="40%">
            <img src="https://www.egaliteetreconciliation.fr/local/cache-vignettes/L300xH300/arton46203-22af1.jpg" alt="Onsen UI" style="width: 100%">
          </ons-col>
          <ons-col width="2%"></ons-col>
          <ons-col width="58%" >
            <div class="title">
                    Soirée du sale
            </div>
            <v-ons-list style="background-color:transparent;color:white;box-shadow:none">
              <v-ons-list-item>Vue</v-ons-list-item>
              <v-ons-list-item>Angular</v-ons-list-item>
              <v-ons-list-item>React</v-ons-list-item>
            </v-ons-list>
          </ons-col>
        </ons-row>
      </v-ons-card>
      <v-ons-tabbar swipeable position="bottom"
        :tabs="tabs"
        :visible="true"
        :index.sync="activeIndex"
        style="position : fixed"
      >
      </v-ons-tabbar>
    </div>
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
      activeIndex: 0,
      tabs: [
        {
          icon: this.md() ? null : 'ion-home',
          label: 'Home',
          page: homePage,
          props: {
            myProp: 'This is a page prop!'
          },
          key: "homePage"
        },
        {
          icon: this.md() ? null : 'ion-ios-bell',
          label: 'News',
          page: newsPage,
          badge: 7,
          key: "newsPage"
        },
        {
          icon: this.md() ? null : 'ion-ios-settings',
          label: 'Settings',
          page: settingsPage,
          key: "settingsPage"
        }
      ]
    };
  },
  methods: {
    md() {
      return this.$ons.platform.isAndroid();
    }
  },
  computed: {
    title() {
      return this.tabs[this.activeIndex].label;
    }
  }
}
</script>


<style>
.titulo,
.tabbar--material,
.fab {
 background: #0F2027;  /* fallback for old browsers */

}

.main{
 background: #0F2027;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

</style>
