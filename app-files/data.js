var APP_DATA = {
  "scenes": [
    {
      "id": "0-sector-medio",
      "name": "sector medio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 720,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5730294618806351,
          "pitch": 1.485263028693729,
          "rotation": 0,
          "target": "2-sector-industrial"
        },
        {
          "yaw": 0.24682914634604813,
          "pitch": -1.2409060120371809,
          "rotation": 0,
          "target": "1-sector-clase-alta"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.48206888848913465,
          "pitch": -0.9677611863447151,
          "title": "Inicio de las profundidades",
          "text": "La jerarquia de esta sociedad se estratifica por cuanta luz pueden recibir los residentes. Aqui empieza a notarse la diferencia entre la pudencia de los de arriba y la inecualidad de los de abajo"
        },
        {
          "yaw": 0.40792285693064656,
          "pitch": 0.012524638887763118,
          "title": "Sector medio",
          "text": "Aqui residen los trabajadores y habitantes comunes y corrientes, el mantenimiento de este sector se centra en mantener los sistemas básicos y una higiene general adecuada. Se empiezan a ver signos de desgaste generalizado. Esta gente recibe el reflejo de la luz del sol."
        },
        {
          "yaw": -1.8973325175575546,
          "pitch": 1.3538415258259668,
          "title": "Las profundidades/sectores industriales",
          "text": "Mientras mas se baja los espacios empiezan a ser usados para la producción de bienes básicos, es una zona meramente industrial."
        }
      ]
    },
    {
      "id": "1-sector-clase-alta",
      "name": "sector clase alta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 720,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4666376446515219,
          "pitch": 0.7971954807045343,
          "rotation": 0,
          "target": "0-sector-medio"
        },
        {
          "yaw": 0.07739827029315194,
          "pitch": 1.2012570157560116,
          "rotation": 0,
          "target": "3-sector-bajo-maquinaria"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.350796510643095,
          "pitch": 0.2534404877612282,
          "title": "Condominios de clase alta",
          "text": "Habitaciones y penthouses solo para la clase mas acomodada.<div>La luz natural del sol es algo común aquí.</div>"
        },
        {
          "yaw": 0.7380708457944714,
          "pitch": 1.2184015702793154,
          "title": "Espacio recreacional",
          "text": "El lujo da lugar a usar espacios utiles con fines de ocio"
        },
        {
          "yaw": 1.1396756495373452,
          "pitch": 0.03492421408143187,
          "title": "Ciudad destruida",
          "text": "Paisaje del recorrido de la WC, memorias de aquellos que no llegaron a subirse a una..."
        }
      ]
    },
    {
      "id": "2-sector-industrial",
      "name": "sector industrial",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 720,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06325884548005689,
          "pitch": -0.003972139526734253,
          "rotation": 0,
          "target": "3-sector-bajo-maquinaria"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6645243382350472,
          "pitch": 0.37356354341924103,
          "title": "Mecanismo motor de la ciudad",
          "text": "Estas salas son el centro vital de la ciudad como concepto. Aqui no llega la luz pues no se espera que nadie resida por estos lares."
        }
      ]
    },
    {
      "id": "3-sector-bajo-maquinaria",
      "name": "sector bajo maquinaria",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 720,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2509930633375159,
          "pitch": -0.9997544323036465,
          "rotation": 0,
          "target": "1-sector-clase-alta"
        },
        {
          "yaw": 3.1279251101334093,
          "pitch": -0.00927561637612584,
          "rotation": 0,
          "target": "2-sector-industrial"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9378266982282426,
          "pitch": 0.043673358263237816,
          "title": "Mecanismo motor de la ciudad",
          "text": "Estas salas son el centro vital de la ciudad como concepto. Aqui no llega la luz pues no se espera que nadie resida por estos lares."
        },
        {
          "yaw": 0.5594126240716797,
          "pitch": -0.5559115667444257,
          "title": "Estructuras informales",
          "text": "Los desamparados han construido estructuras ligeras para poder moverse alrededor de esta zona."
        },
        {
          "yaw": -0.7488126616093087,
          "pitch": 0.221975494645271,
          "title": "Asentamientos irregurales",
          "text": "Los desamparados e irregulares han hecho de esta sala de maquina su hogar"
        },
        {
          "yaw": 0.5429965226708937,
          "pitch": -0.9134225546904275,
          "title": "Falsa luz",
          "text": "Dado a que aquí no llega ni un apice de luz del sol, los residentes han ingeniado una luz que la recrea, sin los beneficios de la luz solar y las consecuencias que eso acarrea."
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
