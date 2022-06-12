$('document').ready(function() {
    $('#resbutton').on('click', function() {
        $('#story').show();
        $('#result').text("One day, my friend " + $('#inp1').val() +" was visiting New York and ran into " 
        + $('#inp2').val() + ". " + $('#inp1').val() + " ran " + $('#inp3').val() 
        + " to meet " + $('#inp2').val() + ". But " + $('#inp1').val() + " turned out to be very " 
        + $('#inp4').val() + " and " + $('#inp1').val() + " did not enjot the meeting.");

    });
});

