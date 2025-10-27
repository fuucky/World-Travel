import React, { useState, useRef } from 'react';
import Globe3D from '../components/Globe3D';
import InfoPanel from '../components/InfoPanel';
import Sidebar from '../components/Sidebar';
import { Globe as GlobeIcon } from 'lucide-react';
import { countries } from '../data/mockData';

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationType, setLocationType] = useState(null);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [wantToVisitCountries, setWantToVisitCountries] = useState([]);
  const [filters, setFilters] = useState({
    showVisited: true,
    showWantToVisit: true,
    showUnmarked: true
  });
  const globeRef = useRef();

  const handleLocationClick = (location, type) => {
    setSelectedLocation(location);
    setLocationType(type);
  };

  const handleClosePanel = () => {
    setSelectedLocation(null);
    setLocationType(null);
  };

  const handleMarkVisited = (countryId) => {
    setVisitedCountries(prev => {
      if (prev.includes(countryId)) {
        return prev.filter(id => id !== countryId);
      } else {
        // Remove de "quero visitar" se estiver lá
        setWantToVisitCountries(prevWant => prevWant.filter(id => id !== countryId));
        return [...prev, countryId];
      }
    });
  };

  const handleMarkWantToVisit = (countryId) => {
    setWantToVisitCountries(prev => {
      if (prev.includes(countryId)) {
        return prev.filter(id => id !== countryId);
      } else {
        // Remove de "visitados" se estiver lá
        setVisitedCountries(prevVisited => prevVisited.filter(id => id !== countryId));
        return [...prev, countryId];
      }
    });
  };

  const handleCountryClickFromSidebar = (country) => {
    // Focar no globo
    const globeComponent = document.querySelector('.globe-container');
    if (globeComponent && globeComponent.focusOnCountry) {
      globeComponent.focusOnCountry(country);
    }
    
    // Abrir painel de info
    setSelectedLocation(country);
    setLocationType('country');
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <GlobeIcon className="logo-icon" />
            <span className="logo-text">GloboEducacional</span>
          </div>
          <p className="header-subtitle">Explore o mundo de forma interativa</p>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar
        countries={countries}
        onCountryClick={handleCountryClickFromSidebar}
        visitedCountries={visitedCountries}
        wantToVisitCountries={wantToVisitCountries}
        filters={filters}
        onFilterChange={setFilters}
      />

      {/* Globe */}
      <div className="globe-wrapper">
        <Globe3D
          ref={globeRef}
          onLocationClick={handleLocationClick}
          visitedCountries={visitedCountries}
          wantToVisitCountries={wantToVisitCountries}
          filters={filters}
        />
      </div>

      {/* Info Panel */}
      {selectedLocation && (
        <InfoPanel
          data={selectedLocation}
          type={locationType}
          onClose={handleClosePanel}
          onMarkVisited={handleMarkVisited}
          onMarkWantToVisit={handleMarkWantToVisit}
          isVisited={visitedCountries.includes(selectedLocation.id)}
          isWantToVisit={wantToVisitCountries.includes(selectedLocation.id)}
        />
      )}

      {/* Instructions */}
      <div className="instructions">
        <div className="instruction-item">
          <div className="instruction-dot green"></div>
          <span>Visitados</span>
        </div>
        <div className="instruction-item">
          <div className="instruction-dot blue"></div>
          <span>Quero Visitar</span>
        </div>
        <div className="instruction-item">
          <div className="instruction-dot cyan"></div>
          <span>Não Marcados</span>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Arraste para rotacionar • Role para zoom • Clique nos pontos para informações</p>
      </footer>
    </div>
  );
};

export default Home;
