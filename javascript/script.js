document.getElementById('year').textContent = new Date().getFullYear();
  document.querySelectorAll('[data-filter]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const type = btn.getAttribute('data-filter');
      document.querySelectorAll('.projet-card').forEach(card=>{
        card.style.display = (type==='all' || card.getAttribute('data-type')===type) ? '' : 'none';
      });
    });
  });

  // Bootstrap form validation
  (function () {
    'use strict'
    const forms = document.querySelectorAll('.needs-validate')
    Array.from(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          event.preventDefault();
          alert('Merci — message envoyé (exemple)');
          form.reset();
        }
        form.classList.add('was-validated')
      }, false)
    })
  })()