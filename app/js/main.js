window.addEventListener('DOMContentLoaded', () => {
    
    $('img.img-svg').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');
            if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });

    // $(document).ready(function(){
    //     if (document.querySelector('.news-slick')) {
    //         $('.news-slick').slick({
    //             dots: true,
    //             slidesToShow: 2,
    //             arrows: false,
    //             variableWidth: true,
    //             infinite: true,
    //             customPaging: (slider, i) => `0${i+1}`, 
    //             arrows: true,
    //             prevArrow:"<img class='img-svg slick-prev' src='../img/icon/slick-arrow.png'>",
    //             nextArrow:"<img class='img-svg slick-next' src='../img/icon/slick-arrow.png'>",
    //             responsive: [{
    //                 breakpoint: 1260,
    //                 settings: {
    //                     vertical: true,
    //                     verticalSwiping: true,
    //                     slidesToShow: 2,
    //                     variableWidth: false,
    //                 }
    //               },
    //               {
    //                 breakpoint: 767,
    //                 settings: {
    //                     variableWidth: false,
    //                     slidesToShow: 1,
    //                 }
    //               }
    //             ]
    //         });
    //     }
    // });

    function menu() {
        let menuBtn = document.querySelector('.mobile__menu'),
        menuList = document.querySelector('nav'),
        close = document.querySelector('.nav__close');
        if (menuBtn) {
            menuBtn.addEventListener('click', () => {
                menuList.style.right = '0';
                document.querySelector('body').style.overflow = 'hidden';
            });
            close.addEventListener('click', () => {
                menuList.style.right = '100%';
                document.querySelector('body').style.overflow = 'auto';
            });
        }
    }

    function tabs() {
        var $ = function (selector) {
            return document.querySelectorAll(selector);
        };
          
          
          // Define tabs, write down them classes
        var tabs = [
        '.tabbed-section__selector-tab-1',
        '.tabbed-section__selector-tab-2',
        '.tabbed-section__selector-tab-3'
        ];
        
        // Create the toggle function
        var toggleTab = function(element) {
            var parent = element.parentNode;
            
            // Do things on click
            $(element)[0].addEventListener('click', function(){
              // Remove the active class on all tabs.
              // climbing up the DOM tree with `parentNode` and target 
              // the children ( the tabs ) with childNodes
              this.parentNode.childNodes[1].classList.remove('active');
              this.parentNode.childNodes[3].classList.remove('active');
              this.parentNode.childNodes[5].classList.remove('active');
          
              // Then, give `this` (the clicked tab), the active class
              this.classList.add('active');
              
              // Check if the clicked tab contains the class of the 1 or 2
              if(this.classList.contains('tabbed-section__selector-tab-1')) {
                // and change the classes, show the first content panel
                $('.tabbed-section-1')[0].classList.remove('hidden');
                $('.tabbed-section-1')[0].classList.add('visible');
                
                // Hide the second
                $('.tabbed-section-2')[0].classList.remove('visible');
                $('.tabbed-section-2')[0].classList.add('hidden');
                 $('.tabbed-section-3')[0].classList.remove('visible');
                $('.tabbed-section-3')[0].classList.add('hidden');
              }
          
              if(this.classList.contains('tabbed-section__selector-tab-2')) {
                // and change the classes, show the second content panel
                $('.tabbed-section-2')[0].classList.remove('hidden');
                $('.tabbed-section-2')[0].classList.add('visible');
                // Hide the first
                $('.tabbed-section-1')[0].classList.remove('visible');
                $('.tabbed-section-1')[0].classList.add('hidden');
                $('.tabbed-section-3')[0].classList.remove('visible');
                $('.tabbed-section-3')[0].classList.add('hidden');
              }
              
              if(this.classList.contains('tabbed-section__selector-tab-3')) {
                // and change the classes, show the second content panel
                $('.tabbed-section-3')[0].classList.remove('hidden');
                $('.tabbed-section-3')[0].classList.add('visible');
                // Hide the first
                $('.tabbed-section-1')[0].classList.remove('visible');
                $('.tabbed-section-1')[0].classList.add('hidden');
                $('.tabbed-section-2')[0].classList.remove('visible');
                $('.tabbed-section-2')[0].classList.add('hidden');
              }
            });
        };
          
          // Then finally, iterates through all tabs, to activate the 
          // tabs system.
        for (var i = tabs.length - 1; i >= 0; i--) {
            toggleTab(tabs[i])
        };
    }
    tabs();
});
