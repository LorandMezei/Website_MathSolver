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
  while (index1 < chars.length)
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
        while (!chars[index2].isNaN() && index2 < chars.length)
        {
            // Concatenate the digits together into a single string.
            stringToAdd += chars[index2];
            index2++;

            // Make sure index2 doesn't read from outside of array bounds.
            if (index2 >= chars.length)
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
    // Find the index in the expression array that is the root value of the current expression.
    var rootIndex = findRootIndex(expression);

    // Create a new node that will be the root node of the tree.
    var rootNode = Node();

    // Set the content of the root node to be the root value found in the expression array.
    rootNode.content = expression[rootIndex];

    // Set the Tree's root node to be the node that was created.
    tree.rootNode = rootNode;

    // Call the recursive build tree method on the left child of the tree's root, with the subexpression passed
    // (this subexpression is every value in the expression array that is to the left of the root value).
    rootNode.leftNode = buildTree(expression.slice(0, rootIndex));

    // Call the recursive build tree method on the right child of the tree's root, with the subexpression passed
    // (this subexpression is every value in the expression array that is to the right of the root value).
    rootNode.rightNode = buildTree(expression.slice(rootIndex + 1, expression.size));
  }

  buildTree(expression)
  {
    // Base case: If the length of the expression array is 1, that means that it is a leaf node,
    // and it stores only an integer.
    if (expression.length == 1)
    {
        var currentNode = Node();
        currentNode.content = expression[0];

        return currentNode;
    }

    if (expression.length == 0)
    {
        console.log("empty expression");
    }

    // Find the index in the expression array that is the root value of the current expression.
    val rootIndex = findRootIndex(expression);

    // Create a new node that will be the current node.
    var currentNode = Node();

    // Set the content of the current node to be the root value found in the expression array.
    currentNode.content = expression[rootIndex];

    // Call the recursive build tree method on the left child of the tree's root, with the subexpression passed
    // (this subexpression is every value in the expression array that is to the left of the root value).
    currentNode.leftNode = buildTree(expression.slice(0, rootIndex));

    // Call the recursive build tree method on the left right of the tree's root, with the subexpression passed
    // (this subexpression is every value in the expression array that is to the right of the root value).
    currentNode.rightNode = buildTree(expression.slice(rootIndex + 1, expression.length));

    return currentNode;
  }

  /**
     * Given a string array, find the index of the root.
     * The string that will be the root is the last (rightmost) string in the array with the lowest priority.
     *
     * @param expression
     * @return index of the root in string array
  */
  findRootIndex(expression)
  {
    // If expression string array is empty, return -1.
    if (expression.length == 0)
        return -1;

    // Operators that a string's characters can be.
    var operators = ["^", "*", "/", "+", "-"];

    // Set the initial root index to 0.
    var rootIndex = 0;

    // Iterate through each string in the expression.
    for (currentIndex = 0; currentIndex < expression.length; currentIndex++)
    {
        // If the current string is an operator and the root string is an operator.
        if (operators.includes(expression[currentIndex]) && operators.includes(expression[rootIndex]))
        {
            val currentString = expression[currentIndex];
            val rootString = expression[rootIndex];

            // If current string (operator) being looked at does NOT HAVE priority over root string (operator):
            if (!checkOperatorPriority(currentString, rootString))
            {
                // set rootIndex to index of current string.
                rootIndex = currentIndex;
            }
        }
        // If the current string is an operator and the root string is an operand.
        else if (operators.includes(expression[currentIndex]) && !operators.includes(expression[rootIndex]))
        {
            val currentString = expression[currentIndex];
            val rootString = expression[rootIndex];

            // If current string (operator) being looked at HAS priority over root string (operand):
            if (checkOperatorPriority(currentString, rootString))
            {
                // set rootIndex to index of current string.
                rootIndex = currentIndex;
            }
        }
        // If the current string is an operand and the root string is an operand.
        else if (!operators.includes(expression[currentIndex]) && !operators.includes(expression[rootIndex]))
        {
            val currentString = expression[currentIndex];
            val rootString = expression[rootIndex];

            // If current string (operand) being looked at does not have priority over root string (operand):
            if (!checkOperatorPriority(currentString, rootString))
            {
                // set rootIndex to index of current string.
                rootIndex = currentIndex;
            }
        }
        // If the current string is an operand and the root string is an operator.
        else if (!operators.includes(expression[currentIndex]) && operators.includes(expression[rootIndex]))
        {
            val currentString = expression[currentIndex];
            val rootString = expression[rootIndex];

            // If current string (operand) being looked at does HAS priority over root string (operator):
            if (checkOperatorPriority(currentString, rootString))
            {
                // set rootIndex to index of current string.
                rootIndex = currentIndex;
            }
        }
    }

    // Return the index of the root in the expression.
    return rootIndex;
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
    return hasPriority;
  }
}
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
class IVisitor()
{

}
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
class PrefixPrintVisitor()
{

}
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
class CalculateVisitor()
{

}
//------------------------------------------------------------------------------
