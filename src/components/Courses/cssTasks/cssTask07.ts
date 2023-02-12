const cssTask07 = `
</li></ol></nav><div><h1>CSS: Selectors</h1><p>We&#39;ve seen tag and class selectors in tutorials before. A selector is a description of what a particular CSS style should be applied to. They can be quite complex, indicating not just the specific element, but where it&#39;s located or which tag it&#39;s in. Remember the class selector. It applies to any element whose class we have specified.</p>

  <pre><code>&lt;p class=&quot;text-bold&quot;&gt;Bold text inside a paragraph&lt;/p&gt;
  
  &lt;div class=&quot;text-bold&quot;&gt;Another text inside a simple block element. Since it too has the text-bold class, it will be bold&lt;/div&gt;
  </code></pre>
  
  <pre><code>.text-bold {
    font-weight: bold;
  }
  </code></pre>
  
  <p>The <code>font-weight</code> property with a value of <strong>bold</strong> will set the text to bold. You&#39;ll learn more about this property when you study text formatting. The most important thing now is that this style will be applied to both the paragraph and the block element <code>&lt;div&gt;</code>, since they have the same class.</p>
  
  <p>Another familiar selector is the tag selector. Its purpose is to set styles for all the tags on the page. This is very useful if you want to set initial styles for tags throughout your project. For example, to set the font, its size, and its thickness.</p>
  
  <pre><code>p {
    color: #333;
    font: 18px/1.5 sans-serif;
  }
  </code></pre>
  
  <p>Use the tag selector only to set global rules within the entire project. This is important because styles will be applied to all the tags at once, and you could accidentally overwrite existing styles</p>
  
  <p>Another way to specify styles is to use the Identity Selector. By using the <code>id</code> attribute, you can specify a unique name for any element on the page. If this name is specified, then the element can be referred to using the identifying selector. For this purpose, the form selector <code>#identifier_name</code> is used</p>
  
  <pre><code>&lt;p id=&quot;red&quot;&gt;Red paragraph&lt;/p&gt;
  </code></pre>
  
  <pre><code>#red {
    color: red;
  }
  </code></pre>
  
  <p>It is important to remember that the ID value is unique. There can only be one element on a page with one specific value. For example, in the example above, the identifier <code>red</code> has already been used on the paragraph. There cannot be a second version of this element on the page. For this reason, identifiers are generally specified for large wrappers, such as the main site header, but this is not a prerequisite</p>
  <h2>Instructions</h2><p>In the editor, create a paragraph with the ID as <strong>red</strong> and class set to <strong>bold</strong>. Set the following properties:</p>
  
  <ul>
  <li>For the identifier red, set the text color to red</li>
  <li>Set the bold class to have bold text</li>
  </ul>
  `

  export default cssTask07;