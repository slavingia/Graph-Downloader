var allImages = $('img');
var largeImages = allImages.filter(function(){
	return ($(this).width() > 100) & ($(this).height() > 100)
})

for (var i = 0; i < largeImages.length; i++) {
	var themURL = (largeImages[i].src);
	var splitURL = themURL.split("/");
	var newURL = splitURL[0] + "//" + splitURL[2] + "/" + splitURL[3] + "/" + splitURL[5];
	var downloadLink = newURL + "?dl=1";
	window.open(downloadLink, '_blank');
}