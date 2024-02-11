import React, { useEffect, useRef, useState } from 'react';
import { Loader } from "@googlemaps/js-api-loader";

const Map = () => {
    const mapContainerRef = useRef(null);
    const [map, setMap] = useState(null);
    const [svgIcon, setSvgIcon] = useState(null);
    const [currentPosition, setCurrentPosition] = useState([33.77608671024301, -84.39760588902269]); // [latitude, longitude
    const [markers, setMarkers] = useState([
        { lat: 33.77608671024301, lng: -84.39760588902269 }, // New York
        { lat: 33.77608671024301, lng: -84.387 }, // New York
        // Add more markers as needed
    ]);
    const [animationPerformed, setAnimationPerformed] = useState(false);

    useEffect(() => {
        const loader = new Loader({
            apiKey: "AIzaSyBmf9UybNnVrTeOR4queEJrTMbGgP3wbYI",
            version: "weekly",
        });

        loader.load().then(async () => {
            const { Map } = await google.maps.importLibrary("maps");
          
            const map = new Map(mapContainerRef.current, {
              center: { lat: currentPosition[0], lng: currentPosition[1] },
              zoom: 12,
              mapId: "7012c7fafd592a5",
              streetViewControl: false,
              mapTypeControl: false,
            });
            setMap(map);

            const watchID = navigator.geolocation.getCurrentPosition((position) => {
                setCurrentPosition([position.coords.latitude, position.coords.longitude]);
                map.panTo({ lat: position.coords.latitude, lng: position.coords.longitude });

            });
        });

        // Clean up on unmount
        return () => {
            if (map) {
                map.dispose();
            }
        };
    }, []);

    useEffect(() => {
        if (map) {
            
            const svgIcon = {
                url: 'data:image/svg+xml;utf-8,<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M5 9a7 7 0 1 1 8 7v5a1 1 0 1 1-2 0v-5a7 7 0 0 1-6-7Zm6-1c.2-.3.6-.5 1-.5a1 1 0 1 0 0-2A3.5 3.5 0 0 0 8.5 9a1 1 0 0 0 2 0c0-.4.2-.8.4-1Z" clip-rule="evenodd"/></svg>',
                scaledSize: new google.maps.Size(30, 30), // size
            };
            // Add a marker for each location in the markers array
            markers.forEach((location) => {
                const marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    icon: svgIcon,
                    animation: google.maps.Animation.BOUNCE,
                });

                const infoWindow = new google.maps.InfoWindow({
                    content: `<div id="alert-additional-content-5" class="p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800" role="alert">
                                <div class="flex items-center">
                                    <svg class="flex-shrink-0 w-4 h-4 me-2 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                    </svg>
                                    <span class="sr-only">Info</span>
                                    <h3 class="text-lg font-medium text-gray-800 dark:text-gray-300">This is a dark alert</h3>
                                </div>
                                <div class="mt-2 mb-4 text-sm text-gray-800 dark:text-gray-300">
                                    More info about this info dark goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                                </div>
                                <div class="flex">
                                    <button type="button" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-800">
                                        <svg class="me-2 h-3 w-3 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                                        </svg>
                                        View more
                                    </button>
                                    <button type="button" class="text-gray-800 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800 dark:text-gray-300 dark:hover:text-white" data-dismiss-target="#alert-additional-content-5" aria-label="Close">
                                        Dismiss
                                    </button>
                                </div>
                            </div>`,
                });

                map.addListener("click", () => {
                    if (infowindow) {
                        infowindow.close();
                    }
                });

                marker.addListener("click", () => {
                    infoWindow.open(map, marker);
                    map.panTo(marker.getPosition());
                    map.setZoom(18);
                });

                // Start bouncing
                marker.setAnimation(google.maps.Animation.BOUNCE);

                // Stop bouncing after 1.4 seconds
                setTimeout(() => {
                    marker.setAnimation(null);
                }, 1400);

                // Start bouncing again after 3 seconds
                setInterval(() => {
                    marker.setAnimation(google.maps.Animation.BOUNCE);

                    // Stop bouncing after 1.4 seconds
                    setTimeout(() => {
                        marker.setAnimation(null);
                    }, 1400);
                }, 3000);
            });
        }
    }, [map, markers]);

    useEffect(() => {
        const mapContainer = mapContainerRef.current;
        let width = 0;
    
        function animate() {
            width += 2; // Increase the width by 1%
            mapContainer.style.height = `${width}%`;
    
            if (width < 100) {
                requestAnimationFrame(animate); // Continue the animation if the width is less than 100%
            }
        }

        if (!animationPerformed) {
            animate();
            setAnimationPerformed(true);
        }
    }, []);


    // Map.jsx
return <div ref={mapContainerRef} className="mapContainer" style={{ height: '0%', width: '100%'}}></div>;
};

export default Map;