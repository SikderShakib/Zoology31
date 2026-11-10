// নোটিশ তালিকা খালি থাকলে খালি অবস্থার বার্তা দেখানো হয়।
const list = document.querySelector('.notice-list');
const emptyState = document.querySelector('.empty-state');
if (list && emptyState) emptyState.hidden = list.querySelectorAll('.notice-entry').length > 0;
