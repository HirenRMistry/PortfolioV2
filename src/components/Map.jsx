import React, { useMemo, useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerPopup from './MarkerPopup';

const DARK_TILE = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png';
const DARK_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>';

const CONTINENT_COLOURS = {
  'Europe':        '#3b82f6',
  'Asia':          '#f59e0b',
  'North America': '#10b981',
  'South America': '#ec4899',
  'Africa':        '#f97316',
  'Australia':     '#8b5cf6',
};

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function CircleStat({ value, total, label, color, animate }) {
  const [count, setCount] = useState(0);
  const progress = animate ? value / total : 0;
  const dash = progress * CIRCUMFERENCE;

  useEffect(() => {
    if (!animate) return;
    let start = null;
    const duration = 1400;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.round(p * value));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [animate, value]);

  return (
    <div className="circle-stat">
      <svg width="130" height="130" viewBox="0 0 130 130">
        {/* Track */}
        <circle cx="65" cy="65" r={RADIUS} fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="7" />
        {/* Progress */}
        <circle
          cx="65" cy="65" r={RADIUS}
          fill="none"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${CIRCUMFERENCE}`}
          transform="rotate(-90 65 65)"
          style={{ transition: 'stroke-dasharray 1.4s cubic-bezier(0.4,0,0.2,1)' }}
        />
        {/* Count */}
        <text x="65" y="58" textAnchor="middle" className="circle-stat-number" fill={color}>{count}</text>
        <text x="65" y="76" textAnchor="middle" className="circle-stat-total" fill="#94a3b8">/ {total}</text>
      </svg>
      <p className="circle-stat-label">{label}</p>
    </div>
  );
}

function RecenterButton({ center, zoom }) {
  const map = useMap();
  return (
    <button className="map-recenter-btn" onClick={() => map.setView(center, zoom)} title="Recenter map">
      <i className="fa fa-crosshairs" />
    </button>
  );
}

export default function Map({ data }) {
  const { places = [], center = [30, 10] } = data || {};
  const DEFAULT_ZOOM = 2;
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  const { countryCount, continentCount } = useMemo(() => {
    const countries = new Set();
    const conts = new Set();
    places.forEach(({ country, continent }) => {
      country?.forEach(c => countries.add(c));
      conts.add(continent);
    });
    return { countryCount: countries.size, continentCount: conts.size };
  }, [places]);

  const activeContinents = useMemo(() =>
    Object.entries(CONTINENT_COLOURS).filter(([c]) => places.some(p => p.continent === c)),
  [places]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="map" className="map-section" ref={sectionRef}>
      <div className="map-header">
        <CircleStat value={countryCount} total={195} label="Countries" color="#f97316" animate={animate} />
        <h2 className="section-title">Travel</h2>
        <CircleStat value={continentCount} total={7} label="Continents" color="#3b82f6" animate={animate} />
      </div>

      <div className="map-wrapper">
        <MapContainer center={center} zoom={DEFAULT_ZOOM} scrollWheelZoom={false} zoomControl={true}
          style={{ height: '65vh', width: '100%', background: '#e5e7eb' }}>
          <TileLayer attribution={DARK_ATTRIBUTION} url={DARK_TILE} />
          <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png" />
          {places.map(place => <MarkerPopup key={place.name[0]} place={place} />)}
          <RecenterButton center={center} zoom={DEFAULT_ZOOM} />
        </MapContainer>

        <div className="map-legend">
          {activeContinents.map(([continent, color]) => (
            <div key={continent} className="legend-item">
              <span className="legend-dot" style={{ background: color }} />
              {continent}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
