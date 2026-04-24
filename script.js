<script>
// IST CLOCK
function updateISTClock() {
    const now = new Date();
    const ist = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

    let h = ist.getHours();
    let m = ist.getMinutes().toString().padStart(2, "0");
    let s = ist.getSeconds().toString().padStart(2, "0");

    let ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;

    document.getElementById("istClock").innerText =
        `${h}:${m}:${s} ${ampm}`;
}
setInterval(updateISTClock, 1000);

// SCROLL ANIMATION
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
});

// SMOOTH NAV CLICK
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
</script>
