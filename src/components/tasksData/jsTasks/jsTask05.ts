const jsTask05 = `
</li></ol></nav><div><h1>JavaScript: Syntax errors</h1><p>If a JavaScript program is syntactically incorrect, the interpreter will show a relevant message and a message showing the file and line where the error might have occurred. <strong>Syntax errors</strong> occur when the code has grammatical mistakes. Grammar is essential to human language, but a text with grammar mistakes can still be read and understood. However, when it comes to programming, things are much more strict. Even a tiny mistake can mean your program won&#39;t run. Maybe you&#39;ve mixed up your brackets, or there&#39;s a <code>;</code> that you forgot to add — these are just some examples of such mistakes.</p>

  <p>Here is an example of some code with a syntax error:</p>
  
  <pre><code>console.log(&#39;Hodor&#39;
  </code></pre>
  
  <p>If we run this code we will see the following message: <code>SyntaxError: missing ) after the argument list</code>. In JavaScript, these errors are labelled as &quot;SyntaxError&quot;. For technical reasons, this code running on <a href="https://code-basics.com" target="_blank">code-basics</a> won&#39;t show a message with a line and file. You can check this output on <a href="https://repl.it" target="_blank">repl.it</a>.</p>
  
  <p>On the one hand, syntax errors are the most obvious because they deal with code grammar rules and have nothing to do with its logic. You can easily fix it once you find it.</p>
  
  <p>On the other hand, an interpreter will not always tell you the correct position of an error. Sometimes you need to add a forgotten bracket to different place than what the error message says.</p>
  <h2>Instructions</h2><p>This task isn&#39;t directly related to the lesson, but it would be useful to practice printing anyway.</p>
  
  <p>Print the following text <code>What Is Dead May Never Die</code>.</p>
  `

  export default jsTask05;