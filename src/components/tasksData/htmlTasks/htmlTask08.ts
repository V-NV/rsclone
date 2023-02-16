const HtmlTask08 = `
<h1>HTML: Headings</h1>
<p>
  The larger the text, the more often it is divided into logical sections. For
  example, the basic markup of a report, diploma or essay consists of three main
  parts:
</p>

<ol>
  <li>Introduction</li>
  <li>Main part</li>
  <li>Conclusion</li>
</ol>

<p>
  Such logical divisions into headings allow you to navigate faster in the
  document and find the part you need.
</p>

<p>
  To create titles used 6 paired tags: <code>&lt;h1&gt;</code>,
  <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, <code>&lt;h4&gt;</code>,
  <code>&lt;h5&gt;</code>, <code>&lt;h6&gt;</code>, where
  <code>&lt;h1&gt;</code> — title of the first level, the most important and
  describes the main subject of the text, and <code>&lt;h6&gt;</code> — the
  title of the lowest level.
</p>

<pre><code>&lt;h1&gt;Title of the first level&lt;/h1&gt;
  &lt;h2&gt;Title of the second level&lt;/h2&gt;
  &lt;h3&gt;Title of the third level&lt;/h3&gt;
  &lt;h4&gt;Title of the fourth level&lt;/h4&gt;
  &lt;h5&gt;Title of the fifth level&lt;/h5&gt;
  &lt;h6&gt;Title of the sixth level&lt;/h6&gt;
  </code></pre>

<div>
  <h1>Title of the first level</h1>
  <h2>Title of the second level</h2>
  <h3>Title of the third level</h3>
  <h4>Title of the fourth level</h4>
  <h5>Title of the fifth level</h5>
  <h6>Title of the sixth level</h6>
</div>

<p>
  Each lower level heading is a subsection of a higher level heading. This is
  very similar to the table of contents of any book, the structure of which
  might look like this:
</p>

<ul>
  <li>
    Chapter 1

    <ul>
      <li>Part 1</li>
      <li>Part 2</li>
      <li>Notes</li>
      <li>Part 3</li>
    </ul>
  </li>
  <li>Chapter 2</li>
</ul>

<pre><code>&lt;h1&gt;The best book on earth&lt;/h1&gt;
  &lt;p&gt;Description of the book.
  Thanks to my cat and my two dogs. Meow!&lt;/p&gt;
  
  &lt;h2&gt;Chapter 1&lt;/h2&gt;
  
  &lt;h3&gt;Part 1&lt;/h3&gt;
  &lt;p&gt;Paragraph with text&lt;/p&gt;
  &lt;p&gt;Paragraph with text&lt;/p&gt;
  
  &lt;h3&gt;Part 2&lt;/h3&gt;
  &lt;p&gt;Paragraph with text&lt;/p&gt;
  &lt;p&gt;Paragraph with text&lt;/p&gt;
  &lt;h4&gt;Notes&lt;/h4&gt;
  &lt;p&gt;The text of this note is
  written with love&lt;/p&gt;
  
  &lt;h3&gt;Part 3&lt;/h3&gt;
  &lt;p&gt;Paragraph with text&lt;/p&gt;
  &lt;p&gt;Paragraph with text&lt;/p&gt;
  
  &lt;h2&gt;Chapter 2&lt;/h2&gt;
  </code></pre>
<h2>Instructions</h2>
Add a first and second level header with the following text <br />
The best book on earth<br />Chapter 1
`;

export default HtmlTask08;
