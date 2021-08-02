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
    const s = subtraction >= oneMinute * 2 ? 's' : '';
    return `Há ${(subtraction / oneMinute).toFixed()} minuto${s}`;
  } else if (subtraction < oneDay) {
    const s = subtraction >= oneHour * 2 ? 's' : '';
    return `Há ${(subtraction / oneHour).toFixed()} hora${s}`;
  } else if (subtraction < oneWeek) {
    const s = subtraction >= oneDay * 2 ? 's' : '';
    return `Há ${(subtraction / oneDay).toFixed()} dia${s}`;
  } else if (subtraction < oneMonth) {
    const s = subtraction >= oneWeek * 2 ? 's' : '';
    return `Há ${(subtraction / oneWeek).toFixed()} semana${s}`;
  } else if (subtraction < oneYear) {
    const s = subtraction >= oneMonth * 2 ? 'meses' : 'mês';
    return `Há ${(subtraction / oneMonth).toFixed()} ${s}`;
  } else if (subtraction > oneYear) {
    const s = subtraction >= oneYear * 2 ? 's' : '';
    return `Há ${(subtraction / oneYear).toFixed()} ano${s}`;
  } else {
    return `Há certo tempo`;
  }
}
