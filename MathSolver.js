//------------------------------------------------------------------------------
val input = "1+22-333";
val expression = parseInput(input);
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Turn a string into an array of string.
function parseInput(input)
{
  // Turn the string input into an array of chars.
  val chars = input.split('');

  // Create an empty array of String.
  var strings = [];

  // Iterate through each character in array.
  var index1 = 0;
  var index2 = 0;
  while (index1 < chars.size)
  {
    // string that will take on the value of a operator or digit(s).
    var stringToAdd = "";

    // If the current character in array is NOT a digit (is an operator):
    if (chars[index1].isNaN()
    {
        // Make that operator to a string.
        stringToAdd += chars[index1];
        index1++;
    }

    // If the current character in array IS a digit:
    else if (!chars[index1].isNaN())
    {
        index2 = index1;

        // While there are adjacent digits:
        while (!chars[index2].isNaN() && index2 < chars.size)
        {
            // Concatenate the digits together into a single string.
            stringToAdd += chars[index2];
            index2++;

            // Make sure index2 doesn't read from outside of array bounds.
            if (index2 >= chars.size)
            {
                break;
            }
        }

        index1 = index2;
    }

    // Add the string to the array of strings.
    strings.push(stringToAdd);
  }

  // Print the value of each element in the array of strings.
  strings.forEach(string => console.log(string));

  // Return the array of strings.
  return strings;
}
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
class ExpressionTree
{
  constructor
  {
    this.rootNode = null;
  }

  traverse(visitor)
  {
    return rootNode.accept(visitor);
  }
}
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
class Node
{
  constructor()
  {
    this.content = "0";
    this.leftNode = null;
    this.rightNode = null;
  }

  accept(visitor)
  {
    return visitor.visit(this);
  }
}
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
class ExpressionTreeBuilder
{
  startBuildTree(expression, tree)
  {

  }

  buildTree(expression)
  {

  }

  findRootIndex(expression)
  {

  }

  /**
     * If current string (operator) is greater priority than the root string (operator), return true;
     *
     * If current string is less or same priority than the root string, return false;
     *
     * @param currentString
     * @param rootString
     * @return
  */
  checkOperatorPriority(currentString, rootString)
  {
    //-------------------------------------
    // PEMDAS priority.
    var priority3 = ["^"]; // highest priority
    var priority2 = ["*", "/"];
    var priority1 = ["+", "-"]; // lowest priority
    //-------------------------------------

    //-------------------------------------
    // Determine the priority level of the current string.
    var currentStringPriority = -1;

    if (priority1.includes(currentString))
        currentStringPriority = 1;

    else if (priority2.includes(currentString))
        currentStringPriority = 2;

    else if (priority3.includes(currentString))
        currentStringPriority = 3;
    //-------------------------------------

    //-------------------------------------
    // Determine the priority level of the root string.
    var rootStringPriority = -1;

    if (priority1.includes(rootString))
        rootStringPriority = 1;

    else if (priority2.includes(rootString))
        rootStringPriority = 2;

    else if (priority3.includes(rootString))
        rootStringPriority = 3;
    //-------------------------------------

    //-------------------------------------
    // Determine if current string has priority over root string.
    var hasPriority = false;

    // Current string has higher priority than root string.
    if (currentStringPriority > rootStringPriority)
        hasPriority = true;

    // Current string has lower priority than root string.
    else if (currentStringPriority < rootStringPriority)
        hasPriority = false;

    // Current string has same priority than root string.
    else if (currentStringPriority == rootStringPriority)
        hasPriority = false;
    //-------------------------------------

    // Return the priority of the current char over the root char.
    return hasPriority
  }
}
//------------------------------------------------------------------------------
