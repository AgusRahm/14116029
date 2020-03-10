$(function(){
    var hour = (new Date).getHours();
    if (hour >= 18) {
        $('.dark-mode').removeClass('light').addClass('dark');
    } else {
         $('.dark-mode').removeClass('dark').addClass('light');
    }
    console.log(hour);
});