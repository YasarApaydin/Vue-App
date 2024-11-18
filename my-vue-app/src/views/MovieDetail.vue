
<template>
<div>
    <section class="destination" >
        <div class="destination-details">
        <h1>{{destination.name}}</h1>
        <br>
<img :src="`/images/${destination.image}`" :alt="destination.name" />
<br>
 <p>{{destination.description}}</p>
 <br>
 <strong><h>Yorumlar</h></strong> 
 <hr>
 <br><br>
     <div v-if="destination.comments && destination.comments.length > 0" >
          <ul>
            <li v-for="(comment, index) in destination.comments" :key="index">
                {{ comment }}
            </li>
          </ul>
      </div>
     

        </div>
    </section>

 <section class="experiences">
    <h1>Oyuncular</h1>
<div class="card-container">
    <router-link
      v-for="experience in destination.cast"
        :key="experience.slug"
     :to="{name:'experience.show',params:{slug:experience.slug,experienceSlug:experience.slug}}"
      class="card"
    >   
      <ExperienceCard
        :experience="experience"
      />
 
    
    </router-link>
 </div>
  </section>
</div>
</template>

<style scoped>
h1 {
  color: green;
}
</style>

<script>
import sourcedate from '@/movie.json'
import ExperienceCard from '@/components/ExperienceCard.vue'
export default {
    components:{ExperienceCard},
    computed: {
        destinationId(){
            return parseInt(this.$route.params.id)
        },
       destination(){
  return sourcedate.movies.find(destination => destination.id === this.destinationId);
}

    }
}
</script>


<style >
.destination-details {
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center; 
    height: 100vh; 
    text-align: center; 
}

.destination-details img {
    max-width: 100%; 
    height: auto; 
}

.destination-details p, .destination-details h2 {
    margin: 10px 0; 
}
.experiences {
  padding: 20px;
}

.experiences h1 {
  text-align: center;
  color: green;
  margin-bottom: 20px;
}

.card-container {
  display: flex;            
  flex-wrap: wrap;           
  gap: 16px;                 
  justify-content: center;   
  align-items: flex-start;   
  padding: 20px;             
}
.card {
  width: 200px;            
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.card img {
  width: 100%;          
  height: auto;
  border-radius: 8px 8px 0 0;
}
.card-text {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-align: center;
}
</style>