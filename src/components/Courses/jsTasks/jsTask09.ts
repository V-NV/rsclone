const jsTask09 = `
</li></ol></nav><div><h1>JavaScript: Composition of operations</h1><p>Suppose we want to calculate an expression such as <code>3 * 5 - 2</code>. That is exactly how we would write it down:</p>

  <pre><code>console.log(3 * 5 - 2); // =&gt; 13
  </code></pre>
  
  <p>Note that the interpreter performs arithmetic operations in the right order: first division and multiplication, then addition and subtraction. Sometimes we want to change the order of calculations. We&#39;ll dig into this topic in the next lesson. Or another example:</p>
  
  <pre><code>console.log(2 * 4 * 5 * 10);
  </code></pre>
  
  <p>As you can see, we can combine operations, which allows us to compute even more complex compound expressions. To visualize how calculations are done inside the interpreter, let&#39;s look at an example: <code>2 * 4 * 5 * 10</code>.</p>
  
  <ol>
  <li>First we calculate <code>2 * 4</code> and get <code>8 * 5 * 10</code></li>
  <li>Then we calculate <code>8 * 5</code>, which gives us <code>40 * 10</code></li>
  <li>Finally, do the last multiplication. The result will be <code>400</code></li>
  </ol>
  
  <p>We can combine operations, making it possible to compute increasingly complex compound expressions.</p>
  <h2>Instructions</h2><p>Write a program that calculates and prints the value of this expression:</p>
  
  <pre><code>8 / 2 + 5 - -3 / 2
  </code></pre>
  
  <p>Don&#39;t calculate anything manually, your program should do all the calculations on its own.</p>
`

export default jsTask09;