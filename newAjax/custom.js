$("#btn").click(function(){

// $("#head").load('demo.html');

$.ajax({
url:"demo.html",
success:function(data){
	$("#head").html(data);
}
});

});