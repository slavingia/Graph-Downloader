$('img').filter(function() {
  return $(this).width() > 100 && $(this).height() > 100;
}).each(function(image) {
  var splitURL = image.src.split("/")
    , downloadURL = splitURL[0] + "//" + splitURL[2] + "/" + splitURL[3] + "/" + splitURL[5] + "?dl=1";

  window.open(downloadURL, '_blank');
});