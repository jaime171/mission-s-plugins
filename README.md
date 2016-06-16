
<p align="center">
  <img src="http://missionjimmy.com/images/logo-v2.svg" height="200">
</p>

# Mission-s Power ups 

jQuery animation plugins to power up your project.
You can use only the plugin that you need or use them all.

#Table of Contents

- [Buster Up](#buster-up-features)
- [Item Inventory](#item-inventory)

## Buster Up Features
Uses window scroll event to detects when the object is in the centered and make the animation.
 
 
## Getting Started

All plug ins requires [jQuery](https://jquery.com/) library.

## Setup

You need to declare the plug in after adding the jQuery.

```javascript
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>

<script src="routeToJsFiles/busterUp.js"></script>
```

## Use

Just select any item like any jQuery selector and call the plugin.

```javascript

$('h1').scrollAnimation();

```
######Options(defaults)

*   slide       (object)
 *  left    (boolean 'default: false')
 *  top     (boolean 'default: false')
*   distance    (integer 'default: -20')
*   time        (integer 'default: 700')
*   position    (string 'default: relative')
 
```javascript

$('h1').scrollAnimation({
  'slide': {
    'left': false,
    'top': false
  },
  'distance': -20,
  'time': 700,
  'position': relative
});

```



## Item Inventory Features
Adds a responsive hamburger menu, you can change breakpoint and display animation.

## Setup

You need to declare the plug in after adding the jQuery. Also you need to include sass variables file.

```html
<header>
    <nav class = "menu"></nav>
    <div class = "menu-display" >
        <div class = "vertical-align" >
            <div class = "vertical-margin" >
            </div>
        </div>
    </div>
</header>
```

```javascript
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>

<script src="routeToJsFiles/itemInventory.js"></script>
```

## Use

```javascript

$('.menu').menuAnimation();

```


######Options(defaults)

*  animation (string 'default: fadeInEffect') 
 * fadeInEffect 
 * slideDownEffect 
 * showEffect 
 * slideHalfEffect 
*  menuBreakPoint (integer 'default: 750') 
*  menuPosition (string 'default: right') 
*  menuBorder (boolean 'default: false')



######Sass Variables(defaults)

* Header background color, responsive menu will take this color too
  * $header-bg-color    : $main-color

* Header nav menu item color
  * $menu-item-color    : black

* Header height
  * $menu-height        : 85px

* Hamburguer menu lines color
  * $hb-menu-color-lines: white

* Menu breakpoint(Must be the same as js menu breakpoint)
  * $menu-breakpoint    : 750px







You can find more plugins on [missionjimmy](http://missionjimmy.com/projects/mission-s-plugins/)
