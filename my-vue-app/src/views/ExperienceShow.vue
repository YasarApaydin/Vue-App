<template>
   <div class="card-container">
    <div class="card">
    <img :src="`/images/${experience.image}`" :alt="experience.name" class="card-image" />
    <span class="card_text">{{ experience.name }}</span>
    <div class="experience-details">
      <p><strong>Character:</strong> {{ experience.character }}</p>
      <p><strong>Birthdate:</strong> {{ experience.birthdate }}</p>
      <p><strong>Height:</strong> {{ experience.height }}</p>
      <p><strong>Biography:</strong> {{ experience.bio }}</p>
    </div></div>
  </div>
</template>


<script>
import sourceData from '@/movie.json';

export default {
  props: {
    experienceSlug: { type: String, required: true },
  },
  computed: {
    destination() {
      return sourceData.movies.find(
        (movie) => movie.cast.some((member) => member.slug === this.experienceSlug)
      );
    },
    experience() {
      if (!this.destination) return null;
      return this.destination.cast.find((member) => member.slug === this.experienceSlug);
    },
  },
};
</script>




<style scoped>


.card-container {
  display: flex;
  justify-content: center;  
  align-items: center;     
  height: 100vh;            
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;            
  padding: 16px;
  transition: transform 0.3s, box-shadow 0.3s;
  margin-bottom: 20px;
  text-align: center;       
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 8px;
}


.card_text {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-align: center;
}


.experience-details {
  font-size: 14px;
  color: #555;
  text-align: left;
  margin-top: 10px;
}

.experience-details p {
  margin: 5px 0;
}

.experience-details p {
  margin: 5px 0;
}
</style>