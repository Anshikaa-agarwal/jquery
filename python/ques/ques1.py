# This question asks to find valid words that can be formed using a given list of characters, allowing repetition of characters.

# Input: A list of characters: L1 = ['e', 'o', 'b', 'a', 'm', 'g', 'l', 'k']
       # A list of words: ['go', 'bat', 'me', 'eat', 'goal', 'boy', 'run', 'look', 'come']

# Output: Valid words that can be created using the characters from L1, repetition allowed. For example, "go" can be formed since both 'g' and 'o' are in L1.

L1 = ['e', 'o', 'b', 'a', 'm', 'g', 'l', 'k']
words = ['go', 'bat', 'me', 'eat', 'goal', 'boy', 'run', 'look', 'come']
result = []

for word in words:
       is_valid = True
       for char in word:
              if char not in L1:
                     is_valid = False
                     break
       if is_valid:
              result.append(word)

print(result)