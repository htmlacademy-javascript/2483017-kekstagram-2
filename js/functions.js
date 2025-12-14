// Функция для проверки длины строки.
function checkLength(str, maxLength) {
  return str.length <= maxLength;
}

checkLength('проверяемая строка', 20);

// Функция для проверки, является ли строка палиндромом.
function isPalindrome(str) {
  str = str.replaceAll(' ', '').toLowerCase();
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}

isPalindrome('Лёша на полке клопа нашёл ');

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
function extractNumbers(str) {
  str = str.toString();
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!Number.isNaN(parseInt(str[i], 10))) {
      result += str[i];
    }
  }
  return result === '' ? NaN : Number(result);
}

extractNumbers(2023);

// Функция, которая принимает время начала и конца рабочего дня, а также время старта и продолжительность встречи в минутах и возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит.
const isMeetingInWorkTime = (
  workDayStart,
  workDayEnd,
  meetingStart,
  meetingDuration
) => {
  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':');
    return Number(hours) * 60 + Number(minutes);
  };

  const workStartMinutes = timeToMinutes(workDayStart);
  const workEndMinutes = timeToMinutes(workDayEnd);
  const meetingStartMinutes = timeToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  return (
    meetingStartMinutes >= workStartMinutes && meetingEndMinutes <= workEndMinutes
  );
};

isMeetingInWorkTime('08:00', '17:30', '14:00', 90);
