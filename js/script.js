 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: 500,
    autoplay: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

  $(document).ready(function(){

    //hides dropdown content
    $(".size_chart").hide();
    
    //unhides first option content
    $("#option1").show();
    
    //listen to dropdown for change
    $("#size_select").change(function(){
      //rehide content on change
      $('.size_chart').hide();
      //unhides current item
      $('#'+$(this).val()).show();
    });
    
  });
