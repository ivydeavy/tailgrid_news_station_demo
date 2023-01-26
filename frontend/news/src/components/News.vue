<template>
  <div>
    <NavBar></NavBar>
    <div v-for="item in news" :key="newsCompLoop">
      <NewsCards :NewsData="item"></NewsCards>
    </div>
    <Footer></Footer>
  </div>
</template> 

<script>
import navBar from './UI/navbar/NavBar.vue';
import footer from './UI/footer/Footer.vue';
import newsCards from './UI/NewsCards.vue';
import { ofetch } from 'ofetch';
export default{
  components:{
    NavBar: navBar,
    Footer: footer,
    NewsCards: newsCards  
  },
  data(){
    return{
      news: [],
      newsCompLoop: null
    }
  },
  async mounted(){
    let result = await ofetch('http://localhost:3001/news')
    this.newsCompLoop = Math.floor(result['articles'].length / 3);
    let count = 0
    let temp = []
    for(let i = 1; i <= this.newsCompLoop; i++){
      temp.push([result.articles[count], result.articles[count+1], result.articles[count+2]])
      count = count + 3
    }
    this.news = temp;
  }
}
</script>