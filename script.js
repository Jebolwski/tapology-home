function selectIt(event) {
  let list = event.target.parentNode.children;
  for (var i = 0; i < list.length; i++) {
    list[i].classList.remove("active");
  }
  event.target.classList.add("active");
}

function toggleSidebar() {
  let sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("right-0");
}
