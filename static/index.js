document.addEventListener('DOMContentLoaded', () => {
    const signIn = document.querySelector('button')
    $(document).ready(function () {
        $("#myBtn").click(function () {
            $("#exampleModalCenter").modal();
            $('#save').on('click', function () {
                $('.navbar-text').text(`Logged in user: ` + $('#username').val());
                signIn.disabled=true;
            });
        });
    });
});