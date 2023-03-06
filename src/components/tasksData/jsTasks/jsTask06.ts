const jsTask06 = `
</li></ol></nav><div><h1>JavaScript: Arithmetic operations</h1><p>At the most basic level, computers only use numbers. Even in high-level language applications, there are many numbers and operations with them. To get started with programming all you need to know is basic arithmetic – let’s start with that.</p>

  <p>When adding two numbers in math, we write, for example, <code>3 + 4</code>. The same goes for programming. Here is a program that adds two numbers:</p>
  
  <pre><code>// Don&#39;t forget the semicolon at the end,
  // since each line of code is a statement
  
  3 + 4;
  </code></pre>
  
  <p>The statement <code>3 + 4</code> makes the computer add up the numbers and find the result. If you run this program, nothing will happen. Well, the computer will calculate the sum, of course, but that&#39;ll be it. The result of the sum isn&#39;t used, and as such, this program has no real value. We need to ask the computer to add <code>3 + 4</code>, and then give it a command to do something with the result. For example, print it:</p>
  
  <pre><code>// The sum is calculated first,
  // it is then passed to the print function
  
  console.log(3 + 4);
  </code></pre>
  
  <p>After launching, the result will appear on the screen:<br>
  <code><br>
  7<br>
  </code></p>
  
  <p>Besides addition, the following operations are available:<br>
  <code>*</code> — multiplication<br>
  <code>/</code> — division<br>
  <code>-</code> — subtraction<br>
  <code>%</code> — <a href="https://en.wikipedia.org/wiki/Modulo_operation" target="_blank">modulo</a> (remainder after division)<br>
  <code>**</code> — power</p>
  
  <p>Now let&#39;s print the result of division, and then the result of exponentiation:</p>
  
  <pre><code>console.log(8 / 2);  // =&gt; 4
  console.log(3 ** 2); // =&gt; 9
  </code></pre>
  
  <p>Sometimes we will show the result of the executed code in the comments like this: <code>=&gt; RESULT</code>. For example, <code>// =&gt; 4</code>.</p>
  
  <p>The first statement will print <code>4</code> (since <code>8 / 2</code> is <code>4</code>), and the second statement will print 9 (since 3<sup>2</sup> is 9).</p>
  <h2>Instructions</h2><p>Print the result of dividing <code>81</code> by <code>9</code>.</p>
`

export default jsTask06;