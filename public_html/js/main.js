$(document).ready(function(){
    
    
    
    
    if($('.clients-slider').length > 0){
    $('.clients-slider').owlCarousel({
    autoplay:true,
    margin:24,
    
    responsive:{
        0:{
            items:2,
            margin:0
        },
        576:{
            items:3
        },
        768:{
            items:4
        },
        992:{
            items:5
        }
    }
 });
    
    }  
    
     if($('.customers-slider').length > 0){
    $('.customers-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        
        992:{
            items:2
        }
      
    }
  });
    
    }  
    
   
    
});