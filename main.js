var $about = $('#about');
var $prices = $('#prices');
var $gallery = $('#gallery');
var $nava = $('#nAbout');
var $navp = $('#nPrices');
var $navg = $('#nGallery');
var $all = $('#about, #prices, #gallery')
var $navall = $('#nAbout, #nPrices, #nGallery');

$nava.click(function() {
  $navall.removeClass('active');
  $nava.addClass('active');
  $all.removeClass('show');
  $about.addClass('show');
});

$navp.click(function() {
  $navall.removeClass('active');
  $navp.addClass('active');
  $all.removeClass('show');
  $prices.addClass('show');
});

$navg.click(function() {
  $navall.removeClass('active');
  $navg.addClass('active');
  $all.removeClass('show');
  $gallery.addClass('show');
});
