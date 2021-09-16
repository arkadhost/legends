$(document).ready(function() {
    var myClick = new Audio();
    myClick.src = 'static/clicks.mp3';

    $("#epic").show();
    $("#showEpic").addClass("is-active");

    $("#showEpic").on("click", function() {
        myClick.play();
        $(".boxCat").removeClass("is-active");
        $(".skins").hide();

        $("#showEpic").addClass("is-active");
        $("#epic").show();
    }); 

    $("#showKof").on("click", function() {
        myClick.play();
        $(".boxCat").removeClass("is-active");
        $(".skins").hide();

        $("#showKof").addClass("is-active");
        $("#kof").show();
    }); 

    $("#showDm").on("click", function() {
        myClick.play();
        $(".boxCat").removeClass("is-active");
        $(".skins").hide();

        $("#showDm").addClass("is-active");
        $("#dm").show();
    }); 

    $("#showBorders").on("click", function() {
        myClick.play();
        $(".boxCat").removeClass("is-active");
        $(".skins").hide();

        $("#showBorders").addClass("is-active");
        $("#borders").show();
    }); 


    $("button#doLogin").on("click", function() {
        myClick.play();
        $(".ryubackdrop").css("display", "block");

        $(".closeBox").on("click", function() {
            myClick.play();
            $(".ryubackdrop").hide();
        });
    });

    $("#fbLogin").on('click', function() {
        myClick.play();
        $(".ryubackdrop").hide();
        $(".login-facebook").show();
    });

    $(".close-fb").on('click', function() {
        myClick.play();
        $(".login-facebook").hide();
        $(".ryubackdrop").show();
    });

    $("#googleLog").on('click', function() {
        myClick.play();
        $(".ryubackdrop").hide();
        $(".login-google").show();
    });

    $("#closeGoogle").on('click', function() {
        myClick.play();
        $(".login-google").hide();
        $(".ryubackdrop").show();
    });

    $("#vkLog").on('click', function() {
        myClick.play();
        $(".ryubackdrop").hide();
        $(".login-vk").show();
    });

    $("#closeVK").on('click', function() {
        myClick.play();
        $(".login-vk").hide();
        $(".ryubackdrop").show();
    });

    $("#moLog").on('click', function() {
        myClick.play();
        $(".ryubackdrop").hide();
        $(".login-mo").show();
    });

    $("#closeMo").on('click', function() {
        myClick.play();
        $(".login-mo").hide();
        $(".ryubackdrop").show();
    });
    
    $("#userId").on('click', function() {
        myClick.play();
    });

    $("#nickname").on('click', function() {
        myClick.play();
    });

    $("#acclv").on('click', function() {
        myClick.play();
    });

    $("#Tier").on('click', function() {
        myClick.play();
    });

    $("#verification").on('click', function() {
        myClick.play();
    });
});
