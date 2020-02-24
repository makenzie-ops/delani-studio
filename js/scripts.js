$(document).ready(function(){
    $(".designPar").click(function(){
        $(".imageIconDesign").toggle();
        $(".design").toggle();
    });
    $(".developmentPar").click(function(){
        $( ".imageIconDev").toggle();  
        $(".dev").toggle();
    });
    
    
    
        $(".prod").click(function(){
            $(".imageIconPro").toggle();
            $(".product").toggle();
        });
        //$(".works").hover(function (){
           // $(this).find("hoverCaption").fadeIn(60);
        //}, function(){
         //   $(this).find(".hoverCaption").fadeOut(30)
       // });

        $(".works44").hover(function (){
            $('.work4').toggle();
        });
        $(".works33").hover(function(){
            $(".work3").toggle();
        });
        $(".works22").hover(function(){
            $(".work2").toggle();
        });
        $(".works11").hover(function(){
            $(".work1").toggle();
        });
        $(".works55").hover(function(){
            $(".work5").toggle();
        });
        $(".works66").hover(function(){
            $(".work6").toggle();
        });
        $(".works77").hover(function(){
            $(".work7").toggle();
        });
        $(".works88").hover(function(){
            $(".work8").toggle();
        });

        $("form#form").submit(function(){
            var name = document.getElementById("name").value
            var email = document.getElementById ("email").value
             if (name === "" || email === ""){
                 alert ("Kindly fill in your details")
             } else 
             {
                alert("Thank you very much "+ name  +"  your message has been sent.")
             }
        })

});