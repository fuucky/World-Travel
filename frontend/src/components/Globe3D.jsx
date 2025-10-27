import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import { countries, cities } from '../data/mockData';

const Globe3D = ({ onLocationClick, visitedCountries, wantToVisitCountries, filters }) => {
  const globeEl = useRef();
  const [globeReady, setGlobeReady] = useState(false);

  useEffect(() => {
    if (globeEl.current) {
      // Auto-rotate
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      globeEl.current.controls().enableZoom = true;
      
      // Set initial point of view
      globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 2.5 }, 1000);
      
      setGlobeReady(true);
    }
  }, []);

  // Função para focar em um país
  const focusOnCountry = (country) => {
    if (globeEl.current) {
      globeEl.current.pointOfView(
        { lat: country.coordinates.lat, lng: country.coordinates.lng, altitude: 1.5 },
        1500
      );
    }
  };

  // Expor função para componente pai
  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.focusOnCountry = focusOnCountry;
    }
  }, []);

  // Função para determinar a cor do país baseado no status
  const getCountryColor = (countryId) => {
    if (visitedCountries.includes(countryId)) return '#00ff88'; // Verde
    if (wantToVisitCountries.includes(countryId)) return '#0088ff'; // Azul
    return '#00ffff'; // Ciano padrão
  };

  // Filtrar países baseado nos filtros ativos
  const getFilteredCountries = () => {
    return countries.filter(country => {
      const isVisited = visitedCountries.includes(country.id);
      const isWant = wantToVisitCountries.includes(country.id);
      const isUnmarked = !isVisited && !isWant;

      if (filters.showVisited && isVisited) return true;
      if (filters.showWantToVisit && isWant) return true;
      if (filters.showUnmarked && isUnmarked) return true;
      
      return false;
    });
  };

  // Preparar dados de países para visualização
  const filteredCountries = getFilteredCountries();
  const countriesData = filteredCountries.map(country => ({
    ...country,
    lat: country.coordinates.lat,
    lng: country.coordinates.lng,
    size: 0.5,
    color: getCountryColor(country.id)
  }));

  // Preparar dados de cidades
  const citiesData = cities.map(city => ({
    ...city,
    lat: city.coordinates.lat,
    lng: city.coordinates.lng,
    size: 0.3,
    color: '#ff00ff'
  }));

  // Combinar todos os pontos
  const allPoints = [...countriesData, ...citiesData];

  // Criar arcos para países visitados (verde)
  const visitedArcs = visitedCountries
    .map(countryId => {
      const country = countries.find(c => c.id === countryId);
      if (!country) return null;
      return {
        startLat: 0,
        startLng: 0,
        endLat: country.coordinates.lat,
        endLng: country.coordinates.lng,
        color: '#00ff88'
      };
    })
    .filter(Boolean);

  // Criar arcos para países desejados (azul)
  const wantToVisitArcs = wantToVisitCountries
    .map(countryId => {
      const country = countries.find(c => c.id === countryId);
      if (!country) return null;
      return {
        startLat: 0,
        startLng: 0,
        endLat: country.coordinates.lat,
        endLng: country.coordinates.lng,
        color: '#0088ff'
      };
    })
    .filter(Boolean);

  // Combinar todos os arcos
  const allArcs = [...visitedArcs, ...wantToVisitArcs];

  const handlePointClick = (point) => {
    if (point) {
      const isCity = cities.some(city => city.id === point.id && city.name === point.name);
      onLocationClick(point, isCity ? 'city' : 'country');
      
      // Animar câmera para o ponto clicado
      if (globeEl.current) {
        globeEl.current.pointOfView(
          { lat: point.lat, lng: point.lng, altitude: 1.5 },
          1500
        );
      }
    }
  };

  return (
    <div className="globe-container">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        
        // Pontos (países e cidades)
        pointsData={allPoints}
        pointAltitude="size"
        pointColor="color"
        pointRadius={0.4}
        pointLabel={(d) => `
          <div style="
            background: rgba(0, 0, 0, 0.9);
            color: #fff;
            padding: 12px 16px;
            border-radius: 8px;
            border: 2px solid ${d.color};
            font-family: 'Inter', sans-serif;
            backdrop-filter: blur(10px);
            box-shadow: 0 0 20px ${d.color};
          ">
            <div style="font-size: 16px; font-weight: bold; margin-bottom: 4px; color: ${d.color};">
              ${d.name}
            </div>
            <div style="font-size: 12px; color: #ccc;">
              ${d.country || 'País'}
            </div>
          </div>
        `}
        onPointClick={handlePointClick}
        
        // Arcos conectando origem aos países marcados
        arcsData={allArcs}
        arcColor={(d) => d.color}
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={2000}
        arcStroke={0.8}
        arcAltitudeAutoScale={0.3}
        
        // Atmosfera e aparência
        atmosphereColor="#0088ff"
        atmosphereAltitude={0.25}
        
        // Configurações gerais
        width={window.innerWidth}
        height={window.innerHeight}
        animateIn={true}
      />
    </div>
  );
};

export default Globe3D;
