import type { Technology } from '../types'

type TechnologySectionProps = {
  technologies: Technology[]
  stack: Technology[]
  loading: boolean
  onAdd: (technology: Technology) => void
  onRemove: (technology: Technology) => void
  onRemoveAll: () => void
}

export function TechnologySection({ technologies, stack, loading, onAdd, onRemove, onRemoveAll }: TechnologySectionProps) {
  const isInStack = (technologyId: string) => stack.some((item) => item.id === technologyId)

  return (
    <section id="technologies" className="technology-section">
      <div className="technology-shell">
        <div className="technology-heading">
          <h2>Explore the <span>Technologies</span></h2>
          <p>Pick one technology per category to build your ideal stack.</p>
        </div>

        <div className="technology-layout">
          <div className="technology-grid">
            {loading ? (
              <div className="technology-loading">
                <div>
                  <span className="loading-spinner" />
                  Loading technologies...
                </div>
              </div>
            ) : (
              technologies.map((technology) => {
                const added = isInStack(technology.id)

                return (
                  <article key={technology.id} className="technology-card">
                    <div className="technology-card-top">
                      <div className="technology-icon">
                        <img
                          src={technology.icon}
                          alt={technology.name}
                          onError={(event) => {
                            event.currentTarget.style.display = 'none'
                            event.currentTarget.nextElementSibling?.classList.add('visible')
                          }}
                        />
                        <span className="technology-icon-fallback" aria-hidden="true">{technology.name.slice(0, 2)}</span>
                      </div>
                      <span className="technology-badge">{technology.badge}</span>
                    </div>

                    <h3>{technology.name}</h3>
                    <p>{technology.description}</p>

                    <div className="technology-meta">
                      <span>{technology.category}</span>
                      <span>{technology.difficulty}</span>
                      <strong>★ {technology.rating.toFixed(1)}</strong>
                    </div>

                    <button
                      type="button"
                      onClick={() => (added ? onRemove(technology) : onAdd(technology))}
                      disabled={added}
                      className={`technology-button ${added ? 'added' : ''}`}
                    >
                      {added ? '✓ Added to Stack' : 'Add to Stack'}
                    </button>
                  </article>
                )
              })
            )}
          </div>

          <aside className="stack-panel">
            <div className="stack-panel-header">
              <h3>Your Stack</h3>
            </div>

            <p className="stack-panel-subtitle">
              {stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'} Selected
            </p>

            <div className="stack-items">
              {stack.length === 0 ? (
                <div className="empty-stack">Your stack is empty.</div>
              ) : (
                stack.map((item) => (
                  <div key={item.id} className="stack-item">
                    <div className="stack-item-info">
                      <img
                        src={item.icon}
                        alt={item.name}
                        onError={(event) => {
                          event.currentTarget.style.display = 'none'
                          event.currentTarget.nextElementSibling?.classList.add('visible')
                        }}
                      />
                      <span className="stack-icon-fallback" aria-hidden="true">{item.name.slice(0, 2)}</span>
                      <div>
                        <strong>{item.name}</strong>
                        <span>{item.category}</span>
                      </div>
                    </div>
                    <button type="button" onClick={() => onRemove(item)} aria-label={`Remove ${item.name}`}>
                      ×
                    </button>
                  </div>
                ))
              )}
            </div>

            {stack.length > 0 && (
              <button className="stack-remove-all" type="button" onClick={onRemoveAll}>
                Remove All
              </button>
            )}
          </aside>
        </div>
      </div>
    </section>
  )
}
