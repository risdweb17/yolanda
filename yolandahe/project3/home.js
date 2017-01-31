$(document).ready(function() {
    $('.img').click(function() {
        $('.img').effect('explode');
    });

    $('#main').masonry({
        itemSelector: '.box',
        // use element for option
        columnWidth: '.box',
        percentPosition: true
      });

});