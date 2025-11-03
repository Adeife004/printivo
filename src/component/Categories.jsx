import BusinessCard from "../assets/business-card.png";
import A5Flyer from "../assets/A5-flyer.png";
import RoundSticker from "../assets/Round-stickers.png";
import Postcard from "../assets/Postcards.jpg";

const Categories = () => {
  // Sample category data - 4 categories
  const categories = [
    {
      id: 1,
      name: "Business Cards",
      price: "15,100",
      image: BusinessCard,
    },
    {
      id: 2,
      name: "A5 Flyers (Single Sided)",
      price: "25,800",
      image: A5Flyer,
    },
    {
      id: 3,
      name: "Round Stickers",
      price: "17,000",
      image: RoundSticker,
    },
    {
      id: 5,
      name: "Postcards (A6)",
      price: "22,300",
      image: Postcard,
    },
  ];

  const styles = {
    categoriesSection: {
      padding: "80px 40px",
      backgroundColor: "#f9fafb",
    },
    text: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      textAlign: "center",
      marginBottom: "40px",
    },
    textH3: {
      color: "#384a62",
      fontSize: "30px",
      fontWeight: "500",
      margin: 0,
    },
    textLink: {
      textDecoration: "none",
      color: "#d77f81",
      fontSize: "18px",
    },
    cardsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
    },
    card: {
      background: "#fff",
      width: "100%",
      minHeight: "420px",
      borderRadius: "10px",
      transition: "all 0.3s ease-in-out",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    },
    imageContainer: {
      width: "100%",
      height: "220px",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.3s ease-in-out",
    },
    cardText: {
      padding: "20px",
    },
    cardTextH4: {
      color: "#384a62",
      fontSize: "18px",
      fontWeight: "600",
      margin: "0 0 10px 0",
    },
    cardTextP: {
      color: "#708095",
      fontSize: "14px",
      marginBottom: "10px",
      textTransform: "uppercase",
      margin: "0 0 10px 0",
    },
    price: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    priceP: {
      textTransform: "none",
      color: "#708095",
      fontSize: "14px",
      margin: 0,
    },
    priceH4: {
      color: "#384a62",
      fontSize: "18px",
      fontWeight: "600",
      margin: 0,
    },
    button: {
      background: "#d77f81",
      textDecoration: "none",
      padding: "12px 20px",
      color: "#fff",
      borderRadius: "5px",
      width: "100%",
      border: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer",
      transition: "background 0.3s ease-in-out",
      fontSize: "14px",
      fontWeight: "500",
    },
  };

  return (
    <>
      <style>{`
        @media (max-width: 1024px) {
          .categories-section { padding: 60px 30px !important; }
          .cards-container { gap: 15px !important; }
        }
        @media (max-width: 768px) {
          .categories-section { padding: 40px 20px !important; }
          .text { flex-direction: column !important; gap: 15px; }
          .text h3 { font-size: 24px !important; }
          .text a { font-size: 16px !important; }
          .cards-container { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important; }
          .category-card { min-height: 380px !important; }
          .image-container { height: 180px !important; }
        }
        @media (max-width: 480px) {
          .categories-section { padding: 30px 15px !important; }
          .text h3 { font-size: 20px !important; }
          .cards-container { grid-template-columns: 1fr !important; }
          .card-text { padding: 15px !important; }
        }
        .category-card:hover {
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
          transform: translateY(-5px);
        }
        .image-container:hover img {
          transform: scale(1.1);
        }
        .category-button:hover {
          background: #c66d6f !important;
        }
      `}</style>

      <div>
        <section style={styles.categoriesSection} className="categories-section">
          {/* Text */}
          <div style={styles.text} className="text">
            <h3 style={styles.textH3}>Popular Categories</h3>
            <a href="#" style={styles.textLink}>
              See All Categories
            </a>
          </div>

          {/* Cards Container */}
          <div style={styles.cardsContainer} className="cards-container">
            {categories.map((category) => (
              <div style={styles.card} key={category.id} className="category-card">
                <div style={styles.imageContainer} className="image-container">
                  <img src={category.image} alt={category.name} style={styles.image} />
                </div>
                <div style={styles.cardText} className="card-text">
                  <h4 style={styles.cardTextH4}>{category.name}</h4>
                  <p style={styles.cardTextP}>Starting At</p>

                  <div style={styles.price}>
                    <h4 style={styles.priceH4}>₦{category.price}</h4>
                    <p style={styles.priceP}>per 100</p>
                  </div>

                  <a href="#" style={{ textDecoration: "none" }}>
                    <button style={styles.button} className="category-button">
                      Browse Category <span>&#8250;</span>
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Categories;
