async function loadPages() {
  const res = await fetch("data/pages.json");
  const pages = await res.json();

  const dropdown = document.getElementById("pageSelect");

  pages.forEach(page => {
    const option = document.createElement("option");
    option.value = page.path;
    option.textContent = page.name;
    dropdown.appendChild(option);
  });
}

document.getElementById("pageSelect").addEventListener("change", (e) => {
  document.getElementById("viewer").src = e.target.value;
});

loadPages();