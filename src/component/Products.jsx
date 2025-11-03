const Products = () => {
    const products = [
        {
            id: 1,
            name: "Two-sided Business Cards",
            price: "15,100",
            image: "/assets/business-card.png"
        },
        {
            id: 2,
            name: "A5 Flyers (Single Sided)",
            price: "25,800",
            image: "/assets/A5-flyer.png"
        },
        {
            id: 3,
            name: "Round Stickers",
            price: "17,000",
            image: "/assets/Round-stickers.png"
        },
        {
            id: 4,
            name: "Simple Mug",
            price: "4,800",
            image: "/assets/mugs.png"
        },
        {
            id: 5,
            name: "Postcards (A6)",
            price: "22,300",
            image: "/assets/Postcards.jpg"
        },
        {
            id: 6,
            name: "Roll-up Banners",
            price: "65,500",
            image: "/assets/Rollup-banners.png"
        },
        {
            id: 7,
            name: "A2 Posters",
            price: "71,100",
            image: "/assets/A2-posters.png"
        },
        {
            id: 8,
            name: "Trifold Brochures",
            price: "47,500",
            image: "/assets/Trifold-brochures.png"
        },
        {
            id: 9,
            name: "Landscape ID Cards",
            price: "4,500",
            image: "/assets/Landscape-idcards.png"
        },
        {
            id: 10,
            name: "Off White T-shirt",
            price: "6,000",
            image: "/assets/Offwhite-Tshirts.png"
        },
        {
            id: 11,
            name: "A-4 Branded Paper Bags",
            price: "115,280",
            image: "/assets/A4-BrandedPaperBags.png"
        },
        {
            id: 12,
            name: "A4 Courier Bags",
            price: "47,500",
            image: "/assets/A4CourierBags.jpeg"
        }
    ];

    const styles = {
        productSection: {
            padding: '80px 40px',
            backgroundColor: '#E5E7EB',
        },
        productText: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'center',
        },
        productTextH3: {
            color: '#384a62',
            fontSize: '30px',
            fontWeight: '500',
            margin: 0,
        },
        productTextLink: {
            textDecoration: 'none',
            color: '#d77f81',
            fontSize: '18px',
        },
        productCards: {
            marginTop: '40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
        },
        card: {
            background: '#fff',
            width: '100%',
            minHeight: '450px',
            borderRadius: '10px',
            transition: 'all 0.3s ease-in-out',
        },
        imageContainer: {
            width: '100%',
            height: '250px',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            overflow: 'hidden',
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out',
        },
        cardText: {
            marginTop: '10px',
            padding: '20px',
        },
        cardTextH4: {
            color: '#384a62',
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '10px',
            margin: '0 0 10px 0',
        },
        cardTextP: {
            color: '#708095',
            fontSize: '14px',
            marginBottom: '10px',
            textTransform: 'uppercase',
            margin: '0 0 10px 0',
        },
        price: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
        },
        priceP: {
            textTransform: 'none',
            color: '#708095',
            fontSize: '14px',
            margin: 0,
        },
        priceH4: {
            color: '#384a62',
            fontSize: '16px',
            fontWeight: '600',
            margin: 0,
        },
        button: {
            background: '#d77f81',
            textDecoration: 'none',
            padding: '10px 20px',
            color: '#fff',
            borderRadius: '5px',
            width: '100%',
            border: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            transition: 'background 0.3s ease-in-out',
            fontSize: '14px',
        },
    }

    return (
        <>
            <style>{`
        @media (max-width: 1024px) {
          .product-section { padding: 60px 30px !important; }
          .product-cards { gap: 25px !important; }
        }
        @media (max-width: 768px) {
          .product-section { padding: 40px 20px !important; }
          .product-text { flex-direction: column !important; gap: 15px; }
          .product-text h3 { font-size: 24px !important; }
          .product-text a { font-size: 16px !important; }
          .product-cards { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important; }
          .card { min-height: 400px !important; }
          .image-container { height: 200px !important; }
        }
        @media (max-width: 480px) {
          .product-section { padding: 30px 15px !important; }
          .product-text h3 { font-size: 20px !important; }
          .product-cards { grid-template-columns: 1fr !important; }
          .card-text { padding: 15px !important; }
          .card-text h4 { font-size: 14px !important; }
          .card-text p { font-size: 12px !important; }
        }
        .card:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transform: translateY(-5px);
        }
        .image-container:hover img {
          transform: scale(1.1);
        }
        .button:hover {
          background: #c66d6f !important;
        }
      `}</style>
            <div>
                {/* productSection */}
                <section style={styles.productSection} className="product-section">
                    <div style={styles.productText} className="product-text">
                        <h3 style={styles.productTextH3}>Our Products</h3>
                        <a href="#" style={styles.productTextLink}>
                            See All Products
                        </a>
                    </div>

                    <div style={styles.productCards} className="product-cards">
                        {products.map((product) => (
                            <div style={styles.card} key={product.id} className="card">
                                <div style={styles.imageContainer} className="image-container">
                                    <img src={product.image} alt={product.name} style={styles.image} />
                                </div>
                                <div style={styles.cardText} className="card-text">
                                    <h4 style={styles.cardTextH4}>{product.name}</h4>
                                    <p style={styles.cardTextP}>Starting At</p>

                                    <div style={styles.price}>
                                        <h4 style={styles.priceH4}>₦{product.price}</h4>
                                        <p style={styles.priceP}>per 100</p>
                                    </div>

                                    <a href="#" style={{ textDecoration: 'none' }}>
                                        <button style={styles.button} className="button">
                                            Browse Product <span>&#8250;</span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Products