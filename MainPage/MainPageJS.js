//------------------------------------------------------------------------------
let btn = document.querySelector('input[name="expressionbutton"]');

btn.addEventListener('click',function(event) {
    evaluate();
});
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
function evaluate()
{
  var inputElement = document.querySelector('input[name="expression"]');
  const input = inputElement.value;

  const expression = parseInput(input);

  if (expression.length > 0)
  {
    const expressionTree = createExpressionTree(expression);

    const visitor = new CalculateVisitor();

    var output = document.querySelector('output[name="expression1"]');
    output.value = expressionTree.traverse(visitor);
  }
}
//------------------------------------------------------------------------------
