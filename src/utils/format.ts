export const toTitleCase = (text: string): string => {
  if (!text) return '';

  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const toSentenceCase = (text: string): string => {
  if (!text) return '';

  const lowerText = text.toLowerCase();
  return lowerText.charAt(0).toUpperCase() + lowerText.slice(1);
};
