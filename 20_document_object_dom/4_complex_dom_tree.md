# Complex DOM Tree Structure

This diagram shows a more advanced HTML document. Notice how attributes (like `id` and `class`) are considered part of the Element nodes, while comments and text have their own distinct nodes in the tree.

Given the following HTML:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Complex DOM</title>
  </head>
  <body>
    <div id="wrapper" class="container">
      <h1>Title</h1>
      <ul class="items">
        <li>Item 1</li>
        <li><a href="#">Item 2</a></li>
      </ul>
      <!-- Footer note -->
      <p>Done.</p>
    </div>
  </body>
</html>
```

Here is how the browser represents it as a Document Object Model (DOM) Tree:

> **Note on Realism:** 
> Just like the previous diagram, this is simplified for clarity. In a real browser DOM, every line break and space for indentation between these elements (e.g., between `</head>` and `<body>`, or between the `<li>` tags) creates its own distinct "Text Node" containing whitespace. A perfectly realistic diagram would be cluttered with these whitespace text nodes, which is why they are omitted in this visualization.

```mermaid
graph TD
  Document --> html["&lt;html&gt; (Element)"]
  
  html --> head["&lt;head&gt; (Element)"]
  html --> body["&lt;body&gt; (Element)"]
  
  head --> meta["&lt;meta charset='UTF-8'&gt; (Element)"]
  head --> title["&lt;title&gt; (Element)"]
  title --> text1["'Complex DOM' (Text Node)"]
  
  body --> div["&lt;div id='wrapper'&gt; (Element)"]
  
  div --> h1["&lt;h1&gt; (Element)"]
  div --> ul["&lt;ul class='items'&gt; (Element)"]
  div --> comment["&lt;!-- Footer note --&gt; (Comment Node)"]
  div --> p["&lt;p&gt; (Element)"]
  
  h1 --> text2["'Title' (Text Node)"]
  
  ul --> li1["&lt;li&gt; (Element)"]
  ul --> li2["&lt;li&gt; (Element)"]
  
  li1 --> text3["'Item 1' (Text Node)"]
  
  li2 --> a["&lt;a href='#'&gt; (Element)"]
  a --> text4["'Item 2' (Text Node)"]
  
  p --> text5["'Done.' (Text Node)"]

  classDef element fill:#e1f5fe,stroke:#03a9f4,stroke-width:2px;
  classDef text fill:#fff3e0,stroke:#ff9800,stroke-width:2px;
  classDef document fill:#f3e5f5,stroke:#9c27b0,stroke-width:2px;
  classDef comment fill:#e8f5e9,stroke:#4caf50,stroke-width:2px,stroke-dasharray: 5 5;

  class Document document;
  class html,head,body,meta,title,div,h1,ul,p,li1,li2,a element;
  class text1,text2,text3,text4,text5 text;
  class comment comment;
```
