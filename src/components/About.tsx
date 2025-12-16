import './Section.css'
import './About.css'

const About = ({ id }: { id: string }) => {
  return (
    <section id={id} className="section about-section">
      <div className="section-header">
        <h2>Chi Sono</h2>
        <div className="section-divider"></div>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p className="lead">
            Con un livello di inglese B2 e oltre tre anni di esperienza nello sviluppo 
            di applicazioni web e mobile (React e React Native), ho affinato competenze 
            pratiche e una forte passione per il design della UI.
          </p>
          <p>
            Ho inoltre svolto studi in ambito informatico presso l'Università di Cagliari. 
            Ho completato percorsi di formazione professionale nello sviluppo web e nel 
            design dell'interfaccia utente, con particolare utilizzo di Figma.
          </p>
          <p>
            La formazione sul lavoro mi ha permesso di consolidare competenze front-end, 
            ottimizzazione delle performance e collaborazione con team di design e sviluppo.
          </p>
        </div>
        <div className="about-details">
          <div className="detail-card">
            <h3>Formazione</h3>
            <p>
              Ho seguito studi in Informatica presso l'Università degli Studi di Cagliari. 
              Ho inoltre completato percorsi di formazione professionale nello sviluppo web 
              e nel design dell'interfaccia utente, con particolare utilizzo di Figma.
            </p>
          </div>
          <div className="detail-card">
            <h3>Lingue</h3>
            <ul>
              <li><strong>Italiano:</strong> Madrelingua</li>
              <li><strong>Inglese:</strong> Livello B2</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

