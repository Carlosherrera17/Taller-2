var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_ICA_C_1 = new ol.format.GeoJSON();
var features_ICA_C_1 = format_ICA_C_1.readFeatures(json_ICA_C_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ICA_C_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ICA_C_1.addFeatures(features_ICA_C_1);
var lyr_ICA_C_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ICA_C_1, 
                style: style_ICA_C_1,
                popuplayertitle: 'ICA_C',
                interactive: true,
                title: '<img src="styles/legend/ICA_C_1.png" /> ICA_C'
            });
var format_Cortado_2 = new ol.format.GeoJSON();
var features_Cortado_2 = format_Cortado_2.readFeatures(json_Cortado_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cortado_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cortado_2.addFeatures(features_Cortado_2);
var lyr_Cortado_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cortado_2, 
                style: style_Cortado_2,
                popuplayertitle: 'Cortado',
                interactive: true,
    title: 'Cortado<br />\
    <img src="styles/legend/Cortado_2_0.png" /> C_poblados<br />\
    <img src="styles/legend/Cortado_2_1.png" /> C-d<br />\
    <img src="styles/legend/Cortado_2_2.png" /> Fv3-a<br />\
    <img src="styles/legend/Cortado_2_3.png" /> Lagunas<br />\
    <img src="styles/legend/Cortado_2_4.png" /> Ll-a<br />\
    <img src="styles/legend/Cortado_2_5.png" /> Lld-c<br />\
    <img src="styles/legend/Cortado_2_6.png" /> Llo-b<br />\
    <img src="styles/legend/Cortado_2_7.png" /> V-a<br />\
    <img src="styles/legend/Cortado_2_8.png" /> Vc-d<br />\
    <img src="styles/legend/Cortado_2_9.png" /> Vc-e<br />\
    <img src="styles/legend/Cortado_2_10.png" /> Vs1-d<br />\
    <img src="styles/legend/Cortado_2_11.png" /> Vs1-e<br />\
    <img src="styles/legend/Cortado_2_12.png" /> Vs2-d<br />\
    <img src="styles/legend/Cortado_2_13.png" /> Vs2-e<br />\
    <img src="styles/legend/Cortado_2_14.png" /> Vs2d-e<br />\
    <img src="styles/legend/Cortado_2_15.png" /> Vs3-e<br />' });

lyr_EsriTopographic_0.setVisible(true);lyr_ICA_C_1.setVisible(true);lyr_Cortado_2.setVisible(true);
var layersList = [lyr_EsriTopographic_0,lyr_ICA_C_1,lyr_Cortado_2];
lyr_ICA_C_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'Lista': 'Lista', });
lyr_Cortado_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SIMBOLO_': 'SIMBOLO_', 'REGION': 'REGION', 'FORMAS_DEL': 'FORMAS_DEL', 'Area': 'Area', 'Perimetro': 'Perimetro', });
lyr_ICA_C_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'Lista': 'TextEdit', });
lyr_Cortado_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'SIMBOLO_': 'TextEdit', 'REGION': 'Hidden', 'FORMAS_DEL': 'Hidden', 'Area': 'TextEdit', 'Perimetro': 'TextEdit', });
lyr_ICA_C_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'Lista': 'no label', });
lyr_Cortado_2.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'SIMBOLO_': 'inline label - always visible', 'Area': 'inline label - always visible', 'Perimetro': 'inline label - always visible', });
lyr_Cortado_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});