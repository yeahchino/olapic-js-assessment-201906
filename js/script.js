$(document).ready(function() {

  /******** Homepage Carousel - All Photos *********/

  // Build API Request
  var olapicEndpoint = "https://photorankapi-a.akamaihd.net/customers/215757/media/shuffled?rights_given=0&include_tagged_galleries=0&auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2";
  //endpoint tested with postman "GET MEDIA OF A STREAM"
  

  $.ajax({
    dataType: "json",
    url: olapicEndpoint,
    type: "GET",
    data: {
      format: "json"
    },
    success: function(data) {     
      
      // Create array of photos pulled from the Olapic API response
      var mediaArray = data.data._embedded.media;

      // Loop through the mediaArray
      for (x=0; x < mediaArray.length; x++) {
        var mediaItem = mediaArray[x];
        var olapicImage = mediaItem.images.mobile;

      // Append the images to the carousel
        $(".owl-carousel").append("<div class='item olapic-image'><img src='" + olapicImage + "'></div>");
      };

      // Set up Owl Carousel
      $(".owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        touchDrag: true,
        nav: true, //set true in order to navigate
        navText: ["<i class='arrow left'></i>", "<i class='arrow right'></i>"],
        dots: false,
        video: true,
        slideBy: 'page',
        navSpeed: 150,
        autoplay: true, // set true for autoplay
        autoplayTimeout: 2000,
        autoplaySpeed: 150,
        responsive: {
          0: {
            items:1,
            center:true
          },
          414: {
            items: 2
          },
          550: {
            items:3
          },
          1000: {
            items:4
          }
        }
      });
    },
    error: function(error){
      console.log(error);
    }
  });
});