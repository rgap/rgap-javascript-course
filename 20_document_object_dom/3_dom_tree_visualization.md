# DOM Tree Structure

When the browser parses an HTML document, it creates a tree-like structure of nodes.

Given the following simple HTML:
```html
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello</h1>
    <p>Welcome!</p>
  </body>
</html>
```

Here is how the browser represents it as a Document Object Model (DOM) Tree:

> **Note on Realism:** 
> This diagram is slightly simplified for clarity. In a real browser DOM, the whitespace (line breaks and indentation) between the HTML tags would also be represented as empty "Text Nodes". We have omitted them here to focus on the primary structure, but you will see them if you inspect `childNodes` in JavaScript!

```mermaid
graph TD
  Document --> html["&lt;html&gt; (Element)"]
  html --> head["&lt;head&gt; (Element)"]
  html --> body["&lt;body&gt; (Element)"]
  head --> title["&lt;title&gt; (Element)"]
  title --> text1["'My Page' (Text Node)"]
  body --> h1["&lt;h1&gt; (Element)"]
  body --> p["&lt;p&gt; (Element)"]
  h1 --> text2["'Hello' (Text Node)"]
  p --> text3["'Welcome!' (Text Node)"]

  classDef element fill:#e1f5fe,stroke:#03a9f4,stroke-width:2px;
  classDef text fill:#fff3e0,stroke:#ff9800,stroke-width:2px;
  classDef document fill:#f3e5f5,stroke:#9c27b0,stroke-width:2px;

  class Document document;
  class html,head,body,title,h1,p element;
  class text1,text2,text3 text;
```
