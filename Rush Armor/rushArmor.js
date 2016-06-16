/**
 * Rush Armor plug-in
 * Mission-s plug-in's
 *
 * - Hover animations.
 *
 * Options:
 *  -animations                (string 'default: bottomBorder')
 *    -available animations:
 *      - bottomBorder
 *      - fadeIn
 *   - time                    (integer 'default: 400')
 *   - opacity                 (floating Point 'default: .5')
 *   - cursor                  (string 'default: default')
 *       -all css cursor available
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

  $.fn.hoverAnimation = function(options) {

    var defaults = {
      animation: 'bottomBorder',
      time     : 400,
      opacity  : .5,
      cursor   : 'default'
    };

    var opts = $.extend(true, {}, defaults, options);

    var $item = this;


    var hoverAnimations = {

      bottomBorder: function() {
        $item.append('<span class="hover-item"></span>');

        $item.css({
          'position': 'relative',
          'cursor'  : opts.cursor
        });

        $item.hover(function(){
          var $thisItem = $(this);

          $thisItem.children().animate({
            'width': '100%'
          }, opts.time);

        }, function() {

          var $thisItem = $(this);
          $thisItem.children().animate({
            'width': '0'
          }, opts.time);

        });
      },

      fadeInAnimation: function() {

        $item.hover(function(){
          var $thisItem = $(this);

          $thisItem.animate({
            'opacity': opts.opacity
          }, opts.time);

        }, function(){

          var $thisItem = $(this);
          $thisItem.animate({
            'opacity': 1
          }, opts.time);

        });
      }
    };


    function animationSelection(selectedAnimation) {
      var animation = selectedAnimation;

      switch (animation) {

        case 'bottomBorder':
          hoverAnimations.bottomBorder();
          break;

        case 'fadeIn':
          hoverAnimations.fadeInAnimation();
          break;

        default:
          hoverAnimations.bottomBorder();

      }
    }

     animationSelection(opts.animation);
  return this;
  }; 
}( jQuery ));
