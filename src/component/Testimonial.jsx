const Testimonial = () => {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Amina Ebele",
      handle: "@DeliciousAmina",
      text: "I am now the unofficial @Printivo ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!",
    },
    {
      id: 2,
      name: "Chidi Okafor",
      handle: "@tosingirlfx",
      text: "@Printivo delivered my mugs in 24hrs. Thank you so much! It's nice doing business with you. More to come.",
    },
    {
      id: 3,
      name: "Oluwatosin",
      handle: " @olgablark",
      text: "These guys @Printivo are really awesome and affordable. Excellent customer service and delivery too. Thank you.",
    }
  ]

  const styles = {
    section: {
      padding: '80px 40px',
      backgroundColor: '#fff',
    },
    textContainer: {
      textAlign: 'center',
      marginBottom: '50px',
    },
    heading: {
      color: '#384a62',
      fontSize: '36px',
      fontWeight: '600',
      margin: '0 0 20px 0',
    },
    cardsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    card: {
      background: '#fff',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      border: '1px solid #E5E7EB',
      transition: 'all 0.3s ease-in-out',
      position: 'relative',
    },
    nameContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '20px',
    },
    avatar: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    nameText: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    },
    name: {
      color: '#384a62',
      fontSize: '16px',
      fontWeight: '600',
      margin: 0,
    },
    handle: {
      color: '#708095',
      fontSize: '14px',
      margin: 0,
    },
    twitterIcon: {
      position: 'absolute',
      top: '25px',
      right: '25px',
      color: '#1DA1F2',
      fontSize: '24px',
    },
    testimonialText: {
      color: '#384a62',
      fontSize: '15px',
      lineHeight: '1.6',
      margin: 0,
    },
  }

  return (
    <>
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
      />
      <style>{`
        @media (max-width: 1024px) {
          .testimonial-section { padding: 60px 30px !important; }
          .testimonial-heading { font-size: 30px !important; }
        }
        @media (max-width: 768px) {
          .testimonial-section { padding: 40px 20px !important; }
          .testimonial-heading { font-size: 20px !important; }
          .cards-container { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
        @media (max-width: 480px) {
          .testimonial-section { padding: 30px 15px !important; }
          .testimonial-heading { font-size: 18px !important; }
          .testimonial-card { padding: 20px !important; }
        }
        .testimonial-card:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          transform: translateY(-5px);
          border-color: #d77f81;
        }
      `}</style>
      <section style={styles.section} className="testimonial-section">
        <div style={styles.textContainer}>
          <h1 style={styles.heading} className="testimonial-heading">
            What Customers Say About Us 🙌🏾
          </h1>
        </div>

        {/* Cards Container */}
        <div style={styles.cardsContainer} className="cards-container">
          {testimonials.map((testimonial) => (
            <div style={styles.card} key={testimonial.id} className="testimonial-card">
              {/* Twitter Icon */}
              <div style={styles.twitterIcon}>
                <i className="fab fa-twitter"></i>
              </div>

              {/* Name Section */}
              <div style={styles.nameContainer}>
                <div style={styles.nameText}>
                  <p style={styles.name}>{testimonial.name}</p>
                  <p style={styles.handle}>{testimonial.handle}</p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p style={styles.testimonialText}>
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Testimonial