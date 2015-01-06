window.onload = function() {

	// var featurbuttonHtml = $(".featureButton:nth-child(1)").html();
	// featurbuttonHtml.style("margin-left:-20px;");

	$("#tv,#tablestuff,#buttoncontainer,#LoginContainer").hide();

	$(".icon:nth-child(1)").click(function(){
		$("#iconcontainer").hide();
	});

	$(".icon:nth-child(2)").click(function(){
		$("#iconcontainer").hide();
		$("#tv,#tablestuff,#buttoncontainer").show();
	});

	$(".icon:nth-child(3)").click(function(){
		$("#iconcontainer").hide();
	});

	$("#logo").click(function(){
		$("#tv,#tablestuff,#buttoncontainer,#LoginContainer").hide();
		$("#iconcontainer").show();
	});

	$("#LoginButton").click(function(){
		$("#iconcontainer,#tv,#tablestuff,#buttoncontainer").hide();
		$("#LoginContainer").show();
	});

};