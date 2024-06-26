# TextEffectAnimation

TextEffectAnimation is a React component that provides a typewriter effect animation for displaying a sequence of words character by character, with an optional blinking cursor.

## Installation

You can install the `TextEffectAnimation` component via npm:

```bash
npm install auto-text-animation
```

## Usage

```jsx
import React from 'react';
import TextEffectAnimation from 'auto-text-animation';

function App() {
  const words = ["Hello", "World", "React"];
  
  return (
    <div>
      <TextEffectAnimation words={words} intervalTime={100} duration={3000} loop cursor />
    </div>
  );
}

export default App;
```

## Props

- `words`: An array of strings representing the words to be displayed with the typewriter effect.
- `intervalTime`: (Optional) The interval time (in milliseconds) between each character typing. Default is 100ms.
- `duration`: (Optional) The duration (in milliseconds) to display each word before moving to the next word. Default is null, meaning it will move to the next word immediately after typing the current word.
- `loop`: (Optional) A boolean value indicating whether to loop through the words indefinitely. Default is false.
- `cursor`: (Optional) A boolean value indicating whether to show a blinking cursor. Default is false.

## Example

An example of the `TextEffectAnimation` component can be found in the `example` directory of this repository.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
