// Coordenadas do mapa (Top %, Left %) para cada cena, estimadas com base na planta baixa.
var mapCoordinates = {
    "sala_estar_1": { top: 60, left: 30 },
    "sala_jantar_1": { top: 50, left: 40 },
    "corredor_1": { top: 30, left: 40 },
    "lavabo_1": { top: 30, left: 55 },
    "suite_1_1": { top: 15, left: 20 },
    "suite_1_armario": { top: 15, left: 20 }, // Mesma posição da suíte
    "banheiro_1": { top: 10, left: 30 },
    "suite_2_1": { top: 15, left: 60 },
    "suite_2_escrivaninha": { top: 15, left: 60 }, // Mesma posição da suíte
    "banheiro_2": { top: 10, left: 70 },
    "cozinha_1": { top: 70, left: 70 },
    "cozinha_despensa": { top: 70, left: 70 }, // Mesma posição da cozinha
    "lavanderia_1": { top: 80, left: 80 },
    "terraço_1": { top: 80, left: 15 },
    "terraço_gourmet": { top: 80, left: 15 } // Mesma posição do terraço
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
            "panorama": "assets/sala_vista_1.jpeg",
            "hfov": 90, "maxHfov": 90, "minHfov": 90, // Limita o zoom para simular uma imagem 2D
            "hotSpots": [
                // Para Sala de Jantar
                { "pitch": 0, "yaw": 10, "type": "scene", "text": "Sala de Jantar", "sceneId": "sala_jantar_1" },
                // Para Terraço
                { "pitch": 0, "yaw": -100, "type": "scene", "text": "Terraço Integrado", "sceneId": "terraço_1" },
                // Para Cozinha
                { "pitch": 0, "yaw": 160, "type": "scene", "text": "Cozinha", "sceneId": "cozinha_1" },
                // Para Corredor/Suítes
                { "pitch": 0, "yaw": -160, "type": "scene", "text": "Corredor/Suítes", "sceneId": "corredor_1" }
            ]
        },
        "sala_jantar_1": {
            "title": "Sala de Jantar",
            "type": "equirectangular",
            "panorama": "assets/sala_jantar_vista_2.jpeg",
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                // Voltar para Sala de Estar
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Sala de Estar", "sceneId": "sala_estar_1" }
            ]
        },
        
        // === CORREDOR / LAVABO ===
        "corredor_1": {
            "title": "Corredor",
            "type": "equirectangular",
            "panorama": "assets/sala_vista_2.jpeg", // Usando uma vista da sala que mostra a porta
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                // Voltar para Sala de Estar
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Sala de Estar", "sceneId": "sala_estar_1" },
                // Para Lavabo (assumindo que a porta branca é o lavabo)
                { "pitch": 0, "yaw": -10, "type": "scene", "text": "Lavabo", "sceneId": "lavabo_1" },
                // Para Suíte 1
                { "pitch": 0, "yaw": 90, "type": "scene", "text": "Suíte 1", "sceneId": "suite_1_1" },
                // Para Suíte 2
                { "pitch": 0, "yaw": -90, "type": "scene", "text": "Suíte 2", "sceneId": "suite_2_1" }
            ]
        },
        "lavabo_1": {
            "title": "Lavabo",
            "type": "equirectangular",
            "panorama": "assets/lavabo_vista_1.jpeg",
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                // Voltar para Corredor
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Corredor", "sceneId": "corredor_1" }
            ]
        },

        // === SUÍTE 1 ===
        "suite_1_1": {
            "title": "Suíte 1 - Vista Principal",
            "type": "equirectangular",
            "panorama": "assets/suite_1_vista_1.jpeg",
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                // Voltar para Corredor
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Sair da Suíte", "sceneId": "corredor_1" },
                // Para Armário
                { "pitch": 0, "yaw": 90, "type": "scene", "text": "Detalhe do Armário", "sceneId": "suite_1_armario" },
                // Para Banheiro 1
                { "pitch": 0, "yaw": -90, "type": "scene", "text": "Banheiro 1", "sceneId": "banheiro_1" }
            ]
        },
        "suite_1_armario": {
            "title": "Suíte 1 - Armário",
            "type": "equirectangular",
            "panorama": "assets/suite_1_vista_6.jpeg",
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                // Voltar para Vista Principal
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Suíte 1", "sceneId": "suite_1_1" }
            ]
        },
        "banheiro_1": {
            "title": "Banheiro 1",
            "type": "equirectangular",
            "panorama": "assets/banheiro_1_vista_1.jpeg",
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                // Voltar para Suíte 1
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Suíte 1", "sceneId": "suite_1_1" }
            ]
        },

        // === SUÍTE 2 ===
        "suite_2_1": {
            "title": "Suíte 2 - Vista Principal",
            "type": "equirectangular",
            "panorama": "assets/suite_2_vista_1.jpeg",
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                // Voltar para Corredor
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Sair da Suíte", "sceneId": "corredor_1" },
                // Para Escrivaninha
                { "pitch": 0, "yaw": 90, "type": "scene", "text": "Escrivaninha/TV", "sceneId": "suite_2_escrivaninha" },
                // Para Banheiro 2
                { "pitch": 0, "yaw": -90, "type": "scene", "text": "Banheiro 2", "sceneId": "banheiro_2" }
            ]
        },
        "suite_2_escrivaninha": {
            "title": "Suíte 2 - Escrivaninha/TV",
            "type": "equirectangular",
            "panorama": "assets/suite_2_vista_2.jpeg",
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                // Voltar para Vista Principal
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Suíte 2", "sceneId": "suite_2_1" }
            ]
        },
        "banheiro_2": {
            "title": "Banheiro 2",
            "type": "equirectangular",
            "panorama": "assets/banheiro_2_vista_1.jpeg",
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                // Voltar para Suíte 2
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Suíte 2", "sceneId": "suite_2_1" }
            ]
        },

        // === COZINHA / LAVANDERIA ===
        "cozinha_1": {
            "title": "Cozinha - Bancada",
            "type": "equirectangular",
            "panorama": "assets/cozinha_bancada_vista_1.jpeg",
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                // Voltar para Sala
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Sala", "sceneId": "sala_estar_1" },
                // Para Despensa
                { "pitch": 0, "yaw": 90, "type": "scene", "text": "Despensa/Armário", "sceneId": "cozinha_despensa" },
                // Para Lavanderia
                { "pitch": 0, "yaw": -90, "type": "scene", "text": "Lavanderia", "sceneId": "lavanderia_1" }
            ]
        },
        "cozinha_despensa": {
            "title": "Cozinha - Despensa",
            "type": "equirectangular",
            "panorama": "assets/cozinha_despensa_vista_1.jpeg",
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                // Voltar para Bancada
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Cozinha", "sceneId": "cozinha_1" }
            ]
        },
        "lavanderia_1": {
            "title": "Lavanderia",
            "type": "equirectangular",
            "panorama": "assets/lavanderia_vista_2.png",
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                // Voltar para Cozinha
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Cozinha", "sceneId": "cozinha_1" }
            ]
        },

        // === TERRAÇO ===
        "terraço_1": {
            "title": "Terraço Integrado",
            "type": "equirectangular",
            "panorama": "assets/terraço_sala_transicao_1.jpeg",
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                // Voltar para Sala
                { "pitch": 0, "yaw": 180, "type": "scene", "text": "Voltar para Sala de Estar", "sceneId": "sala_estar_1" },
                // Para Área Gourmet
                { "pitch": 0, "yaw": 90, "type": "scene", "text": "Área Gourmet", "sceneId": "terraço_gourmet" }
            ]
        },
        "terraço_gourmet": {
            "title": "Terraço - Área Gourmet",
            "type": "equirectangular",
            "panorama": "assets/terraço_vista_1.jpeg",
            "hfov": 90, "maxHfov": 90, "minHfov": 90,
            "hotSpots": [
                // Voltar para Transição
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
