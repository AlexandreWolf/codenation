const getCipher = (text, key, operator = 'DECRYPT') => {
  const lowerText = text.toLowerCase();
  const arrayWords = lowerText.split('');
  const letters = /^[a-z]+$/;

  let result = arrayWords.map((value) => {
    if (value.match(letters)) {
      if (operator === 'DECRYPT') {
        let prev = ((value.charCodeAt(0) - 97 - key) % 26) + 97;

        if (prev < 97) return String.fromCharCode(prev + 26);

        return String.fromCharCode(prev);
      }

      return String.fromCharCode(((value.charCodeAt(0) - 97 + key) % 26) + 97);
    }

    return value;
  });

  return result.join('');
};

export default getCipher;
