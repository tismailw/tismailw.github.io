<script>
const toggleSections = document.querySelectorAll(".toggle");

toggleSections.forEach(section => {
    section.addEventListener("click", () => {
        section.nextElementSibling.classList.toggle("hidden");
    });
});
</script>
