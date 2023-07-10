import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

(function(){
  const menuActiveClass = 'active'
  const burgerActiveClass = 'active'
  const ariaExpandedDataName = 'aria-expanded'
  const ariaLabelDataName = 'aria-label'
  const ariaLabelOpenText = 'Открыть меню'
  const ariaLabelCloseText = 'Закрыть меню'
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const btnClose = document?.querySelector('.js-close-mobile-menu');

  burger?.addEventListener('click', (e) => {
    burgerMenu(burger);
  });

  function burgerMenu (burgerTrigger) {
    burgerTrigger?.classList.toggle(burgerActiveClass);
    menu?.classList.toggle(menuActiveClass);

    if (menu?.classList.contains(menuActiveClass)) {
      burgerTrigger?.setAttribute(ariaExpandedDataName, 'true');
      burgerTrigger?.setAttribute(ariaLabelDataName, ariaLabelCloseText);
      disableScroll();
    } else {
      burgerTrigger?.setAttribute(ariaExpandedDataName, 'false');
      burgerTrigger?.setAttribute(ariaLabelDataName, ariaLabelOpenText);
      enableScroll();
    }
  }

  btnClose?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('active');
    menu.classList.remove('active');
    enableScroll();
  });
})();
