document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggle = document.querySelectorAll('[data-dropdown-toggle]');
  dropdownToggle.forEach((toggle) => {
      toggle.addEventListener('click', function() {
          const parent = this.closest('.dropdown-item');
          parent.classList.toggle('active');
      })
  })

  //Feechar o dropdown ao clicar fora
  document.addEventListener('click', function (e) {
      dropdownToggle.forEach((toggle) => {
          const parent = toggle.closest('.dropdown-item');
          if(!parent.contains(e.target)) {
              parent.classList.remove('active');
          }
      })
  })
})

const searchToggle = document.getElementById('searchToggle');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');

searchToggle.addEventListener('click', () => {
  console.log(searchOverlay);
  searchOverlay.style.display = 'flex';
  setTimeout(() => {
      searchOverlay.querySelector('.search-input').focus();
  }, 100);
})

//Fechar o botão
closeSearch.addEventListener('click', () => {
  searchOverlay.style.display = 'none';
})

//Fechar com o ESC 
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
      searchOverlay.style.display = 'none';
  }
})

//Galeria---------------------------------------------
const imagens = document.querySelectorAll('.galeria img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

imagens.forEach((img) => {
  img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('show');
  })
})

//Fechar a lightbox
lightbox.addEventListener('click', () => {
  lightbox.classList.remove('show');
})

//Abrir o Login------------------------------------------------------

const openLoginBtn = document.getElementById('openLogin');
const containerLogin = document.querySelector('.container-login');

openLoginBtn.addEventListener('click', () => {
  containerLogin.classList.add('active')
})

//Fechar ao clicaar fora do formulário ou pressionar ESC
containerLogin.addEventListener('click', (e) => {
  if(e.target === containerLogin) {
      containerLoginclassList.remove('active')
  }
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
      containerLogin.classList.remove('active');
  }
})

/* ----------------------------------------- */

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('.container-login');
  const btnClose = document.querySelector('.close-login');
  const loginBox = document.querySelector('.form-box.login');
  const registerBox = document.querySelector('.form-box.register');
  const btnToRegister = document.querySelector('.register-link');
  const btnToLogin = document.querySelector('.login-link');

  // Abrir modal (exemplo: chamar modal.classList.add('active'); em algum evento externo)

  // Fechar modal
  btnClose?.addEventListener('click', () => modal.classList.remove('active'));

  // Alternar para cadastro
  btnToRegister?.addEventListener('click', (e) => {
    e.preventDefault();
    loginBox.classList.remove('active');
    registerBox.classList.add('active');
  });

  // Alternar para login
  btnToLogin?.addEventListener('click', (e) => {
    e.preventDefault();
    registerBox.classList.remove('active');
    loginBox.classList.add('active');
  });

  // Fechar modal ao clicar fora do wrapper
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
});