export const customMap = [
    {
      //area que não são ruas
      elementType: 'geometry',
      stylers: [
        {
          color: '#F5F5F5',
        },
      ],
    },
    {
    //texto
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#000000',
        },
      ],
    },
    {
      //borda do texto
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: 'none',
        },
      ],
    },
    {
      featureType: 'administrative.locality',
      //texto dos locais administrativos
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#000000',
        },
      ],
    },
    {
      featureType: 'poi',
      //texto de outros locais
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#000000',
        },
      ],
    },
    {
      featureType: 'poi.park',
      //parques
      elementType: 'geometry',
      stylers: [
        {
          color: '#91ca9e',
        },
      ],
    },
    {
      featureType: 'poi.park',
      //texto dos parques
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#ffffff'
        },
      ],
    },
    {
      featureType: 'road',
      //estradas
      elementType: 'geometry',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'road',
      //borda das estradas
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'road',
      //texto das estradas
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      //linhas das rodovias?
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#fff000',
        },
      ],
    },
    {
      featureType: 'road.highway',
      //bordas das rodovias
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#1f2835',
        },
      ],
    },
    {
      featureType: 'road.highway',
      //texto das linhas das rodovias
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#f3d19c',
        },
      ],
    },
    {
      featureType: 'transit',
      //trânsito
      elementType: 'geometry',
      stylers: [
        {
          color: '#2f3948',
        },
      ],
    },
    {
      featureType: 'transit.station',
      //linhas do mêtro
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#fff000',
        },
      ],
    },
    {
      featureType: 'water',
      //água
      elementType: 'geometry',
      stylers: [
        {
          color: '#4294ff',
        },
      ],
    },
    {
      featureType: 'water',
      //texto da (água)
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#515c6d',
        },
      ],
    },
    {
      featureType: 'water',
      //bordas da água
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#17263c',
        },
      ],
    },
  ];
