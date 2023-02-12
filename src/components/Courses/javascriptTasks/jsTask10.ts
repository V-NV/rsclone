const jsTask10 = `
</li></ol></nav><div><h1>JavaScript: Operator precedence</h1><p>Look closely at the expression <code>2 + 2 * 2</code> and try to work out the answer.</p>

  <p>The correct answer is <code>6</code>.</p>
  
  <p>If you guessed <code>8</code>, then you&#39;ll find this lesson useful. You&#39;ll have studied the order of operations in high school math. This concept defines the order in which operations are to be performed. For example, multiplication and division have a higher precedence than addition and subtraction, and exponentiation comes before all other arithmetic operations, e.g., <code>2 ** 3 * 2</code> gives us <code>16</code>.</p>
  
  <p>But sometimes we have to perform calculations in a non-standard order. In tricky cases, precedence can (and must) be set with parentheses, just like we did in high school, e.g., <code>(2 + 2) * 2</code>.</p>
  
  <p>Parentheses fit with any operation. They can be nested into each other as many times as you need. Here are a couple of examples:</p>
  
  <pre><code>console.log(3 ** (4 - 2)); // =&gt; 9
  console.log(7 * 3 + (4 / 2) - (8 + (2 - 1))); // =&gt; 14
  </code></pre>
  
  <p>Sometimes an expression may be visually cumbersome. In such cases, parentheses can come in handy without affecting the order of operations. For example, the task from the previous lesson becomes clearer with parentheses.</p>
  
  <p>Before:</p>
  
  <pre><code>console.log(8 / 2 + 5 - -3 / 2); // =&gt; 10.5
  </code></pre>
  
  <p>After:</p>
  
  <pre><code>console.log(((8 / 2) + 5) - (-3 / 2)); // =&gt; 10.5
  </code></pre>
  
  <p>Note: code is written for humans, since they&#39;ll be the ones to read it, the machine just executes it. For the machine, code is either valid or invalid, it doesn&#39;t recognize &quot;more&quot; or &quot;less&quot; valid code.</p>
  <h2>Instructions</h2><p>Given the expression <code>70 * 3 + 4 / 8 + 2</code>.</p>
  
  <p>Place parentheses so that both additions (<code>3 + 4</code>) and (<code>8 + 2</code>) will be calculated first. Print the result.</p>
`

export default jsTask10;