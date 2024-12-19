# React State Manager

A lightweight and efficient state management solution for React applications.

## Features

- Zero dependencies
- TypeScript support
- React hooks API
- Middleware system
- Dev tools integration

## Usage

```tsx
import { createStore } from '@mylib/state';

const store = createStore({
  count: 0,
  increment: () => store.setState(s => ({ count: s.count + 1 }))
});
```

[View on GitHub](https://github.com/yourusername/react-state-manager)