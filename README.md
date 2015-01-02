Scroll-in-animation-plugin
==========================

A JavaScript plugin that animates elements into a document through a window scroll event.


Requires other dependecies
==========================

This plugin requires that you install jQuery and VelocityJS in that order, before installing this plugin.


How to use this plugin
==========================

You must create an array variable storing a list of ID selected elements you wish to animate in on a scroll event. 

Like so: var $animateSlideLeftIn = jQuery('#section-1-content-info-1, #section-info-content-container-1);

Then you must call the function 'setElementsOpacityToZero()' passing the array variable you just made, as an arguement in the parameter. This function will make the elements you wish to animate in have an opacity of 0, so that they don't appear on screen. This way elements will be animated in from nowhere. Remember, although the elements will be invisible they will still be displayed as block elements.

Like so: setElementsOpacityToZero($animateSlideLeftIn);

Then you must call the function 'animateElementOnScrollPosition(animationEffect,selectedElementsToAnimate,duration,removeOffSet)'. With this function you can specify various parameters. 

Parameter 1
==========================

This is the type of animation you want. The parameter takes a string for the name of the animation type you want to use. The type of animations available to use are the same ones from velocityJS' UI Pack plugin. Please go to this link to find out more about the types of animations available http://julian.com/research/velocity/#uiPack. 

Parameter 2
==========================

This parameter takes the array variable containing the list of elements to animate. 

Parameter 3
==========================

This parameter takes the duration time of the animation for each element in mili seconds.

Parameter 4
==========================

This parameter specifies whether you want to enable the offset feature. By default, this is set to true by leaving the parameter empty. If you wish to disable the offset feature then put the string 'true' in parameter 4. The offset is half the height of the element being animated in on the browser scroll event, so that when you scroll half way past the element you will see it being animated in on the page. 

You can use the function like so: animateElementOnScrollPosition('transition.slideLeftBigIn', $animateSlideLeftIn, 1000). Notice how I've left out parameter 4 because I want the offset to be turned on which is, by default, by not passing in the 'true' string.

Dist and production files
==========================

There is a normal file of the plugin and a minified version for those who care for performance.

Enjoy and leave me any feedback.


