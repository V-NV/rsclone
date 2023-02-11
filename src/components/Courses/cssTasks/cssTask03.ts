export const cssTask03 = `
</li></ol></nav><div><h1>CSS: Style inheritance</h1><p>When you use styles in CSS, it often affects not only the element for which the style is specified but also the tags attached to it. Such styles are called <strong>inherited</strong> styles. The <code>font-size</code> style from the last lesson is inherited - it will apply to all nested tags.</p>

  <pre><code>&lt;div style=&quot;font-size: 20px;&quot;&gt;
    The text&#39;s font size is 20 pixels.
  
    &lt;p&gt;The nested paragraph will also have a font size of 20 pixels.&lt;/p&gt;
  &lt;/div&gt;
  </code></pre>
  
  <div style="font-size: 20px;">
    The text's font size is 20 pixels.
    <p >The nested paragraph will also have a font size of 20 pixels.</p>
  </div>
  
  <p>In addition to the styles that are inherited for all nested tags, CSS has many styles that are unique to the element to which they are applied.</p>
  
  <p>One such property is <code>border</code>, which allows you to set a border around the element. But that same frame won&#39;t be copied for every internal element.</p>
  
  <pre><code>&lt;div style=&quot;border: 2px solid #000;&quot;&gt;
    The block will have a border with a width of 2 pixels
  
    &lt;p&gt;And the paragraph will not have its own border. If necessary, it can be set separately&lt;/p&gt;
    &lt;p style=&quot;border: 1px solid #000;&quot;&gt;For example, like this&lt;/p&gt;
  &lt;/div&gt;
  </code></pre>
  
  <div style="border: 2px solid #000!important;">
    The block will have a border with a width of 2 pixels
    <p>And the paragraph will not have its own border. If necessary, it can be set separately</p>
    <p style="border: 1px solid #000;">For example, like this</p>
  </div>
  <h2>Instructions</h2><p>Add the <code >&lt;div&gt;&lt;/div&gt;</code> tag to the editor and, using the attributes, set the font size to 20 pixels. Inside the <code>&lt;div&gt;</code> tag, enclose a paragraph with a font size of 10 pixels</p>
  `