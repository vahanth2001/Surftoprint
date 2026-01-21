document.addEventListener("DOMContentLoaded", () => {

  function loadHTML(container, file) {
    fetch(file)
      .then(res => {
        if (!res.ok) throw new Error(file + " not found");
        return res.text();
      })
      .then(data => {
        document.getElementById(container).innerHTML = data;
      })
      .catch(err => {
        console.error(err);
        document.getElementById(container).innerHTML =
          "<p style='color:red'>Error loading " + file + "</p>";
      });
  }

  loadHTML("header-container", "components/header.html");
  loadHTML("page-container", "pages/home.html");

});