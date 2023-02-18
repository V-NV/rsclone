const cssTask08 = `
<div>
<h1>CSS: Cascade</h1>

<p style="padding: 0px;font-size: calc(14px + 0.8vw);border:none;letter-spacing:0px;">We already know that CSS stands for &quot;Cascading Style Sheets&quot;. It&#39;s fairly clear what style sheet means at this point, but what does cascading mean? The point is that you can specify styles for an element in more than one place.</p>

<p style="padding: 0px;font-size: calc(14px + 0.8vw);border:none;letter-spacing:0px;">Imagine a cascade of waterfalls. They flow into each other, accumulating more and more water. Eventually, the entire cascade will end up in one body of water. In CSS, the word cascade means the same action, only instead of waterfalls, it&#39;s CSS properties that flow over. In other words, cascading is CSS&#39;s ability to overlay properties on top of each other as well as to extend properties in selectors.</p>
  
  <p style="padding: 0px;font-size: calc(14px + 0.8vw);border:none;letter-spacing:0px;">Let&#39;s create a block with the classes <code>text-bold</code> and <code>text-dark</code> and specify several properties in different selectors:</p>
<br>  
<pre>
<code>
&lt;p class=&quot;text-bold text-dark&quot;&gt;
   An important text about the danger 
   of complex CSS
&lt;/p&gt;
</code>
</pre>
<pre>
<code>
&lt;style&gt;
  p {
    font-size: 20px;
    }
  
  .text-bold {
    font-weight: bold;
  }
  
  .text-dark {
    color: #333;
  }
&lt;/style&gt;
</code>
</pre>
  
<p style="padding: 0px;font-size: calc(14px + 0.8vw);border:none;letter-spacing:0px;">If you paste this example into the editor, you get a dark, bold text with a size of 20 pixels. This happened because of cascading - the browser combined all the styles from the different selectors and got the following instructions for styling the element:</p>
  <br>
  <pre><code>{
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }
  </code></pre>
  
  <p style="padding: 0px;font-size: calc(14px + 0.8vw);border:none;letter-spacing:0px;">This is what CSS style cascading is all about. Although we used different selectors, the browser eventually combined them into a single set of rules for the element</p>
  <br>
  <h2>Instructions</h2>
  <br>

  <p style="padding: 0px;font-size: calc(14px + 0.8vw);border:none;letter-spacing:0px;">Add a <code>p</code> to the editor and give it the class <code>cascade</code> and set the following rules:</p>
  <br>
  <ol style="margin-left:20px;">
    <li>Set the font size to 25 pixels for the <code>cascade</code> class</li>
    <li>For the tag <code>p</code>, set the letter space to 15 pixels. This can be done by using the <code>letter-spacing:15px;</code> rule.</li>
    <li>Text inside paragraph <span style="color:pink;">CSS style cascading</span></li> 
    </ol>
  <br>
  <p style="padding: 0px;font-size: calc(14px + 0.8vw);border:none;letter-spacing:0px;">
     Note how the styles are applied at the same time. Write the styles in the <code>&lt;style&gt;</code> tag</p>
  `

  export default cssTask08;