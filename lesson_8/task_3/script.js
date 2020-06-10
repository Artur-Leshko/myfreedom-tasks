function toWeirdCase(string){
  let words = string.split(' ');
  
  for (let i = 0; i < words.length; i++) {
    words[i] = toSomeCase(words[i]);
  }
  
  string = words.join(' ');
  
  return string;
}

function toSomeCase(word) {
  let newWord = '';
  for (let i = 0; i < word.length; i++) {
    if (i % 2 == 0) {
      newWord += word[i].toUpperCase();
    } else {
      newWord += word[i].toLowerCase();
    }
  }
  
  return newWord;
}
