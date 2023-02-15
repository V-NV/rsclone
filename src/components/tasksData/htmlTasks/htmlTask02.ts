const HtmlTask02 = `

<h1>HTML: Tags</h1>
<p>
  In order for the browser to determine the type of element that needs to be
  displayed on the page, there are special constructions in HTML, called tags.
  You can use tags to create a paragraph, a title, or a text section, and also
  to quickly change them.
</p>

<p>
  One of the main tags is the paragraph tag. It separates sections of text from
  each other, allowing users to read the information on the page more
  comfortably.
</p>

<br />

<p>
  In HTML, paragraphs are specified using the dedicated
  <code>&lt;p&gt;&lt;/p&gt;</code> construction, and you can put the desired
  text between the tags. This is done between <code>&lt;p&gt;</code> and
  <code>&lt;/p&gt;</code>. These tags are called <em>paired</em> tags because
  they have an opening and closing part. In addition to <em>paired</em> tags,
  there are <em>unpaired</em> tags, that have no closing part, because nothing
  fits inside.
</p>

<pre>
<code>
&lt;p&gt;
 Hexlet is a hands-on programming 
 course. We help newcomers become 
 professional programmers, and 
 experienced developers gain new 
 knowledge and grow professionally.
&lt;/p&gt;
</code>
</pre>

<p>
  There can be several such paragraphs on a page - this is not a unique element.
</p>
<br />
<pre>
<code>
&lt;p&gt;Hexlet is a hands-on programming 
  course.
&lt;/p&gt;
&lt;p&gt;
  We help newcomers become 
  professional programmers, 
  and experienced developers 
  gain new knowledge and grow 
  professionally.
&lt;/p&gt;
</code>
</pre>

<p>
  Jumping forward a little, we&#39;d like to point out that browsers, by
  default, display many tags with predefined styles. For example, paragraphs are
  indented at the bottom to visually separate them from each other. The last
  example in the browser looks like this:
</p>

<div>
  <br />
  <p>Hexlet is a hands-on programming course.</p>
  <br />
  <p>
    We help newcomers become professional programmers, and experienced
    developers gain new knowledge and grow professionally.
  </p>
</div>
<br />
<p>
  Using CSS, you can change these styles and add new ones. There is a separate
  course on this site for learning this language.
</p>
<br />
<h2>Instructions</h2>
<br />
<p>
  Wrap the phrase
  <em style="color: pink">The quick brown fox jumps over the lazy dog</em>
  into the <code>&lt;p&gt;</code> tag and paste in the editor.
</p>
`; export default HtmlTask02;
