function onFileSelected(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById("myimage1");
  imgtag.title = selectedFile.name;
  reader.onload = function(event) {
    imgtag.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
  $( "#myimage1" ).fadeTo( 300 , 0.5, function() {
  });
}

  function onFileSelected2(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById("myimage2");
  imgtag.title = selectedFile.name;
  reader.onload = function(event) {
    imgtag.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
   $( "#myimage2" ).fadeTo( 300 , 0.5, function() {
  });
}


$(document).ready(function() {
  var state=false;
  var ttime = 1000;
  var minOpacity = 70;
  var imgtag = document.getElementById("myimage1");
  imgtag.src = "hex1.png";
 imgtag = document.getElementById("myimage2");
  imgtag.src = "hex2.png";

  $( "#myimage1" ).fadeTo( 300 , 0.5, function() {});
  $( "#myimage2" ).fadeTo( 300 , 0.5, function() {});

    $("#fadeBtn").click(function(){

      if(state){
        $( "#myimage2" ).fadeTo( ttime , (100-minOpacity)/100, function() {
        });
        $( "#myimage1" ).fadeTo( ttime , minOpacity/100, function() {
        });
      }
      else{
        $( "#myimage2" ).fadeTo( ttime , minOpacity/100, function() {
        });
        $( "#myimage1" ).fadeTo( ttime , (100-minOpacity)/100, function() {
        });
      }
      state=!state;
    });

    $( function() {
      $( "#timeSlider" ).slider({
        min:100,
        max:3000,
        value: 1000,
        animate:"slow",
        orientation: "horizontal",
        slide: function( event, ui ) {
          ttime = ui.value;
          $( "#tVal" ).val ( $( "#timeSlider" ).slider( "value" ) +" ms");
        }
      });
      $( "#tVal" ).val ( $( "#timeSlider" ).slider( "value" ) +" ms");
    } ); //function

    $( function() {
      $( "#opacitySlider" ).slider({
        min:50,
        max:100,
        value: 70,
        animate:"slow",
        orientation: "horizontal",
        slide: function( event, ui ) {
          minOpacity = ui.value;
          $( "#oVal" ).val ( $( "#opacitySlider" ).slider( "value" ) +" %");
        }
      });
      $( "#oVal" ).val ( $( "#opacitySlider" ).slider( "value" ) +" %");
    } ); //function

    $( function() {
      $( "#xSlider" ).slider({
        min:-20,
        max:20,
        value: 0,
        animate:"slow",
        orientation: "horizontal",
        slide: function( event, ui ) {
         var xVal = ui.value;
        $(".overlayImage1").css({"left": xVal+20});
          }
      });
    } ); //function

      $( function() {
      $( "#ySlider" ).slider({
        min:-20,
        max:20,
        value: 0,
        animate:"slow",
        orientation: "horizontal",
        slide: function( event, ui ) {
         var xVal = ui.value;
        $(".overlayImage1").css({"top": xVal+70});
          }
      });
    } ); //function


});
