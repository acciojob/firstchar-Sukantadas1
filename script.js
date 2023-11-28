function firstChar(text) {
 // Remove leading and trailing spaces
  const trimmedStr = text.trim();

  // Check if the trimmed string is empty
  if (trimmedStr === '') {
    return '';
  }

  // Return the first character of the trimmed string
  return trimmedStr.charAt(0);
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
