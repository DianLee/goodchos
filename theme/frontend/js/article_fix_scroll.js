$(document).ready(function() {
		var view = $("#tslshow");
        var move = "1070px";
        var sliderLimit = -750
        
        $("#rightArrow").click(function(){
            var items = $("#tslshow .news_banner_con").size();            
            if (items > 5) {
                move = ((items-5)*215)+((items-5)*20)+"px";
                var currentPosition = parseInt(view.css("left"));
                console.log(move);
                console.log(currentPosition);
                if (Math.abs(currentPosition) != ((items-5)*215)+((items-5)*20)) {
                 if (currentPosition >= sliderLimit) view.stop(false,true).animate({left:"-="+move},{ duration: 1000})        
                }
                
            }
            
            return false;
        });
        
        $("#leftArrow").click(function(){
            var currentPosition = parseInt(view.css("left"));
            if (currentPosition < 0) view.stop(false,true).animate({left:"+="+move},{ duration: 1000})
            return false;
        });
});