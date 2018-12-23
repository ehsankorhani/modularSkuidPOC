class Styler {
  constructor() {

  }

  modifyTitle() {
    const title = document.querySelector('.pf-main-page .nx-page-content .nx-pagetitle-maintitle');
    title.style["color"] = "navy";
  }

}

export default Styler;