
// const form = document.getElementById('uploadForm');
// const preview = document.getElementById('catalogPreview');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const file = document.getElementById('pdfFile').files[ 0 ];
//     if (file && file.type === 'application/pdf') {
//         const url = URL.createObjectURL(file);
//         preview.innerHTML = `
//             <h3 class="text-lg font-semibold mb-4">PDF Preview:</h3>
//             <embed src="${url}" width="100%" height="600px" type="application/pdf" class="rounded-lg border" />
//           `;
//     } else {
//         alert('Please upload a valid PDF file.');
//     }
// });

document.getElementById("loginBtn").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("loginModal").classList.remove("hidden");
    document.getElementById("loginModal").classList.add("flex");
});

document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("loginModal").classList.add("hidden");
    document.getElementById("loginModal").classList.remove("flex");
});

window.addEventListener("click", function (e) {
    const modal = document.getElementById("loginModal");
    if (e.target === modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }
});


const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 30,
});

document.getElementById("loginBtn").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("loginModal").classList.remove("hidden");
    document.getElementById("loginModal").classList.add("flex");
});

document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("loginModal").classList.add("hidden");
    document.getElementById("loginModal").classList.remove("flex");
});

document.getElementById("signupBtn").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("signupModal").classList.remove("hidden");
    document.getElementById("signupModal").classList.add("flex");
});

document.getElementById("closeSignup").addEventListener("click", function () {
    document.getElementById("signupModal").classList.add("hidden");
    document.getElementById("signupModal").classList.remove("flex");
});

window.addEventListener("click", function (e) {
    const loginModal = document.getElementById("loginModal");
    const signupModal = document.getElementById("signupModal");
    if (e.target === loginModal) {
        loginModal.classList.add("hidden");
        loginModal.classList.remove("flex");
    }
    if (e.target === signupModal) {
        signupModal.classList.add("hidden");
        signupModal.classList.remove("flex");
    }
});

const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
    const isOpen = menu.classList.contains("max-h-0");

    if (isOpen) {
        menu.classList.remove("max-h-0");
        menu.classList.add("max-h-[500px]"); // enough to contain nav
    } else {
        menu.classList.remove("max-h-[500px]");
        menu.classList.add("max-h-0");
    }
});