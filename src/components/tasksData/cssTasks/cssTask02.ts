const cssTask02 = `
<div>
<h1 style="font-size:1.6em;">CSS: Using CSS in HTML</h1>

<p>CSS is not directly related to HTML. You need to tell the browser where to download and interpret the styles from. There are three ways to do this:</p>

  <ol>
  <br>
  <li>Specify styles as a value of the <code>style</code> attribute. This is called an &quot;inline&quot; entry, which means you need to write the rule on one line using the <code>style</code> attribute</li>
  <br>
  <li>Use the special <code>&lt;style&gt;</code> tag which is given in the <code>head</code> section. The browser will treat everything written inside this tag as CSS code</li>
  <br>
  <li>Add a separate file with styles. In this case, a file with the extension <code>.css</code> will be created, within which CSS rules are written. To add the file, use the meta tag <code>&lt;link&gt;</code></li>
  </ol>
  <br>
  <p>In this lesson, we&#39;ll look at the principle of inline style writing with the <code>style</code> attribute. Whichever way you choose to add styles, the syntax of the rules remains the same: <code>name-property: value;</code>. It is important not to forget to add the <code>;</code> symbol after the property value. This allows the browser to separate the rules from each other.</p>
  <br>
  <p>One of the main ways to &quot;try&quot; styles is to work with text. CSS allows you to style text in a multitude of ways, such as increasing the font size, defining boldness, thickness, and so on. All the basic rules for working with text are covered throughout the course.</p>
  <br>
  <p>We&#39;ll learn how to change fonts. You can change the size by using the <code>font-size</code> property, whose value is a number and a unit. Let&#39;s try to make the text <em>32 pixels</em>. The unit of measure pixel is indicated by the abbreviation <code>px</code>. We&#39;ll explain more about the different units of measure and how they work in the following lessons</p>
  <br>
  <pre><code>&lt;p style=&quot;font-size: 32px;&quot;&gt;Large text&lt;/p&gt;
  </code></pre>
  
  <div>
    <p style="font-size: 32px;">Large text</p>
  </div>
  <br>
  <h2>Instructions</h2>
  <br>
  <p>Add the <code>&lt;p&gt;&lt;/p&gt;</code> tag to the editor with text: <span style="color:pink;">Small text</span> and use the <code>style</code> attribute to set the font size to 12 pixels</p>
  `

  export default cssTask02;