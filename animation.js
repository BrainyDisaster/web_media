const menuSlide =() =>{
    const menu_resp = document.querySelector('.menu_resp');
    const menu = document.querySelector('.menu');

    menu_resp.addEventListener('click',() =>{
        menu.classList.toggle('menu_resp-active');
    });
}
menuSlide();

function scrollappear(){
    var about_content = document.querySelector('.about_content_disable');
    var appear_position = about_content.getBoundingClientRect().top;
    var screen_position = window.innerHeight /1.5; /* để chia 1.5 để kéo màn hình xuống hết phần about us  */
    console.log(appear_position);

    if(appear_position < screen_position){
        about_content.classList.add('about_content_appear');
    }
}
window.addEventListener('scroll',scrollappear);

window.onscroll = function(){ scrollmenu()}; /* khi kéo xuống 80px thì sẽ hạ height còn 10vh và ngược lại */

function scrollmenu(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.getElementById("menu1").style.height = "10vh"
    }
    else{
        document.getElementById("menu1").style.height = "15vh";
    }
}

/* Bấm vào hình show vùng video ra */

$(document).ready(function(){
    $(".select_pic").click(function(){
        $(".panel").slideDown("slow");
    });
});

/* Đóng vùng video lại */
$(document).ready(function(){
    $("#close_video").click(function(){
        $(".panel").slideUp("slow");
    });
});

function scrolltovideo(){
    var video = document.getElementById("video_place");
    video.scrollIntoView();
}

