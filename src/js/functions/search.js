(function(){
  const searchBtn = document?.querySelectorAll('.js-search-header');

  searchBtn.forEach(el => {
    const searchBox = el.nextElementSibling;

    el?.addEventListener('click', (e) => {
      searchBox?.classList.toggle('show');
      el?.classList.toggle('active');
    });
  });
})();
