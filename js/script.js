let swiper = new Swiper('.mySwiper', {
    slidesPerView: 6,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

     breakpoints: {
        991: {
            slidesPerView: 6,
            spaceBetween: 20,
        },

        // >= 768px
        767: {
            slidesPerView: 4,
            spaceBetween: 15,
        },

        // >= 576px
        575: {
            slidesPerView: 3,
            spaceBetween: 15,
        },

        // < 576px
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        }
    }
});

const accordionTitles = document.querySelectorAll(".accordion-title");

accordionTitles.forEach(title => {

    title.addEventListener("click", function () {

        const content = this.nextElementSibling;
        const icon = this.querySelector(".icon");

        // Close all other accordion items
        accordionTitles.forEach(item => {

            if (item !== this) {
                item.nextElementSibling.style.display = "none";
                item.querySelector(".icon").textContent = "+";
            }

        });

        // Toggle current item
        if (content.style.display === "block") {
            content.style.display = "none";
            icon.textContent = "+";
        } else {
            content.style.display = "block";
            icon.textContent = "-";
        }

    });

});