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
})





