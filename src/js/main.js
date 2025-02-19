import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

const slidesData = [
    { title: "Slide 1", description: "Lorem ipsum...", image: "/images/heroImage.jpg" },
    { title: "Slide 2", description: "Consectetur adipiscing...", image: "/images/heroImage.jpg" },
    { title: "Slide 3", description: "Sed do eiusmod...", image: "/images/heroImage.jpg" },
    { title: "Slide 4", description: "Tempor incididunt...", image: "/images/heroImage.jpg" },
    { title: "", description: "Fara titlu", image: "/images/heroImage.jpg" },
];

const validSlides = slidesData.filter(slide => slide.title.trim() !== "");

const container = document.querySelector(".container");

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

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 2.5, 
        end: "+=300%",
    }
});
