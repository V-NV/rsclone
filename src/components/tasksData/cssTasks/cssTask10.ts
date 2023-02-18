const cssTask10 = `
<div>
<h1>CSS: Colors</h1>

<p>Coloring a section of text is a common way to get a user&#39;s attention on a page. Various advertising banners are constantly trying to tell us about an incredible discount, or an offer that ends today. In the same way, highlighting can indicate important information that must be read.</p>
<br>
  <p>Using CSS, you can set the color of the text for the whole page or for a small area. This is determined by the selector you choose. The color itself is set using the property <code>color</code>, the value of which is, naturally, a color.</p>
<br>  
  <p>In this lesson, the color will be written in <code>HEX</code> format, where <code>#ffffff</code> means white and <code>#000000</code> means black. For convenience, there&#39;ll be a link to a portal at the end of the lesson, where you can select any color and get its value in <code>HEX</code> format. We&#39;ll talk more about color models in CSS in a future lesson.</p>
  
  <p>Create a paragraph and color one word in it. To do this, let&#39;s wrap it in a <code>&lt;span&gt;</code> string tag and give it a class, which we&#39;ll use to select the CSS element:</p>
  <br>
  <pre>
  <code>
  &lt;p&gt;
    &lt;span class=&quot;info&quot;&gt;
       Attention!
    &lt;/span&gt; 
       Important information
  &lt;/p&gt;
</code>
</pre>
   
<pre>
<code>
  &lt;style&gt; 
      .info {
             color: #5263f3;
            }
  &lt;/style&gt;
</code>
</pre>
  
  <div>
    <p><span style="color:#5263f3;">Attention!</span> Important information</p>
  </div>
  
  <p>If you want try to set the text color for this page element for example Button RESET you can use the 
  
  <code>.btn-reset</code> selector. The <code>color</code> property, so the color will be set for this element - you can try it</p>
<pre>
<code>
&lt;style&gt;
   .btn-reset {
       color: red;
      }
      &lt;/style&gt;
</code>
</pre>

<h2>Instructions</h2>
  <br>
<p>In the editor, add a <code>&lt;p&gt;</code> with <code>&lt;span&gt;</code> inside and with the class set to <code>violet</code> for <code>&lt;span&gt;</code>, and set SPAN color to <code>#9400d3</code>. Use the <code>&lt;style&gt;</code> tag to include styles.</p>
<br>  
<ul>
<li>Text inside <code>&lt;p&gt;</code><span style="color:pink"> Paragraph</li>
<li>Text inside <code>&lt;span&gt;</code><span style="color:pink"> Span</li></li>
  <ul>
`

  export default cssTask10;
/*
  <span class="violet">dfghjkl</span>
<style> 
.violet {
       color: #9400d3;
      }
</style>*/