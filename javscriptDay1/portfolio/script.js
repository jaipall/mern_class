document.getElementById("about_details").addEventListener("click", function () {
  document.getElementById("about-section").scrollIntoView({
    behavior: "smooth",
  });
});

document.getElementById("skill_details").addEventListener("click", function () {
  document.getElementById("skills-section").scrollIntoView({
    behavior: "smooth",
  });
});

document
  .getElementById("project-details")
  .addEventListener("click", function () {
    document.getElementById("project-section").scrollIntoView({
      behavior: "smooth",
    });
  });

document
  .getElementById("recomand-details")
  .addEventListener("click", function () {
    document.getElementById("Recommend-section").scrollIntoView({
      behavior: "smooth",
    });
  });
