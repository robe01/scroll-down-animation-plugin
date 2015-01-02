//A function that sets the element's opacity to zero
function setElementsOpacityToZero(elementsToSetOpacityToZero){
    
    var $window = jQuery(window); //Cache the window browser selection
    elementsToSetOpacityToZero.each(function(){
        
        //Check whether the user has already scrolled past an element within the document. 
        //If so, then don't apply an opacity class to the element so that it isn't animated in on scroll.
        //This is so that when a user refreshes the website at a particular point in the page, 
        //elements are not animated in again, as they've already been scrolled past by.
        
        var elementPosition = jQuery(this).offset().top; //Get the element's position within the document
        var webBrowserHeight = $window.innerHeight(); //Get window browser height
        var distanceBetweenBrowserWindowAndElement = elementPosition - webBrowserHeight;
        
        if(distanceBetweenBrowserWindowAndElement > $window.scrollTop()){
            jQuery(this).addClass('scroll-in-opacity');
        }
    });
}


//A function that animates the elements based on their position within the document and window scroll
function animateElementOnScrollPosition(animationEffect,selectedElementsToAnimate,duration,removeOffSet){
    
    var $window = jQuery(window); //Cache the window browser selection
    var webBrowserHeight = $window.innerHeight(); //Get window browser height

    selectedElementsToAnimate.each(function(){
        
        //Only animate elements that have the opacity class. This is so that if the user
        //resizes their browsers back and fourth, the scroll in animation doesn't reset
        //for elements that have already been animated in
        if(jQuery(this).hasClass('scroll-in-opacity')){
        
            var elementPosition = jQuery(this).offset().top; //Get the element's position within the document

            if(removeOffSet === 'true'){
                var offSetDistance  = 0;
            }
            else{
                var offSetDistance  = jQuery(this).outerHeight()/2; //Get half the element's height and use that as the distance offset, so that the window will animate the element once half of it is on screen
            }
            var distanceBetweenBrowserWindowAndElement = (elementPosition - webBrowserHeight) + offSetDistance; //Calculate the distance between the browser window and the element within the document with an offset included 
            var elementId = this.id; //Store the id of the element in a variable to be used in the window scroll event 
            var $this = jQuery(this);

            $window.on('scroll.'+elementId,function(){
                if(distanceBetweenBrowserWindowAndElement < $window.scrollTop()){
                    jQuery("#" + elementId).velocity(animationEffect,{duration: duration, queue: false, complete: function(){
                  
                        $this.removeClass('scroll-in-opacity');//Remove the opacity class as the element has now been animated in
                        
                    }});
                    $window.off('.'+elementId);//Remove the event handler
                }
            });
        }
    }); 
}

//A function for removing the opacity 0 class on all elements. 
//This happens when the screen is smaller than 768px in width and needs to have 
//all scroll in animation removed.

function removeOpacityClassOnScrollElements(selectedElements){
    selectedElements.each(function(){
        jQuery(this).removeClass('scroll-in-opacity');
    }); 
}