import React, { useEffect } from 'react';

const Maplocation = () => {
  useEffect(() => {
    const loadGoogleMaps = (callback) => {
      if (!window.google) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCXgcJVDkA8xDVC5mIPflNWi36cZ_f2kpY `;

        script.async = true;
        script.defer = true;
        script.addEventListener('load', callback);
        document.head.appendChild(script);
      } else {
        callback();
      }
    };

    loadGoogleMaps(() => {
      const google = window.google;
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 10,
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            map.setCenter(userLocation);
            new google.maps.Marker({
              position: userLocation,
              map: map,
              title: 'Your Location',
            });
          },
          () => {
            console.error('The Geolocation service failed.');
          }
        );
      } else {
        console.error('Your browser does not support geolocation.');
      }
    });
  }, []);

  return (
    <div>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
};

export default Maplocation;
