const cssTask04 = `
<div>
<h1>CSS: Tag style</h1>

  <p style="font-size:calc(14px + 0.8vw);">The main problem with using attributes to define styles is that they are overloaded. Often, HTML markup contains very many elements, and when you add styles, there ends up being much more code, which is bad for reading the markup.</p>

  <p style="font-size:calc(14px + 0.8vw);">The second problem is fixing the styles. To do this, you must first find the desired element in the code, and then edit its styles. There may be 10, 20, or 100 such elements on the page. And for tags with the same name, you have to write styles for each element separately.</p>
  
  <p style="font-size:calc(14px + 0.8vw);">There is a natural desire to have all the styles in one place where you can quickly edit them. One solution is to use the <code >&lt;style&gt;</code> tag which can hold all of the necessary styles.</p>
  
  <p style="font-size:calc(14px + 0.8vw);">Let&#39;s take an example from the last lesson:</p>
  <br>
<pre>
<code>
&lt;div style=&quot;font-size: 40px;&quot;&gt;
  This text will have a font size of 40 pixels
&lt;p style=&quot;font-size: 20px;&quot&gt;
  The enclosed paragraph will also have a font 
  size of 20 pixels
 &lt;/p&gt;
&lt;/div&gt;
</code>
</pre>
  
  <p style="font-size:calc(14px + 0.8vw);">To get rid of the attributes, let&#39;s add a <code >style</code> tag and specify that the <code >&lt;div&gt;</code> tag uses a font size of 20 pixels.</p>
  
<pre>
<code>
&lt;style&gt;
       div {
             font-size: 20px;
           }
&lt;/style&gt;
  
&lt;div&gt;
  This text will have a font size of 20 pixels
  
  &lt;p&gt;
   The enclosed paragraph will also have 
   a font size of 20 pixels
  &lt;/p&gt;
&lt;/div&gt;
</code>
</pre>

  <p style="font-size:calc(14px + 0.8vw);">In the same way, you can specify that the paragraph will have a font size of 10 pixels</p>
  <br>
<pre>
<code>
&lt;style&gt;
     div {
          font-size: 20px;
         }
  
       p {
          font-size: 10px;
         }
&lt;/style&gt;
  
&lt;div&gt;
   This text will have a font size of 20 pixels
  
 &lt;p&gt;
   The enclosed paragraph will have a font size 
   of 10 pixels
 &lt;/p&gt;
&lt;/div&gt;
</code>
</pre>
  
  <p style="font-size:calc(14px + 0.8vw);">Inside the tag <code >&lt;style&gt;</code> used a construction in this form:</p>
  <br>
  <pre><code >tag_name {
    property: value;
  }
  </code>
  </pre>
  
  <p style="font-size:calc(14px + 0.8vw);">Anything written before the opening bracket <code >{</code> is called a <em>selector</em>. Selectors are the rules by which the browser determines which element to add styles to. We&#39;ll get to know some of the selectors a little later. In the examples above, selectors are used by tag, i.e., styles will be applied to all elements with the tag specified as a selector.</p>
  <br>
  <pre><code>/* All div elements will be set 
                 to a font size of 20px */

div {
      font-size: 20px;
    }
  </code>
  </pre>
  <h2>Instructions</h2>
  <br>
  <p style="font-size:calc(14px + 0.8vw);">Add a paragraph with text <span style="color:pink;">Style tag</span> to the editor and, using the <code >style</code> tag, set the font size to 44 pixels</p>
  `

  export default cssTask04;