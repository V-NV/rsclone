
const jsTask03 = `
<div>
<h1 style="font-size:1.6em;">JavaScript: Statements</h1>

<p>A statement is a command given to a computer to do something. The JavaScript code is a set of statements which are usually separated by a <code>;</code> symbol.</p>

  <p>Here is an example of some code with two statements.</p>
  <br>
  <pre><code>console.log(&#39;Mother of Dragons.&#39;);
  console.log(&#39;Dracarys!&#39;);
  </code></pre>
  
  <p>When you run this code you will see two sentences on the screen, one after the other.</p>
  <br>
  <pre>
  Mother of Dragons.
  Dracarys!
  </pre>
  
  <p>Theoretically, it&#39;s possible to put multiple statements on the same string:</p>
  <br>
  <pre><code>console.log(&#39;Mother of Dragons.&#39;); console.log(&#39;Drakarys!&#39;);
  </code></pre>
  
  <p>but it&#39;s considered bad practice as it&#39;s difficult to read.</p>
  
  <p>Why is it important to know? A statement is a unit of execution. An interpreter, which is the program which executes code in JavaScript, needs statements to be split in this way. This interpreter in JavaScript world is any browser (as it&#39;s able to JavaScript code) or Node.js (for the same reason). An interpreter&#39;s principle of operation is (approximately) as follows. It reads the file with the code, splits the code into statements, and then executes them.</p>
  <br>
  <h2>Instructions</h2>
  <br>
  <p>Print these three names, one after the other: &quot;Robert&quot;, &quot;Stannis&quot;, &quot;Renly&quot;. As a result, the editor should print:</p>
  <br>
  <pre>
  Stannis
  
  Renly
  </pre>
  
  <p>Call <code>console.log()</code> for each name.</p>
`

export default jsTask03;