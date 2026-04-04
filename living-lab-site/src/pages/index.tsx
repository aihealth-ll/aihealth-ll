import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './modules/index.module.css';

const slides = [
  '/aihealth-ll/img/aihealth-home.png',
  '/aihealth-ll/img/aihealth-team.jpg',
];

function HomepageHeader() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header style={{ backgroundColor: '#ffffff', padding: '1rem 0', textAlign: 'center' }}>
      <div style={{ position: 'relative', display: 'inline-block', width: '100%', maxWidth: '1000px' }}>
        <img
          src={slides[current]}
          alt="AIHealth-LL"
          style={{ width: '100%', height: 'auto', transition: 'opacity 0.5s ease' }}
        />
        <div style={{ marginTop: '0.5rem' }}>
          {slides.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrent(idx)}
              style={{
                display: 'inline-block',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: idx === current ? '#1a73e8' : '#ccc',
                margin: '0 5px',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description goes in meta tag in <head>">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}