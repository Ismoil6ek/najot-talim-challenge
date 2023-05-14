const toggleSwitch = document.querySelector("#theme-switch");

(() => {
  if (!window.matchMedia) {
    return false;
  } else if (
    (localStorage.getItem("theme") &&
      localStorage.getItem("theme") === "dark") ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleSwitch.checked = true;
  }
})();

const switchTheme = (isDark) => {
  const theme = isDark ? "dark" : "light";
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  toggleSwitch.checked = isDark;
};

toggleSwitch.addEventListener("change", (e) => switchTheme(e.target.checked));

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    switchTheme(event.matches);
  });
