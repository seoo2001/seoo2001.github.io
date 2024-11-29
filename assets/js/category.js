$('[data-category]').click((e) => {
  currentCategory = e.target.dataset.category;
  filterByTagName(currentCategory);
  });
  
function filterByTagName(tagName) {
  $('.hidden').removeClass('hidden');
  $('.post-wrapper').each((index, elem) => {
    if (!elem.hasAttribute(`data-${tagName}`)) {
      $(elem).addClass('hidden');
    }
  });
  $(`.category`).removeClass('selected');
  $(`.category[data-category=${tagName}]`).addClass('selected');
}