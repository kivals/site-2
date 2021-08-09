document.addEventListener("DOMContentLoaded", ready);

function ready() {
    document.addEventListener('click', documentActions);

    function documentActions(e) {
        const target = e.target;
        if (target.closest('.menu__item') && !target.closest('.menu__item').classList.contains('_active')){
            _removeClasses(document.querySelectorAll('.menu__item'), "_active");
            target.closest('.menu__item').classList.toggle('_active');
        }
    }
}
