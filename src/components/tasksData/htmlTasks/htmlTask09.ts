const HtmlTask09 = `
</li></ol></nav><div><h1>HTML: Lists</h1><ul>
  <li>
  <a href="#marked-list">Marked list</a>
  </li>
  <li>
  <a href="#numbered-list">Numbered list</a>
  </li>
  </ul>
  <p>Lists are one way of presenting content on a page. With their help it is easy to group small related fragments, such as a shopping list:</p>
  
  <pre><code>— Milk
  — Bread
  — Water
  </code></pre>
  
  <p>You can make such a list with three paragraphs, but then, at first glance, it will seem that these are three different phrases not united by a common meaning.</p>
  
  <div>
    <p>Milk</p>
    <p>Bread</p>
    <p>Water</p>
  </div>
  
  <p>Lists are used to properly relate this information. To create them in HTML, several tags are used, nested within each other:</p>
  
  <ul>
  <li><code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> to define the type of list</li>
  <li><code>&lt;li&gt;</code> to create a list item</li>
  </ul>
  
  <p>The general layout is as follows:</p>
  
  <pre><code>&lt;List_type&gt;
    &lt;list_item&gt;Text&lt;/list_item&gt;
  &lt;/list_item&gt;
  </code></pre>
  
  <h2>Marked list</h2>
  
  <p>The <code>&lt;ul&gt;</code> tag is used to create a bulleted list.</p>
  
  <p>Bulleted lists are used when the information does not require a specific sequence. For example, the grocery list from the example above. It is not so important what will be bought first: milk or bread, it is important to buy all the products.</p>
  
  <pre><code>&lt;ul&gt;
    &lt;li&gt;Milk&lt;/li&gt;
    &lt;li&gt;Bread&lt;/li&gt;
    &lt;li&gt;Water&lt;/li&gt;
  &lt;/ul&gt;
  </code></pre>
  
  <div">
    <ul>
      <li>Milk</li>
      <li>Bread</li>
      <li>Water</li>
    </ul>
  </div>
  
  <h2>Numbered list</h2>
  
  <p><strong>Numbered</strong> lists are used to group sequential information, an important feature of which is the presence of a serial number of the item.</p>
  
  <p>Such lists are useful if they indicate the sequence of actions to be taken. A numbered list is created with the <code>&lt;ol&gt;</code> tag, inside which also lie elements in the <code>&lt;li&gt;</code> tags.</p>
  
  <p>To-do list for the day</p>
  
  <div">
    <ol>
      <li>Buy food</li>
      <li>Go to Alex</li>
      <li>Cook dinner</li>
    </ol>
  </div>
  
  <p>in HTML markup looks like this:</p>
  
  <pre><code>&lt;ol&gt;
    &lt;li&gt;Buy food&lt;/li&gt;
    &lt;li&gt;Go to Alex&lt;/li&gt;
    &lt;li&gt;Cook dinner&lt;/li&gt;
  &lt;/ol&gt;
  </code></pre>
  <h2>Instructions</h2><p>Create a numbered list of 5 items</p>
  `

  export default HtmlTask09;