$(document).ready(function() {


        
            function toggleDarkMode(){
                var element = document.body;
                element.classList.toggle('dark-mode');
                element.classList.toggle('text-white');

                document.querySelector(".alt").classList.toggle("dark-mode");  
                document.querySelector(".navbar").classList.toggle("dark-mode");                

                let val=document.getElementsByClassName('card');
                for(i=0;i<val.length;i++){
                    val[i].classList.toggle('dark-mode');
                    val[i].classList.toggle('text-white');
                }
                let lav=document.getElementsByClassName('drkmod-card');
                for(i=0;i<lav.length;i++){
                    lav[i].classList.toggle('dark-mode');
                    lav[i].classList.toggle('text-white');
                }
                let vol=$(".form-control");
                for(i=0;i<vol.length;i++){
                    vol[i].classList.toggle("bg-dark");
                    vol[i].classList.toggle('text-white');
                }

                //  let el=document.querySelector(".second-jumbo").style.backgroundImage;                
                //  if(el == "url(img1/grey.jpeg)") {
                //     el.style.backgroundImage = "url(img1/hasat.jpg)";
                //  }

                let firstjumbo = document.querySelectorAll(".first-jumbo");
                for(i=0;i<firstjumbo.length;i++){
                    firstjumbo[i].classList.toggle("dark-mode-first-jumbo");
                }

                let lastjumbo = document.querySelectorAll(".last-jumbo");
                for(i=0;i<lastjumbo.length;i++){
                    lastjumbo[i].classList.toggle("dark-mode-last-jumbo");
                };
                
                let ftr=document.querySelector("footer");
                ftr.classList.toggle("dark-mode");
                ftr.classList.toggle("text-white");

                let color=document.getElementsByTagName("a");
                for(i=0;i<color.length;i++){
                    color[i].classList.toggle('text-white');
                }

                let changemode_sun = document.querySelectorAll(".fa-sun");
                for(i=0;i<changemode_sun.length;i++){
                    changemode_sun[i].classList.toggle("fa-sun-dark");
                }
                let changemode_moon = document.querySelectorAll(".fa-moon");
                for(i=0;i<changemode_moon.length;i++){
                    changemode_moon[i].classList.toggle("fa-moon-dark");
                }
                
                 
            };

document.querySelector('.dark-mode-icon').addEventListener('click',toggleDarkMode);
document.querySelector('.dark-mode-icon-2').addEventListener('click',toggleDarkMode);


$(".fa-bars").click(function(){
    $(".navbar-collapse").toggle(200);
})

$(".glass-1").click(function(){
    $(".navbar-collapse").toggle(200);
    $(".search").focus();  
})

// $(".alt").hide();
$(".alt-a").click(function(){
    $(".alt").toggle(100);
})


// $('.sepet-none-1').hide();
// $('.sepet-none-2').hide();
// $('.sepet-none-3').hide();
// $('.sepet-none-4').hide();


$('.add-1').click(function(){
    $('.sepet-none-1').show();
})
$('.add-2').click(function(){
    $('.sepet-none-2').show();
})
$('.add-3').click(function(){
    $('.sepet-none-3').show();
})
$('.add-4').click(function(){
    $('.sepet-none-4').show();
})


$('.close-1').click(function(){
    $('.sepet-none-1').hide(200);
})
$('.close-2').click(function(){
    $('.sepet-none-2').hide(200);
})
$('.close-3').click(function(){
    $('.sepet-none-3').hide(200);
})
$('.close-4').click(function(){
    $('.sepet-none-4').hide(200);
})



    // var moving__background = $("#header__background");
    // $(window).scroll(function() { 
    //     // moving__background.css('margin-top', ($(window).scrollTop())/7); // Parallax scrolling
    //     moving__background.css('opacity', 1 - ($(window).scrollTop())/moving__background.height()/1.9); // Fading out
    // });



        window.addEventListener('scroll', () => {

            const nav = document.querySelector('nav');

            if(window.scrollY >= 45.2){
                nav.classList.add('active-nav');
            } else {
                nav.classList.remove('active-nav'); 
            }
        });






})