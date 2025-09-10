import React, {JSX, useEffect} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import '../css/landing.css';

export default function Home(): JSX.Element {
  // Pastikan gambar berada di: static/img/profile.jpg
  const profileImg = useBaseUrl('img/profile.jpg');
  const fontAwesomeHref =
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';

  // Link "Academy" diarahkan langsung ke halaman intro docs (aman & pasti ada)
  const docsHomePath = useBaseUrl('/docs/intro');

  useEffect(() => {
    // Animasi bubble
    const bubbles = document.querySelectorAll<HTMLElement>('.landing .bubble');
    bubbles.forEach((bubble, index) => {
      setTimeout(() => {
        bubble.style.opacity = '1';
        bubble.style.transform = 'translateY(0)';
      }, index * 800);
    });

    // Animasi section saat scroll
    const sections = document.querySelectorAll<HTMLElement>('.landing section');
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(50px)';
      section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      sectionObserver.observe(section);
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <Layout
      title="cahyorom"
      description="Smart Contract Developer | Web3 Specialist"
      noFooter
    >
      <Head>
        {/* Font Poppins via Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome icons */}
        <link rel="stylesheet" href={fontAwesomeHref} />
      </Head>

      <div className="landing">
        {/* Hero Section */}
        <section id="home" className="landing-hero">
          <div className="landing-hero-content">
            {/* Chat Bubbles (Kiri) */}
            <div className="chat-column">
              <img src={profileImg} alt="Profile Photo" className="profile-photo" />
              <div className="chat-bubbles">
                <div className="bubble">Hello! I&apos;m Cahyo Romadhon</div>
                <div className="bubble">
                  Specializing in Move Programming Language for innovative dApps
                </div>
              </div>
            </div>
            {/* About Me (Kanan) */}
            <div className="about-column">
              <h1 className="about-judul">
                Gm, I&apos;m <span className="highlight">@cahyorom</span>
              </h1>
              <h3 className="about-judul">Smart Contract Developer | Web3 Specialist</h3>
              <p>
                I&apos;m a smart contract developer based in Surabaya, Indonesia. Driven by a
                passion for creating secure, efficient, and innovative decentralized applications,
                I’ve also developed an educational website to share knowledge and encourage learning
                in smart contract development.
              </p>
              {/* CTA juga ke intro docs */}
              <Link to={docsHomePath} className="cta-button" id="cta-button-port">
                Join Academy
              </Link>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="projects" className="portfolio">
          <h2>Programs Collection</h2>
          <div className="portfolio-grid">
            <div className="portfolio-card">
              <h3>NFT Storage</h3>
              <p>
                This smart contract enables NFT storage using the Walrus protocol in Move on the
                Sui blockchain. It demonstrates secure, decentralized storage of NFT assets,
                ensuring data integrity, guiding developers in building scalable, innovative
                decentralized applications.
              </p>
              <a
                href="https://github.com/cahyoromadhon/basic-move/tree/main/walrus1"
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Github
              </a>
            </div>
            <div className="portfolio-card">
              <h3>Token Creation</h3>
              <p>
                This smart contract enables token creation using Move’s Event concept on the Sui
                blockchain. It demonstrates secure token issuance and event tracking, empowering
                developers to build efficient, innovative decentralized applications.
              </p>
              <a
                href="https://github.com/cahyoromadhon/basic-move/tree/main/program9"
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Github
              </a>
            </div>
            <div className="portfolio-card">
              <h3>Ticket Management</h3>
              <p>
                This smart contract implements a ticket management system using Move’s capability
                design on the Sui blockchain. It demonstrates secure access control and data
                handling, guiding developers to build effective, secure decentralized applications.
              </p>
              <a
                href="https://github.com/cahyoromadhon/basic-move/tree/main/program8"
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Github
              </a>
            </div>
            <div className="portfolio-card">
              <h3>Gift Box</h3>
              <p>
                This smart contract creates a GiftBox using objectWrapping in Move on the Sui
                blockchain. It shows how to securely create and manage objects, inspiring developers
                to explore building simple, effective, and innovative decentralized apps.
              </p>
              <a
                href="https://github.com/cahyoromadhon/basic-move/tree/main/program7"
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Github
              </a>
            </div>
            <div className="portfolio-card">
              <h3>Item Manager</h3>
              <p>
                This smart contract implements an item manager with create_item and delete_item
                functions using Move on the Sui blockchain. It showcases data management and
                transaction handling, ideal for developers learning to build secure, efficient
                decentralized apps.
              </p>
              <a
                href="https://github.com/cahyoromadhon/basic-move/tree/main/program6"
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Github
              </a>
            </div>
            <div className="portfolio-card">
              <h3>Dynamic Counter</h3>
              <p>
                This smart contract powers a dynamic counter built with Move on the Sui blockchain.
                Showcasing state management and transaction logic, it leverages Sui&apos;s
                high-performance framework, ideal for developers exploring secure, scalable
                decentralized apps.
              </p>
              <a
                href="https://github.com/cahyoromadhon/basic-move/tree/main/program3"
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Github
              </a>
            </div>
            <div className="portfolio-card">
              <h3>Hello World Program</h3>
              <p>
                A brief &quot;Hello World&quot; smart contract written in Move for the Sui
                blockchain. This beginner-friendly project showcases Move&apos;s syntax and Sui&apos;s
                scalable architecture, serving as an educational starting point for developers
                exploring secure decentralized application.
              </p>
              <a
                href="https://github.com/cahyoromadhon/basic-move/tree/main/program2"
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Github
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <p>Let’s connect for collaborations or inquiries about my work.</p>
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-card">
                <i className="fab fa-twitter" aria-hidden="true" />
                <a
                  href="https://x.com/cahyorom"
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cahyorom
                </a>
              </div>
              <div className="contact-card">
                <i className="fab fa-telegram-plane" aria-hidden="true" />
                <a
                  href="https://t.me/brocahyo"
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  brocahyo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}