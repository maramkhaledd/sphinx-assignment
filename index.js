
const cardContainer = document.getElementById("cards");
const testContainer = document.getElementById("test");

// Load features and testimonials from the API
async function getData() {
    
        const response = await fetch(
            "https://sphinx-public-api.vercel.app/get-data"
        );

        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }

        const data = await response.json();

        const cards = data.cards;
        const testimonials = data.testimonials;

        cardContainer.innerHTML = cards.map(card => `
            <article class="sub">
                <i class="${card.icon}" aria-hidden="true"></i>
                <h3>${card.title}</h3>
                <p>${card.description}</p>
            </article>
        `).join("");

        testContainer.innerHTML = testimonials.map(testimonial => `
            <article class="sub">
                <i class="${testimonial.icon} quote-icon" aria-hidden="true"></i>
                <p>${testimonial.text}</p>
                <div class="user">
                    <i class="${testimonial.userIcon}" aria-hidden="true"></i>
                    <div>
                        <h3>${testimonial.name}</h3>
                        <span>${testimonial.role}</span>
                    </div>
                </div>
            </article>
        `).join("");
}

getData();

const title = document.getElementById("anim");
const word = "Build faster.";
let count = 0;

function typing() {
    if (count >= word.length) return;

    title.textContent += word[count];
    count ++;

    setTimeout(typing, 100);
}

typing();


const nav = document.getElementById("main-nav");
const menu = document.getElementById("menu");


menu.addEventListener("click", function () {
    nav.classList.toggle("open");
});

const links = nav.querySelectorAll("a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("open");
    });
});


const theme = document.getElementById("theme");
const themeIcon = document.getElementById("themetoggle");

theme.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
        themeIcon.classList.replace("fa-sun", "fa-moon");
    }
});
