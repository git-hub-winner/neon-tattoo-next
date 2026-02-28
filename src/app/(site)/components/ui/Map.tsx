"use client";

import "leaflet/dist/leaflet.css";

import type L from "leaflet";
import { useEffect, useRef } from "react";

export default function NeonMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const initMap = async () => {
      const L = (await import("leaflet")).default;

      const iconRetinaUrl = (await import("leaflet/dist/images/marker-icon-2x.png")).default;
      const iconUrl = (await import("leaflet/dist/images/marker-icon.png")).default;
      const shadowUrl = (await import("leaflet/dist/images/marker-shadow.png")).default;

      const DefaultIcon = L.Icon.Default.prototype as L.Icon.Default & {
        _getIconUrl?: string;
      };
      delete DefaultIcon._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: iconRetinaUrl.src || iconRetinaUrl,
        iconUrl: iconUrl.src || iconUrl,
        shadowUrl: shadowUrl.src || shadowUrl,
      });

      if (!mapRef.current || mapInstanceRef.current) return;

      const studioCoords: [number, number] = [47.0200287, 28.8473541];

      const map = L.map(mapRef.current).setView(studioCoords, 17);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      L.marker(studioCoords)
        .addTo(map)
        .bindPopup(
          `
    <a 
      href="https://maps.app.goo.gl/teMuLJCAnjMB1xKWA" 
      target="_blank" 
      rel="noopener noreferrer"
      style="text-align: center; display: block; text-decoration: none; color: inherit;"
    >
      <strong>Neon Tattoo</strong><br/>
      <small>str. Tighina 65</small><br/>
      <small>Chișinău, MD-2001</small><br/>
      <small style="color:#0077ff;">Open in Google Maps</small>
    </a>
    `
        )
        .openPopup();

      mapInstanceRef.current = map;
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div ref={mapRef} className="z-1 h-full! min-h-142.5 w-full overflow-hidden rounded-xl" />
    </div>
  );
}
