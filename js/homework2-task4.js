function formatString(string, maxLength = 40) {
  const str = string.slit(" ");
  // Write code under this line
  if (str.length < maxLength) {
    return str.Length;
  }
  if (str.length > maxLength) {
    return formatString.slice(0, maxLength - 3) + "...";
  }
}
