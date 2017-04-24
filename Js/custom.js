$(function(){
    
    
    
    // Widnow Height -----------------
        var x = $(window).height();
        
        $(".header").css("height" , x );


    $(window).resize(function(){
        x = $(window).height();
        
    
    $(".header").css("height" , x );
        
    $(".middle").css('paddingTop' , ((x / 2)- 130));
 
    
        });
        // Nice Scrolle -----------------


            $('html').niceScroll({
                
                cursorcolor: '#f7600e',
                cursorborder:'1px solid #1abc9c'
            });
    
        // Nice Scrolle -----------------
            var leftArrow = $(".testim .fa-chevron-left"),
                 rightArrow = $(".testim .fa-chevron-right");


        function checkClient(){
            
            
            $(".slid1:first").hasClass("active") ? leftArrow.fadeOut() : leftArrow.fadeIn();
            $(".slid1:last").hasClass("active") ? rightArrow.fadeOut() : rightArrow.fadeIn();

        
        };
    
                            checkClient();

    
    
        $(".testim i").click(function(){
            
            if ($(this).hasClass("fa-chevron-right")){
                
                     $(".testim .active").fadeOut(100,function(){
                $(this).removeClass("active").addClass("hidden").next(".slid1").addClass("active").fadeIn();
                         
                                            checkClient();

            })
            }
            
            else {
                
                 $(".testim .active").fadeOut(100,function(){
                $(this).removeClass("active").addClass("hidden").prev(".slid1").addClass("active").fadeIn();
                         
                checkClient();

                
                
            })
            }
                                    
            
            
        });
    
    //Design Button to move down 
    
   $(".header .arrow i").click(function(){
            
            
            $('html, body').animate({
                scrollTop:$('.ourService').offset().top
            },1000)
        });
   
   // show more 
   
   $(".showMore").click(function(){
       
        $(".items .hidden").fadeToggle(1000);
   });
    
    
});