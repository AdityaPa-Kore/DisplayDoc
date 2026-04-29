async function loadPages() {
  const res = await fetch("data/pages.json");
  const pages = await res.json();

  const dropdown = document.getElementById("pageSelect");

  pages.forEach(page => {
    const option = document.createElement("option");
    option.value = page.path;
    option.textContent = page.name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    dropdown.appendChild(option);
  });
}

document.getElementById("pageSelect").addEventListener("change", (e) => {
  const viewer = document.getElementById("viewer");
  const emptyState = document.getElementById("emptyState");

  if (e.target.value) {
    viewer.src = e.target.value;
    viewer.classList.add("loaded");
    emptyState.classList.add("hidden");
  } else {
    viewer.classList.remove("loaded");
    emptyState.classList.remove("hidden");
  }
});

loadPages();