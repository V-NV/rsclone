const HtmlTask07 = `
<h1>HTML: Text layout</h1>
<ul>
  <li>
    <p>Bold lettering</p>
  </li>
  <li>
    <p>Italic highlighting</p>
  </li>
</ul>
<br />
<p>
  Any text contains key parts that one wants to convey to the reader. These can
  be definitions, clues, key idea. If there is a lot of text, such parts can get
  lost or not be detected at all. How do you help the browser and the user
  quickly find those parts on a page? In HTML markup, you can use
  <strong>bold</strong> and <em>italics</em> for this purpose.
</p>
<br/>
<h2>Bold lettering</h2>
<br/>

<p>
  To bold the text, one of the two paired tags is used:
  <code>&lt;b&gt;</code> or <code>&lt;strong&gt;</code>:
</p>
<br />
<pre>
<code>&lt;p&gt;Code Basics — programming 
     &lt;b&gt;courses&lt;/b&gt;.
&lt;/p&gt;
  </code></pre>

<div>
  <p>Code Basics — programming <b>courses</b>.</p>
</div>

<pre>
    <code>
&lt;p&gt;HTML — 
  &lt;strong&gt;Hypertext Markup Language
  &lt;/strong&gt;
&lt;/p&gt;
    </code>
  </pre>
<div>
  <p>HTML — <strong>Hypertext Markup Language</strong></p>
</div>
<br />

<p>
  Both examples illustrate adding boldface to a section of text. But why were
  two different tags used for visually identical results? It&#39;s all about
  <em>semantics</em>, that is, meaning. In this case, the meaning of the tag:
</p>

<ul>
  <li>
    <code>&lt;b&gt;</code> — a simple text selection. It can be used anywhere to
    visually highlight text. This tag has no meaning whatsoever
  </li>
  <li>
    <code>&lt;strong&gt;</code> — the logical highlighting of an important
    section of text. This tag is semantic and marks the important part. It
    should not be applied to all areas in a row
  </li>
</ul>

<p>
  Once upon a time, the developers wanted these tags to look different and
  differ in terms of behavior for the browser, but history has taken a slightly
  different path. Nowadays it is considered that
  <code>&lt;b&gt;</code> is redundant and you should use CSS for visual
  highlighting and <code class="prettyprint">&lt;strong&gt;</code> for important
  sections.
</p>
<br />
<h2>Italic highlighting</h2>
<br />
<p>
  The italic emphasis is very similar to the bold emphasis, but it emphasizes
  the key part, not the key part. For example:
</p>

<pre><code>
  &lt;p&gt;&lt;i&gt;Code Basics&lt;/i&gt; — 
    &lt;em&gt;programming&lt;/em&gt; free courses
  &lt;/p&gt;

  </code></pre>

<div>
  <p><i>Code Basics</i> — <em>programming</em> free courses</p>
</div>

<p>In this example, two parts of the text were marked:</p>
<ul>
  <li>
    The <code>&lt;i&gt;</code> tag was used to mark the name of the Code Basics
    portal. The tag is intended to visually italicize text and has no semantic
    meaning
  </li>
  <li>
    The <code>&lt;em&gt;</code> tag highlighted the phrase &quot;free
    courses&quot;. This is the logical emphasis on the free nature of the
    courses that has been given to the offer. There are many courses and no free
    ones, so it&#39;s worth adding emphasis to this part of the sentence
  </li>
</ul>
<br />
<h2>Instructions</h2>
<br />
<p>Add the phrase to the editor:</p>
<div>
  <span class="do-it"><em style="color:#3497ee;">Homo coderus - programming courses</em></span>
</div>
<p>
  in which make the word &quot;courses&quot; bold (physical markup) and
  highlight the combination &quot;programming&quot; in italics (logical
  markup). Don&#39;t forget to wrap the phrase in a paragraph
</p>
`;

export default HtmlTask07;
