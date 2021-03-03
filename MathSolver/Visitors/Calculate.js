//------------------------------------------------------------------------------
class CalculateVisitor
{
  // Recursive.
  visit(node)
  {
      // Base case if the node is a leaf node (operand).
      if (node.leftNode == null && node.rightNode == null)
      {
          // Return the value of the node's content.
          return parseFloat(node.content);
      }
      else
      {
          var answer = 0.0;

          // x will get left node's content. y will get right node's content.
          // Content is originally string, so convert it to double.
          const x = parseFloat(node.leftNode.accept(this));
          const y = parseFloat(node.rightNode.accept(this));

          // Choose correct operator based on string's characters.
          const operator = node.content;

          // Switch. Apply the appropriate operation to the nodes' contents.
          switch (operator)
          {
            case "^":
              answer = Math.pow(x, y);
              break;

            case "*":
              answer = x * y;
              break;

            case "/":
              answer = x / y;
              break;
            case "+":
              answer = x + y;
              break;

            case "-":
              answer = x - y;
              break;

            default:
          }

          // Return the answer with the operation applied.
          return answer;
      }
  }
}
//------------------------------------------------------------------------------
