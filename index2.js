$('document').ready(function() {
    $('#resbutton').on('click', function() {
        var file_size = $('#inp1').val() * $('#inp2').val() * log(2,$('#inp3').val()) / 8000;
        $('#result').text("File is " + file_size + "KB which is ok").css('color', 'green');

    });
});

function log(base, number) {
    return Math.log(number) / Math.log(base);
}
