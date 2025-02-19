import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";
import Swiper from "swiper";
import { Navigation, Pagination, EffectFade } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

const slidesData = [
    { title: "Slide 1", description: "Lorem ipsum...", image: "/images/heroImage.jpg" },
    { title: "Slide 2", description: "Consectetur adipiscing...", image: "/images/heroImage.jpg" },
    { title: "Slide 3", description: "Sed do eiusmod...", image: "/images/heroImage.jpg" },
    { title: "Slide 4", description: "Tempor incididunt...", image: "/images/heroImage.jpg" },
];

const validSlides = slidesData.filter(slide => slide.title.trim() !== "");

document.addEventListener("DOMContentLoaded", () => {
    const isMobile = window.innerWidth <= 768;
    const container = document.querySelector(".container");
    const swiperContainer = document.querySelector(".swiper");
    const swiperWrapper = document.querySelector(".swiper .swiper-wrapper");

    if (isMobile) {
        swiperContainer.style.display = "block";
        if (container) container.style.display = "none";

        if (swiperWrapper) {
            swiperWrapper.innerHTML = validSlides.map(slide => `
                <div class="swiper-slide">
                    <img src="${slide.image}" alt="${slide.title}" class="slide-image">
                    <div class="slide-content">
                        <h1 class="anim">${slide.title}</h1>
                        <p class="anim">${slide.description}</p>
                    </div>
                </div>
            `).join("");
        }

        new Swiper(".swiper", {
            modules: [Navigation, Pagination, EffectFade], 
            effect: "fade",
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            fadeEffect: { crossFade: true }, 
            observer: true, 
            observeParents: true, 
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

    } else {
        if (swiperContainer) swiperContainer.style.display = "none";
        if (container) {
            container.style.display = "flex";
            container.innerHTML = validSlides.map(slide => `
                <section class="slide">
                    <img src="${slide.image}" alt="${slide.title}" class="slide-image">
                    <div class="slide-content">
                        <h1 class="anim">${slide.title}</h1>
                        <p class="anim">${slide.description}</p>
                    </div>
                </section>
            `).join("");

            const sections = gsap.utils.toArray(".slide");
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".container",
                    pin: true,
                    scrub: 2.5,
                    end: "+=300%",
                }
            });

            const arrow = document.createElement("img");
            arrow.src = "/images/ScrollPrompt.png";  
            arrow.alt = "Scroll Down";
            arrow.classList.add("scroll-arrow");
            document.body.appendChild(arrow);

            arrow.addEventListener("click", () => {
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth"
                });
            });
        }
    }
});


// carousel scroller
document.addEventListener("DOMContentLoaded", async () => {
    const scrollerWrapper = document.querySelector(".scroller-wrapper");

    if (scrollerWrapper) {
        try {
            const response = await fetch("https://dummyjson.com/products?limit=10");
            const data = await response.json();

            scrollerWrapper.innerHTML = data.products.map(product => `
                <a href="#" class="scroller-item">
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <h3>${product.title}</h3>
                </a>
            `).join("");
        } catch (error) {
            console.error("Eroare la preluarea produselor:", error);
        }
    }
});

