/**
 *
 * Item Inventory plug-in
 * Mission-s plug-in's
 *
 *
 * -Responsive menu animations.
 *
 * Options:
 *  - menuBorder                 (boolean 'default: false')
 *  - animation                  (string 'default: fadeInEffect')
 *     - available animations:
 *         fadeInEffect
 *         slideDownEffect
 *         showEffect
 *         slideHalfEffect
 *  - menuBreakPoint             (integer 'default: 750')
 *
 *
 * Author :   Jaime Simental
 * Twitter:   @jaimesimental
 * Email  :   jaimesalvador.simental@gmail.com
 * WebSite:   missionjimmy.com
 * Blog   :   blogdejaime.herokuapp.com
 *
**/


(function( $ ){

  'use strict';

  $.fn.menuAnimation = function(options){

    var defaults = {
      menuBorder:    false,
      animation:     'fadeInEffect',
      menuBreakPoint: 750
    };

    var opts = $.extend(true, {}, defaults, options);

    var $item = this;


    // Menu Object
    var menu = {
      // Hamburguer menu style
      createLines: function() {
        var $lines = $('<span></span><span></span><span></span>');

        // Adding styles to menu
        $item.css({
          'cursor': 'pointer',
          'padding': 2
        });

        // Ading styles to lines
        $lines.css({
          'display': 'block',
          'background-color': 'white',
          'height': 4,
          'width': 28,
          'margin': 5
        });

        if(opts.menuBorder) {
          $item.css({
            'border': 'solid 2px white',
            'border-radius': 5
          });
        }
        $item.append($lines);
      },


     // Center vertical
      centerParentContainer: function() {
        var $parentHeight = $item.parent().outerHeight() / 2,
          $itemHeight = $item.outerHeight() / 2;

        $item.css({
          'margin-top': $parentHeight - $itemHeight,
          'margin-right': ($parentHeight - $itemHeight) / 2,
          'margin-left': ($parentHeight - $itemHeight) / 2
        });

        $item.parent().css({
          'z-index': 99
        });
      },


      // Create Menu Content
      createMenuContent: function() {

        var $menuDisplay = $('.menu-display'),
          $navHeight = $item.parent().outerHeight(),
          $navColor = $item.parent().css('background-color');

        $menuDisplay.css({
          'top': $navHeight, // Get's header height
          'background-color': $navColor // Get's header color
        });


      }
    };


    // Effects Object
    var effects = {
      fadeInEffect: function() {
        var $itemAnimation = $('.menu-display');
        $itemAnimation.fadeIn('slow');
        if(!$itemAnimation.is(':animated')) {
          $itemAnimation.fadeOut('slow');
        }
      },
      slideDownEffect: function() {
        var $itemAnimation = $('.menu-display');
        $itemAnimation.slideDown('slow');
        if(!$itemAnimation.is(':animated')) {
          $itemAnimation.slideUp('slow');
        }
      },
      showEffect: function() {
        var $itemAnimation = $('.menu-display');
        $itemAnimation.show('slow');
        if(!$itemAnimation.is(':animated')) {
          $itemAnimation.hide('slow');
        }
      },
      slideHalfEffect: function() {
        var $itemAnimation = $('.menu-display');
        $itemAnimation.css({
          'height': '50%'
        });
        $itemAnimation.slideDown('slow');
        if(!$itemAnimation.is(':animated')) {
          $itemAnimation.slideUp('slow');
        }
      }
    };



    // Effects Selection
    var effectsSelection = function(effectSelected) {
      switch (effectSelected) {
        case 'fadeInEffect':
          effects.fadeInEffect();
          break;

        case 'slideDownEffect':
          effects.slideDownEffect();
          break;

        case 'showEffect':
          effects.showEffect();
          break;

        case 'slideHalfEffect':
          effects.slideHalfEffect();
          break;

        default:
          effects.fadeInEffect();
      }
    };


    // Validate if has menu class
    if(!$item.hasClass('menu')) {
      console.error(
        'Add menu class to the navigation element.'
      );
    } else {

      var $itemAnimation = $('.menu-display');

      if($(window).outerWidth() <= opts.menuBreakPoint) {

        $itemAnimation.removeClass('resize-menu');


        menu.createLines();
        menu.centerParentContainer();
        menu.createMenuContent();

      } else {

        $itemAnimation.addClass('resize-menu');

      }


      $(window).resize(function(){
        var $validate = $($item).is(':empty'),
          $validateWidth = $(window).outerWidth(),
          $itemAnimation = $('.menu-display');


        if($validate &&  $validateWidth <= opts.menuBreakPoint) {

          $itemAnimation.removeClass('resize-menu');
          menu.createLines();
          menu.centerParentContainer();
          menu.createMenuContent();

        } else if (!$validate && $validateWidth > opts.menuBreakPoint) {

          $item.children().remove();
          $itemAnimation.addClass('resize-menu');

          $itemAnimation.css({
            'background-color': 'transparent' // Get's header color
          });
        }

      });

      $item.on('click', function() {
        var effectOption = opts.animation;
        effectsSelection(effectOption);
      });
    }
  return this;
  }; // Main function

}( jQuery ));
