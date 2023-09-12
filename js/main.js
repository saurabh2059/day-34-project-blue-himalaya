$(window).scroll(function(){
    if($(this).scrollTop() >200)
    {
        $(".navbar").addClass('sticky')
    }
    else{
        $(".navbar").removeClass('sticky')
    }
})

$(".owl-carousel").owlCarousel(
    {
      items:4,
      loop:true,  
      margin:20,
        


        responsive:{
            0:{
                items:1,
                nav:true,
            },
            600:{
                items:2,
                nav:true,
            },
            1000:{
                items:3,
                nav:true,
                
            }
        }
    }
);


