const url = "https://ParusuRblx.github.io/AboutMe";

const button = document.getElementById("copyButton");
const icon = document.getElementById("copyIcon");

const copyIcon = `
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
`;

const checkIcon = `
    <path d="M20 6 9 17l-5-5" />
`;

button.addEventListener("click", async (event) => {
  event.preventDefault();
  event.stopPropagation();

  try {
    await navigator.clipboard.writeText(url);

    button.classList.add("animate");

    setTimeout(() => {
      icon.innerHTML = checkIcon;
      button.classList.remove("animate");
      button.classList.add("copied");
    }, 120);
    button.title = "コピーしました";
    button.setAttribute("aria-label", "コピーしました");

    setTimeout(() => {
      button.classList.remove("copied");
      button.classList.add("animate");

      setTimeout(() => {
        icon.innerHTML = copyIcon;
        button.classList.remove("animate");
      }, 120);
      button.title = "リンクをコピー";
      button.setAttribute("aria-label", "リンクをコピー");
    }, 1200);
  } catch (error) {
    console.error("Copy failed:", error);
  }
});
