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
