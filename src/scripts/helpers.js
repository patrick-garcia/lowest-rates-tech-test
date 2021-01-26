const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      func(...args);
    };
 
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const smoothScroll = function(target) {
  var scrollContainer = target;
  do {
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);
  
  var targetY = 0;
  do {
    if (target == scrollContainer) break;
    targetY += target.offsetTop;
  } while (target = target.offsetParent);
  
  scroll = function(c, a, b, i) {
    i++; if (i > 30) return;
    c.scrollTop = a + (b - a) / 30 * i;
    setTimeout(function(){ scroll(c, a, b, i); }, 6);
  }
  
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

const scrollTo = (targetElem) => {
  if (!targetElem) {
    return;
  }
  
  smoothScroll(targetElem);
};

module.exports = { debounce, smoothScroll, scrollTo };