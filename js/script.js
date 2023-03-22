$(function() {

 
    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function() {
      $('.vertical-nav').css('display', 'block');
      $('#sidebar, #content').toggleClass('active');

       
  });
    // Navigation
    $('.nav > li > a').on('click', function () {
         var nav = $('.nav');
         nav.find('li').removeClass('active');
         $('.nav > li > ul > li').removeClass('active');
         var checkElement = $(this).parent();
         console.log(checkElement);
         var ulDom = checkElement.find('.submenu')[0];
         console.log(ulDom);
         if (ulDom == undefined) {
          
            checkElement.addClass('active');
            $('.nav').find('li').find('ul:visible').slideUp();
            return;
         }
        else if (ulDom.style.display != 'block') {
            nav.find('li').find('ul:visible').slideUp();
            nav.find('li.init-arrow-up').removeClass('init-arrow-up').addClass('arrow-down');
            nav.find('li.arrow-up').removeClass('arrow-up').addClass('arrow-down');
            checkElement.removeClass('init-arrow-down');
           checkElement.removeClass('arrow-down');
           checkElement.addClass('arrow-up');
           checkElement.addClass('active');
           checkElement.find('ul').slideDown(300);
         }  else {
            checkElement.removeClass('init-arrow-up');
            checkElement.removeClass('arrow-up');
            checkElement.removeClass('active');
            checkElement.addClass('arrow-down');
            checkElement.find('ul').slideUp(300);
         }
        
    });
    $('.nav > li > ul > li > a').click(function () {
        $(this).parent().parent().parent().removeClass('active');
        $('.nav > li > ul > li').removeClass('active');
        $(this).parent().addClass('active')
    });

    // top scroll
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    smallScreenMenu();
    let temp;
    function resizeEnd(){
        smallScreenMenu();
    }

    $(window).resize(function(){
        clearTimeout(temp);
        temp = setTimeout(resizeEnd, 100);
        resetMenu();
    });

    

})

$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(300);
    });
    
    smallScreenMenu();
    let temp;
    

    $(window).resize(function(){
        clearTimeout(temp);
        temp = setTimeout(resizeEnd, 100);
        resetMenu();
    });
});


const subMenus = $('.sub-menu');
const menuLinks = $('.menu-link');



function resetMenu(){
    if($(window).innerWidth() > 992){
        subMenus.each(function(item){
            $(this).css('display', 'none');
        });
    }
}





