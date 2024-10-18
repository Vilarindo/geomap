ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4674").setExtent([-50.362075, -11.017962, -35.671123, -2.494378]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Google Satellite</a>',
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
var format_Municipios_2 = new ol.format.GeoJSON();
var features_Municipios_2 = format_Municipios_2.readFeatures(json_Municipios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_Municipios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_2.addFeatures(features_Municipios_2);
var lyr_Municipios_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_2, 
                style: style_Municipios_2,
                popuplayertitle: "Municipios",
                interactive: true,
                title: '<img src="styles/legend/Municipios_2.png" /> Municipios'
            });
var format_readeaplicaodaLeideMataAtlnticaPI_3 = new ol.format.GeoJSON();
var features_readeaplicaodaLeideMataAtlnticaPI_3 = format_readeaplicaodaLeideMataAtlnticaPI_3.readFeatures(json_readeaplicaodaLeideMataAtlnticaPI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_readeaplicaodaLeideMataAtlnticaPI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeaplicaodaLeideMataAtlnticaPI_3.addFeatures(features_readeaplicaodaLeideMataAtlnticaPI_3);
var lyr_readeaplicaodaLeideMataAtlnticaPI_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeaplicaodaLeideMataAtlnticaPI_3, 
                style: style_readeaplicaodaLeideMataAtlnticaPI_3,
                popuplayertitle: "Área de aplicação da Lei de Mata Atlântica-PI",
                interactive: true,
                title: '<img src="styles/legend/readeaplicaodaLeideMataAtlnticaPI_3.png" /> Área de aplicação da Lei de Mata Atlântica-PI'
            });
var format_CorredorEcolgicoConfusesSerradaCapivaraPI_4 = new ol.format.GeoJSON();
var features_CorredorEcolgicoConfusesSerradaCapivaraPI_4 = format_CorredorEcolgicoConfusesSerradaCapivaraPI_4.readFeatures(json_CorredorEcolgicoConfusesSerradaCapivaraPI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CorredorEcolgicoConfusesSerradaCapivaraPI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorEcolgicoConfusesSerradaCapivaraPI_4.addFeatures(features_CorredorEcolgicoConfusesSerradaCapivaraPI_4);
var lyr_CorredorEcolgicoConfusesSerradaCapivaraPI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorEcolgicoConfusesSerradaCapivaraPI_4, 
                style: style_CorredorEcolgicoConfusesSerradaCapivaraPI_4,
                popuplayertitle: "Corredor Ecológico - Confusões Serra da Capivara-PI",
                interactive: true,
                title: '<img src="styles/legend/CorredorEcolgicoConfusesSerradaCapivaraPI_4.png" /> Corredor Ecológico - Confusões Serra da Capivara-PI'
            });
var format_UnidadesdeConservaoEstadualPI_5 = new ol.format.GeoJSON();
var features_UnidadesdeConservaoEstadualPI_5 = format_UnidadesdeConservaoEstadualPI_5.readFeatures(json_UnidadesdeConservaoEstadualPI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_UnidadesdeConservaoEstadualPI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservaoEstadualPI_5.addFeatures(features_UnidadesdeConservaoEstadualPI_5);
var lyr_UnidadesdeConservaoEstadualPI_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservaoEstadualPI_5, 
                style: style_UnidadesdeConservaoEstadualPI_5,
                popuplayertitle: "Unidades de Conservação Estadual-PI",
                interactive: true,
                title: '<img src="styles/legend/UnidadesdeConservaoEstadualPI_5.png" /> Unidades de Conservação Estadual-PI'
            });
var format_UnidadesdeConservaoFederalPIICMBIO2023_6 = new ol.format.GeoJSON();
var features_UnidadesdeConservaoFederalPIICMBIO2023_6 = format_UnidadesdeConservaoFederalPIICMBIO2023_6.readFeatures(json_UnidadesdeConservaoFederalPIICMBIO2023_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_UnidadesdeConservaoFederalPIICMBIO2023_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservaoFederalPIICMBIO2023_6.addFeatures(features_UnidadesdeConservaoFederalPIICMBIO2023_6);
var lyr_UnidadesdeConservaoFederalPIICMBIO2023_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservaoFederalPIICMBIO2023_6, 
                style: style_UnidadesdeConservaoFederalPIICMBIO2023_6,
                popuplayertitle: "Unidades de Conservação Federal-PI (ICMBIO 2023)",
                interactive: true,
                title: '<img src="styles/legend/UnidadesdeConservaoFederalPIICMBIO2023_6.png" /> Unidades de Conservação Federal-PI (ICMBIO 2023)'
            });
var format_ZonadeAmortecimentodasUCsPI3Km_7 = new ol.format.GeoJSON();
var features_ZonadeAmortecimentodasUCsPI3Km_7 = format_ZonadeAmortecimentodasUCsPI3Km_7.readFeatures(json_ZonadeAmortecimentodasUCsPI3Km_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ZonadeAmortecimentodasUCsPI3Km_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonadeAmortecimentodasUCsPI3Km_7.addFeatures(features_ZonadeAmortecimentodasUCsPI3Km_7);
var lyr_ZonadeAmortecimentodasUCsPI3Km_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonadeAmortecimentodasUCsPI3Km_7, 
                style: style_ZonadeAmortecimentodasUCsPI3Km_7,
                popuplayertitle: "Zona de Amortecimento das UC`s-PI - 3Km",
                interactive: true,
                title: '<img src="styles/legend/ZonadeAmortecimentodasUCsPI3Km_7.png" /> Zona de Amortecimento das UC`s-PI - 3Km'
            });
var format_realitgio_8 = new ol.format.GeoJSON();
var features_realitgio_8 = format_realitgio_8.readFeatures(json_realitgio_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_realitgio_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_realitgio_8.addFeatures(features_realitgio_8);
var lyr_realitgio_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_realitgio_8, 
                style: style_realitgio_8,
                popuplayertitle: "Área litígio",
                interactive: true,
                title: '<img src="styles/legend/realitgio_8.png" /> Área litígio'
            });
var format_LinhasdetransmissaoPI_9 = new ol.format.GeoJSON();
var features_LinhasdetransmissaoPI_9 = format_LinhasdetransmissaoPI_9.readFeatures(json_LinhasdetransmissaoPI_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_LinhasdetransmissaoPI_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhasdetransmissaoPI_9.addFeatures(features_LinhasdetransmissaoPI_9);
var lyr_LinhasdetransmissaoPI_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhasdetransmissaoPI_9, 
                style: style_LinhasdetransmissaoPI_9,
                popuplayertitle: "Linhas de transmissao PI",
                interactive: true,
    title: 'Linhas de transmissao PI<br />\
    <img src="styles/legend/LinhasdetransmissaoPI_9_0.png" /> 230<br />\
    <img src="styles/legend/LinhasdetransmissaoPI_9_1.png" /> 500<br />\
    <img src="styles/legend/LinhasdetransmissaoPI_9_2.png" /> <br />'
        });
var format_Empreendimentos_10 = new ol.format.GeoJSON();
var features_Empreendimentos_10 = format_Empreendimentos_10.readFeatures(json_Empreendimentos_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_Empreendimentos_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Empreendimentos_10.addFeatures(features_Empreendimentos_10);
var lyr_Empreendimentos_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Empreendimentos_10, 
                style: style_Empreendimentos_10,
                popuplayertitle: "Empreendimentos",
                interactive: true,
    title: 'Empreendimentos<br />\
    <img src="styles/legend/Empreendimentos_10_0.png" /> Construção - Eólica<br />\
    <img src="styles/legend/Empreendimentos_10_1.png" /> Construção - Solar<br />\
    <img src="styles/legend/Empreendimentos_10_2.png" /> Construção não iniciada - Eólica<br />\
    <img src="styles/legend/Empreendimentos_10_3.png" /> Construção não iniciada - Solar<br />\
    <img src="styles/legend/Empreendimentos_10_4.png" /> Operação - Biomassa<br />\
    <img src="styles/legend/Empreendimentos_10_5.png" /> Operação - Eólica<br />\
    <img src="styles/legend/Empreendimentos_10_6.png" /> Operação - Fóssil<br />\
    <img src="styles/legend/Empreendimentos_10_7.png" /> Operação - Hídrica<br />\
    <img src="styles/legend/Empreendimentos_10_8.png" /> Operação - Solar<br />\
    <img src="styles/legend/Empreendimentos_10_9.png" /> <br />'
        });
var format_Linha_Frigorfico_11 = new ol.format.GeoJSON();
var features_Linha_Frigorfico_11 = format_Linha_Frigorfico_11.readFeatures(json_Linha_Frigorfico_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_Linha_Frigorfico_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linha_Frigorfico_11.addFeatures(features_Linha_Frigorfico_11);
var lyr_Linha_Frigorfico_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linha_Frigorfico_11, 
                style: style_Linha_Frigorfico_11,
                popuplayertitle: "Linha_Frigorífico",
                interactive: true,
                title: '<img src="styles/legend/Linha_Frigorfico_11.png" /> Linha_Frigorífico'
            });
var format_Empreendimentos_INFRA_12 = new ol.format.GeoJSON();
var features_Empreendimentos_INFRA_12 = format_Empreendimentos_INFRA_12.readFeatures(json_Empreendimentos_INFRA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_Empreendimentos_INFRA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Empreendimentos_INFRA_12.addFeatures(features_Empreendimentos_INFRA_12);
var lyr_Empreendimentos_INFRA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Empreendimentos_INFRA_12, 
                style: style_Empreendimentos_INFRA_12,
                popuplayertitle: "Empreendimentos_INFRA",
                interactive: true,
                title: '<img src="styles/legend/Empreendimentos_INFRA_12.png" /> Empreendimentos_INFRA'
            });
var format_SubestaesPI_13 = new ol.format.GeoJSON();
var features_SubestaesPI_13 = format_SubestaesPI_13.readFeatures(json_SubestaesPI_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_SubestaesPI_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubestaesPI_13.addFeatures(features_SubestaesPI_13);
var lyr_SubestaesPI_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SubestaesPI_13, 
                style: style_SubestaesPI_13,
                popuplayertitle: "Subestações PI",
                interactive: true,
                title: '<img src="styles/legend/SubestaesPI_13.png" /> Subestações PI'
            });
var format_UsinasPI_14 = new ol.format.GeoJSON();
var features_UsinasPI_14 = format_UsinasPI_14.readFeatures(json_UsinasPI_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_UsinasPI_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsinasPI_14.addFeatures(features_UsinasPI_14);
var lyr_UsinasPI_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UsinasPI_14, 
                style: style_UsinasPI_14,
                popuplayertitle: "Usinas PI",
                interactive: true,
                title: '<img src="styles/legend/UsinasPI_14.png" /> Usinas PI'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Municipios_2.setVisible(true);lyr_readeaplicaodaLeideMataAtlnticaPI_3.setVisible(true);lyr_CorredorEcolgicoConfusesSerradaCapivaraPI_4.setVisible(true);lyr_UnidadesdeConservaoEstadualPI_5.setVisible(true);lyr_UnidadesdeConservaoFederalPIICMBIO2023_6.setVisible(true);lyr_ZonadeAmortecimentodasUCsPI3Km_7.setVisible(true);lyr_realitgio_8.setVisible(true);lyr_LinhasdetransmissaoPI_9.setVisible(true);lyr_Empreendimentos_10.setVisible(true);lyr_Linha_Frigorfico_11.setVisible(true);lyr_Empreendimentos_INFRA_12.setVisible(true);lyr_SubestaesPI_13.setVisible(true);lyr_UsinasPI_14.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_Municipios_2,lyr_readeaplicaodaLeideMataAtlnticaPI_3,lyr_CorredorEcolgicoConfusesSerradaCapivaraPI_4,lyr_UnidadesdeConservaoEstadualPI_5,lyr_UnidadesdeConservaoFederalPIICMBIO2023_6,lyr_ZonadeAmortecimentodasUCsPI3Km_7,lyr_realitgio_8,lyr_LinhasdetransmissaoPI_9,lyr_Empreendimentos_10,lyr_Linha_Frigorfico_11,lyr_Empreendimentos_INFRA_12,lyr_SubestaesPI_13,lyr_UsinasPI_14];
lyr_Municipios_2.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_readeaplicaodaLeideMataAtlnticaPI_3.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'LEG_1SIMP': 'LEG_1SIMP', 'COUNT_': 'COUNT_', 'Shape_Leng': 'Shape_Leng', 'area_km2': 'area_km2', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_CorredorEcolgicoConfusesSerradaCapivaraPI_4.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'PONTO': 'PONTO', 'N': 'N', 'W': 'W', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_UnidadesdeConservaoEstadualPI_5.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'nome': 'nome', 'sigla': 'sigla', 'areaHa': 'areaHa', 'perimetroM': 'perimetroM', 'administra': 'administra', 'UF': 'UF', 'biomaIBGE': 'biomaIBGE', 'CoordRegio': 'CoordRegio', 'municipios': 'municipios', 'anoCriacao': 'anoCriacao', 'Territorio': 'Territorio', 'Decreto': 'Decreto', 'COD': 'COD', 'Hectares': 'Hectares', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_UnidadesdeConservaoFederalPIICMBIO2023_6.set('fieldAliases', {'id': 'id', 'NomeUC': 'NomeUC', 'Cnuc': 'Cnuc', 'CriacaoAno': 'CriacaoAno', 'AreaHaAlb': 'AreaHaAlb', 'PerimM': 'PerimM', 'CriacaoAto': 'CriacaoAto', 'EsferaAdm': 'EsferaAdm', 'SiglaCateg': 'SiglaCateg', 'GrupoUC': 'GrupoUC', 'UFAbrang': 'UFAbrang', 'BiomaIBGE': 'BiomaIBGE', 'BiomaCRL': 'BiomaCRL', 'GRegional': 'GRegional', 'FusoAbrang': 'FusoAbrang', 'Demarcacao': 'Demarcacao', 'EscalaUC': 'EscalaUC', 'NGI': 'NGI', 'Latitude': 'Latitude', 'Longi': 'Longi', });
lyr_ZonadeAmortecimentodasUCsPI3Km_7.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'nome': 'nome', 'sigla': 'sigla', 'areaHa': 'areaHa', 'administra': 'administra', 'SiglaGrupo': 'SiglaGrupo', 'UF': 'UF', 'biomaIBGE': 'biomaIBGE', 'biomaCRL': 'biomaCRL', 'CoordRegio': 'CoordRegio', 'municipios': 'municipios', 'anoCriacao': 'anoCriacao', 'Territorio': 'Territorio', 'Decreto': 'Decreto', 'Hectares': 'Hectares', 'BUFF_DIST': 'BUFF_DIST', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_realitgio_8.set('fieldAliases', {'FID_area': 'FID_area', 'TIPO': 'TIPO', 'FID_TD_PI': 'FID_TD_PI', 'Terri_Dese': 'Terri_Dese', 'FID_diss': 'FID_diss', 'TIPO_1': 'TIPO_1', });
lyr_LinhasdetransmissaoPI_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'INS_ID': 'INS_ID', 'TPEQP_ID': 'TPEQP_ID', 'EQP_ID': 'EQP_ID', 'NOMELONGO': 'NOMELONGO', 'NOMEREDE': 'NOMEREDE', 'AGE_NOME': 'AGE_NOME', 'DTPREVISTA': 'DTPREVISTA', 'STR_DTPREVISTA': 'STR_DTPREVISTA', 'DTENTRADA': 'DTENTRADA', 'STR_DTENTRADA': 'STR_DTENTRADA', 'DTPAR': 'DTPAR', 'STR_DTPAR': 'STR_DTPAR', 'NUMDOC': 'NUMDOC', 'VAL_CORRPROJETOLD': 'VAL_CORRPROJETOLD', 'VAL_CAPACOPERSEMFATORCD': 'VAL_CAPACOPERSEMFATORCD', 'VAL_CAPACOPERLD': 'VAL_CAPACOPERLD', 'VAL_CAPACOPERCOMFATORCD': 'VAL_CAPACOPERCOMFATORCD', 'VAL_FATORLIMITANTELD': 'VAL_FATORLIMITANTELD', 'VAL_FATORLIMITANTECD': 'VAL_FATORLIMITANTECD', 'R': 'R', 'X': 'X', 'S': 'S', 'EXT': 'EXT', 'TPCPR_ID': 'TPCPR_ID', 'VN': 'VN', 'SHAPE.STLength()': 'SHAPE.STLength()', });
lyr_Empreendimentos_10.set('fieldAliases', {'Empreendimento': 'Empreendimento', 'CEG': 'CEG', 'UF': 'UF', 'Fonte': 'Fonte', 'Fase': 'Fase', 'Origem': 'Origem', 'Tipo': 'Tipo', 'Tipo de Atuação': 'Tipo de Atuação', 'Combustível Final': 'Combustível Final', 'Entrada em Operação': 'Entrada em Operação', 'Potência Outorgada (kW)': 'Potência Outorgada (kW)', 'Potência Fiscalizada (kW)': 'Potência Fiscalizada (kW)', 'Garantia Fisica (kW)': 'Garantia Fisica (kW)', 'Geração Qualificada': 'Geração Qualificada', 'Latitude Decimal': 'Latitude Decimal', 'Longitude Decimal': 'Longitude Decimal', 'Início Vigência': 'Início Vigência', 'Fim Vigência': 'Fim Vigência', 'Proprietário / Regime de Exploração': 'Proprietário / Regime de Exploração', 'Sub-Bacia': 'Sub-Bacia', 'Município (s)': 'Município (s)', 'fase_origem': 'fase_origem', });
lyr_Linha_Frigorfico_11.set('fieldAliases', {'id': 'id', });
lyr_Empreendimentos_INFRA_12.set('fieldAliases', {'Item': 'Item', 'Empreendimento': 'Empreendimento', 'Empresa': 'Empresa', 'Município': 'Município', 'Produto': 'Produto', 'Área': 'Área', 'Und.': 'Und.', 'Produção': 'Produção', 'Und._1': 'Und._1', 'Estimativa Potência Necessária': 'Estimativa Potência Necessária', 'Und._2': 'Und._2', 'Licenciamento Ambiental': 'Licenciamento Ambiental', 'Latitude DMS (Y)': 'Latitude DMS (Y)', 'Longitude DMS (X)': 'Longitude DMS (X)', 'LATITUDE (DECIMAL)': 'LATITUDE (DECIMAL)', 'LONGITUDE (DECIMAL)': 'LONGITUDE (DECIMAL)', });
lyr_SubestaesPI_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'INS_ID': 'INS_ID', 'NOMELONGO': 'NOMELONGO', 'AGE_ID_PRIN': 'AGE_ID_PRIN', 'AGE_PRIN_NOM': 'AGE_PRIN_NOM', 'DTPREVISTA': 'DTPREVISTA', 'STR_DTPREVISTA': 'STR_DTPREVISTA', 'DTENTRADA': 'DTENTRADA', 'STR_DTENTRADA': 'STR_DTENTRADA', });
lyr_UsinasPI_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'INS_ID': 'INS_ID', 'NOM_MODALIDADEOPERUSICONJ': 'NOM_MODALIDADEOPERUSICONJ', 'NOMELONGO': 'NOMELONGO', 'DTPREVISTA': 'DTPREVISTA', 'STR_DTPREVISTA': 'STR_DTPREVISTA', 'DTENTRADA': 'DTENTRADA', 'STR_DTENTRADA': 'STR_DTENTRADA', 'TPUSINA_ID': 'TPUSINA_ID', 'NOME_TPUSINA': 'NOME_TPUSINA', });
lyr_Municipios_2.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_readeaplicaodaLeideMataAtlnticaPI_3.set('fieldImages', {'id': 'TextEdit', 'fid': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID': 'Range', 'LEG_1SIMP': 'TextEdit', 'COUNT_': 'Range', 'Shape_Leng': 'TextEdit', 'area_km2': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CorredorEcolgicoConfusesSerradaCapivaraPI_4.set('fieldImages', {'id': '', 'fid': '', 'PONTO': '', 'N': '', 'W': '', 'Latitude': '', 'Longitude': '', });
lyr_UnidadesdeConservaoEstadualPI_5.set('fieldImages', {'id': 'TextEdit', 'fid': 'Range', 'nome': 'TextEdit', 'sigla': 'TextEdit', 'areaHa': 'TextEdit', 'perimetroM': 'TextEdit', 'administra': 'TextEdit', 'UF': 'TextEdit', 'biomaIBGE': 'TextEdit', 'CoordRegio': 'TextEdit', 'municipios': 'TextEdit', 'anoCriacao': 'TextEdit', 'Territorio': 'TextEdit', 'Decreto': 'TextEdit', 'COD': 'Range', 'Hectares': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_UnidadesdeConservaoFederalPIICMBIO2023_6.set('fieldImages', {'id': '', 'NomeUC': '', 'Cnuc': '', 'CriacaoAno': '', 'AreaHaAlb': '', 'PerimM': '', 'CriacaoAto': '', 'EsferaAdm': '', 'SiglaCateg': '', 'GrupoUC': '', 'UFAbrang': '', 'BiomaIBGE': '', 'BiomaCRL': '', 'GRegional': '', 'FusoAbrang': '', 'Demarcacao': '', 'EscalaUC': '', 'NGI': '', 'Latitude': '', 'Longi': '', });
lyr_ZonadeAmortecimentodasUCsPI3Km_7.set('fieldImages', {'id': 'TextEdit', 'fid': 'Range', 'nome': 'TextEdit', 'sigla': 'TextEdit', 'areaHa': 'TextEdit', 'administra': 'TextEdit', 'SiglaGrupo': 'TextEdit', 'UF': 'TextEdit', 'biomaIBGE': 'TextEdit', 'biomaCRL': 'TextEdit', 'CoordRegio': 'TextEdit', 'municipios': 'TextEdit', 'anoCriacao': 'TextEdit', 'Territorio': 'TextEdit', 'Decreto': 'TextEdit', 'Hectares': 'TextEdit', 'BUFF_DIST': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_realitgio_8.set('fieldImages', {'FID_area': 'TextEdit', 'TIPO': 'TextEdit', 'FID_TD_PI': 'TextEdit', 'Terri_Dese': 'TextEdit', 'FID_diss': 'TextEdit', 'TIPO_1': 'TextEdit', });
lyr_LinhasdetransmissaoPI_9.set('fieldImages', {'OBJECTID': 'Range', 'INS_ID': 'TextEdit', 'TPEQP_ID': 'TextEdit', 'EQP_ID': 'TextEdit', 'NOMELONGO': 'TextEdit', 'NOMEREDE': 'TextEdit', 'AGE_NOME': 'TextEdit', 'DTPREVISTA': 'TextEdit', 'STR_DTPREVISTA': 'TextEdit', 'DTENTRADA': 'TextEdit', 'STR_DTENTRADA': 'TextEdit', 'DTPAR': 'TextEdit', 'STR_DTPAR': 'TextEdit', 'NUMDOC': 'TextEdit', 'VAL_CORRPROJETOLD': 'TextEdit', 'VAL_CAPACOPERSEMFATORCD': 'TextEdit', 'VAL_CAPACOPERLD': 'TextEdit', 'VAL_CAPACOPERCOMFATORCD': 'TextEdit', 'VAL_FATORLIMITANTELD': 'TextEdit', 'VAL_FATORLIMITANTECD': 'TextEdit', 'R': 'TextEdit', 'X': 'TextEdit', 'S': 'TextEdit', 'EXT': 'TextEdit', 'TPCPR_ID': 'TextEdit', 'VN': 'TextEdit', 'SHAPE.STLength()': 'TextEdit', });
lyr_Empreendimentos_10.set('fieldImages', {'Empreendimento': 'TextEdit', 'CEG': 'TextEdit', 'UF': 'TextEdit', 'Fonte': 'TextEdit', 'Fase': 'TextEdit', 'Origem': 'TextEdit', 'Tipo': 'TextEdit', 'Tipo de Atuação': 'TextEdit', 'Combustível Final': 'TextEdit', 'Entrada em Operação': 'TextEdit', 'Potência Outorgada (kW)': 'TextEdit', 'Potência Fiscalizada (kW)': 'TextEdit', 'Garantia Fisica (kW)': 'TextEdit', 'Geração Qualificada': 'TextEdit', 'Latitude Decimal': 'TextEdit', 'Longitude Decimal': 'TextEdit', 'Início Vigência': 'DateTime', 'Fim Vigência': 'DateTime', 'Proprietário / Regime de Exploração': 'TextEdit', 'Sub-Bacia': 'TextEdit', 'Município (s)': 'TextEdit', 'fase_origem': 'TextEdit', });
lyr_Linha_Frigorfico_11.set('fieldImages', {'id': 'TextEdit', });
lyr_Empreendimentos_INFRA_12.set('fieldImages', {'Item': 'Range', 'Empreendimento': 'TextEdit', 'Empresa': 'TextEdit', 'Município': 'TextEdit', 'Produto': 'TextEdit', 'Área': 'TextEdit', 'Und.': 'TextEdit', 'Produção': 'TextEdit', 'Und._1': 'TextEdit', 'Estimativa Potência Necessária': 'TextEdit', 'Und._2': 'TextEdit', 'Licenciamento Ambiental': 'TextEdit', 'Latitude DMS (Y)': 'TextEdit', 'Longitude DMS (X)': 'TextEdit', 'LATITUDE (DECIMAL)': 'TextEdit', 'LONGITUDE (DECIMAL)': 'TextEdit', });
lyr_SubestaesPI_13.set('fieldImages', {'OBJECTID': 'Range', 'INS_ID': 'TextEdit', 'NOMELONGO': 'TextEdit', 'AGE_ID_PRIN': 'TextEdit', 'AGE_PRIN_NOM': 'TextEdit', 'DTPREVISTA': 'TextEdit', 'STR_DTPREVISTA': 'TextEdit', 'DTENTRADA': 'TextEdit', 'STR_DTENTRADA': 'TextEdit', });
lyr_UsinasPI_14.set('fieldImages', {'OBJECTID': 'Range', 'INS_ID': 'TextEdit', 'NOM_MODALIDADEOPERUSICONJ': 'TextEdit', 'NOMELONGO': 'TextEdit', 'DTPREVISTA': 'TextEdit', 'STR_DTPREVISTA': 'TextEdit', 'DTENTRADA': 'TextEdit', 'STR_DTENTRADA': 'TextEdit', 'TPUSINA_ID': 'TextEdit', 'NOME_TPUSINA': 'TextEdit', });
lyr_Municipios_2.set('fieldLabels', {'CD_MUN': 'hidden field', 'NM_MUN': 'no label', 'SIGLA_UF': 'hidden field', 'AREA_KM2': 'hidden field', });
lyr_readeaplicaodaLeideMataAtlnticaPI_3.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'LEG_1SIMP': 'no label', 'COUNT_': 'no label', 'Shape_Leng': 'no label', 'area_km2': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_CorredorEcolgicoConfusesSerradaCapivaraPI_4.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'PONTO': 'no label', 'N': 'no label', 'W': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_UnidadesdeConservaoEstadualPI_5.set('fieldLabels', {'id': 'hidden field', 'fid': 'hidden field', 'nome': 'no label', 'sigla': 'hidden field', 'areaHa': 'no label', 'perimetroM': 'hidden field', 'administra': 'hidden field', 'UF': 'hidden field', 'biomaIBGE': 'no label', 'CoordRegio': 'hidden field', 'municipios': 'hidden field', 'anoCriacao': 'hidden field', 'Territorio': 'inline label - visible with data', 'Decreto': 'hidden field', 'COD': 'hidden field', 'Hectares': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_UnidadesdeConservaoFederalPIICMBIO2023_6.set('fieldLabels', {'id': 'hidden field', 'NomeUC': 'no label', 'Cnuc': 'hidden field', 'CriacaoAno': 'hidden field', 'AreaHaAlb': 'no label', 'PerimM': 'hidden field', 'CriacaoAto': 'hidden field', 'EsferaAdm': 'hidden field', 'SiglaCateg': 'hidden field', 'GrupoUC': 'hidden field', 'UFAbrang': 'hidden field', 'BiomaIBGE': 'no label', 'BiomaCRL': 'hidden field', 'GRegional': 'hidden field', 'FusoAbrang': 'hidden field', 'Demarcacao': 'hidden field', 'EscalaUC': 'hidden field', 'NGI': 'hidden field', 'Latitude': 'hidden field', 'Longi': 'hidden field', });
lyr_ZonadeAmortecimentodasUCsPI3Km_7.set('fieldLabels', {'id': 'hidden field', 'fid': 'hidden field', 'nome': 'no label', 'sigla': 'hidden field', 'areaHa': 'no label', 'administra': 'hidden field', 'SiglaGrupo': 'hidden field', 'UF': 'hidden field', 'biomaIBGE': 'no label', 'biomaCRL': 'hidden field', 'CoordRegio': 'hidden field', 'municipios': 'hidden field', 'anoCriacao': 'hidden field', 'Territorio': 'inline label - visible with data', 'Decreto': 'hidden field', 'Hectares': 'hidden field', 'BUFF_DIST': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_realitgio_8.set('fieldLabels', {'FID_area': 'no label', 'TIPO': 'no label', 'FID_TD_PI': 'no label', 'Terri_Dese': 'no label', 'FID_diss': 'no label', 'TIPO_1': 'no label', });
lyr_LinhasdetransmissaoPI_9.set('fieldLabels', {'OBJECTID': 'hidden field', 'INS_ID': 'hidden field', 'TPEQP_ID': 'hidden field', 'EQP_ID': 'hidden field', 'NOMELONGO': 'no label', 'NOMEREDE': 'no label', 'AGE_NOME': 'no label', 'DTPREVISTA': 'hidden field', 'STR_DTPREVISTA': 'hidden field', 'DTENTRADA': 'hidden field', 'STR_DTENTRADA': 'hidden field', 'DTPAR': 'hidden field', 'STR_DTPAR': 'hidden field', 'NUMDOC': 'hidden field', 'VAL_CORRPROJETOLD': 'hidden field', 'VAL_CAPACOPERSEMFATORCD': 'hidden field', 'VAL_CAPACOPERLD': 'hidden field', 'VAL_CAPACOPERCOMFATORCD': 'hidden field', 'VAL_FATORLIMITANTELD': 'hidden field', 'VAL_FATORLIMITANTECD': 'hidden field', 'R': 'hidden field', 'X': 'hidden field', 'S': 'hidden field', 'EXT': 'hidden field', 'TPCPR_ID': 'hidden field', 'VN': 'inline label - visible with data', 'SHAPE.STLength()': 'hidden field', });
lyr_Empreendimentos_10.set('fieldLabels', {'Empreendimento': 'inline label - visible with data', 'CEG': 'hidden field', 'UF': 'hidden field', 'Fonte': 'hidden field', 'Fase': 'inline label - visible with data', 'Origem': 'inline label - visible with data', 'Tipo': 'hidden field', 'Tipo de Atuação': 'hidden field', 'Combustível Final': 'hidden field', 'Entrada em Operação': 'hidden field', 'Potência Outorgada (kW)': 'inline label - visible with data', 'Potência Fiscalizada (kW)': 'inline label - visible with data', 'Garantia Fisica (kW)': 'hidden field', 'Geração Qualificada': 'hidden field', 'Latitude Decimal': 'hidden field', 'Longitude Decimal': 'hidden field', 'Início Vigência': 'hidden field', 'Fim Vigência': 'inline label - visible with data', 'Proprietário / Regime de Exploração': 'hidden field', 'Sub-Bacia': 'hidden field', 'Município (s)': 'no label', 'fase_origem': 'hidden field', });
lyr_Linha_Frigorfico_11.set('fieldLabels', {'id': 'no label', });
lyr_Empreendimentos_INFRA_12.set('fieldLabels', {'Item': 'hidden field', 'Empreendimento': 'no label', 'Empresa': 'no label', 'Município': 'hidden field', 'Produto': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Und.': 'no label', 'Produção': 'inline label - visible with data', 'Und._1': 'no label', 'Estimativa Potência Necessária': 'inline label - visible with data', 'Und._2': 'no label', 'Licenciamento Ambiental': 'inline label - visible with data', 'Latitude DMS (Y)': 'no label', 'Longitude DMS (X)': 'no label', 'LATITUDE (DECIMAL)': 'hidden field', 'LONGITUDE (DECIMAL)': 'hidden field', });
lyr_SubestaesPI_13.set('fieldLabels', {'OBJECTID': 'hidden field', 'INS_ID': 'hidden field', 'NOMELONGO': 'no label', 'AGE_ID_PRIN': 'hidden field', 'AGE_PRIN_NOM': 'hidden field', 'DTPREVISTA': 'hidden field', 'STR_DTPREVISTA': 'hidden field', 'DTENTRADA': 'hidden field', 'STR_DTENTRADA': 'hidden field', });
lyr_UsinasPI_14.set('fieldLabels', {'OBJECTID': 'hidden field', 'INS_ID': 'hidden field', 'NOM_MODALIDADEOPERUSICONJ': 'hidden field', 'NOMELONGO': 'no label', 'DTPREVISTA': 'hidden field', 'STR_DTPREVISTA': 'hidden field', 'DTENTRADA': 'hidden field', 'STR_DTENTRADA': 'hidden field', 'TPUSINA_ID': 'hidden field', 'NOME_TPUSINA': 'no label', });
lyr_UsinasPI_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});