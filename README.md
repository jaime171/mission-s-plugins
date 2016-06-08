
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

This plugin requires [jQuery](https://jquery.com/) library.

## Setup

You need to declare the plugin after adding the jQuery.

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

*  - slide       (object)
 *      - left    (boolean 'default: false')
 *      - top     (boolean 'default: false')
*  - distance    (integer 'default: -20')
*  - time        (integer 'default: 700')
*  - position    (string 'default: relative')
 
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

You can find more plugins on [missionjimmy](http://missionjimmy.com/mission-s)


