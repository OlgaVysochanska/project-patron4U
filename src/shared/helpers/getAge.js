import moment from 'moment';

export const getAge = bd => {
  const birthDate = moment(bd, 'DD-MM-YYYY');
  const currentDate = moment();

  const yearsDiff = currentDate.diff(birthDate, 'years');
  const monthsDiff = currentDate.diff(birthDate, 'month') % 12;
  const totalMonths = yearsDiff * 12 + monthsDiff;
  const daysDiff = currentDate.diff(birthDate, 'days') % 31;

  if (totalMonths === 1) {
    return `${totalMonths} month`;
  }

  if (totalMonths !== 0 && totalMonths < 12) {
    return `${totalMonths} months`;
  }

  if (totalMonths >= 12 && totalMonths < 24) {
    return `1 year`;
  }

  if (totalMonths === 0 && daysDiff === 1) {
    return `1 day`;
  }

  if (totalMonths === 0 && daysDiff > 1) {
    return `${daysDiff} days`;
  }

  return `${yearsDiff} years`;
};
