// Mock data para países e cidades educacionais

export const countries = [
  {
    id: 1,
    name: "Brasil",
    code: "BR",
    flag: "🇧🇷",
    coordinates: { lat: -14.235, lng: -51.925 },
    population: "215 milhões",
    capital: "Brasília",
    language: "Português",
    currency: "Real (BRL)",
    area: "8.515.767 km²",
    description: "O Brasil é o maior país da América do Sul e o quinto maior do mundo em área territorial. Conhecido por sua diversidade cultural, florestas tropicais e praias espetaculares.",
    facts: [
      "A Floresta Amazônica cobre cerca de 60% do território brasileiro",
      "O Brasil é o único país lusófono das Américas",
      "Possui a maior biodiversidade do planeta"
    ]
  },
  {
    id: 2,
    name: "Estados Unidos",
    code: "US",
    flag: "🇺🇸",
    coordinates: { lat: 37.09, lng: -95.71 },
    population: "331 milhões",
    capital: "Washington D.C.",
    language: "Inglês",
    currency: "Dólar (USD)",
    area: "9.833.520 km²",
    description: "Os Estados Unidos são uma potência econômica e cultural global, conhecidos por sua diversidade, inovação tecnológica e influência mundial.",
    facts: [
      "Lar do Vale do Silício, centro global de tecnologia",
      "Possui 50 estados e diversos territórios",
      "Terceiro país mais populoso do mundo"
    ]
  },
  {
    id: 3,
    name: "China",
    code: "CN",
    flag: "🇨🇳",
    coordinates: { lat: 35.86, lng: 104.19 },
    population: "1.4 bilhões",
    capital: "Pequim",
    language: "Mandarim",
    currency: "Yuan (CNY)",
    area: "9.596.961 km²",
    description: "A China é a nação mais populosa do mundo e uma das civilizações mais antigas. É uma potência econômica em rápido crescimento e líder em manufatura.",
    facts: [
      "A Grande Muralha tem mais de 21.000 km de extensão",
      "Inventou o papel, a pólvora, a bússola e a impressão",
      "Segunda maior economia do mundo"
    ]
  },
  {
    id: 4,
    name: "Japão",
    code: "JP",
    flag: "🇯🇵",
    coordinates: { lat: 36.20, lng: 138.25 },
    population: "125 milhões",
    capital: "Tóquio",
    language: "Japonês",
    currency: "Iene (JPY)",
    area: "377.975 km²",
    description: "O Japão é um arquipélago no Leste da Ásia, conhecido por sua fusão única de tradição e tecnologia avançada, cultura pop e culinária refinada.",
    facts: [
      "Possui mais de 6.800 ilhas",
      "Líder mundial em tecnologia e inovação",
      "Tóquio é a maior área metropolitana do mundo"
    ]
  },
  {
    id: 5,
    name: "França",
    code: "FR",
    flag: "🇫🇷",
    coordinates: { lat: 46.22, lng: 2.21 },
    population: "67 milhões",
    capital: "Paris",
    language: "Francês",
    currency: "Euro (EUR)",
    area: "643.801 km²",
    description: "A França é conhecida por sua rica história, cultura, arte, moda e culinária. Paris é considerada uma das capitais culturais do mundo.",
    facts: [
      "País mais visitado do mundo",
      "Lar da Torre Eiffel e do Museu do Louvre",
      "Berço da Revolução Francesa"
    ]
  },
  {
    id: 6,
    name: "Alemanha",
    code: "DE",
    flag: "🇩🇪",
    coordinates: { lat: 51.16, lng: 10.45 },
    population: "83 milhões",
    capital: "Berlim",
    language: "Alemão",
    currency: "Euro (EUR)",
    area: "357.022 km²",
    description: "A Alemanha é a maior economia da Europa, conhecida por sua engenharia de precisão, indústria automobilística e rica herança cultural.",
    facts: [
      "Líder europeu em energia renovável",
      "Berço de grandes compositores como Beethoven e Bach",
      "Possui mais de 25.000 castelos"
    ]
  },
  {
    id: 7,
    name: "Índia",
    code: "IN",
    flag: "🇮🇳",
    coordinates: { lat: 20.59, lng: 78.96 },
    population: "1.4 bilhões",
    capital: "Nova Délhi",
    language: "Hindi, Inglês",
    currency: "Rúpia (INR)",
    area: "3.287.263 km²",
    description: "A Índia é a maior democracia do mundo, com uma civilização milenar, diversidade cultural incomparável e crescimento econômico acelerado.",
    facts: [
      "Berço de quatro grandes religiões: hinduísmo, budismo, jainismo e sikhismo",
      "Possui 22 idiomas oficiais",
      "Centro global de tecnologia da informação"
    ]
  },
  {
    id: 8,
    name: "Austrália",
    code: "AU",
    flag: "🇦🇺",
    coordinates: { lat: -25.27, lng: 133.77 },
    population: "26 milhões",
    capital: "Camberra",
    language: "Inglês",
    currency: "Dólar Australiano (AUD)",
    area: "7.692.024 km²",
    description: "A Austrália é um país-continente conhecido por sua natureza única, praias espetaculares e fauna exótica, incluindo cangurus e coalas.",
    facts: [
      "Maior país da Oceania",
      "Lar da Grande Barreira de Corais",
      "80% de sua flora e fauna são únicas no mundo"
    ]
  },
  {
    id: 9,
    name: "Canadá",
    code: "CA",
    flag: "🇨🇦",
    coordinates: { lat: 56.13, lng: -106.34 },
    population: "38 milhões",
    capital: "Ottawa",
    language: "Inglês, Francês",
    currency: "Dólar Canadense (CAD)",
    area: "9.984.670 km²",
    description: "O Canadá é o segundo maior país do mundo em área territorial, conhecido por sua natureza selvagem, qualidade de vida e diversidade multicultural.",
    facts: [
      "Possui a costa mais longa do mundo",
      "Mais de 2 milhões de lagos",
      "País bilíngue oficial (inglês e francês)"
    ]
  },
  {
    id: 10,
    name: "Egito",
    code: "EG",
    flag: "🇪🇬",
    coordinates: { lat: 26.82, lng: 30.80 },
    population: "104 milhões",
    capital: "Cairo",
    language: "Árabe",
    currency: "Libra Egípcia (EGP)",
    area: "1.002.450 km²",
    description: "O Egito é o berço de uma das civilizações mais antigas do mundo, famoso pelas pirâmides, faraós e o Rio Nilo.",
    facts: [
      "As pirâmides de Gizé têm mais de 4.500 anos",
      "O Rio Nilo é o mais longo do mundo",
      "A antiga biblioteca de Alexandria foi a maior do mundo"
    ]
  }
];

export const cities = [
  {
    id: 1,
    name: "São Paulo",
    country: "Brasil",
    coordinates: { lat: -23.55, lng: -46.63 },
    population: "12.3 milhões",
    description: "A maior cidade do Brasil e da América do Sul, centro financeiro e cultural.",
    highlights: ["Maior metrópole da América do Sul", "Centro financeiro do Brasil", "Diversidade gastronômica"]
  },
  {
    id: 2,
    name: "Tóquio",
    country: "Japão",
    coordinates: { lat: 35.68, lng: 139.69 },
    population: "37.4 milhões",
    description: "A maior área metropolitana do mundo, fusão perfeita de tradição e tecnologia.",
    highlights: ["Maior metrópole do mundo", "Capital da tecnologia", "Cultura pop japonesa"]
  },
  {
    id: 3,
    name: "Paris",
    country: "França",
    coordinates: { lat: 48.85, lng: 2.35 },
    population: "2.2 milhões",
    description: "A Cidade Luz, capital da moda, arte e cultura.",
    highlights: ["Torre Eiffel", "Museu do Louvre", "Capital da moda"]
  },
  {
    id: 4,
    name: "Nova York",
    country: "Estados Unidos",
    coordinates: { lat: 40.71, lng: -74.00 },
    population: "8.3 milhões",
    description: "A cidade que nunca dorme, centro financeiro e cultural global.",
    highlights: ["Wall Street", "Broadway", "Estátua da Liberdade"]
  },
  {
    id: 5,
    name: "Xangai",
    country: "China",
    coordinates: { lat: 31.23, lng: 121.47 },
    population: "27.8 milhões",
    description: "Centro financeiro da China, metrópole ultramoderna.",
    highlights: ["Maior porto do mundo", "Skyline futurista", "Centro financeiro"]
  },
  {
    id: 6,
    name: "Sydney",
    country: "Austrália",
    coordinates: { lat: -33.86, lng: 151.20 },
    population: "5.3 milhões",
    description: "Cidade icônica com a famosa Ópera e Harbour Bridge.",
    highlights: ["Sydney Opera House", "Harbour Bridge", "Praias famosas"]
  },
  {
    id: 7,
    name: "Mumbai",
    country: "Índia",
    coordinates: { lat: 19.07, lng: 72.87 },
    population: "20.4 milhões",
    description: "Centro financeiro da Índia e lar de Bollywood.",
    highlights: ["Bollywood", "Porto histórico", "Diversidade cultural"]
  },
  {
    id: 8,
    name: "Toronto",
    country: "Canadá",
    coordinates: { lat: 43.65, lng: -79.38 },
    population: "2.9 milhões",
    description: "A maior cidade do Canadá, conhecida por sua diversidade.",
    highlights: ["CN Tower", "Multiculturalismo", "Centro cultural"]
  }
];
