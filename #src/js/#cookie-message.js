{
const cookieEl = document.getElementById('cookieMessage');
    if(cookieEl) {
        const btnClose = document.getElementById('cookieMessageClose');

btnClose.addEventListener('click', () => {
    cookieEl.style.display = 'none';
})

let cookies = () => {
    if (!Cookies.get('hide-cookie')) {
        setTimeout(() => {
            cookieEl.style.display = 'block';
        }, 1000);
    }

    Cookies.set('hide-cookie', 'true', {
        expires: 1
    });
}



cookies();
    }

}