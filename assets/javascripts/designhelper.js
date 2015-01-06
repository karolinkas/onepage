var ready;


ready = function() {

	$('.pull-down').each(function() {
	    $(this).css('margin-top', ($(this).parent().height()-$(this).height()))
		});
		
	} 

         

$(document).ready(ready);
$(document).on('page:load', ready);


// should help to fixing z-index difficulties
function findHighestZIndex(elem) {
    var elems = document.getElementsByTagName(elem);
    var highest = 0;
    for (var i = 0; i < elems.length; i++) {
        var zindex = document.defaultView.getComputedStyle(elems[i], null).getPropertyValue("z-index");
        if ((zindex > highest) && (zindex != 'auto')) {
            highest = zindex;
        }
    }
    return highest;
}
