(function(){
  const btn = document?.querySelector('.js-contact-toggle');
  const contactBox = document?.querySelector('.js-contact-modal');

  btn?.addEventListener('click', (e) => {
    contactBox?.classList.toggle('show');
  });
})();