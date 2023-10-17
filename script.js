var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
// -----------------------logic for ABOUT section---------------
function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab"); //it will take one of the three id at a time from the function opentab and display it
}
// ------------------------for sidemenu( for responsive)--------------
var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}
// ---------------------making the form work for everyone whoever gives any input-----
const scriptURL = 'https://script.google.com/macros/s/AKfycbwE1tTfiDZAymeCJxgdFMJXARCGANfmjR9sdZ8Fwc84DJ8bJfbUoOLE7wElZaniOaFUFQ/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML = "Message sent successfully!";
                    setTimeout(function () {
                        msg.innerHTML = "";
                    }, 5000)
                    form.reset();
                })
                .catch(error => console.error('Error!', error.message))
        })

// -----------------------------------------------adding typewritter effect--------------------------

/*$("#typed").typed({
    strings: ["Hi, I'm Avik Banerjee From WestBengal,India"],
    typeSpeed: 100,
    startDelay: 0,
    backSpeed: 60,
    backDelay: 2000,
    loop: true,
    cursorChar: "|",
    contentType: 'html'
});*/
