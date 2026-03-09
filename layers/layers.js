var wms_layers = [];


        var lyr_GoogleRoads_0 = new ol.layer.Tile({
            'title': 'Google Roads',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_TransectEndpoints_2 = new ol.format.GeoJSON();
var features_TransectEndpoints_2 = format_TransectEndpoints_2.readFeatures(json_TransectEndpoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransectEndpoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransectEndpoints_2.addFeatures(features_TransectEndpoints_2);
var lyr_TransectEndpoints_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransectEndpoints_2, 
                style: style_TransectEndpoints_2,
                popuplayertitle: 'Transect Endpoints',
                interactive: false,
                title: '<img src="styles/legend/TransectEndpoints_2.png" /> Transect Endpoints'
            });
var format_PlotTransects_3 = new ol.format.GeoJSON();
var features_PlotTransects_3 = format_PlotTransects_3.readFeatures(json_PlotTransects_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlotTransects_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlotTransects_3.addFeatures(features_PlotTransects_3);
var lyr_PlotTransects_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlotTransects_3, 
                style: style_PlotTransects_3,
                popuplayertitle: 'Plot Transects',
                interactive: false,
                title: '<img src="styles/legend/PlotTransects_3.png" /> Plot Transects'
            });
var format_Flora2025_4 = new ol.format.GeoJSON();
var features_Flora2025_4 = format_Flora2025_4.readFeatures(json_Flora2025_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Flora2025_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flora2025_4.addFeatures(features_Flora2025_4);
var lyr_Flora2025_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Flora2025_4, 
                style: style_Flora2025_4,
                popuplayertitle: 'Flora 2025',
                interactive: true,
                title: '<img src="styles/legend/Flora2025_4.png" /> Flora 2025'
            });
var format_CornerPosts2025_5 = new ol.format.GeoJSON();
var features_CornerPosts2025_5 = format_CornerPosts2025_5.readFeatures(json_CornerPosts2025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CornerPosts2025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CornerPosts2025_5.addFeatures(features_CornerPosts2025_5);
var lyr_CornerPosts2025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CornerPosts2025_5, 
                style: style_CornerPosts2025_5,
                popuplayertitle: 'Corner Posts 2025',
                interactive: true,
                title: '<img src="styles/legend/CornerPosts2025_5.png" /> Corner Posts 2025'
            });
var format_FHMP_Plots_ALL_cleaned_20241104_6 = new ol.format.GeoJSON();
var features_FHMP_Plots_ALL_cleaned_20241104_6 = format_FHMP_Plots_ALL_cleaned_20241104_6.readFeatures(json_FHMP_Plots_ALL_cleaned_20241104_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FHMP_Plots_ALL_cleaned_20241104_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FHMP_Plots_ALL_cleaned_20241104_6.addFeatures(features_FHMP_Plots_ALL_cleaned_20241104_6);
var lyr_FHMP_Plots_ALL_cleaned_20241104_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FHMP_Plots_ALL_cleaned_20241104_6, 
                style: style_FHMP_Plots_ALL_cleaned_20241104_6,
                popuplayertitle: 'FHMP_Plots_ALL_cleaned_20241104',
                interactive: false,
    title: 'FHMP_Plots_ALL_cleaned_20241104<br />\
    <img src="styles/legend/FHMP_Plots_ALL_cleaned_20241104_6_0.png" /> Jarrah<br />\
    <img src="styles/legend/FHMP_Plots_ALL_cleaned_20241104_6_1.png" /> Karri<br />\
    <img src="styles/legend/FHMP_Plots_ALL_cleaned_20241104_6_2.png" /> Tingle<br />\
    <img src="styles/legend/FHMP_Plots_ALL_cleaned_20241104_6_3.png" /> Wandoo<br />\
    <img src="styles/legend/FHMP_Plots_ALL_cleaned_20241104_6_4.png" /> <br />' });

lyr_GoogleRoads_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_TransectEndpoints_2.setVisible(true);lyr_PlotTransects_3.setVisible(true);lyr_Flora2025_4.setVisible(true);lyr_CornerPosts2025_5.setVisible(true);lyr_FHMP_Plots_ALL_cleaned_20241104_6.setVisible(true);
var layersList = [lyr_GoogleRoads_0,lyr_GoogleMaps_1,lyr_TransectEndpoints_2,lyr_PlotTransects_3,lyr_Flora2025_4,lyr_CornerPosts2025_5,lyr_FHMP_Plots_ALL_cleaned_20241104_6];
lyr_TransectEndpoints_2.set('fieldAliases', {'plot_id': 'plot_id', 'corner': 'corner', 'name': 'name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Latitude D': 'Latitude D', 'Longitud_1': 'Longitud_1', 'Latitude_1': 'Latitude_1', 'Longitud_2': 'Longitud_2', 'Latitude_2': 'Latitude_2', 'Longitud_3': 'Longitud_3', });
lyr_PlotTransects_3.set('fieldAliases', {'plot_id': 'plot_id', 'corner': 'corner', });
lyr_Flora2025_4.set('fieldAliases', {'Filename': 'Filename', 'Site': 'Site', 'Corner': 'Corner', 'Date': 'Date', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Larger Image': 'Larger Image', 'Img HTML': 'Img HTML', });
lyr_CornerPosts2025_5.set('fieldAliases', {'filename': 'filename', 'Site': 'Site', 'Corner': 'Corner', 'Date': 'Date', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Larger Image': 'Larger Image', 'Img HTML': 'Img HTML', 'RawGithub': 'RawGithub', });
lyr_FHMP_Plots_ALL_cleaned_20241104_6.set('fieldAliases', {'Name': 'Name', 'Code': 'Code', 'Easting': 'Easting', 'Northing': 'Northing', 'Elevation': 'Elevation', 'Descriptio': 'Descriptio', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Ellipsoida': 'Ellipsoida', 'Origin': 'Origin', 'Easting_RM': 'Easting_RM', 'Northing_R': 'Northing_R', 'Elevation_': 'Elevation_', 'Lateral_RM': 'Lateral_RM', 'Antenna_he': 'Antenna_he', 'Antenna__1': 'Antenna__1', 'Solution_s': 'Solution_s', 'Averaging_': 'Averaging_', 'Averaging1': 'Averaging1', 'Samples': 'Samples', 'PDOP': 'PDOP', 'GDOP': 'GDOP', 'Base_easti': 'Base_easti', 'Base_north': 'Base_north', 'Base_eleva': 'Base_eleva', 'Base_longi': 'Base_longi', 'Base_latit': 'Base_latit', 'Base_ellip': 'Base_ellip', 'Baseline': 'Baseline', 'Mount_poin': 'Mount_poin', 'CS_name': 'CS_name', 'GPS_Satell': 'GPS_Satell', 'GLONASS_Sa': 'GLONASS_Sa', 'Galileo_Sa': 'Galileo_Sa', 'BeiDou_Sat': 'BeiDou_Sat', 'QZSS_Satel': 'QZSS_Satel', 'Site_ID': 'Site_ID', 'PlotName': 'PlotName', 'forest_typ': 'forest_typ', 'Lat d.m': 'Lat d.m', 'Long d.m': 'Long d.m', });
lyr_TransectEndpoints_2.set('fieldImages', {'plot_id': 'TextEdit', 'corner': 'TextEdit', 'name': 'Hidden', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude D': 'TextEdit', 'Longitud_1': 'TextEdit', 'Latitude_1': 'TextEdit', 'Longitud_2': 'TextEdit', 'Latitude_2': 'TextEdit', 'Longitud_3': 'TextEdit', });
lyr_PlotTransects_3.set('fieldImages', {'plot_id': 'TextEdit', 'corner': 'TextEdit', });
lyr_Flora2025_4.set('fieldImages', {'Filename': 'TextEdit', 'Site': 'TextEdit', 'Corner': 'TextEdit', 'Date': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Larger Image': 'TextEdit', 'Img HTML': 'TextEdit', });
lyr_CornerPosts2025_5.set('fieldImages', {'filename': 'TextEdit', 'Site': 'TextEdit', 'Corner': 'TextEdit', 'Date': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Larger Image': 'TextEdit', 'Img HTML': 'ExternalResource', 'RawGithub': 'TextEdit', });
lyr_FHMP_Plots_ALL_cleaned_20241104_6.set('fieldImages', {'Name': 'TextEdit', 'Code': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'Elevation': 'TextEdit', 'Descriptio': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Ellipsoida': 'TextEdit', 'Origin': 'TextEdit', 'Easting_RM': 'TextEdit', 'Northing_R': 'TextEdit', 'Elevation_': 'TextEdit', 'Lateral_RM': 'TextEdit', 'Antenna_he': 'TextEdit', 'Antenna__1': 'TextEdit', 'Solution_s': 'TextEdit', 'Averaging_': 'TextEdit', 'Averaging1': 'TextEdit', 'Samples': 'TextEdit', 'PDOP': 'TextEdit', 'GDOP': 'TextEdit', 'Base_easti': 'TextEdit', 'Base_north': 'TextEdit', 'Base_eleva': 'TextEdit', 'Base_longi': 'TextEdit', 'Base_latit': 'TextEdit', 'Base_ellip': 'TextEdit', 'Baseline': 'TextEdit', 'Mount_poin': 'TextEdit', 'CS_name': 'TextEdit', 'GPS_Satell': 'TextEdit', 'GLONASS_Sa': 'TextEdit', 'Galileo_Sa': 'TextEdit', 'BeiDou_Sat': 'TextEdit', 'QZSS_Satel': 'TextEdit', 'Site_ID': 'TextEdit', 'PlotName': 'TextEdit', 'forest_typ': 'TextEdit', 'Lat d.m': 'TextEdit', 'Long d.m': 'TextEdit', });
lyr_TransectEndpoints_2.set('fieldLabels', {'plot_id': 'no label', 'corner': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Latitude D': 'no label', 'Longitud_1': 'no label', 'Latitude_1': 'no label', 'Longitud_2': 'no label', 'Latitude_2': 'no label', 'Longitud_3': 'no label', });
lyr_PlotTransects_3.set('fieldLabels', {'plot_id': 'no label', 'corner': 'no label', });
lyr_Flora2025_4.set('fieldLabels', {'Filename': 'hidden field', 'Site': 'inline label - visible with data', 'Corner': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Larger Image': 'inline label - visible with data', 'Img HTML': 'no label', });
lyr_CornerPosts2025_5.set('fieldLabels', {'filename': 'hidden field', 'Site': 'header label - visible with data', 'Corner': 'header label - visible with data', 'Date': 'header label - always visible', 'Longitude': 'header label - visible with data', 'Latitude': 'header label - visible with data', 'Larger Image': 'inline label - visible with data', 'Img HTML': 'no label', 'RawGithub': 'hidden field', });
lyr_FHMP_Plots_ALL_cleaned_20241104_6.set('fieldLabels', {'Name': 'no label', 'Code': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'Elevation': 'no label', 'Descriptio': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Ellipsoida': 'no label', 'Origin': 'no label', 'Easting_RM': 'no label', 'Northing_R': 'no label', 'Elevation_': 'no label', 'Lateral_RM': 'no label', 'Antenna_he': 'no label', 'Antenna__1': 'no label', 'Solution_s': 'no label', 'Averaging_': 'no label', 'Averaging1': 'no label', 'Samples': 'no label', 'PDOP': 'no label', 'GDOP': 'no label', 'Base_easti': 'no label', 'Base_north': 'no label', 'Base_eleva': 'no label', 'Base_longi': 'no label', 'Base_latit': 'no label', 'Base_ellip': 'no label', 'Baseline': 'no label', 'Mount_poin': 'no label', 'CS_name': 'no label', 'GPS_Satell': 'no label', 'GLONASS_Sa': 'no label', 'Galileo_Sa': 'no label', 'BeiDou_Sat': 'no label', 'QZSS_Satel': 'no label', 'Site_ID': 'no label', 'PlotName': 'no label', 'forest_typ': 'no label', 'Lat d.m': 'no label', 'Long d.m': 'no label', });
lyr_FHMP_Plots_ALL_cleaned_20241104_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});