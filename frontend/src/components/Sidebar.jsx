import React, { useState, useMemo } from 'react';
import { Search, MapPin, Filter, X } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';

const Sidebar = ({ countries, onCountryClick, visitedCountries, wantToVisitCountries, filters, onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filtrar países pela busca
  const filteredCountries = useMemo(() => {
    return countries.filter(country =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.capital.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [countries, searchQuery]);

  // Pegar status do país
  const getCountryStatus = (countryId) => {
    if (visitedCountries.includes(countryId)) return 'visited';
    if (wantToVisitCountries.includes(countryId)) return 'want';
    return null;
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">
          <MapPin className="sidebar-title-icon" />
          <h2>Países</h2>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="filter-button"
        >
          <Filter className="icon" />
        </Button>
      </div>

      {/* Filtros */}
      {isFilterOpen && (
        <div className="filter-panel">
          <div className="filter-options">
            <button
              className={`filter-chip ${filters.showVisited ? 'active visited' : ''}`}
              onClick={() => onFilterChange({ ...filters, showVisited: !filters.showVisited })}
            >
              <span className="filter-dot visited"></span>
              Já Visitei
            </button>
            <button
              className={`filter-chip ${filters.showWantToVisit ? 'active want' : ''}`}
              onClick={() => onFilterChange({ ...filters, showWantToVisit: !filters.showWantToVisit })}
            >
              <span className="filter-dot want"></span>
              Quero Visitar
            </button>
            <button
              className={`filter-chip ${filters.showUnmarked ? 'active' : ''}`}
              onClick={() => onFilterChange({ ...filters, showUnmarked: !filters.showUnmarked })}
            >
              <span className="filter-dot unmarked"></span>
              Não Marcados
            </button>
          </div>
        </div>
      )}

      {/* Busca */}
      <div className="search-container">
        <Search className="search-icon" />
        <Input
          type="text"
          placeholder="Buscar países..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSearchQuery('')}
            className="search-clear"
          >
            <X className="icon-sm" />
          </Button>
        )}
      </div>

      {/* Lista de Países */}
      <ScrollArea className="countries-list">
        {filteredCountries.map(country => {
          const status = getCountryStatus(country.id);
          return (
            <div
              key={country.id}
              className={`country-item ${status || ''}`}
              onClick={() => onCountryClick(country)}
            >
              <div className="country-flag">
                {country.flag}
              </div>
              <div className="country-info">
                <div className="country-name">{country.name}</div>
                <div className="country-capital">{country.capital}</div>
              </div>
              {status && (
                <div className={`country-badge ${status}`}>
                  {status === 'visited' ? '✓' : '★'}
                </div>
              )}
            </div>
          );
        })}
      </ScrollArea>

      {/* Estatísticas */}
      <div className="sidebar-stats">
        <div className="stat-item visited">
          <span className="stat-value">{visitedCountries.length}</span>
          <span className="stat-label">Visitados</span>
        </div>
        <div className="stat-item want">
          <span className="stat-value">{wantToVisitCountries.length}</span>
          <span className="stat-label">Desejados</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
