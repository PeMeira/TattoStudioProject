document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggles = document.querySelectorAll('[data-dropdown-toggle]');
  
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        const parent = this.closest('.dropdown-item');
  
        document.querySelectorAll('.dropdown-item.active').forEach(item => {
          if (item !== parent) {
            item.classList.remove('active');
          }
        });
  
        parent.classList.toggle('active');
      });
    });
  
    document.addEventListener('click', function (e) {
      const isClickInside = e.target.closest('.dropdown-item');
      if (!isClickInside) {
        document.querySelectorAll('.dropdown-item.active').forEach(item => {
          item.classList.remove('active');
        });
      }
    });
  });
