import {ExpressionTree, Node, ExpressionTreeBuilder, createExpressionTree} from 'ExpressionTree.js';

//------------------------------------------------------------------------------
export class PrefixPrintVisitor
{
  visit(node)
  {
      // Base case I think.
      if (node == null)
      {
          return null;
      }

      // If the current node is an operator.
      if (node.leftNode != null && node.rightNode != null)
      {
          switch (node.content)
          {
            case "^":
              console.log("exp ");
              break;

            case "*":
              console.log("mul ");
              break;

            case "/":
              console.log("div ");
              break;

            case "+":
              console.log("add ");
              break;

            case "-":
              console.log("sub ");
              break;

            default:
          }

          // Recursion.
          node.leftNode.accept(this)
          node.rightNode.accept(this)
      }
      else
      {
          console.log(node.content)
      }

      return "";
  }
}
//------------------------------------------------------------------------------
