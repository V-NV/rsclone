export const cssTask08 = `
</li></ol></nav><div><h1>CSS: Cascade</h1><p>We already know that CSS stands for &quot;Cascading Style Sheets&quot;. It&#39;s fairly clear what style sheet means at this point, but what does cascading mean? The point is that you can specify styles for an element in more than one place.</p>

  <p>Imagine a cascade of waterfalls. They flow into each other, accumulating more and more water. Eventually, the entire cascade will end up in one body of water. In CSS, the word cascade means the same action, only instead of waterfalls, it&#39;s CSS properties that flow over. In other words, cascading is CSS&#39;s ability to overlay properties on top of each other as well as to extend properties in selectors.</p>
  
  <p>Let&#39;s create a block with the classes <code>text-bold</code> and <code>text-dark</code> and specify several properties in different selectors:</p>
  
  <pre><code>&lt;p class=&quot;text-bold text-dark&quot;&gt;An important text about the danger of complex CSS&lt;/p&gt;
  </code></pre>
  
  <pre><code>p {
    font-size: 20px;
  }
  
  .text-bold {
    font-weight: bold;
  }
  
  .text-dark {
    color: #333;
  }
  </code></pre>
  
  <p>If you paste this example into the editor, you get a dark, bold text with a size of 20 pixels. This happened because of cascading - the browser combined all the styles from the different selectors and got the following instructions for styling the element:</p>
  
  <pre><code>{
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }
  </code></pre>
  
  <p>This is what CSS style cascading is all about. Although we used different selectors, the browser eventually combined them into a single set of rules for the element</p>
  <h2>Instructions</h2><p>Add a <code>p</code> to the editor and give it the class <code>cascade</code> and set the following rules:</p>
  
  <ul>
  <li>Set the font size to 25 pixels for the <code>cascade</code> class</li>
  <li>For the tag <code>p</code>, set the internal indentation to 15 pixels on all sides. This can be done by using the <code>padding: 15px;</code> rule.</li>
  </ul>
  
  <p>Note how the styles are applied at the same time. Write the styles in the <code>&lt;style&gt;</code> tag</p>
  `