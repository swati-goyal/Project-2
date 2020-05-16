if (!localStorage.getItem('username'))
    localStorage.setItem('username', "");

document.addEventListener('DOMContentLoaded', () => {
    const signIn = document.querySelector('#myBtn');
    const logoutButton = document.querySelector('#logout')
    const channelButton = document.querySelector('#enter-channel-btn');

    function clickedSignIn() {
        $('#myBtn').click(function () {
            $("#signin-modal").modal();
            $('#save').on('click', function () {
                $('.navbar-text').text(`Welcome, ` + $('#username').val());
                localStorage.setItem('username', $('#username').val());
                signIn.disabled = true;
                logoutButton.disabled = false;
                channelButton.disabled = false;
            });
        });
    };

    $('#logout').click(function () {
        $('.navbar-text').text("Logged out");
        localStorage.removeItem('username');
        //click on sign-in to join again!
        signIn.disabled = false;
        logoutButton.disabled = true;
        channelButton.disabled = true;
        clickedSignIn();
    });

    if (localStorage.getItem('username').length > 0) {
        document.querySelector('.navbar-text').innerHTML = `Welcome, ` + localStorage.getItem('username');
        signIn.disabled = true;
        logoutButton.disabled = false;
    } else {
        $(document).ready(function () {
            signIn.disabled = false;
            logoutButton.disabled = true;
            channelButton.disabled = true;
            clickedSignIn();
        });
    };
});