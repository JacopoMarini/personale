import './Section.css'
import './Skills.css'

const Skills = ({ id }: { id: string }) => {
  const technologies = [
    { name: 'TypeScript', category: 'Language' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'React', category: 'Framework' },
    { name: 'React Native', category: 'Framework' },
    { name: 'Redux / Redux Saga / Redux Toolkit', category: 'State Management' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'GraphQL', category: 'API' },
    { name: 'Firebase', category: 'Services' },
    { name: 'HTML5', category: 'Markup' },
    { name: 'CSS3', category: 'Styling' },
    { name: 'Git / GitHub / GitLab', category: 'Tools' },
    { name: 'Figma', category: 'Design' },
  ]

  const categories = Array.from(new Set(technologies.map(t => t.category)))

  return (
    <section id={id} className="section skills-section">
      <div className="section-header">
        <h2>Competenze Tecnologiche</h2>
        <div className="section-divider"></div>
      </div>
      <div className="skills-content">
        {categories.map(category => (
          <div key={category} className="skill-category">
            <h3 className="category-title">{category}</h3>
            <div className="skills-grid">
              {technologies
                .filter(tech => tech.category === category)
                .map(tech => (
                  <div key={tech.name} className="skill-card">
                    <span className="skill-name">{tech.name}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

