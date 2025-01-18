```javascript
// pages/about.js

export default function About() {
  // Solution: Check if localStorage item exists before parsing
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

  return (
    <div>
      <h1>About Page</h1>
      {user ? <p>Welcome back, {user.name}!</p> : <p>Please login to see more info.</p> } 
    </div>
  );
}
```
```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  // This is not part of the bug/solution but sets localStorage for demo
  const handleLogin = () => {
    const user = { name: 'John Doe' };
    localStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <button onClick={handleLogin}>Login</button>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```