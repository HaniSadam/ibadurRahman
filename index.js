/*$(document).ready(function(){
  var obj = document.createElement("audio");
  obj.scr =
  "https://mobcup.net/ringtone/bismillah-ir-rahman-fv36l70c";
  obj.volume = 0.1;
  obj.autoPlay = false;
  obj.preLoad = true;
  obj.controls = true;

  $(".hear").click(function(){
  obj.play();
  })
})*/

/*$('.hear').on('click', function () {
    var obj = document.createElement('audio');
    obj.src = '/home/mohammed/Desktop/Web development/IbadurRahman/audio';
    obj.play();
});*/

$(document).ready(function() {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', './audio/Bismillah Ir-rahman.mp3');
  //audioElement.setAttribute('autoplay', 'autoplay');
  //audioElement.load()
  $.get();
  audioElement.addEventListener("load", function() {
    audioElement.play();
  }, true);

  /*Show Image*/
  $(document).ready(function() {
    $(".showbtn").click(function() {
      $(".show-img").show();
      setTimeout(function() {
        $(".show-img").hide();
      }, 6000);
    });
    /*	$('.hidebtn').click(function(){
           		$('.show-img').hide();
        	});*/
  });









  $('.play').click(function() {
    audioElement.play();
  });


  /*$('.pause').click(function() {
        audioElement.pause();
      });*/



});
