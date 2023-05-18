import { format } from 'date-fns';

const validateRulers = formState => {
  const newFormState = formState.map(field => {
    let isValid = true;
    let message = '';

    switch (field.name) {
      case 'category':
        isValid = field.value !== '';
        message = 'Choose category';
        break;
      case 'addTitle':
        isValid = /^.{2,30}$/.test(field.value);
        message = 'Text between 2 and 30 characters long';
        break;
      case 'petName':
        isValid = /[a-zA-Zа-яА-ЯҐґІіЇїЄєЪъЫыЭэ]{2,16}$/u.test(field.value);
        message = 'Text between 2 and 16 charact. (only letters)';
        break;
      case 'birthDate':
        if (field.value) {
          isValid = /\d{2}\.\d{2}\.\d{4}/.test(
            format(field.value, 'dd.MM.yyyy')
          );
        } else {
          isValid = false;
        }
        message = 'Date in the format dd.mm.yyyy';
        break;
      case 'breed':
        isValid = /[a-zA-Zа-яА-ЯҐґІіЇїЄєЪъЫыЭэ]{2,16}$/u.test(field.value);
        message = 'Text between 2 and 16 charact. (only letters)';
        break;
      case 'photoUrl':
        isValid = field.value !== '';
        message = 'Download photo';
        break;
      case 'sex':
        isValid = field.value !== '';
        message = 'Chose Male or Female';
        break;
      case 'comments':
        isValid = /^.{8,120}$/.test(field.value);
        message = 'Text between 8 and 120 characters long';
        break;
      case 'location':
        isValid = /^[A-Za-z\s-]+$/.test(field.value);
        message = 'City';
        break;
      case 'price':
        isValid = /^[0-9]+([.,][0-9]+)?$/.test(field.value);
        message = 'Number > 0';
        break;
      default:
        break;
    }

    return { ...field, isValid, message };
  });

  return newFormState;
};

export default validateRulers;
