import Head from 'next/head';
import styles from '../styles/Home.module.css';
     
export default function Home() {
  return (
    <div className={styles.container}>
      <Head >
        <div className={styles.header}>
          <div className={styles.upperHead}>
          <a
          href="https://anltowing.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.logo}
        >
          <img src="/anltowingName.png" alt="A&L" className={styles.logo} href="anltowing.com"/>
        </a>
       
        <a 
        href="tel:862-895-3747" className={styles.phone}
        >
          <img src="/phone.png" alt="A&L" width="30px" height="30px"  />
          862-895-3747
        </a>
        
        
          </div>
        <nav>
          <ul className={styles.ul}>
            <li className={styles.li}><a href="#Contact">Contact</a> </li>
            <li className={styles.li}><a href="#about">About</a></li>
            
          </ul>
        </nav>
        </div>
        <title>Truck Towing Roselle & Elizabeth NJ, Truck Road Service Newark NJ</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Towing Rescue Service in New Jersey, Tri-State area." />

      </Head>

      <main className={styles.backgroundImage}>
        <div>
        <h1 className={styles.title}>
          Welcome to A&L TOWING
        </h1>

        <p className={styles.description}>
          The Best Commercial Towing and Roadside Assistance in The Tri-State Area
        </p>
        </div>
        <div className={styles.theRow}>
        
        <img   src="/I-78_NJ.svg.png" alt="I-78"  width="71" height="71" />

        
        
        <img   src="/New_Jersey_Turnpike_Shield-1.svg" alt="I-80"   width="71" height="71" />

        
       
        
        <img  src="/GSPkwy_Shield-1.svg" alt="GardenStatePKWY"   width="71" height="71" />
        
      </div>
        <div>
          <a href="#Contact">
          <button  className={styles.button}>
            Contact Us Today
          </button>
          </a>  
          
        </div>

        <div className={styles.grid}>
          
        </div>
      </main>
      <div className={styles.newNav}>
      <nav >
          <ul className={styles.ulNext}>
            <li className={styles.liNext}> <img src="/oldPhone.png" alt="A&L" width="30px" height="30px" className={styles.phone1} /> <a href="tel:862-895-3747">862-895-3747</a></li>
            <li className={styles.liNext}><a>QUICK RESPONSE TIMES</a></li>
            <li className={styles.liNext}><a>EMERGENCY SERVICE</a> </li>
            
            
          </ul>
        </nav>
      </div>
      <section id="about" className={styles.about}>
        <h2>About Us</h2>
        <p>A & L Towing is dedicated to providing reliable and professional towing services throughout the Tri-State area. Our experienced team is available 24/7 to assist with all your towing and roadside needs, from minor breakdowns to major accidents. With a fleet of modern tow trucks and equipment, we ensure fast and efficient service to get you back on the road as quickly as possible.</p>
        <div className={styles.images}>
          <img src="/towMus.png" alt="Tow Truck" className={styles.towImage} />
          <img src="/towTruck.png" alt="Towing Service" className={styles.towImage} />
          <img src="/towCol.jpg" alt="Tow Truck Fleet" className={styles.towImage} />
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.serviceItem}>
          <h2>Quick Response Times</h2>
          <p>Our fleet includes more than thirty service trucks and wreckers. In the event of an accident or some other incident which means your vehicle isn’t in a roadworthy condition, you can depend on our 24/7/365 emergency towing service to help you out.</p>
        </div>
        <div className={styles.serviceItem}>
          <h2>Reliable & Affordable</h2>
          <p>With over forty years of experience, we know that our customers value high quality, reliable repairs, completed quickly so that they can get their vehicles back on the road as soon as possible.</p>
        </div>
        <div className={styles.serviceItem}>
          <h2>The Best & Latest Recovery Tools</h2>
          <p>Our team uses the latest computer diagnostics for New Jersey to ensure we can provide the best roadside assistance possible.</p>
        </div>
      </section>

      <section id="Contact" className={styles.contact}>
        <h2>Contact Us</h2>
        <form className={styles.contactForm}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="vehicle">Vehicle Information:</label>
          <input type="text" id="vehicle" name="vehicle" required />

          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" required />

          <label htmlFor="questions">Questions/Comments:</label>
          <textarea id="questions" name="questions" rows="4" required></textarea>

          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          
          <div className={styles.socialLinks}>
            <a href="https://facebook.com/anltowing" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <img   src="/facebook.png" alt="I-78"  width="32" height="32" />
            </a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 A & L Towing. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
