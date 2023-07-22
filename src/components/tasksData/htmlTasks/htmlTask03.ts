const HtmlTask03 = `
</li></ol></nav><div><h1>HTML: Text in HTML</h1><p>Within a browser or other program that can process HTML, the text is rendered based on the specified tags. Without them, the browser will not understand how to properly display the text.</p>

  <p>Let&#39;s look at an example of text and try to output it both with tags and without them.</p>
  <br>
  <div>
    <p>We believe that a true programmer must understand how a computer works and be able to think like a computer. They should see a problem, not an assignment. They must be able to analyze and reason at the level of the problem and above, not just at a code level.</p>
  <br>
    <p>With today's abundance of study materials, courses, and books, the main question a beginner faces now is not "where to study?" but "what should I study and in what order?". There are many opinions on this subject. Some advise starting with mathematics, while others advise specific languages and technologies.</p>
  <br>
    <p>Hexlet is a ready-made path from absolute beginner to your first job.</p>
  </div>
  
  <p>If you insert this text into the page without using tags, you&#39;ll get this result:</p>
  <br>
  <div></div>
    We believe that a true programmer must understand how a computer works and be able to think like a computer. They should see a problem, not an assignment. They must be able to analyze and reason at the level of the problem and above, not just at a code level. With today's abundance of study materials, courses, and books, the main question a beginner faces now is not "where to study?" but "what should I study and in what order?". There are many opinions on this subject. Some advise starting with mathematics, while others advise specific languages and technologies. Hexlet is a ready-made path from absolute beginner to your first job.
  </div>
  <br>
  <p>This is not the result that was expected - the lines have been stuck together and turned into one unreadable wall of text. For the text to look as intended, it needs to be wrapped in <code>&lt;p&gt;</code> tags:</p>
  
<pre>
<code>
&lt;p&gt;
 We believe that a true programmer 
 must understand how a computer 
 works and be able to think like 
 a computer. 
 They should see a problem, not an 
 assignment. 
 They must be able to analyze and 
 reason at the level of the problem 
 and above, not just at a code level.
&lt;/p&gt;
&lt;p&gt;
With today&#39;s abundance of study 
materials, courses, and books, the 
main question a beginner faces now 
is not &quot;where to study?
&quot;but&quot;what should I study and in what 
order?&quot;. There are many opinions on 
this subject. Some advise starting 
with mathematics, while others 
advise specific languages and 
technologies.
&lt;/p&gt;
  
&lt;p&gt;
Hexlet is a ready-made path from 
absolute beginner to your first 
job.
&lt;/p&gt;
</code>
</pre>
  <div>
    <p>We believe that a true programmer must understand how a computer works and be able to think like a computer. They should see a problem, not an assignment. They must be able to analyze and reason at the level of the problem and above, not just at a code level.</p>
  <br>
    <p>With today's abundance of study materials, courses, and books, the main question a beginner faces now is not "where to study?" but "what should I study and in what order?". There are many opinions on this subject. Some advise starting with mathematics, while others advise specific languages and technologies.</p>
  <br>
    <p>Hexlet is a ready-made path from absolute beginner to your first job.</p>
  </div>
  <br>
  <p>The example illustrates that text formatted in a word processor and then opened in a browser will be one continuous line, so the information needs to be marked with special tags. In this course, we&#39;ll look at tags for creating tables, lists, links, and page sections that make sense. In this lesson, we took a closer look at paragraphs and the importance of markup for proper output on a page.</p>
  <br>
  <h2>Instructions</h2>
  <br>
  <p>Format this text:</p>
  <div>
  <br>
  <p><em style="color:#3497ee;">It is very interesting.</em></p>
  <br>
  <p><em style="color:#3497ee;">And so far it's simple enough.</em></p>
  </div>
  <br>
  <p>Each sentence must be inside a separate tag</p>
  `;

export default HtmlTask03;
