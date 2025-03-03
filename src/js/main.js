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
  {
    title: "Slide 1",
    description: "Lorem ipsum...",
    image: "../images/heroImage.jpg",
  },
  {
    title: "Slide 2",
    description: "Consectetur adipiscing...",
    image: "../images/heroImage.jpg",
  },
  {
    title: "Slide 3",
    description: "Sed do eiusmod...",
    image: "../images/heroImage.jpg",
  },
  {
    title: "",
    description: "Tempor incididunt...",
    image: "../images/heroImage.jpg",
  },
];

const validSlides = slidesData.filter((slide) => slide.title.trim() !== "");

document.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.innerWidth <= 768;
  const container = document.querySelector(".container");
  const swiperContainer = document.querySelector(".swiper");
  const swiperWrapper = document.querySelector(".swiper .swiper-wrapper");

  if (isMobile) {
    swiperContainer.style.display = "block";
    if (container) container.style.display = "none";

    if (swiperWrapper) {
      swiperWrapper.innerHTML = validSlides
        .map(
          (slide) => `
                <div class="swiper-slide">
                    <img data-src="${slide.image}" alt="${slide.title}" class="slide-image lazyload">
                    <div class="slide-content">
                        <h1 class="anim">${slide.title}</h1>
                        <p class="anim">${slide.description}</p>
                    </div>
                </div>
            `
        )
        .join("");
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
    });
  } else {
    if (swiperContainer) swiperContainer.style.display = "none";
    if (container) {
      container.style.display = "flex";
      container.innerHTML = validSlides
        .map(
          (slide) => `
                <section class="slide">
                    <img data-src="${slide.image}" alt="${slide.title}" class="slide-image lazyload">
                    <div class="slide-content">
                        <h1 class="anim">${slide.title}</h1>
                        <p class="anim">${slide.description}</p>
                    </div>
                </section>
            `
        )
        .join("");

      const sections = gsap.utils.toArray(".slide");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          scrub: 2.5,
          end: "+=300%",
        },
      });
      if (container) {
        const arrow = document.createElement("img");
        arrow.src = "../images/ScrollPrompt.png";
        arrow.alt = "Scroll Down";
        arrow.classList.add('scroll-arrow', 'lazyload');

        container.appendChild(arrow);

        console.log("Săgeata a fost adăugată:", arrow);

        arrow.addEventListener("click", () => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        });
      }
    }
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  const scrollerWrapper = document.querySelector(".scroller-wrapper");

  if (scrollerWrapper) {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=10");
      const data = await response.json();

      scrollerWrapper.innerHTML = data.products
        .map(
          (product) => `
                <a href="#" class="scroller-item">
                    <img data-src="${product.thumbnail}" class="lazyload" alt="${product.title}">
                    <h3>${product.title}</h3>
                </a>
            `
        )
        .join("");
    } catch (error) {
      console.error("Eroare la preluarea produselor:", error);
    }
  }
});

//rotator

document.addEventListener("DOMContentLoaded", async () => {
  const rotatorImagesContainer = document.querySelector(".rotator-images");
  const paginationContainer = document.querySelector(".rotator-pagination");
  const rotatorDescription = document.querySelector(".rotator-description");

  try {
    const response = await fetch("https://dummyjson.com/products?limit=4");
    const data = await response.json();
    const products = data.products;

    if (products.length === 0) return;

    rotatorImagesContainer.innerHTML = products
      .map(
        (product, index) => `
              <div class="rotator-image ${index === 0 ? "active" : ""}">
                  <img data-src="../images/child${index + 1}.jpg" class="lazyload" alt="${
          product.title
        }">
                  <div class="rotator-title">${product.title}</div>
                  <div class="rotator-arrow">
                      <a href=""><img data-src="../images/Arrow.png" alt="Arrow" class="lazyload"></a>
                  </div>
              </div>
          `
      )
      .join("");

    paginationContainer.innerHTML = products
      .map(
        (_, index) => `
              <div class="pagination-dot ${
                index === 0 ? "active" : ""
              }" data-index="${index}"></div>
          `
      )
      .join("");

    rotatorDescription.textContent = products[0].description;

    const images = document.querySelectorAll(".rotator-image");
    const dots = document.querySelectorAll(".pagination-dot");

    let currentIndex = 0;

    function updateRotator(index) {
      images.forEach((img, i) => img.classList.toggle("active", i === index));
      dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
      rotatorDescription.textContent = products[index].description;
      currentIndex = index;
    }

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        updateRotator(parseInt(dot.dataset.index));
      });
    });
  } catch (error) {
    console.error("Eroare la preluarea produselor:", error);
  }
});

//footer
document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector(".footer");

  function toggleFooterVisibility() {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight - 50) { 
          footer.classList.add("visible");
      } else {
          footer.classList.remove("visible");
      }
  }

  window.addEventListener("scroll", toggleFooterVisibility);
});
