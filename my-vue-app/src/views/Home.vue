<template>
<div id="shell">
  <div id="header">
    <h1 id="logo"><a href="#">MovieHunter</a></h1>
    <div class="social"> <span>FOLLOW US ON:</span>
      <ul>
        <li><a class="twitter" href="#">twitter</a></li>
        <li><a class="facebook" href="#">facebook</a></li>
        <li><a class="vimeo" href="#">vimeo</a></li>
        <li><a class="rss" href="#">rss</a></li>
      </ul>
    </div>
    <div id="navigation">
      <ul>
        <li><a class="active" href="#">HOME</a></li>
        <li><a href="#">NEWS</a></li>
        <li><a href="#">IN THEATERS</a></li>
        <li><a href="#">COMING SOON</a></li>
        <li><a href="#">CONTACT</a></li>
        <li><a href="#">ADVERTISE</a></li>
      </ul>
    </div>
    <div id="sub-navigation">
      <ul>
        <li><a href="#">SHOW ALL</a></li>
        <li><a href="#">LATEST TRAILERS</a></li>
        <li><a href="#">TOP RATED</a></li>
        <li><a href="#">MOST COMMENTED</a></li>
      </ul>
      <div id="search">
        <form action="#" method="get" accept-charset="utf-8">
          <label for="search-field">SEARCH</label>
          <input type="text" name="search field" value="Enter search here" id="search-field" class="blink search-field"  />
          <input type="submit" value="GO!" class="search-button" />
        </form>
      </div>
    </div>
  </div>

  <div id="main">
    <div id="content">
      <div class="box">
        <div class="head">
          <h2>LATEST TRAILERS</h2>
          <p class="text-right"><a href="#">See all</a></p>
        </div>

        <router-link v-for="destination in destinations" :key="destination.id" :to="{name:'details.show', params:{id:destination.id}}">
          <div class="movie"><span ><span>{{destination.name}}</span></span>
            <div class="movie-image">
              
              <a href="#"><img :src="`/images/${destination.image}`" :alt="destination.name" /></a>
            </div>

            <div class="rating">
              <p>RATING</p>
              <div class="stars">
                <div class="stars-in" :style="{ width: `${destination.point}%`}"></div>
              </div>
              <span class="comments">{{destination.comments.length}}</span>
            </div>
          </div>
        </router-link>
      </div>
      <div class="cl">&nbsp;</div>
    </div>
  </div>

  <div id="footer">
    <p class="lf">Copyright &copy; 2010 <a href="#">SiteName</a> - All Rights Reserved</p>
    <p class="rf">Design by <a href="http://chocotemplates.com/">ChocoTemplates.com</a></p>
    <div style="clear:both;"></div>
  </div>
</div>


</template>


<style>
  #shell {
   font-family: 'Roboto', sans-serif;
  }

  .movie {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    background-color: #ffe6cc;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .movie-image {
    position: relative;
    width: 100%;
    max-width: 200px;
  }

  .movie-image img {
    width: 100%;
    border-radius: 10px;
  }

  .rating {
    margin-top: 15px;
    text-align: center;
    width: 100%;
  }

  .rating p {
    font-size: 14px;
    color: #333;
    margin-bottom: 5px;
  }

  .stars {
    display: flex;
   
    gap: 5px;
  }

  .star {
    width: 20px;
    height: 20px;
    background-color: #ccc;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    background-size: cover;
    transition: background-color 0.3s ease;
  }

  .stars-in {
    display: flex;
  }

  .stars-in .star {
    background-color: gold;
  }

  .comments {
    font-size: 14px;
    color: #333;
  }

  #search input[type="text"] {
    width: 80%;
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  #search input[type="submit"] {
    padding: 8px 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
  }

  #footer {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
  }

  #footer .lf, #footer .rf {
    margin: 10px 0;
  }
</style>

<script>
import sourcedate from '@/movie.json'

export default {
  data() {
    return {
      destinations: sourcedate.movies
    }
  }
}
</script>





