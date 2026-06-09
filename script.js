// Smooth scroll animation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute('href')
        ).scrollIntoView({
            behavior:'smooth'
        });

    });
});


// Milestones Tabs

function showTab(tabId){

    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');

    event.target.classList.add('active');

    // Hide certificates when Academic Awards is selected
    const certificates = document.getElementById('certificates');

    if(tabId === 'awards'){
        certificates.style.display = 'none';
    } else {
        certificates.style.display = 'block';
    }
}

function openImage(src){
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImg").src = src;
}

function closeImage(){
    document.getElementById("imageModal").style.display = "none";
}

/* Close when clicking outside image */
document.getElementById("imageModal").addEventListener("click", function(e){
    if(e.target === this){
        closeImage();
    }
});

/* Close when pressing ESC */
document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        closeImage();
    }
});