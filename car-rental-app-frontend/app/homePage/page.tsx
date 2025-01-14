import styles from '../styles/HomePage.module.css';
import images from '../assets/images/carblur.png'
import Image from 'next/image';
import RentCar from '../assets/images/carForRent.jpeg'
import vector from '../assets/images/Vector.png'
import BookCarForm from '@/components/bookCarForm';



const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className={styles.heroContainer}>
        
        
        <div className={styles.heroContent}>
        <h1>Experience the road <br /> like never before</h1>

          <p>
            Aliquam adipiscing velit semper morbi. Purus non eu cursus <br/>porttitor 
            tristique et gravida. Quis nunc interdum gravida ullamcorper.
          </p>
          <button className={styles.viewAllCarsButton}>View all cars</button>
        </div>

        <div className={styles.formContainer}>
        <BookCarForm
         bgColor="bg-white"
        textColor="text-black"
        inputBgColor = "bg-gray-100"
        />
        </div>
        {/* <div className={styles.bookingForm}>
          <h2>Book your car</h2>
          <form>
            <select>
              <option>Car type</option>
            </select>
            <select>
              <option>Place of rental</option>
            </select>
            <select>
              <option>Place of return</option>
            </select>
            <input type="date" placeholder="Rental date" />
            <input type="date" placeholder="Return date" />
            <button className={styles.bookNowButton}>Book now</button>
          </form>
        </div> */}
      </div>

      {/* Features Section */}
      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.icon}>
            {/* Replace with your SVG or icon */}
            <span role="img" aria-label="map">📍</span>
          </div>
          <h3 className={styles.featureTitle}>Availability</h3>
          <p className={styles.featureDescription}>Diam tincidunt tincidunt erat at semper fermentum.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon}>
            {/* Replace with your SVG or icon */}
            <span role="img" aria-label="car">🚗</span>
          </div>
          <h3 className={styles.featureTitle}>Comfort</h3>
          <p className={styles.featureDescription}>Gravida auctor fermentum morbi vulputate.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon}>
            {/* Replace with your SVG or icon */}
            <span role="img" aria-label="wallet">💰</span>
          </div>
          <h3 className={styles.featureTitle}>Savings</h3>
          <p className={styles.featureDescription}>Pretium convallis id diam sed commodo.</p>
        </div>
      </div>

      <div className={styles.featureSection}>

  <div style={{ maxWidth: "50%", marginLeft: "2.5%" }}>
    <Image
      src={RentCar}
      alt="Image"
      style={{
        maxWidth: "90%",
        backgroundColor: "white",
        marginLeft: "2%",
        borderRadius: "10px",
        marginTop: "5%",
       
      }}
    />
  </div>

   <div className={styles.featureList} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
    
    <div className={styles.featureItem}>
    <div className={styles.topicContainer}>
      <span className={styles.featureNumber}>1</span>
      <h3>Erat at semper</h3>
    </div>
      <p>Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum...</p>
    </div>

    <div className={styles.featureItem}>
    <div className={styles.topicContainer}>
      <span className={styles.featureNumber}>2</span>
      <h3>Urna nec vivamus risus duis arcu</h3>
    </div>
      <p>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper.</p>
    </div>

    <div className={styles.featureItem}>
    <div className={styles.topicContainer}>
      <span className={styles.featureNumber}>3</span>
      <h3>Lobortis euismod imperdiet tempus</h3>
    </div>
      <p>Viverra scelerisque mauris et nulla molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi.</p>
    </div>

    {/* <div className={styles.featureItem}>
    <div className={styles.topicContainer}>
      <span className={styles.featureNumber}>4</span>
      <h3>Cras nulla aliquet nam eleifend amet et</h3>
    </div>
      <p>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer.</p>
    </div> */}
  </div>
</div>

{/* Facts in numbers part */}

<div className={styles.factsInNumbers}>
      <div className={styles.textContent}>
        <h2>Facts In Numbers</h2>
        <p>Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper fermentum.</p>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statIcon}>
            <span role="img" aria-label="car">🚗</span>
          </div>
          <div className={styles.statDetails}>
            <p className={styles.statNumber}>540+</p>
            <p>Cars</p>
          </div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statIcon}>
            <span role="img" aria-label="users">👥</span>
          </div>
          <div className={styles.statDetails}>
            <p className={styles.statNumber}>20k+</p>
            <p>Customers</p>
          </div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statIcon}>
            <span role="img" aria-label="years">📅</span>
          </div>
          <div className={styles.statDetails}>
            <p className={styles.statNumber}>25+</p>
            <p>Years</p>
          </div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statIcon}>
            <span role="img" aria-label="miles">🚗</span>
          </div>
          <div className={styles.statDetails}>
            <p className={styles.statNumber}>20m+</p>
            <p>Miles</p>
          </div>
        </div>
      </div>
    </div>

{/* The last part */}

    <div className={styles.heroSection}>
      

      {/* Content */}
      <div className={styles.heroContent}>
        <h1 className={styles.headingPart}>Enjoy every mile with <br/>adorable companionship.</h1>
        <p>
          Amet cras hac orci lacus. Faucibus ipsum arcu lectus <br/>nibh sapien bibendum ullamcorper
          in. Diam tincidunt <br/>tincidunt erat.
        </p>

        {/* Search Bar */}
        <div className={styles.searchBar}>
          <input type="text" placeholder="City" />
          <button>Search</button>
        </div>
      </div>
      <div className={styles.vectorImage}>
      <Image
      src={vector}
      alt="Image" />
      </div>
    </div>


    </div>
  );
};

export default Home;
