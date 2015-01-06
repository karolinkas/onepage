$(function (){

	$(".feature:nth-child(2)").addClass("active");

    // Here we instantiate a new WebSocketRails instance
    dispatcher = new WebSocketRails($('#echo').data('uri'), true)
        // We send the message when we push the 'send' button
    document.querySelector('button#fire').onclick = function() {
        send(document.querySelector('#send').value);
        $("#send").focus();
        document.querySelector('#send').value = '';

    };

    document.querySelector('button#left').onclick = function() {

        moveleft();

    };

    document.querySelector('button#right').onclick = function() {

        moveright();

    };


    // all the bindings that attach a function to the the sent content 

    dispatcher.bind('new_message',
        function(message) {
            document.querySelector('#messages').innerHTML += '<li>' + message + '</li>';
        })

    dispatcher.bind('go_left',
        function() {

            var selectedNow = $(".feature.active");

            if ($(".feature:first").hasClass("active")) {
                $(".feature:last").addClass("active");
                $(".feature:first").removeClass("active")
            } else {
                selectedNow.prev(".feature").addClass("active");
                selectedNow.removeClass("active");
            }
        })

    dispatcher.bind('go_right',
        function() {

            var selected = $(".feature.active");

            if ($(".feature:last").hasClass("active")) {
                $(".feature:first").addClass("active");
                $(".feature:last").removeClass("active")
            } else {
                selected.next(".feature").addClass("active");
                selected.removeClass("active");
            }
        })

})


// Here we send the message in the websocket
function send(message) {
    dispatcher.trigger('new_message', message);
}

// we are sendind the direction command
function moveleft() {
    dispatcher.trigger('go_left');
}

function moveright() {
    dispatcher.trigger('go_right');
}



