const jsTask07 = `
</li></ol></nav><div><h1>JavaScript: Operators</h1><p>Before we move on, let&#39;s take a look at the basic terminology. Operation signs such as <code>+</code> are called <strong>operators</strong>. They perform operations on certain values (<strong>operands</strong>). Operators are usually represented by one or more symbols, but occasionally, they can be represented by a word. Most of the operators are identical to those you&#39;ll have seen in math class.</p>

  <pre><code>console.log(8 + 2);
  </code></pre>
  
  <p>Here the <code>+</code> is an addition <strong>operator</strong>, <code>8</code> and <code>2</code> are <strong>operands</strong>.</p>
  
  <p>The addition operation has two operands, positioned to the left and right of the operator <code>+</code>. Operations with two operands are called <strong>binary</strong> operations. If at least one operand is missing, for example, <code>3 + ;</code> then the program will throw out a syntax error.</p>
  
  <p>Besides binary operations (not operators) there are unary operations (with one operand) and even ternary (with three operands)! Moreover, operators may look the same but denote different operations.</p>
  
  <pre><code>  console.log(-3); // =&gt; -3
  </code></pre>
  
  <p>In the example above, the unary operation applies to <code>3</code>. An interpreter will read it as follows: the minus operator tells it to take the number <code>3</code> and find the opposite, which is <code>-3</code>.</p>
  
  <p>You might be a bit confused since <code>-3</code> is both a number and an operator with an operand, but that&#39;s simply how programming languages work.</p>
  <h2>Instructions</h2><p>Write a program that calculates and prints the difference between <code>6</code> and <code>-81</code>.</p>
  `

  export default jsTask07;