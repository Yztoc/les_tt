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
        <p>
           <v-ons-select style="width: 40%"
            v-model="selectedItem"
          >
            <option v-for="(item,i) in items" :key="i" :value="item.value">
              {{ item.text }}
            </option>
          </v-ons-select>
        </p>
        <p>
           <ons-input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length" accept="image/*" class="input-file"></ons-input>
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
     items: [
        { text: 'Grp1', value: 'id1' },
        { text: 'Grp2', value: 'id2' },
        { text: 'Grp3', value: 'id3' }
      ],
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
.text-input,.text-input__label,.text-input--material__label,.text-input--underbar__label{
float: left; 
color: white;
}
ons-input, ons-radio, ons-checkbox, ons-search-input{
 width: 90%; 
}
</style>


