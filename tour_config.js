// Coordenadas do mapa (Top %, Left %) para cada cena, estimadas com base na planta baixa.
var mapCoordinates = {
    "sala_estar_1": { top: 60, left: 30 },
    "sala_jantar_1": { top: 50, left: 40 },
    "corredor_1": { top: 30, left: 40 },
    "lavabo_1": { top: 30, left: 55 },
    "suite_1_1": { top: 15, left: 20 },
    "suite_1_armario": { top: 15, left: 20 },
    "banheiro_1": { top: 10, left: 30 },
    "suite_2_1": { top: 15, left: 60 },
    "suite_2_escrivaninha": { top: 15, left: 60 },
    "banheiro_2": { top: 10, left: 70 },
    "cozinha_1": { top: 70, left: 70 },
    "cozinha_despensa": { top: 70, left: 70 },
    "lavanderia_1": { top: 80, left: 80 },
    "terraço_1": { top: 80, left: 15 },
    "terraço_gourmet": { top: 80, left: 15 }
};

// Configuração do Tour Virtual
var config = {
    "default": {
        "firstScene": "sala_estar_1",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
        "showControls": true,
        "compass": false,
        "hotSpotDebug": false
    },
    "scenes": {
        // === SALA DE ESTAR / JANTAR ===
        "sala_estar_1": {
            "title": "Sala de Estar",
            "type": "equirectangular",
            "panorama": "salavista1.jpeg", // CORRIGIDO: Removido 'assets/'
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                { "pitch": 0, "yaw": 10, "type": "scene", "text": "Sala de Jantar", "sceneId": "sala_jantar_1" },
                { "pitch": 0, "yaw": -100, "type": "scene", "text": "Terraço Integrado", "sceneId": "terraço_1" },
                { "pitch": 0, "yaw": 160, "type": "scene", "text": "Cozinha", "sceneId": "cozinha_1" },
                { "pitch": 0, "yaw": -160, "type": "scene", "text": "Corredor/Suítes", "sceneId": "corredor_1" }
            ]
        },
        "sala_jantar_1": {
            "title": "Sala de Jantar",
            "type": "equirectangular",
            "panorama": "salajantar1.jpeg", // CORRIGIDO: Removido 'assets/'
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Sala de Estar", "sceneId": "sala_estar_1" }
            ]
        },
        
        // === CORREDOR / LAVABO ===
        "corredor_1": {
            "title": "Corredor",
            "type": "equirectangular",
            "panorama": "corredor1.jpeg", // CORRIGIDO: Removido 'assets/'
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Sala de Estar", "sceneId": "sala_estar_1" },
                { "pitch": 0, "yaw": -10, "type": "scene", "text": "Lavabo", "sceneId": "lavabo_1" },
                { "pitch": 0, "yaw": 90, "type": "scene", "text": "Suíte 1", "sceneId": "suite_1_1" },
                { "pitch": 0, "yaw": -90, "type": "scene", "text": "Suíte 2", "sceneId": "suite_2_1" }
            ]
        },
        "lavabo_1": {
            "title": "Lavabo",
            "type": "equirectangular",
            "panorama": "lavabovista1.jpeg", // CORRIGIDO: Removido 'assets/'
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Corredor", "sceneId": "corredor_1" }
            ]
        },

        // === SUÍTE 1 ===
        "suite_1_1": {
            "title": "Suíte 1 - Vista Principal",
            "type": "equirectangular",
            "panorama": "suite1vista1.jpeg", // CORRIGIDO: Removido 'assets/'
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Sair da Suíte", "sceneId": "corredor_1" },
                { "pitch": 0, "yaw": 90, "type": "scene", "text": "Detalhe do Armário", "sceneId": "suite_1_armario" },
                { "pitch": 0, "yaw": -90, "type": "scene", "text": "Banheiro 1", "sceneId": "banheiro_1" }
            ]
        },
        "suite_1_armario": {
            "title": "Suíte 1 - Armário",
            "type": "equirectangular",
            "panorama": "suite1armario.jpeg", // CORRIGIDO: Removido 'assets/'
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Suíte 1", "sceneId": "suite_1_1" }
            ]
        },
        "banheiro_1": {
            "title": "Banheiro 1",
            "type": "equirectangular",
            "panorama": "banheiro1vista1.jpeg", // CORRIGIDO: Removido 'assets/'
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Suíte 1", "sceneId": "suite_1_1" }
            ]
        },

        // === SUÍTE 2 ===
        "suite_2_1": {
            "title": "Suíte 2 - Vista Principal",
            "type": "equirectangular",
            "panorama": "suite2vista1.jpeg", // CORRIGIDO: Removido 'assets/'
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Sair da Suíte", "sceneId": "corredor_1" },
                { "pitch": 0, "yaw": 90, "type": "scene", "text": "Escrivaninha/TV", "sceneId": "suite_2_escrivaninha" },
                { "pitch": 0, "yaw": -90, "type": "scene", "text": "Banheiro 2", "sceneId": "banheiro_2" }
            ]
        },
        "suite_2_escrivaninha": {
            "title": "Suíte 2 - Escrivaninha/TV",
            "type": "equirectangular",
            "panorama": "suite2escrivaninha.jpeg", // CORRIGIDO: Removido 'assets/'
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Suíte 2", "sceneId": "suite_2_1" }
            ]
        },
        "banheiro_2": {
            "title": "Banheiro 2",
            "type": "equirectangular",
            "panorama": "banheiro2vista1.jpeg", // CORRIGIDO: Removido 'assets/'
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Suíte 2", "sceneId": "suite_2_1" }
            ]
        },

        // === COZINHA / LAVANDERIA ===
        "cozinha_1": {
            "title": "Cozinha - Bancada",
            "type": "equirectangular",
            "panorama": "cozinhabancada1.jpeg", // CORRIGIDO: Removido 'assets/'
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Sala", "sceneId": "sala_estar_1" },
                { "pitch": 0, "yaw": 90, "type": "scene", "text": "Despensa/Armário", "sceneId": "cozinha_despensa" },
                { "pitch": 0, "yaw": -90, "type": "scene", "text": "Lavanderia", "sceneId": "lavanderia_1" }
            ]
        },
        "cozinha_despensa": {
            "title": "Cozinha - Despensa",
            "type": "equirectangular",
            "panorama": "cozinhadespensavista1.jpeg", // CORRIGIDO: Removido 'assets/'
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Cozinha", "sceneId": "cozinha_1" }
            ]
        },
        "lavanderia_1": {
            "title": "Lavanderia",
            "type": "equirectangular",
            "panorama": "lavanderiavista2.png", // CORRIGIDO: Removido 'assets/'
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Cozinha", "sceneId": "cozinha_1" }
            ]
        },

        // === TERRAÇO ===
        "terraço_1": {
            "title": "Terraço Integrado",
            "type": "equirectangular",
            "panorama": "terracosalatransicao1.jpeg", // CORRIGIDO: Removido 'assets/'
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Sala de Estar", "sceneId": "sala_estar_1" },
                { "pitch": 0, "yaw": 90, "type": "scene", "text": "Área Gourmet", "sceneId": "terraço_gourmet" }
            ]
        },
        "terraço_gourmet": {
            "title": "Terraço - Área Gourmet",
            "type": "equirectangular",
            "panorama": "terracovista1.jpeg", // CORRIGIDO: Removido 'assets/'
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Terraço", "sceneId": "terraço_1" }
            ]
        }
    }
};

// Função para atualizar o marcador no mapa
function updateMap(sceneId) {
    var marker = document.getElementById('map-marker');
    var coords = mapCoordinates[sceneId];
    if (coords) {
        marker.style.top = coords.top + '%';
        marker.style.left = coords.left + '%';
        marker.style.display = 'block';
    } else {
        marker.style.display = 'none';
    }
}

// Inicializa o Pannellum
window.onload = function() {
    var viewer = pannellum.viewer('panorama', config);
    
    // Adiciona o listener para a mudança de cena
    viewer.on('scenechange', function(sceneId) {
        updateMap(sceneId);
    });

    // Chama a função inicialmente para a primeira cena
    updateMap(config.default.firstScene);
};
