```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the user navigates directly to /about 
  // without visiting the homepage first.
  const user = JSON.parse(localStorage.getItem('user')) || null;

  return (
    <div>
      <h1>About Page</h1>
      {user ? <p>Welcome back, {user.name}!</p> : <p>Please login to see more info.</p> } 
    </div>
  );
}
```