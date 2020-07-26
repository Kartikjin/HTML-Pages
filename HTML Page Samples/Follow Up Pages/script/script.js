function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#profile-pic').attr('src', e.target.result);
            $('#profile-pic').removeClass("prof-pic");
            $('#profile-pic').addClass("round");
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function () {
    readURL(this);
});




var current_fs, next_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){

    current_fs = $(this).parent().parent().parent().parent();
	next_fs = $(this).parent().parent().parent().parent().next();
	//activate next step on progressbar using the index of next_fs
	$(".progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	//show the next fieldset
	next_fs.show(); 
	current_fs.hide()
});

$(".submit").click(function(){
	return false;
})
