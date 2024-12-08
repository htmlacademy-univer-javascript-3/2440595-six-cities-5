import { useRef, useEffect } from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../hooks/use-map.tsx';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../const.ts';
import 'leaflet/dist/leaflet.css';
import { MapProps } from '../props/map-props.tsx';
import {Offer} from '../internal/types/offer-type.tsx';
import {MapClasses} from '../internal/enums/map-classes-enum.tsx';

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

export function Map({ city, points, activeOfferId, isMainPage }: MapProps){
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.eachLayer((layer) => {
        if (layer.options.pane === 'markerPane') {
          map.removeLayer(layer);
        }
      });
      points.forEach((offer: Offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });
        marker
          .setIcon(
            offer.id === activeOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, activeOfferId]);

  useEffect(() => {
    if (map) {
      map.flyTo([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [map, city]);

  return (
    <section
      className={isMainPage ? MapClasses.SectionPropertyMapClass : MapClasses.SectionMainMapClass}
      ref={mapRef}
    >
    </section>
  );
}
