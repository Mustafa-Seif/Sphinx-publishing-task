$(function () {
    // FADE OUT PRELOADER ON LOAD 
    $(window).on('load', function() {
        $("#preloader").fadeOut("slow");
      });
	//   FADE IN HELP DIALOG 
	$("#help_icon").on('click',function () { 
		$(".help_dialog").fadeIn();
		$(".overLay").fadeIn();
	});
	//   FADE OUT HELP DIALOG 
	$(".help_close").on('click',function () { 
		$(".help_dialog").fadeOut();
		$(".overLay").fadeOut();

	});
	//   FADE IN RESOUECE DIALOG 
	$("#resourse_icon").on('click',function () { 
		$(".resourse_dialog").fadeIn();
		$(".overLay").fadeIn();

	});
	//   FADE OUT RESOUECE DIALOG 
	$(".resourse_close").on('click',function () { 
		$(".resourse_dialog").fadeOut();
		$(".overLay").fadeOut();

	});
})
    


