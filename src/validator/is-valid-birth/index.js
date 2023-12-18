const DATE = Object.freeze({
  minYear: 1900,
  minMonth: 1,
  maxMonth: 12,
  minDate: 1,
  maxDate: 31,
});

const isValidYear = year => {
  return (
    Number(year) > DATE.minYear && Number(year) <= new Date().getFullYear()
  );
};

const isValidMonth = month => {
  return Number(month) >= DATE.minMonth && Number(month) <= DATE.maxMonth;
};

const isValidDate = date => {
  return Number(date) >= DATE.minDate && Number(date) <= DATE.maxDate;
};

const isValidBirth = input => {
  const [year, month, date] = input.split('-');

  return isValidYear(year) && isValidMonth(month) && isValidDate(date);
};

export default isValidBirth;
