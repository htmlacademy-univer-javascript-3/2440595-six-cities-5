import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../hooks/use-map.tsx';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../const.ts';
import 'leaflet/dist/leaflet.css';
import { MapProps } from '../props/map-props.tsx';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export function Map({offers, selectedOffer}: MapProps){
  const mapRef = useRef(null);
  const map = useMap(mapRef, selectedOffer);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.city.location.lat,
          lng: offer.city.location.lon
        });

        marker
          .setIcon(
            offer.title === selectedOffer.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer]);

  return <div style={{ height: '500px' }} ref={mapRef}></div>;
}
