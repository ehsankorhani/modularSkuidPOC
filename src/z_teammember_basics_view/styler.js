class Styler {
  constructor() {

  }

  modifyTitle() {
    const title = document.querySelector(".pf-main-page .nx-page-content .nx-pagetitle-maintitle");
    title.style.color = "red";
  }

}

export default Styler;