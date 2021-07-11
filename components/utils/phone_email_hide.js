const injectPhoneMailTo = () => {
  const phone = document.getElementById('phone')
  phone.addEventListener('click', () => {
    phone.href = 'tel:' + atob(phone.dataset.phone)
  }, false)
  const email = document.getElementById('email')
  email.addEventListener('click', () => {
    email.href = 'mailto:' + atob(email.dataset.email)
  }, false)
}

export { injectPhoneMailTo }

// source: https://stackoverflow.com/a/41408157/13746045
// base64 encoder: https://www.base64encode.org/