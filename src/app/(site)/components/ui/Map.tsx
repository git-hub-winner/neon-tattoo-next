"use client";

import "leaflet/dist/leaflet.css";

import type L from "leaflet";
import { useEffect, useRef } from "react";

export default function AtriumMap() {
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

      const atriumCoords: [number, number] = [47.0146631, 28.8558081];

      const map = L.map(mapRef.current).setView(atriumCoords, 17);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      L.marker(atriumCoords)
        .addTo(map)
        .bindPopup(
          `
          <div style="text-align: center;">
            <strong>Neon Tattoo в Атриум</strong><br/>
            <small>Chișinău, Strada Albişoara 4</small><br/>
            <small>MD-2001, Молдова</small>
          </div>
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
      <div ref={mapRef} className="h-full! min-h-[570px] w-full overflow-hidden rounded-xl" />
    </div>
  );
}
