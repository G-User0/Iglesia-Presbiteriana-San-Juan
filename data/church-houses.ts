// Tipo para los datos de la casa iglesia
export interface ChurchHouseData {
    id: string
    title: {
      es: string
      en: string
      ko: string
    }
    date: {
      es: string
      en: string
      ko: string
    }
    calendar: {
      es: string
      en: string
      ko: string
    }
    time: {
      es: string
      en: string
      ko: string
    }
    location: {
      es: string
      en: string
      ko: string
    }
    description: {
      es: string
      en: string
      ko: string
    }
    detailedDescription: {
      es: string
      en: string
      ko: string
    }
    image: string
    pastorName: string
    coPastorName: string
    pastorImage: string
    coPastorImage: string
  }
  
  // Datos de las casas iglesia
  export const churchHousesData: ChurchHouseData[] = [
  {
    id: "1",
    title: {
      es: "Casa Iglesia Nuevo Cañete",
      en: "House Church Nuevo Cañete",
      ko: "누에보 카녜떼 하우스 처치"
    },
    date: {
      es: "Semanal",
      en: "Weekly",
      ko: "매주"
    },
    calendar: {
      es: "Todos los Viernes",
      en: "Every Friday",
      ko: "매주 금요일"
    },
    time: {
      es: "20:00",
      en: "20:00",
      ko: "20:00"
    },
    location: {
      es: "Casa de Mery Guerrera",
      en: "Mery Guerrera's House",
      ko: "메리 게레라의 집"
    },
    description: {
      es: "Un grupo acogedor para familias y personas de todas las edades que se enfoca en el estudio bíblico práctico.",
      en: "A welcoming group for families and individuals of all ages focusing on practical Bible study.",
      ko: "실용적인 성경 공부에 중점을 둔 모든 연령대의 가족과 개인을 위한 환영하는 그룹입니다."
    },
    detailedDescription: {
      es: "Casa Iglesia Nuevo Cañete es una comunidad acogedora donde los creyentes se reúnen para adorar, estudiar la Biblia y apoyarse mutuamente en su camino de fe.",
      en: "House Church Nuevo Cañete is a welcoming community where believers gather to worship, study the Bible, and support each other in their faith journey.",
      ko: "누에보 카녜떼 하우스 처치는 신자들이 예배하고 성경을 공부하며 신앙 여정에서 서로를 지원하는 환영하는 공동체입니다."
    },
    image: "/CH/ncanete.webp",
    pastorName: "John Doe",
    coPastorName: "Jane Smith",
    pastorImage: "/CH/avatar.jpg",
     coPastorImage: "/CH/avatar1.avif"
  },
  {
    id: "2",
    title: {
      es: "Casa Iglesia Morcolla",
      en: "House Church Morcolla",
      ko: "모르코야 하우스 처치"
    },
    date: {
      es: "Semanal",
      en: "Weekly",
      ko: "매주"
    },
    calendar: {
      es: "Todos los Viernes",
      en: "Every Friday",
      ko: "매주 금요일"
    },
    time: {
      es: "20:00",
      en: "20:00",
      ko: "20:00"
    },
    location: {
      es: "Casa de Justiniano Guerrera",
      en: "Justiniano Guerrera's House",
      ko: "후스티니아노 게레라의 집"
    },
    description: {
      es: "Un grupo dinámico que combina adoración contemporánea con enseñanza bíblica sólida.",
      en: "A dynamic group that combines contemporary worship with solid biblical teaching.",
      ko: "현대적인 예배와 확고한 성경적 가르침을 결합한 역동적인 그룹입니다."
    },
    detailedDescription: {
      es: "Casa Iglesia Morcolla es un grupo vibrante que fomenta la adoración y el crecimiento espiritual a través del estudio bíblico profundo y la comunión.",
      en: "House Church Morcolla is a vibrant group fostering worship and spiritual growth through in-depth Bible study and fellowship.",
      ko: "모르코야 하우스 처치는 심도 있는 성경 공부와 교제를 통해 예배와 영적 성장을 촉진하는 활기찬 그룹입니다."
    },
    image: "/CH/morcolla.webp",
    pastorName: "John Doe",
    coPastorName: "Jane Smith",
    pastorImage: "/CH/avatar.jpg",
     coPastorImage: "/CH/avatar1.avif"
  },
  {
    id: "3",
    title: {
      es: "Casa Iglesia Puno",
      en: "House Church Puno",
      ko: "푸노 하우스 처치"
    },
    date: {
      es: "Semanal",
      en: "Weekly",
      ko: "매주"
    },
    calendar: {
      es: "Todos los Viernes",
      en: "Every Friday",
      ko: "매주 금요일"
    },
    time: {
      es: "20:00",
      en: "20:00",
      ko: "20:00"
    },
    location: {
      es: "Casa de Francisco Mayta",
      en: "Francisco Mayta's House",
      ko: "프란시스코 마이타의 집"
    },
    description: {
      es: "Un grupo enfocado en la oración y el apoyo mutuo, ideal para quienes buscan crecimiento espiritual.",
      en: "A group focused on prayer and mutual support, ideal for those seeking spiritual growth.",
      ko: "기도와 상호 지원에 중점을 둔, 영적 성장을 추구하는 사람들에게 이상적인 그룹입니다."
    },
    detailedDescription: {
      es: "Casa Iglesia Puno ofrece un ambiente de oración constante y amistad espiritual, ideal para quienes desean fortalecer su fe y comunidad.",
      en: "House Church Puno offers an environment of constant prayer and spiritual friendship, ideal for those seeking to strengthen their faith and community.",
      ko: "푸노 하우스 처치는 지속적인 기도와 영적 우정을 제공하는 환경으로, 믿음과 공동체를 강화하고자 하는 사람들에게 이상적입니다."
    },
    image: "/CH/puno.webp",
    pastorName: "John Doe",
    coPastorName: "Jane Smith",
    pastorImage: "/CH/avatar.jpg",
     coPastorImage: "/CH/avatar1.avif"
  },
  {
    id: "4",
    title: {
      es: "Casa Iglesia Arequipa",
      en: "House Church Arequipa",
      ko: "아레키파 하우스 처치"
    },
    date: {
      es: "Semanal",
      en: "Weekly",
      ko: "매주"
    },
    calendar: {
      es: "Todos los Viernes",
      en: "Every Friday",
      ko: "매주 금요일"
    },
    time: {
      es: "20:00",
      en: "20:00",
      ko: "20:00"
    },
    location: {
      es: "Casa de Nancy Huillca",
      en: "Nancy Huillca's House",
      ko: "낸시 휘이카의 집"
    },
    description: {
      es: "Un grupo para jóvenes adultos que combina estudio bíblico con actividades sociales y servicio comunitario.",
      en: "A group for young adults combining Bible study with social activities and community service.",
      ko: "성경 공부와 사회 활동, 지역 봉사를 결합한 청년들을 위한 그룹입니다."
    },
    detailedDescription: {
      es: "Casa Iglesia Arequipa brinda a los jóvenes adultos un espacio para compartir, aprender y servir juntos en comunidad.",
      en: "House Church Arequipa provides young adults a space to share, learn, and serve together in community.",
      ko: "아레키파 하우스 처치는 청년들에게 함께 나누고 배우며 공동체 안에서 봉사할 수 있는 공간을 제공합니다."
    },
    image: "/CH/arequipa.webp",
    pastorName: "John Doe",
    coPastorName: "Jane Smith",
    pastorImage: "/CH/avatar.jpg",
     coPastorImage: "/CH/avatar1.avif"
  },
  {
    id: "5",
    title: {
      es: "Casa Iglesia Pasco",
      en: "House Church Pasco",
      ko: "파스코 하우스 처치"
    },
    date: {
      es: "Semanal",
      en: "Weekly",
      ko: "매주"
    },
    calendar: {
      es: "Todos los Viernes",
      en: "Every Friday",
      ko: "매주 금요일"
    },
    time: {
      es: "20:00",
      en: "20:00",
      ko: "20:00"
    },
    location: {
      es: "Casa de Ana Rojas",
      en: "Ana Rojas' House",
      ko: "아나 로하스의 집"
    },
    description: {
      es: "Un grupo para estudiantes universitarios que busca aplicar principios bíblicos a los desafíos académicos y profesionales.",
      en: "A group for university students applying biblical principles to academic and professional challenges.",
      ko: "학업 및 직업적 도전에 성경적 원칙을 적용하려는 대학생들을 위한 그룹입니다."
    },
    detailedDescription: {
      es: "Casa Iglesia Pasco apoya a los estudiantes a integrar su fe con sus estudios y futuro profesional en un entorno de comunidad y discipulado.",
      en: "House Church Pasco supports students in integrating their faith with studies and professional future in a community and discipleship environment.",
      ko: "파스코 하우스 처치는 학생들이 신앙을 학업 및 직업적 미래와 통합할 수 있도록 공동체와 제자 훈련 환경에서 지원합니다."
    },
    image: "/CH/pasco.webp",
    pastorName: "John Doe",
    coPastorName: "Jane Smith",
    pastorImage: "/CH/avatar.jpg",
     coPastorImage: "/CH/avatar1.avif"
  },
  {
    id: "6",
    title: {
      es: "Casa Iglesia México",
      en: "House Church Mexico",
      ko: "멕시코 하우스 처치"
    },
    date: {
      es: "Semanal",
      en: "Weekly",
      ko: "매주"
    },
    calendar: {
      es: "Todos los Viernes",
      en: "Every Friday",
      ko: "매주 금요일"
    },
    time: {
      es: "20:00",
      en: "20:00",
      ko: "20:00"
    },
    location: {
      es: "Casa de Frank Naupari",
      en: "Frank Naupari's House",
      ko: "프랭크 나우파리의 집"
    },
    description: {
      es: "Un grupo familiar que enfatiza el discipulado intergeneracional y la comunidad.",
      en: "A family group emphasizing intergenerational discipleship and community.",
      ko: "세대 간 제자 훈련과 공동체를 강조하는 가족 중심의 그룹입니다."
    },
    detailedDescription: {
      es: "Casa Iglesia México reúne a familias de distintas edades para crecer juntos en el amor de Cristo a través del discipulado y la comunión.",
      en: "House Church Mexico gathers families of all ages to grow together in Christ’s love through discipleship and fellowship.",
      ko: "멕시코 하우스 처치는 모든 연령대의 가족이 제자 훈련과 교제를 통해 그리스도의 사랑 안에서 함께 성장하는 공간입니다."
    },
    image: "/CH/mexico.webp",
    pastorName: "John Doe",
    coPastorName: "Jane Smith",
    pastorImage: "/CH/avatar.jpg",
     coPastorImage: "/CH/avatar1.avif"
  },
  {
  id: "7",
  title: {
    es: "Casa Iglesia Huánuco",
    en: "House Church Huánuco",
    ko: "우아쵸 하우스 처치"
  },
  date: {
    es: "Semanal",
    en: "Weekly",
    ko: "매주"
  },
  calendar: {
    es: "Todos los Viernes",
    en: "Every Friday",
    ko: "매주 금요일"
  },
  time: {
    es: "20:00",
    en: "20:00",
    ko: "20:00"
  },
  location: {
    es: "Casa de Alejandro Contreras",
    en: "Alejandro Contreras' House",
    ko: "알레한드로 콘트레라스의 집"
  },
  description: {
    es: "Un grupo que fomenta la unidad familiar mediante actividades y estudios centrados en Cristo.",
    en: "A group promoting family unity through Christ-centered activities and studies.",
    ko: "그리스도를 중심으로 한 활동과 공부를 통해 가족의 화합을 증진하는 그룹입니다."
  },
  detailedDescription: {
    es: "Casa Iglesia Huánuco busca fortalecer a las familias en la Palabra de Dios y fomentar relaciones sanas dentro del hogar y la comunidad.",
    en: "House Church Huánuco aims to strengthen families in God's Word and promote healthy relationships at home and in the community.",
    ko: "우아쵸 하우스 처치는 하나님의 말씀으로 가족을 강화하고 가정과 공동체 내에서 건강한 관계를 촉진하는 것을 목표로 합니다."
  },
  image: "/CH/huanuco.webp",
  pastorName: "John Doe",
  coPastorName: "Jane Smith",
  pastorImage: "/CH/avatar.jpg",
   coPastorImage: "/CH/avatar1.avif"
},
{
  id: "8",
  title: {
    es: "Casa Iglesia Ica",
    en: "House Church Ica",
    ko: "타크나 하우스 처치"
  },
  date: {
    es: "Semanal",
    en: "Weekly",
    ko: "매주"
  },
  calendar: {
    es: "Todos los Viernes",
    en: "Every Friday",
    ko: "매주 금요일"
  },
  time: {
    es: "20:00",
    en: "20:00",
    ko: "20:00"
  },
  location: {
    es: "Casa de Marta Díaz",
    en: "Marta Díaz's House",
    ko: "마르타 디아스의 집"
  },
  description: {
    es: "Un espacio íntimo para mujeres de todas las edades, enfocado en discipulado y apoyo mutuo.",
    en: "An intimate space for women of all ages, focused on discipleship and mutual support.",
    ko: "모든 연령대의 여성을 위한 제자 훈련과 상호 지원에 초점을 맞춘 친밀한 공간입니다."
  },
  detailedDescription: {
    es: "Casa Iglesia Ica brinda a las mujeres un lugar seguro para compartir, aprender y crecer espiritualmente juntas en el amor de Cristo.",
    en: "House Church Ica offers women a safe space to share, learn, and grow spiritually together in Christ's love.",
    ko: "타크나 하우스 처치는 여성들이 그리스도의 사랑 안에서 함께 나누고 배우며 영적으로 성장할 수 있는 안전한 공간을 제공합니다."
  },
  image: "/CH/ica.webp",
  pastorName: "John Doe",
  coPastorName: "Jane Smith",
  pastorImage: "/CH/avatar.jpg",
   coPastorImage: "/CH/avatar1.avif"
},
{
  id: "9",
  title: {
    es: "Casa Iglesia Ecuador",
    en: "House Church Ecuador",
    ko: "아야꾸초 하우스 처치"
  },
  date: {
    es: "Semanal",
    en: "Weekly",
    ko: "매주"
  },
  calendar: {
    es: "Todos los Viernes",
    en: "Every Friday",
    ko: "매주 금요일"
  },
  time: {
    es: "20:00",
    en: "20:00",
    ko: "20:00"
  },
  location: {
    es: "Casa de Alberto Quispe",
    en: "Alberto Quispe's House",
    ko: "알베르토 키스페의 집"
  },
  description: {
    es: "Una comunidad que celebra la fe a través de cantos, oración y estudio bíblico contextualizado.",
    en: "A community celebrating faith through songs, prayer, and contextualized Bible study.",
    ko: "찬양, 기도, 상황에 맞는 성경 공부를 통해 신앙을 기념하는 공동체입니다."
  },
  detailedDescription: {
    es: "Casa Iglesia Ecuador conecta la cultura local con la fe cristiana para vivir el evangelio de forma auténtica.",
    en: "House Church Ecuador connects local culture with Christian faith to live out the gospel authentically.",
    ko: "아야꾸초 하우스 처치는 지역 문화를 기독교 신앙과 연결하여 복음을 진정성 있게 살아갑니다."
  },
  image: "/CH/ecuador.webp",
  pastorName: "John Doe",
  coPastorName: "Jane Smith",
  pastorImage: "/CH/avatar.jpg",
   coPastorImage: "/CH/avatar1.avif"
},
{
  id: "10",
  title: {
    es: "Casa Iglesia Ancash",
    en: "House Church Ancash",
    ko: "우앙까요 하우스 처치"
  },
  date: {
    es: "Semanal",
    en: "Weekly",
    ko: "매주"
  },
  calendar: {
    es: "Todos los Viernes",
    en: "Every Friday",
    ko: "매주 금요일"
  },
  time: {
    es: "20:00",
    en: "20:00",
    ko: "20:00"
  },
  location: {
    es: "Casa de Lidia Ramos",
    en: "Lidia Ramos' House",
    ko: "리디아 라모스의 집"
  },
  description: {
    es: "Un grupo con enfoque misionero y evangelístico, abierto a nuevos creyentes.",
    en: "A mission- and evangelism-focused group, open to new believers.",
    ko: "선교와 전도에 중점을 두고 새로운 신자들에게 열려 있는 그룹입니다."
  },
  detailedDescription: {
    es: "Casa Iglesia Huancayo busca alcanzar a los no creyentes con el mensaje de Cristo, promoviendo el evangelismo y la hospitalidad.",
    en: "House Church Huancayo seeks to reach non-believers with Christ's message, promoting evangelism and hospitality.",
    ko: "우앙까요 하우스 처치는 그리스도의 메시지로 불신자들에게 다가가며 전도와 환대를 촉진합니다."
  },
  image: "/CH/ancash.webp",
  pastorName: "John Doe",
  coPastorName: "Jane Smith",
  pastorImage: "/CH/avatar.jpg",
   coPastorImage: "/CH/avatar1.avif"
},
{
  id: "11",
  title: {
    es: "Casa Iglesia Costa Rica",
    en: "House Church Iquitos",
    ko: "이끼또스 하우스 처치"
  },
  date: {
    es: "Semanal",
    en: "Weekly",
    ko: "매주"
  },
  calendar: {
    es: "Todos los Viernes",
    en: "Every Friday",
    ko: "매주 금요일"
  },
  time: {
    es: "20:00",
    en: "20:00",
    ko: "20:00"
  },
  location: {
    es: "Casa de Rosita Aguilar",
    en: "Rosita Aguilar's House",
    ko: "로시타 아길라르의 집"
  },
  description: {
    es: "Un grupo con enfoque en la creación y el cuidado del medio ambiente desde una perspectiva bíblica.",
    en: "A group focused on creation care and environmental stewardship from a biblical perspective.",
    ko: "성경적 관점에서 창조와 환경 보호에 중점을 둔 그룹입니다."
  },
  detailedDescription: {
    es: "Casa Iglesia Iquitos promueve la mayordomía ambiental y el amor por la creación de Dios como expresión de fe.",
    en: "House Church Iquitos promotes environmental stewardship and love for God's creation as an expression of faith.",
    ko: "이끼또스 하우스 처치는 신앙의 표현으로서 하나님의 창조물을 사랑하고 환경을 잘 관리하는 것을 촉진합니다."
  },
  image: "/CH/404.svg",
  pastorName: "John Doe",
  coPastorName: "Jane Smith",
  pastorImage: "/CH/avatar.jpg",
   coPastorImage: "/CH/avatar1.avif"
},
{
  id: "12",
  title: {
    es: "Casa Iglesia La Merced",
    en: "House Church Tarapoto",
    ko: "따라뽀또 하우스 처치"
  },
  date: {
    es: "Semanal",
    en: "Weekly",
    ko: "매주"
  },
  calendar: {
    es: "Todos los Viernes",
    en: "Every Friday",
    ko: "매주 금요일"
  },
  time: {
    es: "20:00",
    en: "20:00",
    ko: "20:00"
  },
  location: {
    es: "Casa de Julio Torres",
    en: "Julio Torres' House",
    ko: "훌리오 토레스의 집"
  },
  description: {
    es: "Un grupo enfocado en el discipulado de nuevas generaciones y el uso de tecnologías en la fe.",
    en: "A group focused on discipling new generations and using technology in faith.",
    ko: "새로운 세대를 제자 훈련하고 신앙 안에서 기술을 활용하는 데 중점을 둔 그룹입니다."
  },
  detailedDescription: {
    es: "Casa Iglesia Tarapoto trabaja con jóvenes y adolescentes, integrando herramientas digitales para el crecimiento espiritual.",
    en: "House Church Tarapoto works with youth and teens, integrating digital tools for spiritual growth.",
    ko: "따라뽀또 하우스 처치는 청소년과 청년들과 함께하며, 영적 성장을 위해 디지털 도구를 통합합니다."
  },
  image: "/CH/lmerced.webp",
  pastorName: "John Doe",
  coPastorName: "Jane Smith",
  pastorImage: "/CH/avatar.jpg",
   coPastorImage: "/CH/avatar1.avif"
  },
  {
  id: "13",
  title: {
    es: "Casa Iglesia Cuzco",
    en: "House Church Cuzco",
    ko: "푸노 하우스 처치"
  },
  date: {
    es: "Semanal",
    en: "Weekly",
    ko: "매주"
  },
  calendar: {
    es: "Todos los Viernes",
    en: "Every Friday",
    ko: "매주 금요일"
  },
  time: {
    es: "20:00",
    en: "20:00",
    ko: "20:00"
  },
  location: {
    es: "Casa de Karina Mamani",
    en: "Karina Mamani's House",
    ko: "카리나 마마니의 집"
  },
  description: {
    es: "Un grupo que promueve la reconciliación y sanidad emocional a través del evangelio.",
    en: "A group promoting reconciliation and emotional healing through the gospel.",
    ko: "복음을 통해 화해와 정서적 치유를 촉진하는 그룹입니다."
  },
  detailedDescription: {
    es: "Casa Iglesia Cuzco brinda un entorno donde las personas pueden experimentar restauración integral en Cristo.",
    en: "House Church Cuzco provides a space where people can experience holistic restoration in Christ.",
    ko: "푸노 하우스 처치는 사람들이 그리스도 안에서 온전한 회복을 경험할 수 있는 공간을 제공합니다."
  },
  image: "/CH/cuzco.webp",
  pastorName: "John Doe",
  coPastorName: "Jane Smith",
  pastorImage: "/CH/avatar.jpg",
  coPastorImage: "/CH/avatar1.avif"
},
{
  id: "14",
  title: {
    es: "Casa Iglesia Chanchamayo",
    en: "House Church Chanchamayo",
    ko: "아레끼빠 하우스 처치"
  },
  date: {
    es: "Semanal",
    en: "Weekly",
    ko: "매주"
  },
  calendar: {
    es: "Todos los Viernes",
    en: "Every Friday",
    ko: "매주 금요일"
  },
  time: {
    es: "20:00",
    en: "20:00",
    ko: "20:00"
  },
  location: {
    es: "Casa de Luis Zeballos",
    en: "Luis Zeballos' House",
    ko: "루이스 세바요스의 집"
  },
  description: {
    es: "Un espacio de comunión y enseñanza bíblica para toda la familia.",
    en: "A space for fellowship and biblical teaching for the whole family.",
    ko: "가족 모두를 위한 교제와 성경 가르침의 공간입니다."
  },
  detailedDescription: {
    es: "Casa Iglesia Arequipa está comprometida con la formación espiritual de familias enteras en el amor de Dios.",
    en: "House Church Arequipa is committed to the spiritual formation of entire families in God’s love.",
    ko: "아레끼빠 하우스 처치는 하나님의 사랑 안에서 가족 전체의 영적 성장을 위해 헌신합니다."
  },
  image: "/CH/chanchamayo.webp",
  pastorName: "John Doe",
  coPastorName: "Jane Smith",
  pastorImage: "/CH/avatar.jpg",
  coPastorImage: "/CH/avatar1.avif"
},
{
  id: "15",
  title: {
    es: "Casa Iglesia Panamá",
    en: "House Church Panama",
    ko: "모께과 하우스 처치"
  },
  date: {
    es: "Semanal",
    en: "Weekly",
    ko: "매주"
  },
  calendar: {
    es: "Todos los Viernes",
    en: "Every Friday",
    ko: "매주 금요일"
  },
  time: {
    es: "20:00",
    en: "20:00",
    ko: "20:00"
  },
  location: {
    es: "Casa de Carmen Flores",
    en: "Carmen Flores' House",
    ko: "카르멘 플로레스의 집"
  },
  description: {
    es: "Un grupo orientado al estudio profundo de las Escrituras y la oración intercesora.",
    en: "A group focused on deep Scripture study and intercessory prayer.",
    ko: "성경 깊이 공부와 중보 기도에 초점을 맞춘 그룹입니다."
  },
  detailedDescription: {
    es: "Casa Iglesia Moquegua se caracteriza por su compromiso con la oración ferviente y la enseñanza bíblica sólida.",
    en: "House Church Moquegua is known for its commitment to fervent prayer and solid biblical teaching.",
    ko: "모께과 하우스 처치는 열정적인 기도와 견고한 성경 가르침에 헌신하는 것으로 잘 알려져 있습니다."
  },
  image: "/CH/panamá.webp",
  pastorName: "John Doe",
  coPastorName: "Jane Smith",
  pastorImage: "/CH/avatar.jpg",
  coPastorImage: "/CH/avatar1.avif"
},
{
  id: "16",
  title: {
    es: "Casa Iglesia Bolivia",
    en: "House Church Bolivia",
    ko: "꾸스꼬 하우스 처치"
  },
  date: {
    es: "Semanal",
    en: "Weekly",
    ko: "매주"
  },
  calendar: {
    es: "Todos los Viernes",
    en: "Every Friday",
    ko: "매주 금요일"
  },
  time: {
    es: "20:00",
    en: "20:00",
    ko: "20:00"
  },
  location: {
    es: "Casa de Diego Llosa",
    en: "Diego Llosa's House",
    ko: "디에고 요사의 집"
  },
  description: {
    es: "Una comunidad que integra la cultura andina en la vivencia del evangelio.",
    en: "A community that integrates Andean culture into gospel living.",
    ko: "복음의 삶에 안데스 문화를 통합하는 공동체입니다."
  },
  detailedDescription: {
    es: "Casa Iglesia Cuzco busca expresar el evangelio de forma contextual y relevante a través del arte, la música y la tradición local.",
    en: "House Church Cuzco seeks to express the gospel contextually and relevantly through local art, music, and tradition.",
    ko: "꾸스꼬 하우스 처치는 지역 예술, 음악, 전통을 통해 복음을 상황에 맞게 표현하려고 합니다."
  },
  image: "/CH/bolivia.webp",
  pastorName: "John Doe",
  coPastorName: "Jane Smith",
  pastorImage: "/CH/avatar.jpg",
  coPastorImage: "/CH/avatar1.avif"
},
{
  id: "17",
  title: {
    es: "Casa Iglesia Amazonas",
    en: "House Church Amazonas",
    ko: "훌리아까 하우스 처치"
  },
  date: {
    es: "Semanal",
    en: "Weekly",
    ko: "매주"
  },
  calendar: {
    es: "Todos los Viernes",
    en: "Every Friday",
    ko: "매주 금요일"
  },
  time: {
    es: "20:00",
    en: "20:00",
    ko: "20:00"
  },
  location: {
    es: "Casa de Nancy Choque",
    en: "Nancy Choque's House",
    ko: "낸시 쵸께의 집"
  },
  description: {
    es: "Una iglesia en casa centrada en la adoración y la alabanza con música tradicional.",
    en: "A house church focused on worship and praise with traditional music.",
    ko: "전통 음악과 함께 예배와 찬양에 중점을 둔 하우스 처치입니다."
  },
  detailedDescription: {
    es: "Casa Iglesia Juliaca transmite el gozo del Señor a través del canto y la danza que celebran la fe.",
    en: "House Church Juliaca conveys the joy of the Lord through singing and dancing that celebrates faith.",
    ko: "훌리아까 하우스 처치는 신앙을 기념하는 노래와 춤을 통해 주님의 기쁨을 전합니다."
  },
  image: "/CH/amazonas.webp",
  pastorName: "John Doe",
  coPastorName: "Jane Smith",
  pastorImage: "/CH/avatar.jpg",
  coPastorImage: "/CH/avatar1.avif"
},
{
  id: "18",
  title: {
    es: "Casa Iglesia San Martín",
    en: "House Church San Martín",
    ko: "침보다 하우스 처치"
  },
  date: {
    es: "Semanal",
    en: "Weekly",
    ko: "매주"
  },
  calendar: {
    es: "Todos los Viernes",
    en: "Every Friday",
    ko: "매주 금요일"
  },
  time: {
    es: "20:00",
    en: "20:00",
    ko: "20:00"
  },
  location: {
    es: "Casa de Juan Pérez",
    en: "Juan Pérez's House",
    ko: "후안 페레스의 집"
  },
  description: {
    es: "Una comunidad vibrante centrada en el servicio y las obras sociales.",
    en: "A vibrant community focused on service and social outreach.",
    ko: "봉사와 사회적 실천에 중점을 둔 활기찬 공동체입니다."
  },
  detailedDescription: {
    es: "Casa Iglesia Chimbote practica el amor al prójimo a través de campañas de ayuda, comedores y apoyo comunitario.",
    en: "House Church Chimbote practices love for neighbor through aid drives, food programs, and community support.",
    ko: "침보다 하우스 처치는 지원 캠페인, 급식 프로그램, 지역사회 지원을 통해 이웃 사랑을 실천합니다."
  },
  image: "/CH/smartín.webp",
  pastorName: "John Doe",
  coPastorName: "Jane Smith",
  pastorImage: "/CH/avatar.jpg",
  coPastorImage: "/CH/avatar1.avif"
},
{
  id: "19",
  title: {
    es: "Casa Iglesia Venezuela",
    en: "House Church Venezuela",
    ko: "침보다 하우스 처치"
  },
  date: {
    es: "Semanal",
    en: "Weekly",
    ko: "매주"
  },
  calendar: {
    es: "Todos los Viernes",
    en: "Every Friday",
    ko: "매주 금요일"
  },
  time: {
    es: "20:00",
    en: "20:00",
    ko: "20:00"
  },
  location: {
    es: "Casa de Juan Pérez",
    en: "Juan Pérez's House",
    ko: "후안 페레스의 집"
  },
  description: {
    es: "Una comunidad vibrante centrada en el servicio y las obras sociales.",
    en: "A vibrant community focused on service and social outreach.",
    ko: "봉사와 사회적 실천에 중점을 둔 활기찬 공동체입니다."
  },
  detailedDescription: {
    es: "Casa Iglesia Chimbote practica el amor al prójimo a través de campañas de ayuda, comedores y apoyo comunitario.",
    en: "House Church Chimbote practices love for neighbor through aid drives, food programs, and community support.",
    ko: "침보다 하우스 처치는 지원 캠페인, 급식 프로그램, 지역사회 지원을 통해 이웃 사랑을 실천합니다."
  },
  image: "/CH/venezuela.webp",
  pastorName: "John Doe",
  coPastorName: "Jane Smith",
  pastorImage: "/CH/avatar.jpg",
  coPastorImage: "/CH/avatar1.avif"
}


]
