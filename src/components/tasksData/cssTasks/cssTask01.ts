const cssTask01 = `
<h1 style="font-size: 1.6em;">CSS: Introduction in CSS</h1>

  <p>The HTML markup language course covered various elements that have a default style - indented paragraphs, color-coded links, different-sized headings, etc. As a developer, you can change this styles or add entirely new ones. Want to add a background to the text? Resize elements? Create an animation? You can do all this with CSS (Cascading Style Sheets), the language that defines how HTML elements will look in the browser.</p>
  
  <p>Many of the tags and concepts that we&#39;ll be encountering along the way have already been covered.</p>
  
  <p>The example below shows how to render text without using your CSS (i.e., using the styles your browser &quot;puts in&quot;) and how to style a document using CSS.</p>
  <br>
  <h2>Example of text with a standard layout</h2>
  <br>
  <div>
    <p style="color:violet;">Paragraphs</p>
    <br>
    <p>Paragraphs are created using a paired <code>&lt;p&gt;</code> tag with a small amount of text in the body. For example:</p>
    <br>
<pre>
<code>
&lt;p style="font-size:25px;"&gt;First paragraph&lt;/p&gt;
&lt;p style="font-size:25px;"&gt;Second paragraph&lt;/p&gt;
</code>
</pre>
  </div>
  <br>
  <h2>Example text with custom design</h2>
  
  <div>
  <br>
    <p style="font-size:38px;color:violet;">Paragraphs</p>
  <br>  
    <p>Paragraphs are created using a paired <code>&lt;p&gt;</code> tag with a small amount of text in the body. For example:</p>
    <pre style="border-left: 5px solid #673ab7!important;"><code>&lt;p&gt;First paragraph&lt;/p&gt;
&lt;p&gt;Second paragraph&lt;/p&gt;</code></pre>
  </div>
  
  <p>The text is now easier to read, and you can quickly separate code samples from descriptions. This course will cover the basic rules of CSS for working with text and blocks, which will allow you to design your text and visually structure information.</p>
  <br>
  <h2>Instructions</h2>
  <br>
  <p>Copy the code into the editor. Try substituting different values to see how the editor works. Tests expect a full copy of the code below.</p>
  
  <pre>
  <code>
  &lt;p style=&quot;font-size: 25px;&quot;&gt;
    The first style change with CSS
  &lt;/p&gt;
  </code>
  </pre>
  `;

  export default cssTask01;