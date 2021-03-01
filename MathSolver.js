val input = "1+22-333";
val expression = parseInput(input)

// Turn a string into an array of string.
function parseInput(input)
{
  // Turn the string input into an array of chars.
  val chars = input.split('');

  // Create an empty array of String.
  var strings = []

  // Iterate through each character in array.
  var index1 = 0
  var index2 = 0
  while (index1 < chars.size)
  {
    // string that will take on the value of a operator or digit(s).
    var stringToAdd = ""

    // If the current character in array is NOT a digit (is an operator):
    if (chars[index1].isNaN()
    {
        // Make that operator to a string.
        stringToAdd += chars[index1]
        index1++
    }

    // If the current character in array IS a digit:
    else if (!chars[index1].isNaN())
    {
        index2 = index1

        // While there are adjacent digits:
        while(!chars[index2].isNaN() && index2 < chars.size)
        {
            // Concatenate the digits together into a single string.
            stringToAdd += chars[index2]
            index2++

            // Make sure index2 doesn't read from outside of array bounds.
            if (index2 >= chars.size)
            {
                break
            }
        }

        index1 = index2
    }

    // Add the string to the array of strings.
    strings.push(stringToAdd)
  }

  // Print the value of each element in the array of strings.
  strings.forEach(string => console.log(string));

  // Return the array of strings.
  return strings
}
