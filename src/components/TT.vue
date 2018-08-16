
<template>
  <v-ons-page>
    <v-ons-toolbar class="titulo" modifier="material noshadow" style="position:relative">
        <div class="center">Les TT</div>
        <div class="right">
          <v-ons-toolbar-button icon="ion-navicon, material: md-heart"></v-ons-toolbar-button>
          <v-ons-toolbar-button icon="ion-navicon, material: md-search"></v-ons-toolbar-button>
        </div>
    </v-ons-toolbar>

    <v-ons-tabbar
      swipeable
      position="bottom"
      :tabs="tabs"
      :on-swipe="onSwipe"
      :tabbar-style="swipeTheme"
      style="position : fixed;"
    />
  </v-ons-page>
</template>

<script>
import Home from './pages/Home.vue';
import Add from './pages/Add.vue';
import Settings from './pages/Settings.vue';
const lerp = (x0, x1, t) => parseInt((1 - t) * x0 + t * x1, 10);
const red = [40, 40, 51];
const blue = [40, 40, 51];
const purple = [40, 40, 51];
export default {
  data () {
    return {
      colors: red,
      animationOptions: {},
      tabs: [
        {
          icon: this.md() ? 'md-home' : 'ion-home',
          page: Home,
          theme: red,
        },
        {
          icon: this.md() ? 'md-plus' : 'ion-add',
          page: Add,
          theme: blue
        },
        {
          icon: this.md() ? 'md-settings' : 'ion-setting',
          page: Settings,
          theme: purple
        }
      ]
    };
  },
  computed: {
    swipeTheme() {
      return {
        backgroundColor: `#032533`,
        transition: `all ${this.animationOptions.duration || 0}s ${this.animationOptions.timing || ''}`
      }
    }
  },
  methods: {
    md() {
      return this.$ons.platform.isAndroid();
    },
    onSwipe(index, animationOptions) {
      // Apply the same transition as v-ons-tabbar
      this.animationOptions = animationOptions;
      // Interpolate colors
      const a = Math.floor(index), b = Math.ceil(index), ratio = index % 1;
      this.colors = this.colors.map((c, i) => lerp(this.tabs[a].theme[i], this.tabs[b].theme[i], ratio));
    }
  }
};
</script>

<style>
body{
  color:red!important;
}
.titulo,
.tabbar--material,
.fab {
  background: #032533;  /* fallback for old browsers */

}

.main{
  background: #032533;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top,  #000000,#032533);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top,  #000000,#032533); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
min-height: 100%;
}
.ons-icon,
.list-item,
.toolbar__title{
  color: white;
}

.toolbar--material{
  box-shadow: none;
}
</style>
