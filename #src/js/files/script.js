document.addEventListener("DOMContentLoaded", ready);

function ready() {

    document.addEventListener('click', documentActions);


    function documentActions(e) {
        const target = e.target;
        if (target.closest('.menu__item') && !target.closest('.menu__item').classList.contains('_active')){
            _removeClasses(document.querySelectorAll('.menu__item'), "_active");
            const dataNav = target.closest('.menu__item').dataset.nav;
            const navLinkNodes = document.querySelectorAll(`[data-nav='${dataNav}']`);
            Array.from(navLinkNodes).forEach((node)=>{
                node.classList.toggle('_active');
            })
        }

        if (target.closest('.spoiler-faq__block')) {
            const spoilerBlock = target.closest('.spoiler-faq__block');
            spoilerBlock.classList.toggle('_active');
            const moveBlock = spoilerBlock.querySelector('.spoiler-faq__wrapper');
            _slideToggle(moveBlock);
        }
    }
}
