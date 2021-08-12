export function ElapsedTimeByCreationDate(createdDate: number) {
  const subtraction = Date.now() - createdDate; // em milisegundos

  const oneMinute = 1000 * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneWeek = oneDay * 7;
  const oneMonth = oneDay * 30;
  const oneYear = oneDay * 365;

  if (subtraction < oneMinute) {
    return 'Agora a pouco';
  } else if (subtraction < oneHour) {
    return `Há ${(subtraction / oneMinute).toFixed()} min`;
  } else if (subtraction < oneDay) {
    return `Há ${(subtraction / oneHour).toFixed()} h`;
  } else if (subtraction < oneWeek) {
    return `Há ${(subtraction / oneDay).toFixed()} d`;
  } else if (subtraction < oneMonth) {
    return `Há ${(subtraction / oneWeek).toFixed()} sem`;
  } else if (subtraction < oneYear) {
    return `Há ${(subtraction / oneMonth).toFixed()} m`;
  } else if (subtraction > oneYear) {
    return `Há ${(subtraction / oneYear).toFixed()} a`;
  } else {
    return `Há certo tempo`;
  }
}
