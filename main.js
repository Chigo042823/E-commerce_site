
let widthCheck = function() {
    if (this.window.innerWidth <= 700) {
        this.document.querySelector('#nav1').style.display = "none";
        this.document.querySelector('#nav2').style.display = "none";
        this.document.querySelector('#nav3').style.display = "none";
        this.document.querySelector('#nav4').style.display = "none";
        this.document.querySelector('#nav5').style.display = "none";
        this.document.querySelector('#nav6').style.display = "none";
        this.document.getElementById('hamburger').style.display = "inline";
    } else {
        this.document.querySelector('#nav1').style.display = "inline";
        this.document.querySelector('#nav2').style.display = "inline";
        this.document.querySelector('#nav3').style.display = "inline";
        this.document.querySelector('#nav4').style.display = "inline";
        this.document.querySelector('#nav5').style.display = "inline";
        this.document.querySelector('#nav6').style.display = "inline";
        this.document.getElementById('hamburger').style.display = "none";
    }
}

document.addEventListener('load', widthCheck());

window.addEventListener('resize', function() {
    if (this.window.innerWidth <= 700) {
        this.document.querySelector('#nav1').style.display = "none";
        this.document.querySelector('#nav2').style.display = "none";
        this.document.querySelector('#nav3').style.display = "none";
        this.document.querySelector('#nav4').style.display = "none";
        this.document.querySelector('#nav5').style.display = "none";
        this.document.querySelector('#nav6').style.display = "none";
        this.document.getElementById('hamburger').style.display = "inline";
    } else {
        this.document.querySelector('#nav1').style.display = "inline";
        this.document.querySelector('#nav2').style.display = "inline";
        this.document.querySelector('#nav3').style.display = "inline";
        this.document.querySelector('#nav4').style.display = "inline";
        this.document.querySelector('#nav5').style.display = "inline";
        this.document.querySelector('#nav6').style.display = "inline";
        this.document.getElementById('hamburger').style.display = "none";
        this.document.querySelector('#drop').style.display = 'none';

    }
});

const drop = document.querySelector('#drop');

document.querySelector('#hamburger').addEventListener('click', function() {
    if (drop.style.display == 'none') {
        drop.style.backgroundColor = 'white';
        drop.style.display = 'inline';
    } else {
        drop.style.display = 'none';
    }
})