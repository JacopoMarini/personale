import './Section.css'
import './Experience.css'

const Experience = ({ id }: { id: string }) => {
  return (
    <section id={id} className="section experience-section">
      <div className="section-header">
        <h2>Esperienza</h2>
        <div className="section-divider"></div>
      </div>
      <div className="experience-timeline">
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h3>Sviluppatore Web e Mobile</h3>
              <span className="timeline-date">2022 - oggi</span>
            </div>
            <div className="timeline-company">Stackhouse, Cagliari</div>
            <div className="timeline-description">
              <p>
                Utilizzo principalmente React con TypeScript per la creazione di applicazioni 
                web, con esperienza nella gestione dello stato tramite Redux Saga, Redux Toolkit 
                e Context. Competenza nello sviluppo di architetture a Micro Frontend e 
                nell'integrazione di API GraphQL.
              </p>
              <p>
                Esperienza nell'uso dei servizi Firebase (Remote Config, Analytics, Cloud 
                Messaging con Topics) e Google Analytics. Abile nell'uso di Git e piattaforme 
                di collaborazione come GitHub e GitLab, con esperienza in pull request, processi 
                di revisione del codice e risoluzione di conflitti.
              </p>
              <p>
                Esperienza nella creazione di design di applicazioni utilizzando Figma, quindi 
                anche un occhio alla UI.
              </p>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h3>Sviluppo Web Autonomo</h3>
              <span className="timeline-date">2017 - 2022</span>
            </div>
            <div className="timeline-company">Freelance</div>
            <div className="timeline-description">
              <p>
                Ho creato dei piccoli siti web per attività commerciali locali e un'applicazione 
                per tenere traccia delle ore lavorate dai dipendenti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

