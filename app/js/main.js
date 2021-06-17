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

    $(document).ready(function(){
        if (document.querySelector('.services__slider')) {
            $('.services__slider').slick({
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                arrows: true,
                variableWidth: true,
                infinite: true,
                arrows: false,
                responsive: [{
                    breakpoint: 1260,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: false,
                    }
                  },
                  {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: true,
                    }
                  }
                ]
            });
        }
    });

    $(document).ready(function(){
      if (document.querySelector('.slider__clients')) {
          $('.slider__clients').slick({
              dots: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode: true,
              arrows: true,
              variableWidth: true,
              infinite: true,
              arrows: false,
              responsive: [{
                  breakpoint: 1260,
                  settings: {
                      slidesToShow: 2,
                      variableWidth: false,
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                      slidesToShow: 1,
                      variableWidth: true,
                  }
                }
              ]
          });
      }
  });

    $(document).ready(function(){
      if (document.querySelector('.our-projects__main') && window.innerWidth < 768) {
          $('.our-projects__main').slick({
              dots: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              arrows: false,
              variableWidth: true,
              infinite: true,
          });
      } 
    });

    function viewMoreImages() {
      if (document.querySelector('.our-projects__rooms')) {
        document.querySelectorAll('.our-projects__rooms .our-projects__item').forEach(function(item, i) {
          if (i >= 5) {
            item.classList.add('our-projects__hide')
          }
          document.querySelector('.our-projects__more').addEventListener('click', () => {
            item.classList.remove('our-projects__hide');
            document.querySelector('.our-projects__more').style.display = 'none';
          })
        })
      }
    }
    viewMoreImages();

    function viewMorePortfolio() {
		if (document.querySelector('.portfolio__select')) {
			const select = document.querySelector('.portfolio__select');
			select.onchange = () => {
				document.querySelector('.visible').classList.add('hidden')
				document.querySelector('.visible').classList.remove('visible');
				document.querySelectorAll('.portfolio__section')[select.options.selectedIndex].classList.remove('hidden');
				document.querySelectorAll('.portfolio__section')[select.options.selectedIndex].classList.add('visible');
				let vis = document.querySelector('.visible')
				document.querySelectorAll('.visible img').forEach( (img, i) => {
					if (i <= 5) {
						vis.querySelector('.portfolio__more').style.display = 'none';
					} else {
						vis.querySelector('.portfolio__more').style.display = 'block';
					}
				})
				document.querySelectorAll('.visible img').forEach(function(item, i) {
					if (i >= 5) {
						item.classList.add('portfolio__hide')
					} else {
						document.querySelector('.portfolio__more').style.display = 'none';
					}
					vis.querySelector('.portfolio__more').addEventListener('click', () => {
						item.classList.remove('portfolio__hide');
						vis.querySelector('.portfolio__more').style.display = 'none';
					})
				})
			}
      	}
    }
    viewMorePortfolio();



    function menu() {
        let menuBtn = document.querySelector('.header__menu'),
        menuList = document.querySelector('.header__mobile'),
        close = document.querySelector('.header__close');
        if (menuBtn) {
            menuBtn.addEventListener('click', () => {
                menuList.style.left = '0';
                document.querySelector('body').style.overflow = 'hidden';
            });
            close.addEventListener('click', () => {
                menuList.style.left = '-100%';
                document.querySelector('body').style.overflow = 'auto';
            });
        }
    }
    menu();

    function tabs() {
		if (document.querySelector('.idea')) {
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
			for (var i = tabs.length - 1; i >= 0; i--) {
				toggleTab(tabs[i])
			};
		}
    }
    tabs();

    function tabsPortfolio() {
      if (window.innerWidth > 767 && document.querySelector('.portfolio')) {
        var $ = function (selector) {
          return document.querySelectorAll(selector);
        };
        
        var tabs = [
          '.portfolio__selector-tab-1',
          '.portfolio__selector-tab-2',
          '.portfolio__selector-tab-3',
          '.portfolio__selector-tab-4',
          '.portfolio__selector-tab-5'
        ];
		let visible = document.querySelector('.visible')
		document.querySelectorAll('.visible img').forEach( (img, i) => {
			if (i < 5) {
				visible.querySelector('.portfolio__more').style.display = 'none';
			} else {
				visible.querySelector('.portfolio__more').style.display = 'block';
			}
		})
        
        // Create the toggle function
        var toggleTab = function(element) {
          	var parent = element.parentNode;
			
			$(element)[0].addEventListener('click', function(){
				this.parentNode.childNodes[1].classList.remove('active');
				this.parentNode.childNodes[3].classList.remove('active');
				this.parentNode.childNodes[5].classList.remove('active');
				this.parentNode.childNodes[7].classList.remove('active');
				this.parentNode.childNodes[9].classList.remove('active');
			
				// Then, give `this` (the clicked tab), the active class
				this.classList.add('active');
				
				document.querySelectorAll('.portfolio__section').forEach(item => {
					item.classList.remove('visible');
					item.classList.add('hidden')
				})
				if(this.classList.contains('portfolio__selector-tab-1')) {
					document.querySelector('.portfolio__section-1').classList.remove('hidden');
					document.querySelector('.portfolio__section-1').classList.add('visible');
				} else if (this.classList.contains('portfolio__selector-tab-2')) {
					document.querySelector('.portfolio__section-2').classList.remove('hidden');
					document.querySelector('.portfolio__section-2').classList.add('visible');
				} else if (this.classList.contains('portfolio__selector-tab-3')) {
					document.querySelector('.portfolio__section-3').classList.remove('hidden');
					document.querySelector('.portfolio__section-3').classList.add('visible');
				} else if (this.classList.contains('portfolio__selector-tab-4')) {
					document.querySelector('.portfolio__section-4').classList.remove('hidden');
					document.querySelector('.portfolio__section-4').classList.add('visible');
				} else if (this.classList.contains('portfolio__selector-tab-5')) {
					document.querySelector('.portfolio__section-5').classList.remove('hidden');
					document.querySelector('.portfolio__section-5').classList.add('visible');
				}
			let vis = document.querySelector('.visible');
			document.querySelectorAll('.visible img').forEach( (img, i) => {
				if (i <= 6) {
					vis.querySelector('.portfolio__more').style.display = 'none';
				} else {
					vis.querySelector('.portfolio__more').style.display = 'block';
				}
			})
			document.querySelectorAll('.visible img').forEach(function(item, i) {
				if (i >= 6) {
					item.classList.add('portfolio__hide')
				} else {
					document.querySelector('.portfolio__more').style.display = 'none';
				}
				vis.querySelector('.portfolio__more').addEventListener('click', () => {
					item.classList.remove('portfolio__hide');
					vis.querySelector('.portfolio__more').style.display = 'none';
				})
			})
          });
        };
        
        // Then finally, iterates through all tabs, to activate the 
        // tabs system.
        for (var i = tabs.length - 1; i >= 0; i--) {
          toggleTab(tabs[i])
        };
      }
    }
    tabsPortfolio();

	document.querySelector('.question__form button').addEventListener('click', (e) => {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "send.php",
			data: $(".question__form").serialize(),
			success: function(data) {
				document.querySelector('.question__success').style.cssText = 'opacity: 1; margin-bottom: 24px';
			}
		});
	})

});
