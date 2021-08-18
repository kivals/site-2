document.addEventListener("DOMContentLoaded", ready);

function ready() {
    //Блок спойлер
    const faqSpoiler = document.querySelector('.spoiler-faq');

    document.addEventListener('click', documentActions);


    function documentActions(e) {
        const target = e.target;
        if (target.closest('.menu__item') && !target.closest('.menu__item').classList.contains('_active')){
            _removeClasses(document.querySelectorAll('.menu__item'), "_active");
            target.closest('.menu__item').classList.toggle('_active');
        }

        if (target.closest('.spoiler-faq__block')) {
            const spoilerBlock = target.closest('.spoiler-faq__block');
            spoilerBlock.classList.toggle('_active');
            const moveBlock = spoilerBlock.querySelector('.spoiler-faq__wrapper');
            _slideToggle(moveBlock);
        }
    }
}
