function detectColorScheme() {
  let theme = "light";

  //local storage is used to override OS theme settings
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "dark") {
      theme = "dark";
    }
  } else if (!window.matchMedia) {
    return false;
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    theme = "dark";
  }

  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

detectColorScheme();

const toggleSwitch = document.querySelector("#theme-switch");

function switchTheme(isDark) {
  const theme = isDark ? "dark" : "light";
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  toggleSwitch.checked = isDark;
}

toggleSwitch.addEventListener(
  "change",
  (e) => switchTheme(e.target.checked),
  false
);

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    switchTheme(event.matches);
  });
