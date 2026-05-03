# 5. `KeyboardEvent` Properties

When the user interacts with the keyboard, the browser fires events like `keydown` (when pressing the key down) or `keyup` (when releasing the key).

These events generate an object of type `KeyboardEvent`, which contains very precise information about the key that was pressed.

### A. `event.key` (The Logical Value)
This is the most used property today. It returns a string with the **character value** printed on the key, based on the user's keyboard language layout.
- If you press the lowercase A key, `event.key` will be `"a"`.
- If you hold Shift and press the A key, `event.key` will be `"A"`.
- If you press Enter, it will be `"Enter"`.

### B. `event.code` (The Physical Value)
Represents the **physical key** on the keyboard, ignoring the language or if Shift is pressed.
- Regardless of whether you typed `"a"` or `"A"`, the physical key pressed was the letter A, so `event.code` will be `"KeyA"`.
- This is extremely useful for web video games, where the WASD keys must move the character regardless of whether the player has a Spanish, English, or Russian keyboard layout.

### C. Boolean Modifiers
The object also alerts you if any special key was pressed at that exact millisecond:
- `event.shiftKey`: Was the Shift key pressed? (`true` or `false`).
- `event.ctrlKey`: Was the Control key pressed?
- `event.altKey`: Was the Alt key pressed?
