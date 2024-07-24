ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4674").setExtent([-45.790536, -8.527124, -38.532834, -4.305157]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PI_Municipios_2022_cp_2 = new ol.format.GeoJSON();
var features_PI_Municipios_2022_cp_2 = format_PI_Municipios_2022_cp_2.readFeatures(json_PI_Municipios_2022_cp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_PI_Municipios_2022_cp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PI_Municipios_2022_cp_2.addFeatures(features_PI_Municipios_2022_cp_2);
var lyr_PI_Municipios_2022_cp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PI_Municipios_2022_cp_2, 
                style: style_PI_Municipios_2022_cp_2,
                popuplayertitle: "PI_Municipios_2022_cp",
                interactive: true,
                title: '<img src="styles/legend/PI_Municipios_2022_cp_2.png" /> PI_Municipios_2022_cp'
            });
var format_PI_Municipios_2022_3 = new ol.format.GeoJSON();
var features_PI_Municipios_2022_3 = format_PI_Municipios_2022_3.readFeatures(json_PI_Municipios_2022_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_PI_Municipios_2022_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PI_Municipios_2022_3.addFeatures(features_PI_Municipios_2022_3);
var lyr_PI_Municipios_2022_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PI_Municipios_2022_3, 
                style: style_PI_Municipios_2022_3,
                popuplayertitle: "PI_Municipios_2022",
                interactive: true,
                title: '<img src="styles/legend/PI_Municipios_2022_3.png" /> PI_Municipios_2022'
            });
var format_pi_linhas_transmissao_4 = new ol.format.GeoJSON();
var features_pi_linhas_transmissao_4 = format_pi_linhas_transmissao_4.readFeatures(json_pi_linhas_transmissao_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_pi_linhas_transmissao_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pi_linhas_transmissao_4.addFeatures(features_pi_linhas_transmissao_4);
var lyr_pi_linhas_transmissao_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pi_linhas_transmissao_4, 
                style: style_pi_linhas_transmissao_4,
                popuplayertitle: "pi_linhas_transmissao",
                interactive: true,
                title: '<img src="styles/legend/pi_linhas_transmissao_4.png" /> pi_linhas_transmissao'
            });
var format_linhastransmissao_pi_5 = new ol.format.GeoJSON();
var features_linhastransmissao_pi_5 = format_linhastransmissao_pi_5.readFeatures(json_linhastransmissao_pi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_linhastransmissao_pi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linhastransmissao_pi_5.addFeatures(features_linhastransmissao_pi_5);
var lyr_linhastransmissao_pi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_linhastransmissao_pi_5, 
                style: style_linhastransmissao_pi_5,
                popuplayertitle: "linhastransmissao_pi",
                interactive: true,
    title: 'linhastransmissao_pi<br />\
    <img src="styles/legend/linhastransmissao_pi_5_0.png" /> 230<br />\
    <img src="styles/legend/linhastransmissao_pi_5_1.png" /> 500<br />\
    <img src="styles/legend/linhastransmissao_pi_5_2.png" /> <br />'
        });
var format_bd_siga_pi_6 = new ol.format.GeoJSON();
var features_bd_siga_pi_6 = format_bd_siga_pi_6.readFeatures(json_bd_siga_pi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_bd_siga_pi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bd_siga_pi_6.addFeatures(features_bd_siga_pi_6);
var lyr_bd_siga_pi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bd_siga_pi_6, 
                style: style_bd_siga_pi_6,
                popuplayertitle: "bd_siga_pi",
                interactive: true,
    title: 'bd_siga_pi<br />\
    <img src="styles/legend/bd_siga_pi_6_0.png" /> Construção - Eólica<br />\
    <img src="styles/legend/bd_siga_pi_6_1.png" /> Construção - Solar<br />\
    <img src="styles/legend/bd_siga_pi_6_2.png" /> Construção não iniciada - Eólica<br />\
    <img src="styles/legend/bd_siga_pi_6_3.png" /> Construção não iniciada - Solar<br />\
    <img src="styles/legend/bd_siga_pi_6_4.png" /> Operação - Biomassa<br />\
    <img src="styles/legend/bd_siga_pi_6_5.png" /> Operação - Eólica<br />\
    <img src="styles/legend/bd_siga_pi_6_6.png" /> Operação - Fóssil<br />\
    <img src="styles/legend/bd_siga_pi_6_7.png" /> Operação - Hídrica<br />\
    <img src="styles/legend/bd_siga_pi_6_8.png" /> Operação - Solar<br />\
    <img src="styles/legend/bd_siga_pi_6_9.png" /> <br />'
        });
var format_filtro_substacao_pi_7 = new ol.format.GeoJSON();
var features_filtro_substacao_pi_7 = format_filtro_substacao_pi_7.readFeatures(json_filtro_substacao_pi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_filtro_substacao_pi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_filtro_substacao_pi_7.addFeatures(features_filtro_substacao_pi_7);
var lyr_filtro_substacao_pi_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_filtro_substacao_pi_7, 
                style: style_filtro_substacao_pi_7,
                popuplayertitle: "filtro_substacao_pi",
                interactive: true,
                title: '<img src="styles/legend/filtro_substacao_pi_7.png" /> filtro_substacao_pi'
            });
var format_filtro_usinas_pi_8 = new ol.format.GeoJSON();
var features_filtro_usinas_pi_8 = format_filtro_usinas_pi_8.readFeatures(json_filtro_usinas_pi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_filtro_usinas_pi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_filtro_usinas_pi_8.addFeatures(features_filtro_usinas_pi_8);
var lyr_filtro_usinas_pi_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_filtro_usinas_pi_8, 
                style: style_filtro_usinas_pi_8,
                popuplayertitle: "filtro_usinas_pi",
                interactive: true,
                title: '<img src="styles/legend/filtro_usinas_pi_8.png" /> filtro_usinas_pi'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_PI_Municipios_2022_cp_2.setVisible(true);lyr_PI_Municipios_2022_3.setVisible(true);lyr_pi_linhas_transmissao_4.setVisible(true);lyr_linhastransmissao_pi_5.setVisible(true);lyr_bd_siga_pi_6.setVisible(true);lyr_filtro_substacao_pi_7.setVisible(true);lyr_filtro_usinas_pi_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_PI_Municipios_2022_cp_2,lyr_PI_Municipios_2022_3,lyr_pi_linhas_transmissao_4,lyr_linhastransmissao_pi_5,lyr_bd_siga_pi_6,lyr_filtro_substacao_pi_7,lyr_filtro_usinas_pi_8];
lyr_PI_Municipios_2022_cp_2.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_PI_Municipios_2022_3.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_pi_linhas_transmissao_4.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_linhastransmissao_pi_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'INS_ID': 'INS_ID', 'TPEQP_ID': 'TPEQP_ID', 'EQP_ID': 'EQP_ID', 'NOMELONGO': 'NOMELONGO', 'NOMEREDE': 'NOMEREDE', 'AGE_NOME': 'AGE_NOME', 'DTPREVISTA': 'DTPREVISTA', 'STR_DTPREVISTA': 'STR_DTPREVISTA', 'DTENTRADA': 'DTENTRADA', 'STR_DTENTRADA': 'STR_DTENTRADA', 'DTPAR': 'DTPAR', 'STR_DTPAR': 'STR_DTPAR', 'NUMDOC': 'NUMDOC', 'VAL_CORRPROJETOLD': 'VAL_CORRPROJETOLD', 'VAL_CAPACOPERSEMFATORCD': 'VAL_CAPACOPERSEMFATORCD', 'VAL_CAPACOPERLD': 'VAL_CAPACOPERLD', 'VAL_CAPACOPERCOMFATORCD': 'VAL_CAPACOPERCOMFATORCD', 'VAL_FATORLIMITANTELD': 'VAL_FATORLIMITANTELD', 'VAL_FATORLIMITANTECD': 'VAL_FATORLIMITANTECD', 'R': 'R', 'X': 'X', 'S': 'S', 'EXT': 'EXT', 'TPCPR_ID': 'TPCPR_ID', 'VN': 'VN', 'SHAPE.STLength()': 'SHAPE.STLength()', });
lyr_bd_siga_pi_6.set('fieldAliases', {'Empreendimento': 'Empreendimento', 'CEG': 'CEG', 'UF': 'UF', 'Fonte': 'Fonte', 'Fase': 'Fase', 'Origem': 'Origem', 'Tipo': 'Tipo', 'Tipo de Atuação': 'Tipo de Atuação', 'Combustível Final': 'Combustível Final', 'Entrada em Operação': 'Entrada em Operação', 'Potência Outorgada (kW)': 'Potência Outorgada (kW)', 'Potência Fiscalizada (kW)': 'Potência Fiscalizada (kW)', 'Garantia Fisica (kW)': 'Garantia Fisica (kW)', 'Geração Qualificada': 'Geração Qualificada', 'Latitude Decimal': 'Latitude Decimal', 'Longitude Decimal': 'Longitude Decimal', 'Início Vigência': 'Início Vigência', 'Fim Vigência': 'Fim Vigência', 'Proprietário / Regime de Exploração': 'Proprietário / Regime de Exploração', 'Sub-Bacia': 'Sub-Bacia', 'Município (s)': 'Município (s)', 'fase_origem': 'fase_origem', });
lyr_filtro_substacao_pi_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'INS_ID': 'INS_ID', 'NOMELONGO': 'NOMELONGO', 'AGE_ID_PRIN': 'AGE_ID_PRIN', 'AGE_PRIN_NOM': 'AGE_PRIN_NOM', 'DTPREVISTA': 'DTPREVISTA', 'STR_DTPREVISTA': 'STR_DTPREVISTA', 'DTENTRADA': 'DTENTRADA', 'STR_DTENTRADA': 'STR_DTENTRADA', });
lyr_filtro_usinas_pi_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'INS_ID': 'INS_ID', 'NOM_MODALIDADEOPERUSICONJ': 'NOM_MODALIDADEOPERUSICONJ', 'NOMELONGO': 'NOMELONGO', 'DTPREVISTA': 'DTPREVISTA', 'STR_DTPREVISTA': 'STR_DTPREVISTA', 'DTENTRADA': 'DTENTRADA', 'STR_DTENTRADA': 'STR_DTENTRADA', 'TPUSINA_ID': 'TPUSINA_ID', 'NOME_TPUSINA': 'NOME_TPUSINA', });
lyr_PI_Municipios_2022_cp_2.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_PI_Municipios_2022_3.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_pi_linhas_transmissao_4.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_linhastransmissao_pi_5.set('fieldImages', {'OBJECTID': 'Range', 'INS_ID': 'TextEdit', 'TPEQP_ID': 'TextEdit', 'EQP_ID': 'TextEdit', 'NOMELONGO': 'TextEdit', 'NOMEREDE': 'TextEdit', 'AGE_NOME': 'TextEdit', 'DTPREVISTA': 'TextEdit', 'STR_DTPREVISTA': 'TextEdit', 'DTENTRADA': 'TextEdit', 'STR_DTENTRADA': 'TextEdit', 'DTPAR': 'TextEdit', 'STR_DTPAR': 'TextEdit', 'NUMDOC': 'TextEdit', 'VAL_CORRPROJETOLD': 'TextEdit', 'VAL_CAPACOPERSEMFATORCD': 'TextEdit', 'VAL_CAPACOPERLD': 'TextEdit', 'VAL_CAPACOPERCOMFATORCD': 'TextEdit', 'VAL_FATORLIMITANTELD': 'TextEdit', 'VAL_FATORLIMITANTECD': 'TextEdit', 'R': 'TextEdit', 'X': 'TextEdit', 'S': 'TextEdit', 'EXT': 'TextEdit', 'TPCPR_ID': 'TextEdit', 'VN': 'TextEdit', 'SHAPE.STLength()': 'TextEdit', });
lyr_bd_siga_pi_6.set('fieldImages', {'Empreendimento': 'TextEdit', 'CEG': 'TextEdit', 'UF': 'TextEdit', 'Fonte': 'TextEdit', 'Fase': 'TextEdit', 'Origem': 'TextEdit', 'Tipo': 'TextEdit', 'Tipo de Atuação': 'TextEdit', 'Combustível Final': 'TextEdit', 'Entrada em Operação': 'TextEdit', 'Potência Outorgada (kW)': 'TextEdit', 'Potência Fiscalizada (kW)': 'TextEdit', 'Garantia Fisica (kW)': 'TextEdit', 'Geração Qualificada': 'TextEdit', 'Latitude Decimal': 'TextEdit', 'Longitude Decimal': 'TextEdit', 'Início Vigência': 'DateTime', 'Fim Vigência': 'DateTime', 'Proprietário / Regime de Exploração': 'TextEdit', 'Sub-Bacia': 'TextEdit', 'Município (s)': 'TextEdit', 'fase_origem': 'TextEdit', });
lyr_filtro_substacao_pi_7.set('fieldImages', {'OBJECTID': 'Range', 'INS_ID': 'TextEdit', 'NOMELONGO': 'TextEdit', 'AGE_ID_PRIN': 'TextEdit', 'AGE_PRIN_NOM': 'TextEdit', 'DTPREVISTA': 'TextEdit', 'STR_DTPREVISTA': 'TextEdit', 'DTENTRADA': 'TextEdit', 'STR_DTENTRADA': 'TextEdit', });
lyr_filtro_usinas_pi_8.set('fieldImages', {'OBJECTID': 'Range', 'INS_ID': 'TextEdit', 'NOM_MODALIDADEOPERUSICONJ': 'TextEdit', 'NOMELONGO': 'TextEdit', 'DTPREVISTA': 'TextEdit', 'STR_DTPREVISTA': 'TextEdit', 'DTENTRADA': 'TextEdit', 'STR_DTENTRADA': 'TextEdit', 'TPUSINA_ID': 'TextEdit', 'NOME_TPUSINA': 'TextEdit', });
lyr_PI_Municipios_2022_cp_2.set('fieldLabels', {'CD_MUN': 'hidden field', 'NM_MUN': 'no label', 'SIGLA_UF': 'hidden field', 'AREA_KM2': 'hidden field', });
lyr_PI_Municipios_2022_3.set('fieldLabels', {'CD_MUN': 'hidden field', 'NM_MUN': 'no label', 'SIGLA_UF': 'hidden field', 'AREA_KM2': 'hidden field', });
lyr_pi_linhas_transmissao_4.set('fieldLabels', {'CD_MUN': 'hidden field', 'NM_MUN': 'no label', 'SIGLA_UF': 'hidden field', 'AREA_KM2': 'hidden field', });
lyr_linhastransmissao_pi_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'INS_ID': 'hidden field', 'TPEQP_ID': 'hidden field', 'EQP_ID': 'hidden field', 'NOMELONGO': 'no label', 'NOMEREDE': 'no label', 'AGE_NOME': 'no label', 'DTPREVISTA': 'hidden field', 'STR_DTPREVISTA': 'hidden field', 'DTENTRADA': 'hidden field', 'STR_DTENTRADA': 'hidden field', 'DTPAR': 'hidden field', 'STR_DTPAR': 'hidden field', 'NUMDOC': 'hidden field', 'VAL_CORRPROJETOLD': 'hidden field', 'VAL_CAPACOPERSEMFATORCD': 'hidden field', 'VAL_CAPACOPERLD': 'hidden field', 'VAL_CAPACOPERCOMFATORCD': 'hidden field', 'VAL_FATORLIMITANTELD': 'hidden field', 'VAL_FATORLIMITANTECD': 'hidden field', 'R': 'hidden field', 'X': 'hidden field', 'S': 'hidden field', 'EXT': 'hidden field', 'TPCPR_ID': 'hidden field', 'VN': 'inline label - visible with data', 'SHAPE.STLength()': 'hidden field', });
lyr_bd_siga_pi_6.set('fieldLabels', {'Empreendimento': 'inline label - visible with data', 'CEG': 'hidden field', 'UF': 'hidden field', 'Fonte': 'hidden field', 'Fase': 'inline label - visible with data', 'Origem': 'inline label - visible with data', 'Tipo': 'hidden field', 'Tipo de Atuação': 'hidden field', 'Combustível Final': 'hidden field', 'Entrada em Operação': 'hidden field', 'Potência Outorgada (kW)': 'inline label - visible with data', 'Potência Fiscalizada (kW)': 'inline label - visible with data', 'Garantia Fisica (kW)': 'hidden field', 'Geração Qualificada': 'hidden field', 'Latitude Decimal': 'hidden field', 'Longitude Decimal': 'hidden field', 'Início Vigência': 'hidden field', 'Fim Vigência': 'inline label - visible with data', 'Proprietário / Regime de Exploração': 'hidden field', 'Sub-Bacia': 'hidden field', 'Município (s)': 'no label', 'fase_origem': 'hidden field', });
lyr_filtro_substacao_pi_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'INS_ID': 'hidden field', 'NOMELONGO': 'no label', 'AGE_ID_PRIN': 'hidden field', 'AGE_PRIN_NOM': 'hidden field', 'DTPREVISTA': 'hidden field', 'STR_DTPREVISTA': 'hidden field', 'DTENTRADA': 'hidden field', 'STR_DTENTRADA': 'hidden field', });
lyr_filtro_usinas_pi_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'INS_ID': 'hidden field', 'NOM_MODALIDADEOPERUSICONJ': 'hidden field', 'NOMELONGO': 'no label', 'DTPREVISTA': 'hidden field', 'STR_DTPREVISTA': 'hidden field', 'DTENTRADA': 'hidden field', 'STR_DTENTRADA': 'hidden field', 'TPUSINA_ID': 'hidden field', 'NOME_TPUSINA': 'no label', });
lyr_filtro_usinas_pi_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});