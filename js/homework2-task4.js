function formatString(string, maxLength = 40) {
  // Write code under this line
  if (string.length < maxLength) {
    return string;
  }
  return string.slice(0, maxLength) + "...";
}
