const htmlTask10 = `
</li></ol></nav><div><h1>HTML: Nested lists</h1><p>When making a to-do list, it may be necessary to break items down into several additional sub-items. For example, in the to-do list, the item &quot;Go to the store&quot; may contain a shopping list.</p>

  <p><em>Nested lists</em> are used to create this structure. This allows you to insert a new list as a list item, rather than just text, creating a complex structure:</p>
  
  <div>
    <ul>
      <li>Go to the store
        <ul>
          <li>Buy milk</li>
          <li>Buy bread</li>
        </ul>
      </li>
      <li>Take a class on Code Basics </li>
    </ul>
  </div>
  
  <p>In HTML it looks like this:</p>
  
  <pre><code>&lt;ul&gt;
    &lt;li&gt;Go to the store
      &lt;ul&gt;
        &lt;li&gt;Buy milk&lt;/li&gt;
        &lt;li&gt;Buy bread&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;Take a class on Code Basics &lt;/li&gt;
  &lt;/ul&gt;
  </code></pre>
  
  <p>It is important to note that the nested list is part of the list item and is inside the <code>&lt;li&gt;</code> tag:</p>
  
  <pre><code>&lt;li&gt;Go to the store
    &lt;ul&gt;
      &lt;li&gt;Buy milk&lt;/li&gt;
      &lt;li&gt;Buy bread&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  </code></pre>
  
  <p>This nesting allows you to preserve semantics and indicate that the nested list refers specifically to &quot;Go to the store&quot; and not to any other item.</p>
  
  <p>You can nest different kinds of lists into each other: bulleted into numbered and vice versa. The main thing is to monitor the opening and closing of tags. In the case of an error, the browser will try to correct the error itself, but it may not be correct.</p>
  <h2>Instructions</h2><p>Create the markup for the list:</p>
  
  <div>
    <ol>
      <li>The JavaScript profession
        <ul>
          <li>Frontend</li>
          <li>Backend</li>
        </ul>
      </li>
      <li>The PHP Profession</li>
    </ol>
  </div>
`

export default htmlTask10;