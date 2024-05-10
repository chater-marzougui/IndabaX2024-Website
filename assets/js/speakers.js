function togglepopupspeaker1() {
    document.getElementById("dialog").classList.toggle("active");

    if (document.getElementById("dialog").classList.contains("active")) {
        document.getElementById("dialog").showModal();

        document.body.style.overflow = 'hidden';
    }
    else {
        document.getElementById("dialog").close();

        document.body.style.overflow = '';
    }
}

function togglepopupspeaker2() {
    document.getElementById("dialog2").classList.toggle("active");
    if (document.getElementById("dialog2").classList.contains("active")) {
        document.getElementById("dialog2").showModal();

        document.body.style.overflow = 'hidden';
    }
    else {
        document.getElementById("dialog2").close();
        
        document.body.style.overflow = '';
    }
}