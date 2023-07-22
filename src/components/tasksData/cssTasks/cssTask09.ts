const cssTask09 = `
<div>
<h1>CSS: Priority</h1>
<ul>
  <li>
    Priority selectors
  </li>
</ul>
<br>
  <p style="color:var(--color-text);">Speaking of cascading, you may be wondering what happens if different sources have the same rules for an element, but with different values. In that case, there are rules that prioritize styles from different sources. In order of importance, the list looks like this:</p>
  <br>
  <ul>
  <li>Styles in a tag attribute</li>
  <li>Styles in a separate file</li>
  <li>Default styles added by the browser</li>
  </ul>
  <br>
  <p style="color:var(--color-text);">The values specified in the <code>style</code> attribute will be more important than the properties in the <code>&lt;style&gt;</code> tag, and they will be more important than the default browser styles.</p>
  <br>
  <h2>Priority selectors</h2>
  <br>
  <p style="color:var(--color-text);">An important feature of CSS is that different types of selectors have different priorities. If styles contradict each other in different selectors, the priority principle comes into play.</p>
  
  <p style="color:var(--color-text);">Let&#39;s look at an example. Let&#39;s create a paragraph with the class as <code>red</code> and the identifier as <code>blue</code>.</p>
  
  <pre>
  <code>
&lt;p id=&quot;blue&quot; class=&quot;red&quot;&gt;
  Text with the class red and identifier blue
&lt;/p&gt;
  </code>
  </pre>
  
  <p style="color:var(--color-text);">Let&#39;s add conflicting styles for class, identifier, and tag:</p>
  
  <pre><code>
&lt;style&gt;
  p {
    color: black;
  }
  
  .red {
    color: red;
  }
  
  #blue {
    color: blue;
  }
&lt;/style&gt;
  </code></pre>
  
  <p style="color:var(--color-text);">What color will the paragraph be? Try running this example in the editor. You&#39;ll see that the text is blue. What does this have to do with anything?</p>
  
  <p style="color:var(--color-text);">Selectors also have priorities. Conventionally, you can put the selectors in the following order of priority:</p>
  <br>
  <ol style="margin-left:20px;">
  <li>Selector by ID (<code>#blue</code>)</li>
  <li>Selector by class (<code>.red</code>)</li>
  <li>Selector by tag (<code>p</code>)</li>
  </ol>
  <br>
  <p style="color:var(--color-text);">Where 1 is the highest priority and 3 is the lowest.</p>
  
  <p style="color:var(--color-text);">From these rules it can be understood that the properties specified in the selector by identifier will have a higher priority than the styles in the selector by tag and class. That is why the paragraph in the last example was blue.</p>
  
  <p style="color:var(--color-text);">This is easy to remember if the selectors are small, but they can be more complex. The selector can be a combination of classes, tags, and so on. For example:</p>
<br>  
<pre>
<code>
&lt;p class=&quot;paragraph color-primary&quot;&gt;
   Paragraph
&lt;/p&gt;
</code>
</pre>
  
<pre>
<code>
&lt;style&gt;
   .paragraph.color-primary {
       color: blue;
     }
&lt;/style&gt; 
</code>
</pre>
  
<p style="color:var(--color-text);">Here, a selector for two classes was used at once. This means that styles will only be applied to an element that has both classes. This separation helps developers pinpoint styles for similar elements. For example:</p>
  
<pre>
<code>
&lt;p class=&quot;paragraph color-primary&quot;&gt;
   Paragraph
&lt;/p&gt;
  &lt;p class=&quot;paragraph&quot;&gt;Paragraph&lt;/p&gt;
  &lt;p class=&quot;paragraph color-primary&quot;&gt;
     Paragraph
  &lt;/p&gt;

</code>
</pre>

<pre>
<code>
&lt;style&gt;
   .paragraph {
    color: red;
    }
  
   .paragraph.color-primary {
    color: blue;
    }
&lt;/style&gt;
</code>
</pre>
  
  <p style="color:var(--color-text);">In this example, all paragraphs with the <code>paragraph</code> class will have red text, but if the <code>color-primary</code> class is also set, the color will be blue. Why does this happen? These selectors also have their own priorities. In complex selectors, both the number of occurrences of a particular selector and the total weight are counted.</p>
  
  <p style="color:var(--color-text);">To determine the priority, you can use a table where each selector is given a &quot;weight&quot;:</p>
  <br>
  <ul>
  <li>Tag selector: <strong>1</strong></li>
  <li>Class selector: <strong>10</strong></li>
  <li>ID selector: <strong>100</strong></li>
  <li>Style in tag attribute: <strong>1000</strong></li>
  </ul>
  <br>
  <p style="color:var(--color-text);">To find out which selector will have the greater weight, you have to add up all the values obtained using this table.</p>
  <br>
  <ul>
  <li>The <code>.paragraph</code> selector consists of one class, so its weight is 10</li>
  <li>The selector <code>.paragraph.color-primary</code> consists of two classes. Its weight is 20.</li>
  </ul>
  <br>
  <p style="color:var(--color-text);">Thus, the properties in the <code>.paragraph.color-primary</code> selector will have a higher priority than those inside the <code>.paragraph</code> selector.</p>
  
  <p style="color:var(--color-text);">This table doesn&#39;t tell the whole story, but it can be used in the early stages of learning CSS. With practice, you will learn how to determine the priority of selectors on your own</p>
  <br>
  <h2>Instructions</h2>
  <br>
  <p style="color:var(--color-text);">Add a paragraph to the editor with the class set to the <code>border</code> and the id as <code>no-border</code>. Set the following rules:</p>
  <br>
  <ul>
  <li>For the <code>border</code> class, set a solid border of any color with a thickness of 1px. This can be done like this: <code>border: border:solid 1px #00ff11;</code>.</li>
  <li>For the id <code>no-border</code>, cancel the frame. Use the <code>none</code> value for the <code>border-style</code> rule.</li>
  <li>Text inside paragraph <span style="color:pink;">Priority of selectors</span>
  </ul>
  <br>
  <p style="color:var(--color-text);">Specify styles for the <code>.border</code> selector first, and the <code>#no-border</code> selector second.</p>
  
  <p style="color:var(--color-text);">Write the styles in the <code>&lt;style&gt;</code> tag.</p>
  `

  export default cssTask09;