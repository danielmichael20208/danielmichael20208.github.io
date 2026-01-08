// Filter Projects
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        projects.forEach(p => {
            if (filter === "all" || p.dataset.category === filter) {
                p.style.display = "block";
            } else {
                p.style.display = "none";
            }
        });
    });
});