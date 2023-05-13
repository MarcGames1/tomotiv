export const ValidateFormFields = (nume, email, phone, content) => {
  const errors = [];

  if (!nume) {
    errors.push({ field: 'nume', message: 'Numele este obligatoriu' });
  }

  if (!email) {
    errors.push({
      field: 'email',
      message: 'Adresa de email este obligatorie',
    });
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("EMAIL REGEX",emailRegex.test(email));
      errors.push({ field: 'email', message: 'Adresa de email este invalidă' });
    }
  }

  if (!phone) {
    errors.push({
      field: 'phone',
      message: 'Numărul de telefon este obligatoriu',
    });
  } else {
    const phoneRegex =
      /^(\+?\d{1,3}[.\-\s]?)?\(?\d{3}\)?[.\-\s]?\d{3}[.\-\s]?\d{4}$/;
      console.log(phoneRegex.test(phone));
    if (!phoneRegex.test(phone)) {
      errors.push({
        field: 'phone',
        message: 'Numărul de telefon este invalid',
      });
    }
  }

  if (!content) {
    errors.push({
      field: 'content',
      message: 'Conținutul mesajului este obligatoriu',
    });
  }

  return errors;
};
