/**

 * @param {React.ChangeEvent<HTMLInputElement>} e 
 * @param {Function} handleChange 
 */

/**
 * @param {React.ChangeEvent<HTMLInputElement>} e
 * @param {Function} handleChange
 */

// //////////////////////Check the correct date////////////////////
export const handleDateInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
) => {
  const inputDate = e.target.value;
  const isValidDateFormat = /^\d{4}-\d{2}-\d{2}$/.test(inputDate);

  if (isValidDateFormat) {
    const yearPart = inputDate.split("-")[0];

    if (yearPart.length > 4) {
      e.target.value = inputDate.substring(0, 4);
    }
  }

  handleChange(e);
};

// //////////////////////Check the values should only be numaric////////////////////
export const handleNumericInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
) => {
  const isNonNumericValue = /[^\d]/.test(e.target.value);

  if (isNonNumericValue) {
    e.target.value = "";
    e.target.disabled = true;
  } else {
    e.target.disabled = false;
    handleChange(e);
  }
};
