'use client';

import L from 'leaflet';
import { franceRegions } from '@/utils/getFranceRegions';
import { getFranceDepartments } from '@/utils/getFranceDepartments';
import type geojson from 'geojson';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

export default function Map() {
    const mapId = 'map';

    const [selectedZone, setSelectedZone] = useState({
        title: 'France',
        content: '',
        layer: L.geoJson()
    });

    const [mapInstance, setMapInstance] = useState<L.Map | null>(null);

    const defaultStyle = {
        weight: 2,
        color: '#90c5ef',
        opacity: 0.8,
        fillOpacity: 0.4
    };

    const activeStyle = {
        weight: 3,
        color: '#90c5ef',
        opacity: 1,
        fillOpacity: 0.6
    };

    const removeCurrentLayer = () => {
        mapInstance?.removeLayer(selectedZone.layer as L.GeoJSON);
    };

    const replaceCurrentLayer = (name: string, code: string, newLayer: L.GeoJSON) => {
        removeCurrentLayer();
        setSelectedZone({
            ...selectedZone,
            title: name,
            content: code,
            layer: newLayer
        });
        mapInstance?.addLayer(newLayer);
    };

    const resetView = () => {
        removeCurrentLayer();
        setSelectedZone({
            ...selectedZone,
            title: 'France',
            content: ''
        });
        mapInstance?.setView(L.latLng(46.74, 2.92), 6.4);
    };

    useEffect(() => {
        if (!mapInstance) {
            setMapInstance(L.map(mapId, {
                center: L.latLng(46.74, 2.92),
                zoom: 6.4
            }));
            return;
        }

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            minZoom: 6
        }).addTo(mapInstance as L.Map);

        const mapWithRegions: L.GeoJSON = L.geoJson(franceRegions as geojson.GeoJsonObject, {
            style: defaultStyle,
            onEachFeature: (feature, layer) => {
                layer.on({
                    mouseover: (e) => {
                        const ll = e.target;
                        ll.setStyle(activeStyle);
                    },
                    mouseout: (e) => {
                        mapWithRegions?.resetStyle(e.target);
                    },
                    click: (e) => {
                        mapInstance?.flyToBounds(e.target.getBounds(), { duration: 0.4 });
                        const { nom: name, code } = feature.properties;

                        const departmentLayer = L.geoJson(getFranceDepartments(code), {
                            style: {
                                weight: 2,
                                color: 'red',
                                opacity: 0.8,
                                fillOpacity: 0.4
                            }
                        });

                        replaceCurrentLayer(name, code, departmentLayer);
                    }
                });
            }
        });

        mapWithRegions.addTo(mapInstance as L.Map);
    }, [mapInstance]);
 
    return (
        <>
            <div className="absolute top-10 right-10 bg-slate-100 shadow-xl px-4 py-2 rounded-xl z-map-tooltip flex flex-col gap-2">
                <div className="flex gap-3 items-center justify-between">
                    <span onClick={resetView}>Retour</span>
                    <h1 className="text-lg font-bold">{selectedZone.title}</h1>
                </div>
                <p className="text-md">{selectedZone.content}</p>
            </div>
            <div id={mapId} className="w-full h-full"></div>
        </>
    );
}
