const checkToolTips = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltip = document.createElement('div');
tooltip.classList.add("tooltip");
document.body.appendChild(tooltip);

checkToolTips.forEach(tip => tip.addEventListener('click', (e) => {
    if (tip.title === tooltip.textContent) {
        tooltip.classList.toggle('tooltip_active');
    } else {
        tooltip.textContent = tip.getAttribute('title')
        tooltip.classList.add('tooltip_active');
    }
    e.preventDefault();
    let position = tip.getBoundingClientRect();
    tooltip.style.left = position.left + "px";
    tooltip.style.top = position.top + 20 + "px";
}));



