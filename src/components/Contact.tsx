import './Section.css'
import './Contact.css'

const Contact = ({ id }: { id: string }) => {
  return (
    <section id={id} className="section contact-section">
      <div className="section-header">
        <h2>Contatti</h2>
        <div className="section-divider"></div>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <p className="contact-intro">
            Sono sempre aperto a nuove opportunità e collaborazioni. 
            Non esitare a contattarmi!
          </p>
          <div className="contact-details">
            <a href="tel:+393403549010" className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-text">
                <span className="contact-label">Telefono</span>
                <span className="contact-value">+39 340 354 9010</span>
              </div>
            </a>
            <a href="mailto:jacopomariniwd@gmail.com" className="contact-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-text">
                <span className="contact-label">Email</span>
                <span className="contact-value">jacopomariniwd@gmail.com</span>
              </div>
            </a>
            <a 
              href="https://github.com/JacopoMarini" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">💻</div>
              <div className="contact-text">
                <span className="contact-label">GitHub</span>
                <span className="contact-value">JacopoMarini</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

