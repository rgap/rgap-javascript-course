# The Window Object Hierarchy

In a browser environment, the highest level object is the `window`. It serves as the Global Object for JavaScript and represents the browser window (or tab) itself. Everything you do in the browser is contained within this object.

Here is a visual representation of how the `window` object organizes the different models and APIs:

```mermaid
graph TD
    Window["Window (Global Object)"]
    
    Window --> BOM["BOM (Browser Object Model)"]
    Window --> DOM["DOM (Document Object Model)"]
    Window --> JS["Core JavaScript"]
    Window --> APIs["Web APIs"]

    %% BOM Elements
    BOM --> location["location (URL)"]
    BOM --> history["history (Back/Forward)"]
    BOM --> navigator["navigator (Browser info)"]
    BOM --> screen["screen (Display info)"]

    %% DOM Element
    DOM --> document["document (HTML structure)"]

    %% JS Core
    JS --> GlobalVars["Global Variables (var)"]
    JS --> BuiltIns["Built-in Objects (Math, Date)"]

    %% Web APIs
    APIs --> Timers["Timers (setTimeout)"]
    APIs --> Storage["Storage (localStorage)"]
    APIs --> Network["Network (fetch)"]

    classDef global fill:#e1f5fe,stroke:#03a9f4,stroke-width:2px;
    classDef bom fill:#fff3e0,stroke:#ff9800,stroke-width:2px;
    classDef dom fill:#e8f5e9,stroke:#4caf50,stroke-width:2px;
    classDef apis fill:#f3e5f5,stroke:#9c27b0,stroke-width:2px;

    class Window global;
    class BOM,location,history,navigator,screen bom;
    class DOM,document dom;
    class APIs,Timers,Storage,Network apis;
```

## Key Concepts

1. **The BOM (Browser Object Model):** Controls the browser environment itself. It allows you to interact with the browser outside of the document. Examples include manipulating the URL (`location`), navigating the back button (`history`), or checking the screen size (`screen`).
2. **The DOM (Document Object Model):** Controls the HTML content inside the window. It represents the structure of your HTML document and lives inside the window under `window.document`.
3. **Core JavaScript:** These are the base language features and objects like `Math`, `Date`, `Array`, and any global variables you create (e.g., using `var`), which automatically become properties of the `window` object.
4. **Web APIs:** Additional tools provided by the browser that are not strictly part of the JavaScript language specification, such as timers (`setTimeout`), storage (`localStorage`), and network requests (`fetch`).
