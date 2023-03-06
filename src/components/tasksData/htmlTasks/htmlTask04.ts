const HtmlTask04 = `

  <h1>HTML: Tag nesting</h1>
  <p>
    Tag nesting is an important concept in HTML. You can place more than just
    text between HTML tags as it was before, you can also place other tags. This
    allows you to create a complex layout in which areas are separated from each
    other, e.g., the menu is separated from the header, the advertising block is
    separated from the main content, etc.
  </p>

  <p>
    Some elements in HTML require some tags to be nested into other. For
    example, lists:
  </p>

  <pre><code>&lt;ul&gt;
  &lt;li&gt;The first item in the list&lt;/li&gt;
  &lt;li&gt;The second item in the list&lt;/li&gt;
&lt;/ul&gt;
  </code></pre>

  <div">
  <ul>
    <li>The first item in the list</li>
    <li>The second item in the list</li>
  </ul>
</div>

<p>
  The <code>&lt;ul&gt;</code> tag is used to define the list, and this one
  indicates that it&#39;s <em>a bulleted</em> list. Inside are the
  <code class="prettyprint">&lt;li&gt;</code> tags that define the elements of
  our list.
</p>

<p>
  This kind of nesting resembles a tree, there&#39;s a treetop (the
  <code>&lt;ul&gt;</code> tag) and leaves (the <code>&lt;li&gt;</code> tags)
</p>

<pre><code>|──ul
  | |──li
  | |──li
|──ul  
  </code></pre>

<hr />

<p>
  Interestingly a tag with other tags inside is also called <em>a wrapper</em>
</p>

<hr />

<p>
  The tree can grow even further. The lessons about lists will show you that
  other lists can be placed inside list elements, and then lists can be placed
  inside those lists, and so on and so forth.
</p>

<p>
  But there are exceptions. You can&#39;t put paragraphs within paragraphs in
  HTML. The example below would be incorrect:
</p>

<pre><code>&lt;p&gt;Paragraph
    &lt;p&gt;And here&#39;s another paragraph
       within a paragraph
    &lt;/p&gt;
    This is not a happy home for the paragraph.
&lt;/p&gt;
  </code></pre>

<p>
  In this lesson, we introduced the concept of nesting tags in HTML and examined
  it with the aid of bullet lists as a reminder. During this course, you&#39;ll
  learn both about the many situations where nesting is the best solution, and
  also about the tags that must not be nested within each other.
</p>
<h2>Instructions</h2>
<p>
  Create 2 listed elements with following text:
  <ul>
    <li><em style="color:#3497ee;">The first element in the list</em></li>
    <li><em style="color:#3497ee;">The second element in the list</em></li>
  </ul>
</p>
`;

export default HtmlTask04;
