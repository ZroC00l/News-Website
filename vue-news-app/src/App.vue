<template>
<v-app light>
    <!-- side menu component will be implemented here -->
    <SideMenu :drawer="drawer" :api_key="api_key" @selectSource="setResource"> </SideMenu>

      <v-app-bar @click="drawer = !drawer" color="deep-purple accent-4" dense dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title class="white--text">News</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>




    <v-content>
      <v-container fluid>
        <MainContent :articles="articles"></MainContent>
      </v-container>
    </v-content>

    <v-footer class="secondary" height="20px" app>
      <v-layout row wrap align center>
        <v-flex xs12>
          <div class="white--text m1-3">
            Made with
              <v-icon class="red--text">favorite</v-icon>
              by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a> and
              <a class="white--text" href="https://github.com/zroc00l" target="_blank">ZroC00l</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
</v-app>
</template>


<script>
import axios from 'axios'
import MainContent from './components/MainContent.vue'
import SideMenu from './components/SideMenu.vue'

export default{
  components:{
      MainContent,SideMenu
  },
  data(){
    return{
      drawer: false,
      api_key:'e5d8375b643a4a52a53b15592067dd4c',
      articles:[],
      errors:[]
    }
  },
  created(){
    axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key)
    .then(response=> {
      this.articles= response.data.articles
      console.log('data:')
      console.log(response.data.articles)
    })
    .catch(e =>{
      this.errors.push(e)
  })
},
 methods: {
     setResource(source){
     axios.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key)
     .then(response => {
          this.articles = response.data.articles
          console.log(response.data)
       })
     .catch(e => {
          this.errors.push(e)
       })

     }
   }
}
</script>
