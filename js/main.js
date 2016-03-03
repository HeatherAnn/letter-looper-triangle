var letter = prompt('Enter a letter:');

var h = 0;

for (b = 0; b < 11; b++) {
  for (h = 0; h < b; h++) {
    document.write(letter);
  }
  document.write('<br>');
}
