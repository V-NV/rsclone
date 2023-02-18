const cssTask05 = `
<div>
<h1 style="font-size:2em;">CSS: Basic tag styles</h1>

<p>By default, all HTML tags have a standard layout. This design is set by browsers, and each browser can set its own style. Because of this, the same layout may appear different, depending on the browser, operating system, and system settings.</p>
<br>
  <p>For example, the first level header <code>&lt;h1&gt;</code> in browsers has a size of <code>2em</code>, which means <em>twice the size of the font in the block</em>. This value is not fixed - it can change with system settings, or if the browser developers decide to make it slightly different.</p>
  <br>
  <p>Using the <code>&lt;style&gt;</code> tag, we&#39;ve learned to change styles for all elements at once, for example:</p>
  <br>
  <pre><code>
&lt;style&gt;  
    h1 {
      font-size: 35px;
    }
&lt;/style&gt;
  </code></pre>
  
  <p>But this option is convenient only for setting the initial/main values for our web page. Different parts of it may need different header styles for the same level. We&#39;ll learn how to solve this problem using CSS selectors and HTML attributes in future lessons. The main thing to remember is that almost all elements have a default style, which can be both a benefit and a nuisance when designing a page</p>
  <br>
  <h2>Instructions</h2>
  <br>
  <p>Add a first level heading with text <span style="color:pink;">New first level heading size</span> to the editor and set the font size to 20 pixels. Write the styles in the <code>&lt;style&gt;</code> tag.</p>
  `

  export default cssTask05;