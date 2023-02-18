const cssTask06 = `
<div>
<h1>CSS: Classes</h1>

<p>The main solution for styling a particular part of the page is to use classes. They allow us to set a style we need only for the elements that have the required class satisfied, rather than all of them.</p>

  <p>To specify a style for a class in CSS, we use the selector \`.name-class&#39;. Note the dot, this is how the browser understands that this style is specified for the class.</p>

<pre>
<code>
&lt;p class=&quot;paragraph&quot;&gt;
    The text of our paragraph.
    It&#39;s the paragraph class in CSS that
    will set properties for this block of text.
&lt;/p&gt;
</code>
</pre>
  <pre><code>.paragraph {
    color: #b3b3b3;
<pre style="color:#b3b3b3;">/*
  The color property sets the color of the text.
  In this case, it is color gray 
*/</pre>
  }
</code>
</pre>
  
  <p>Since there can be many classes with the same name on the page, this rule will work for all elements where the class attribute is <code>paragraph</code></p>
  <br>
  <h2>Instructions</h2>
 <br> 
  <p>In the editor, add a paragraph with the class <code>paragraph</code> set to news and specify a text color of <code >#a1b2c3</code> and text <span style="color:pink">Color paragraph</span> for it. Add styles with the <code >&lt;style&gt;</code> tag.</p>
`

export default cssTask06;