const HtmlTask05 = `
  <h1>HTML: HTML Attributes</h1>
  <p>
    Page markup information can have many subtleties and nuances. For example,
    you can specify the type of element, but you can also pass additional
    information to be processed by the browser. Mouse over the text below:
  </p>

  <div>
    <p title="Tooltip. Here you can specify additional information.">
      Mouse over this line of text. It's better to do this from a computer
    </p>
  </div>

  <p>
    When you mouse over an element, a small window will appear saying
    &quot;Tooltip. Here you can specify additional information&quot;. This
    behavior is set using <em>attributes</em> - special structures that can
    affect the output of information on the page. Each tag in HTML has several
    standard attributes, which are written based on this template:
    <code>attribute=&quot;value&quot;</code>:
  </p>

  <ul>
    <li>
      <strong>Attribute</strong> is the name of the attribute. The
      <code>title</code> attribute was used to make the tooltip appear
    </li>
    <li>
      <strong>Value</strong> is the value of the attribute. It can be different,
      depending on the attribute itself. In this example, the text to be
      displayed when hovering over the item was used as the value.
    </li>
  </ul>

  <p>Here&#39;s the example text from above, but with the markup:</p>

  <pre><code>&lt;p title=&quot;Tooltip.Here you 
  can specify additional information&quot;&gt;
  Mouse over this line of text. 
  It&#39;s better to do it from a computer.&lt;/p&gt;
  </code></pre>

  <p>
    The <code>title</code> attribute can be used on any page element, not just
    paragraphs. These attributes are called <em>global</em> attributes, because
    they do not depend on the element. In contrast, there are attributes that
    are unique to one or more tags. For example, the attribute
    <code>colspan</code> which specifies the number of cells joined together in
    a table. Using it on anything other than a table makes no sense.
  </p>

  <p>
    Attributes can implicitly affect the information output. For example, when
    using the <em>CSS</em> style language, there is an attribute called
    <code>class</code>, whose task is to separate similar elements from each
    other using the value of the attribute. You will learn how classes work in
    our <em>CSS</em> course, but for now it is important to know that this
    attribute does not show up in any way when information is displayed on the
    page.
  </p>

  <pre><code>&lt;p class=&quot;lead&quot;&gt;Lead class paragraph&lt;/p&gt;
  &lt;p class=&quot;mega-paragraph&quot;&gt;
  Mega-paragraph class paragraph&lt;/p&gt;
  </code></pre>

  <p>
    One tag can have several attributes at once. They&#39;re written
    successively, and the order in which they are written does not matter:
  </p>

  <pre><code>&lt;p class=&quot;text-center&quot; title=&quot;This element
  has multiple attributes&quot;&gt;Paragraph with
  multiple attributes&lt;/p&gt;
  </code></pre>

  <p>
    In this lesson, we explored the concept of attributes and their notation. We
    learned how <code>title</code> and <code>class</code> attributes work, and
    that attributes can be either global or unique to HTML elements. Global
    attributes can be used for any tag, while unique attributes can only be used
    for specific ones.
  </p>
  <h2>Instructions</h2>
  <p>
    Create a paragraph with text "I like HTML!" and a tooltip "My cool tooltip".
  </p>
  `;
export default HtmlTask05;
