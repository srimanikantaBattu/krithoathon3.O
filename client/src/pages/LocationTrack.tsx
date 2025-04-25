import { useState, useEffect, useRef } from 'react';
interface Location {
  lat: number;
  lng: number;
  timestamp: number;
  accuracy: number;
}

const LocationTracker = () => {
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [locationHistory, setLocationHistory] = useState<Location[]>([]);
  const [watchId, setWatchId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isTracking, setIsTracking] = useState(false);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);
  const [path, setPath] = useState<google.maps.Polyline | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  // Initialize Google Maps
  useEffect(() => {
    // Load Google Maps API script
    const loadGoogleMapsAPI = () => {
      const script = document.createElement('script');
      script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAB_lzF8wWxOa4addSjkkKnjwuJKDRZ3Fo&libraries=geometry";
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    // Initialize the map once the API is loaded
    const initializeMap = () => {
      if (mapRef.current && !map) {
        // Default center at a neutral location
        const defaultCenter = { lat: 0, lng: 0 };
        const center = currentLocation ? 
          { lat: currentLocation.lat, lng: currentLocation.lng } : 
          defaultCenter;
        
        const newMap = new google.maps.Map(mapRef.current, {
          zoom: 15,
          center,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: false,
        });
        
        setMap(newMap);
        
        // Create marker for current position
        const newMarker = new google.maps.Marker({
          position: center,
          map: newMap,
          title: 'Current Location',
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: '#4285F4',
            fillOpacity: 1,
            strokeColor: '#FFFFFF',
            strokeWeight: 2,
            scale: 8,
          },
        });
        
        setMarker(newMarker);
        
        // Create polyline for the path
        const newPath = new google.maps.Polyline({
          path: locationHistory.map(loc => ({ lat: loc.lat, lng: loc.lng })),
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2,
          map: newMap,
        });
        
        setPath(newPath);
      }
    };

    loadGoogleMapsAPI();

    return () => {
      // Clean up by removing the script
      const script = document.querySelector('script[src*="maps.googleapis.com/maps/api"]');
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Update map when current location changes
  useEffect(() => {
    if (map && marker && currentLocation) {
      const position = { lat: currentLocation.lat, lng: currentLocation.lng };
      
      // Update marker position
      marker.setPosition(position);
      
      // Center map on current location
      map.setCenter(position);
      
      // Update path
      if (path) {
        const pathCoords = path.getPath();
        pathCoords.push(new google.maps.LatLng(currentLocation.lat, currentLocation.lng));
      }
    }
  }, [currentLocation, map, marker, path]);

  // Start/stop location tracking
  const toggleTracking = () => {
    if (isTracking) {
      // Stop tracking
      if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
        setWatchId(null);
      }
      setIsTracking(false);
    } else {
      // Start tracking
      if ("geolocation" in navigator) {
        const id = navigator.geolocation.watchPosition(
          (position) => {
            const newLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              timestamp: position.timestamp,
              accuracy: position.coords.accuracy
            };
            
            setCurrentLocation(newLocation);
            setLocationHistory(prev => [...prev, newLocation]);
            setError(null);
          },
          (err) => {
            setError(`Error getting location: ${err.message}`);
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          }
        );
        
        setWatchId(id);
        setIsTracking(true);
      } else {
        setError("Geolocation is not supported by your browser");
      }
    }
  };

  // Get current location once
  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            timestamp: position.timestamp,
            accuracy: position.coords.accuracy
          };
          
          setCurrentLocation(newLocation);
          setLocationHistory(prev => [...prev, newLocation]);
          setError(null);
        },
        (err) => {
          setError(`Error getting location: ${err.message}`);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      setError("Geolocation is not supported by your browser");
    }
  };

  return (
    <div className="location-tracker">
      <div className="map-container" ref={mapRef}></div>
      
      <div className="controls">
        <button onClick={toggleTracking} className="tracking-button">
          {isTracking ? "Stop Tracking" : "Start Live Tracking"}
        </button>
        
        <button onClick={getCurrentLocation} className="location-button">
          Get Current Location
        </button>
      </div>
      
      {error && <div className="error-message">{error}</div>}
      
      {currentLocation && (
        <div className="location-info">
          <h3>Current Location</h3>
          <p>Latitude: {currentLocation.lat.toFixed(6)}</p>
          <p>Longitude: {currentLocation.lng.toFixed(6)}</p>
          <p>Accuracy: ±{currentLocation.accuracy.toFixed(1)} meters</p>
          <p>Last Updated: {new Date(currentLocation.timestamp).toLocaleTimeString()}</p>
        </div>
      )}
    </div>
  );
};
export default LocationTracker;