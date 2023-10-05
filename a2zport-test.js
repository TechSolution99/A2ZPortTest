const findLongestWord = (sentesce) => {
  sentesce = sentesce.replace(/[^a-zA-Z\s]/g, '').toLocaleLowerCase()
  
  const words = sentesce.split(' ')
  
  const vowels = ['a', 'e', 'i', 'o', 'u']
  
  const calcVowelCount = (word) => {
    return word.split('').reduce((prev, char) => {
      if ( vowels.includes(char) ) { return prev + 1 }
      return prev
    }, 0)
  }
  
  const [longestWord] = words.reduce((prev, word) => {
    const [longestWord, maxVowelCount] = prev
    const newVowelCount = calcVowelCount(word)
  
    if ( longestWord.length > word.length ) { return prev }
    if ( longestWord.length < word.length ) { return [word, newVowelCount] }  
    if ( newVowelCount > maxVowelCount ) { return [word, newVowelCount] }
    return prev
  }, ['', 0])
  return longestWord
}

let str = '“Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)'
console.log(findLongestWord(str))