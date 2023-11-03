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
  