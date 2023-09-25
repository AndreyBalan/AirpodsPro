const chooseColor = document.querySelectorAll(".choose-color-btn");
const contentItem = document.querySelectorAll(".content-item");

const open = (evt) => {
    const target = evt.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);

    chooseColor.forEach((item) => {
        item.classList.remove("choose-color-btn--active");
    });

    target.classList.add("choose-color-btn--active");

    contentItem.forEach((item) => {
        item.classList.remove("content-item--active");
    });

    contentActive.forEach((item) => {
        item.classList.toggle("content-item--active");
    });
};

chooseColor.forEach((elem) => {
    elem.addEventListener("click", open);
});
