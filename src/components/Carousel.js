import slider1 from './img/slider.png';

function Carousel(){
    return(
    
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active " id="myCarousel-indicators" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" id="myCarousel-indicators" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" id="myCarousel-indicators" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="{slider1}" class="d-block w-100" alt="slider 1"/>
          <div class="carousel-caption d-none d-md-block">
          <h5>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h5>
                <p>Lo que UD. necesita</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="{slider1}" class="d-block w-100" alt="slider 2"/>
          <div class="carousel-caption d-none d-md-block">
            <h5>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h5>
                <p>Lo que UD. necesita</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="{slider1}" class="d-block w-100" alt="slider 3"/>
          <div class="carousel-caption d-none d-md-block">
          <h5>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h5>
                <p>Lo que UD. necesita</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>


  

    );
}

export default Carousel;



