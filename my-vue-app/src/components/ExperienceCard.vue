<template>
    <div class="card">
      
<img :src="`/images/${experience.image}`" :alt="experience.name" class="card-image"/>

<span class="card_text">
    {{experience.name}}
</span>

    </div>
</template>

<script>

export default {
    props: {
     experience:{type:Object,required:true}   
    }
}
</script>



<style scoped>
/* Kartları yan yana hizalamak için container */
.card-container {
  display: flex;
  flex-direction: row; /* Kartları yatay hizala */
  gap: 16px; /* Kartlar arasında boşluk */
  justify-content: center; /* Kartları ortala */
  padding: 16px;
  align-items: flex-start; /* Kartları üst hizala */
}

/* Kart stili */
.card {
  display: flex;
  flex-direction: column; /* İçerikleri dikey hizala */
  align-items: center; /* Ortada hizala */
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 200px; /* Kart genişliği */

  transition: transform 0.3s, box-shadow 0.3s;
}

/* Hover efekti */
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


.card-text {
  font-size: 16px;
  font-weight: bold;
  color: black;
  text-align: center;
}

</style>