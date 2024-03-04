import { useState, useEffect } from 'react';

export default function Navbar() {
  const items = [
    { label: 'Home', href: '/home' },
    { label: 'About', href: '/about' },
    { label: 'Works', href: '/works' },
    { label: 'Contacts', href: '/contacts' },
  ]

  const [activeUrl, setActiveUrl] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => {
      setActiveUrl(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full flex flex-row justify-between xl:px-[10%] px-8 py-4">
      <div>
        <a href="/">
          <img src="/dpaulos6-logo.svg" alt="dpaulos6" className="w-10"/>
        </a>
      </div>
      <div className="flex items-center px-4">
        <ul className="flex flex-row gap-10 lowercase">
          {items.map((item, index) => 
            <li key={index} className={`navbar-link ${activeUrl == item.href ? "active" : ""}`}>
              <a href="/">{item.label}</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}