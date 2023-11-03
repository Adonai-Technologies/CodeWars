# Complete the function/method so that it returns the url with anything after the anchor (#) removed.

# Examples
# "www.codewars.com#about" --> "www.codewars.com"
# "www.codewars.com?page=1" -->"www.codewars.com?page=1"

def remove_url_anchor(url)
    # Split the URL at the "#" character
    parts = url.split('#')
    
    # Take the first part of the split array
    result = parts[0]
    
    return result
  end
  
  url1 = "www.codewars.com#about"
  url2 = "www.codewars.com?page=1"
  
  puts remove_url_anchor(url1)  # Output: "www.codewars.com"
  puts remove_url_anchor(url2)  # Output: "www.codewars.com?page=1"
  
  
# An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
# Note: anagrams are case insensitive
# Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

  
  
  def are_anagrams(str1, str2)
    # Remove spaces and convert to lowercase
    clean_str1 = str1.gsub(/\s+/, '').downcase
    clean_str2 = str2.gsub(/\s+/, '').downcase
  
    # Sort the characters and compare the resulting strings
    clean_str1.chars.sort == clean_str2.chars.sort
  end
  
  # Example usage:
  puts are_anagrams("listen", "silent") # true
  puts are_anagrams("hello", "world")   # false
  