function showApplication (appName) {
    const appDiv = document.querySelector(`#${appName}`);
    appDiv.classList.toggle("hide");
}