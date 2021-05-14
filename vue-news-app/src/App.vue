<template>
<v-app light>
    <!-- side menu component will be implemented here -->
    <v-toolbar fixed app light clipped-left color="primary" class="elevation-2">
      <v-toolbar-side-icon @click="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">News App</v-toolbar-title>
    </v-toolbar>

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

export default{
  components:{
      MainContent,
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
}
</script>
