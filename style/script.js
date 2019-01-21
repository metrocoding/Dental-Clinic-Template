sos = 0


first.onclick = function() {
    document.getElementById("first").classList.add('on');
    document.getElementById("second").classList.remove('on');
    document.getElementById("third").classList.remove('on');
    t1.style.opacity = "1";
    t1.style.visibility = "visible";
    t2.style.opacity = "0";
    t2.style.visibility = "hidden";
    t3.style.opacity = "0";
    t3.style.visibility = "hidden";
    sos = "0";
}
second.onclick = function() {
    document.getElementById("first").classList.remove('on');
    document.getElementById("second").classList.add('on');
    document.getElementById("third").classList.remove('on');
    t2.style.opacity = "1";
    t2.style.visibility = "visible";
    t1.style.opacity = "0";
    t1.style.visibility = "hidden";
    t3.style.opacity = "0";
    t3.style.visibility = "hidden";
    sos = "1";

}
third.onclick = function() {
    document.getElementById("first").classList.remove('on');
    document.getElementById("second").classList.remove('on');
    document.getElementById("third").classList.add('on');
    t3.style.opacity = "1";
    t3.style.visibility = "visible";
    t2.style.opacity = "0";
    t2.style.visibility = "hidden";
    t1.style.opacity = "0";
    t1.style.visibility = "hidden";
    sos = "2";

}

setInterval("gohard()", 5000);

function gohard() {
    if (sos == 0) {
        second.onclick();
    } else if (sos == 1) {
        third.onclick();
    } else if (sos == 2) {
        first.onclick();
    }
}

//----------------------------------------------------------
gi = 0
dep.onclick = function() {
    if (gi == 0) {
        dep.style.backgroundImage = "url(pic/top/ub.jpg)";
        gi = "1";
        kerkere.style.height = "285px";
        kerkere.style.visibility = "visible";
    } else if (gi == 1) {
        dep.style.backgroundImage = "url(pic/top/down.jpg)";
        gi = "0";
        kerkere.style.height = "0";
        kerkere.style.visibility = "hidden";

    }
}

//mini==========================================================
pos = 0
setInterval("jojo()", 7000);

function jojo() {
    if (pos > -40) {
        pos = pos - 20.4;
        box.style.right = pos + "%";
    } else {
        pos = 0;
        box.style.right = pos + "%";
    }
}

right.onclick = function() {

    if (pos < 0) {
        pos = pos + 20.4;
        box.style.right = pos + "%";
    }
}

//mini2==========================================================
pos2 = 0
setInterval("lolo()", 7000);

function lolo() {
    if (pos2 > -100) {
        pos2 = pos2 - 50;
        slider2.style.right = pos2 + "%";
    } else {
        pos2 = 0;
        slider2.style.right = pos2 + "%";
    }
}

right1.onclick = function() {

    if (pos2 < 0) {
        pos2 = pos2 + 50;
        slider2.style.right = pos2 + "%";
    }
}

//nazar111=========================================================================
pop = 0

bi1.onclick = function() {
    document.getElementById("bi1").classList.add('on');
    document.getElementById("bi2").classList.remove('on');
    document.getElementById("bi3").classList.remove('on');
    document.getElementById("bi4").classList.remove('on');
    naz1.style.opacity = "1";
    naz1.style.visibility = "visible";
    naz2.style.opacity = "0";
    naz2.style.visibility = "hidden";
    naz3.style.opacity = "0";
    naz3.style.visibility = "hidden";
    naz4.style.opacity = "0";
    naz4.style.visibility = "hidden";
    pop = "0";
}

bi2.onclick = function() {
    document.getElementById("bi1").classList.remove('on');
    document.getElementById("bi2").classList.add('on');
    document.getElementById("bi3").classList.remove('on');
    document.getElementById("bi4").classList.remove('on');
    naz1.style.opacity = "0";
    naz1.style.visibility = "hidden";
    naz2.style.opacity = "1";
    naz2.style.visibility = "visible";
    naz3.style.opacity = "0";
    naz3.style.visibility = "hidden";
    naz4.style.opacity = "0";
    naz4.style.visibility = "hidden";
    pop = "1";
}

bi3.onclick = function() {
    document.getElementById("bi1").classList.remove('on');
    document.getElementById("bi2").classList.remove('on');
    document.getElementById("bi3").classList.add('on');
    document.getElementById("bi4").classList.remove('on');
    naz1.style.opacity = "0";
    naz1.style.visibility = "hidden";
    naz2.style.opacity = "0";
    naz2.style.visibility = "hidden";
    naz3.style.opacity = "1";
    naz3.style.visibility = "visible";
    naz4.style.opacity = "0";
    naz4.style.visibility = "hidden";
    pop = "2";
}

bi4.onclick = function() {
    document.getElementById("bi1").classList.remove('on');
    document.getElementById("bi2").classList.remove('on');
    document.getElementById("bi3").classList.remove('on');
    document.getElementById("bi4").classList.add('on');
    naz1.style.opacity = "0";
    naz1.style.visibility = "hidden";
    naz2.style.opacity = "0";
    naz2.style.visibility = "hidden";
    naz3.style.opacity = "0";
    naz3.style.visibility = "hidden";
    naz4.style.opacity = "1";
    naz4.style.visibility = "visible";
    pop = "3";
}
setInterval("fifi()", 12000);

function fifi() {
    if (pop == 0) {
        bi2.onclick();
    } else if (pop == 1) {
        bi3.onclick();
    } else if (pop == 2) {
        bi4.onclick();
    } else if (pop == 3) {
        bi1.onclick();
    }
}

right3.onclick = function() {
    if (pop == 0) {
        bi4.onclick();
    } else if (pop == 1) {
        bi1.onclick();
    } else if (pop == 2) {
        bi2.onclick();
    } else if (pop == 3) {
        bi3.onclick();
    }
}


//offset===================================================
window.onscroll = function() {

    if (window.pageYOffset > 800) {
        document.getElementById("top").classList.add('top');
        document.getElementById("up").classList.add('up');
        document.getElementById("down").classList.add('down');
        document.getElementById("bala").classList.add('bala');
    } else {
        document.getElementById("top").classList.remove('top');
        document.getElementById("up").classList.remove('up');
        document.getElementById("down").classList.remove('down');
        document.getElementById("bala").classList.remove('bala');
    }
}

function goup() {
    window.scrollTo(0, 0);
}

//matnchange======================================================
li1.onclick = function() {
    cho.innerHTML = "عصب کشی";
}
li2.onclick = function() {
    cho.innerHTML = "ارتودنسی";
}
li3.onclick = function() {
    cho.innerHTML = "پروتز";
}
li4.onclick = function() {
    cho.innerHTML = "ایمپلنت";
}
li5.onclick = function() {
    cho.innerHTML = "جرم گیری";
}
li6.onclick = function() {
    cho.innerHTML = "جراحی";
}
li7.onclick = function() {
    cho.innerHTML = "اطفال";
}
li8.onclick = function() {
    cho.innerHTML = "فک و صورت";
}

//responsive=====================================================
flag = 0
dokme.onclick = function() {
    if (flag == 0) {
        menures.style.right = "0";
        flag = "1";
        dokme.style.backgroundImage = "url(pic/other/baz.png)";
    } else if (flag == 1) {
        menures.style.right = "-350px";
        flag = "0";
        dokme.style.backgroundImage = "url(pic/other/baste.png)";

    }
}