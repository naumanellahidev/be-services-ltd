export const business = {
  name: 'BE SERVICES LTD',
  type: 'Interior Design',
  addressLines: ['5 Wadsworth Road', 'Perivale, Greenford', 'UB6 7JD, United Kingdom'],
  addressOneLine: '5 Wadsworth Road, Perivale, Greenford, UB6 7JD, United Kingdom',
  email: 'info@beserviceslimited.co.uk',
  phone: '+447932055272',
  phoneDisplay: '+44 7932 055272',
  tel: 'tel:+447932055272',
  mailto: 'mailto:info@beserviceslimited.co.uk',
  maps: 'https://www.google.com/maps/search/?api=1&query=5+Wadsworth+Road%2C+Perivale%2C+Greenford%2C+UB6+7JD%2C+United+Kingdom',
  developerUrl: 'https://naumanellahi.com',
}

export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

export const photos = {
  heroLiving: '1618221195710-dd6b41faaea6',
  creamLiving: '1616486338812-3dadae4b4ace',
  plantsLiving: '1600210492486-724fe5c67fb0',
  darkBedroom: '1616594039964-ae9021a400a0',
  greenDining: '1617806118233-18e1de247200',
  greyBedroom: '1631049307264-da0ec9d70304',
  whiteKitchen: '1556911220-bff31c812dba',
  openStairs: '1600566753086-00f18fb6b3ea',
  plantBathroom: '1552321554-5fefe8c9ef14',
  glassBathroom: '1584622650111-993a426fbf0a',
  tubBathroom: '1620626011761-996317b8d101',
  greenWall: '1615873968403-89e068629265',
  sofaDetail: '1567016432779-094069958ea5',
  greenSofa: '1555041469-a586c61ea9bc',
  creamBedroom: '1505693416388-ac5ce068fe85',
  openPlan: '1522708323590-d24dbb6b0267',
  sunnyLiving: '1502672260266-1c1ef2d93688',
  modernOpen: '1600607687939-ce8a6c25118c',
  warmLiving: '1617103996702-96ff29b1c467',
  hallConsole: '1618219908412-a29a1bb7b86e',
  darkKitchen: '1600489000022-c2086d79f9d4',
  sageLiving: '1583847268964-b28dc8f51f92',
  roundedLiving: '1631679706909-1844bbd07221',
  brightOpen: '1560448204-e02f11c3d0e2',
  shelfStyling: '1594026112284-02bb6f3352fe',
}

export const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/our-approach', label: 'Our Approach' },
  { to: '/contact', label: 'Contact' },
] as const
