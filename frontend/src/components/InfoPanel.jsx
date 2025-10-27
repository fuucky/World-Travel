import React from 'react';
import { X, MapPin, Users, DollarSign, Languages, Map, Globe as GlobeIcon, Check, Star } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const InfoPanel = ({ data, type, onClose, onMarkVisited, onMarkWantToVisit, isVisited, isWantToVisit }) => {
  if (!data) return null;

  return (
    <div className="info-panel">
      <Card className="info-card">
        <div className="info-header">
          <div className="info-title-section">
            <div className="info-icon">
              {type === 'country' ? <GlobeIcon className="icon" /> : <MapPin className="icon" />}
            </div>
            <div>
              <h2 className="info-title">{data.name}</h2>
              <Badge variant="outline" className="info-badge">
                {type === 'country' ? 'País' : 'Cidade'}
              </Badge>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="close-button"
          >
            <X className="icon" />
          </Button>
        </div>

        <div className="info-content">
          <p className="info-description">{data.description}</p>

          {type === 'country' && (
            <>
              {/* Botões de Marcação */}
              <div className="marking-buttons">
                <Button
                  variant={isVisited ? 'default' : 'outline'}
                  className={`mark-button ${isVisited ? 'visited-active' : 'visited-outline'}`}
                  onClick={() => onMarkVisited(data.id)}
                >
                  <Check className="button-icon" />
                  {isVisited ? 'Já Visitei' : 'Marcar como Visitado'}
                </Button>
                <Button
                  variant={isWantToVisit ? 'default' : 'outline'}
                  className={`mark-button ${isWantToVisit ? 'want-active' : 'want-outline'}`}
                  onClick={() => onMarkWantToVisit(data.id)}
                >
                  <Star className="button-icon" />
                  {isWantToVisit ? 'Quero Visitar' : 'Adicionar à Lista'}
                </Button>
              </div>

              <div className="info-grid">
                <div className="info-item">
                  <Users className="info-item-icon" />
                  <div>
                    <div className="info-item-label">População</div>
                    <div className="info-item-value">{data.population}</div>
                  </div>
                </div>

                <div className="info-item">
                  <MapPin className="info-item-icon" />
                  <div>
                    <div className="info-item-label">Capital</div>
                    <div className="info-item-value">{data.capital}</div>
                  </div>
                </div>

                <div className="info-item">
                  <Languages className="info-item-icon" />
                  <div>
                    <div className="info-item-label">Idioma</div>
                    <div className="info-item-value">{data.language}</div>
                  </div>
                </div>

                <div className="info-item">
                  <DollarSign className="info-item-icon" />
                  <div>
                    <div className="info-item-label">Moeda</div>
                    <div className="info-item-value">{data.currency}</div>
                  </div>
                </div>

                <div className="info-item">
                  <Map className="info-item-icon" />
                  <div>
                    <div className="info-item-label">Área</div>
                    <div className="info-item-value">{data.area}</div>
                  </div>
                </div>
              </div>

              <div className="facts-section">
                <h3 className="facts-title">Fatos Interessantes</h3>
                <ul className="facts-list">
                  {data.facts.map((fact, index) => (
                    <li key={index} className="fact-item">
                      <span className="fact-bullet">→</span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {type === 'city' && (
            <>
              <div className="info-grid">
                <div className="info-item">
                  <Users className="info-item-icon" />
                  <div>
                    <div className="info-item-label">População</div>
                    <div className="info-item-value">{data.population}</div>
                  </div>
                </div>

                <div className="info-item">
                  <GlobeIcon className="info-item-icon" />
                  <div>
                    <div className="info-item-label">País</div>
                    <div className="info-item-value">{data.country}</div>
                  </div>
                </div>
              </div>

              <div className="facts-section">
                <h3 className="facts-title">Destaques</h3>
                <ul className="facts-list">
                  {data.highlights.map((highlight, index) => (
                    <li key={index} className="fact-item">
                      <span className="fact-bullet">→</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

export default InfoPanel;
