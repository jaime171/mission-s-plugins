/**
 * Buster Up plug-in
 * Mission-s plug-in's
 *
 * -Takes an item and animates when the user scroll that section.
 *
 * Options:
 *  - slide       (object)
 *      - left    (boolean 'default: false')
 *      - Top     (boolean 'default: false')
 *  - distance    (negative integer 'default: -20')
 *  - time        (integer 'default: 700')
 *
 * Author :   Jaime Simental
 * Twitter:   @jaimesimental
 * Email  :   jaimesalvador.simental@gmail.com
 * WebSite:   missionjimmy.com
 * Blog   :   blogdejaime.herokuapp.com
**/

(function( $ ){

  'use strict';

  $.fn.scrollAnimation = function(options){

    var defaults = {
      slide: {
        left: false,
        top: false
      },
      distance: -20,
      time: 700
    };

    var opts = $.extend(true, {}, defaults, options);

    var $item = this,
      $elemenPosition = $item.offset().top,
      $middle = $(window);

    // Hidde item, only visibility, it will reander in the DOM.
    $item.css({
      opacity: 0,
      visibility: 'visible',
      position: 'relative',
    });

    // Slide Left Animation.
    var slideLeftFunction = function(slide) {
      if (slide) {
        $item.css({
          left: opts.distance
        });
        $item.animate({
          left: 0
        }, {
          duration: opts.time,
          queue: false
        });
      }
    };

    // Slide Top Animation.
    var slideTopFunction = function(slide) {
      if (slide) {
        $item.css({
          top: opts.distance
        });
        $item.animate({
          top: 0
        }, {
          duration: opts.time,
          queue: false
        });
      }
    };

    // Check if the item is at the middle of the screen.
    if($elemenPosition <= ($middle.scrollTop() + $(window).outerHeight() / 1.6)) {
      $item.animate({
        opacity: 1
      }, {
        duration: opts.time,
        queue: false
      });

      // Options Validation
      if(opts.slide.left === true && opts.slide.top === true) {

        console.warn(
          'Only one value can be true.' + '\n' + '\n' +
          'slideLeft: ' + opts.slide.left + '\n' +
          'slideTop: ' + opts.slide.top + '\n'
        );
      } else if (opts.slide.top) {
        slideTopFunction(opts.slide.top);
      } else if (opts.slide.left) {
        slideLeftFunction(opts.slide.left);
      }
    }

    // Check if the item is at the middle of the screen (Scroll Event).
    $(window).scroll(function(){
      if($elemenPosition <= ($middle.scrollTop() + $(window).outerHeight() / 1.6)) {
        $item.animate({
          opacity: 1
        }, {
          duration: opts.time,
          queue: false
        });
        // Options Validation
        if(opts.slide.left === true && opts.slide.top === true) {
          console.warn(
            'Only one value can be true.' + '\n' + '\n' +
            'slideLeft: ' + opts.slide.left + '\n' +
            'slideTop: ' + opts.slide.top + '\n'
          );
        } else if (opts.slide.top) {
          slideTopFunction(opts.slide.top);
        } else if (opts.slide.left) {
          slideLeftFunction(opts.slide.left);
        }

        $(window).off('scroll');
      }
    });
    return this;
  };
}( jQuery ));
