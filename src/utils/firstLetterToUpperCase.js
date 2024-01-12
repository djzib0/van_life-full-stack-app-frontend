export default function firstLetterToUpperCase(word) {
  return (
    word.slice(0, 1).toUpperCase() + word.slice(1)
  )
};
