<template>
  <v-ons-page>
    <v-div class="main" style="display:block;margin-top: 52px">

      <div style="text-align: center; padding-top: 40px">
        <p>
          <ons-input  id="name" modifier="underbar" placeholder="Nom de l'événement" float ng-model="page.name"></ons-input>
        </p>
        <p>
          <ons-input id="description" modifier="underbar" placeholder="Description" float ng-model="page.description"></ons-input>
        </p>  
        <GoogleMap></GoogleMap>
        <p style="margin-top: 30px;">
          <ons-button ng-click="">Créer</ons-button>
        </p>
        
      </div>
    </v-div>
   </v-ons-page>
</template>
<script>
import GoogleMap from "../custom/Geo";


export default {
 
  name: "App",
  components: {
    GoogleMap
  },
  data() {
    return {

    };
  },
 mounted() {
  },

  methods: {
   
  },
  computed: {

  }
};
</script>


<style>
.card {
  margin: 0px;
}
.text-input {
  color: white;
}
</style>


