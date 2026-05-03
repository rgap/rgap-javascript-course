# 1. Introduction to Event Propagation

Event Propagation is the **most important** and profound concept to master DOM interaction.

When you click on an element (for example, a `<td>` inside a `<tr>` inside a `<table>`), the click doesn't just happen in isolation on the `<td>`.

Technically, your click pierces through multiple layers. You also clicked on the `<tr>`, the `<table>`, the `<body>`, the `<html>`, and the `window` object.

The DOM standard defines that the journey of an event always has **3 Phases**:

```mermaid
sequenceDiagram
    participant Window
    participant Document
    participant HTML
    participant Body
    participant Table
    participant TR
    participant TD as Target (TD)

    Note over Window, TD: PHASE 1: CAPTURING (Capturing Phase)
    Window->>Document: 1. Goes down through Document
    Document->>HTML: 2. Goes down through HTML
    HTML->>Body: 3. Goes down through Body
    Body->>Table: 4. Goes down through Table
    Table->>TR: 5. Goes down through TR
    TR->>TD: 6. Reaches the Target (TD)

    Note over TD: PHASE 2: TARGET (Target Phase)
    TD-->>TD: Executes target events

    Note over TD, Window: PHASE 3: BUBBLING (Bubbling Phase)
    TD->>TR: 7. Goes up through TR
    TR->>Table: 8. Goes up through Table
    Table->>Body: 9. Goes up through Body
    Body->>HTML: 10. Goes up through HTML
    HTML->>Document: 11. Goes up through Document
    Document->>Window: 12. Goes up to Window
```

In the following lessons, we will analyze each of these phases.
