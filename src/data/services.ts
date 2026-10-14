import { photos } from './site'

export type Service = {
  slug: string
  title: string
  short: string
  photo: string
  alt: string
  intro: string[]
  considerations: string[]
  process: string[]
  related: string[]
}

export const services: Service[] = [
  {
    slug: 'residential-interior-design',
    title: 'Residential Interior Design',
    short: 'Considered interiors for individual rooms or connected living spaces, shaped around how a household lives.',
    photo: photos.modernOpen,
    alt: 'Bright open-plan residential interior with a pale sofa, wood-clad wall and large windows',
    intro: [
      'Residential interior design looks at a home as a place to live in, not just to look at. The aim is to bring together layout, colour, materials and furnishings so that each space feels comfortable, practical and visually calm.',
      'Whether an enquiry concerns one room or several, the starting point is the same: how the space is used today, what works well, and what could be improved.',
    ],
    considerations: [
      'Daily routines and how each room is used',
      'Natural light, orientation and views',
      'A colour and material palette that flows between rooms',
      'Balancing storage with open, uncluttered areas',
    ],
    process: ['Talk through the rooms and priorities', 'Review the existing space', 'Explore a design direction', 'Refine colours, materials and pieces'],
    related: ['living-room-design', 'whole-home-interior-design', 'space-planning-and-interior-styling'],
  },
  {
    slug: 'living-room-design',
    title: 'Living Room Design',
    short: 'Relaxed, welcoming living rooms with comfortable seating, layered lighting and a calm sense of order.',
    photo: photos.sageLiving,
    alt: 'Soft neutral living room with a light grey sofa, knitted throw and pale walls',
    intro: [
      'The living room often has to do many things at once: a place to unwind, to gather with family or guests, and sometimes to work or play. Good design helps these uses sit together comfortably.',
      'Attention goes to seating arrangements, circulation, lighting for different times of day and the textures that make a room feel inviting.',
    ],
    considerations: [
      'Seating layout and conversation areas',
      'Layered lighting: ambient, task and accent',
      'Soft furnishings, rugs and texture',
      'Display and storage for everyday items',
    ],
    process: ['Discuss how the room is used', 'Consider layout and focal points', 'Propose a mood and palette', 'Refine furniture and finishing touches'],
    related: ['furniture-and-material-selection', 'space-planning-and-interior-styling', 'bedroom-design'],
  },
  {
    slug: 'bedroom-design',
    title: 'Bedroom Design',
    short: 'Restful bedrooms with soft palettes, thoughtful storage and a quiet, uncluttered atmosphere.',
    photo: photos.creamBedroom,
    alt: 'Cream bedroom with an upholstered headboard, layered bedding and bedside lamps',
    intro: [
      'A bedroom should feel restful. Design for this space tends to favour softer colours, gentle lighting and materials that feel good to the touch.',
      'Storage is just as important: well-planned wardrobes and bedside arrangements help keep the room calm and easy to maintain.',
    ],
    considerations: [
      'Bed position, circulation and natural light',
      'Wardrobe and storage planning',
      'Soft, warm lighting for evenings',
      'Fabrics, headboards and window treatments',
    ],
    process: ['Understand routines and needs', 'Plan the layout and storage', 'Suggest a restful palette', 'Refine textiles and lighting'],
    related: ['living-room-design', 'furniture-and-material-selection', 'bathroom-interior-design'],
  },
  {
    slug: 'kitchen-interior-design',
    title: 'Kitchen Interior Design',
    short: 'Kitchen interiors that balance practical working space with finishes and details that feel warm and lasting.',
    photo: photos.darkKitchen,
    alt: 'Contemporary kitchen with dark lower cabinets, open wooden shelves and a pendant light',
    intro: [
      'The kitchen is frequently the busiest room in a home. Interior design here focuses on the look and feel of the space: cabinetry finishes, worktops, lighting, colour and how the kitchen connects to surrounding rooms.',
      'The goal is a kitchen that is pleasant to spend time in and practical for everyday cooking and gathering.',
    ],
    considerations: [
      'Work zones and everyday movement',
      'Cabinet colours, worktops and hardware',
      'Task lighting and pendant lighting',
      'Connection with dining and living areas',
    ],
    process: ['Discuss how the kitchen is used', 'Review layout and flow', 'Explore finishes and colour', 'Refine lighting and details'],
    related: ['furniture-and-material-selection', 'whole-home-interior-design', 'bathroom-interior-design'],
  },
  {
    slug: 'bathroom-interior-design',
    title: 'Bathroom Interior Design',
    short: 'Calm, light-filled bathrooms with considered tiling, fittings and finishes.',
    photo: photos.tubBathroom,
    alt: 'Bright bathroom with a freestanding bath, white basin and green plants',
    intro: [
      'Bathrooms are often compact, so every decision counts. Interior design for these spaces looks at tiles, fittings, lighting, mirrors and storage to create a room that feels clean and relaxing.',
      'A restrained palette and good lighting can make a modest bathroom feel more spacious and comfortable.',
    ],
    considerations: [
      'Tile choices, patterns and grout colours',
      'Fittings, taps and finishes',
      'Mirror placement and lighting',
      'Concealed storage for a tidy feel',
    ],
    process: ['Talk through priorities', 'Understand the space and light', 'Suggest a palette of materials', 'Refine fittings and finishes'],
    related: ['kitchen-interior-design', 'bedroom-design', 'furniture-and-material-selection'],
  },
  {
    slug: 'space-planning-and-interior-styling',
    title: 'Space Planning and Interior Styling',
    short: 'Clear layouts and finishing touches that help rooms work better and feel complete.',
    photo: photos.openPlan,
    alt: 'Open-plan apartment with a dining table, living area and soft daylight',
    intro: [
      'Space planning is about arranging a room so that it works: how people move through it, where furniture sits and how different activities share the same area.',
      'Interior styling follows on, adding the artwork, accessories, plants and textiles that give a room character and a sense of being finished.',
    ],
    considerations: [
      'Circulation routes and furniture spacing',
      'Zoning open-plan areas',
      'Scale and proportion of pieces',
      'Accessories, artwork and greenery',
    ],
    process: ['Discuss what is not working', 'Look at the room and its measurements', 'Explore layout options', 'Refine styling and details'],
    related: ['living-room-design', 'residential-interior-design', 'furniture-and-material-selection'],
  },
  {
    slug: 'furniture-and-material-selection',
    title: 'Furniture and Material Selection',
    short: 'Guidance on furniture, fabrics and finishes that suit the space, the palette and everyday use.',
    photo: photos.sofaDetail,
    alt: 'Close-up of a terracotta upholstered sofa with a soft pink cushion',
    intro: [
      'Choosing furniture and materials can feel overwhelming. This service focuses on selecting pieces, fabrics and finishes that sit well together and suit the way a space is used.',
      'Consideration is given to comfort, scale, durability and how materials will look in the natural light of the room.',
    ],
    considerations: [
      'Proportion of furniture to the room',
      'Fabric texture, colour and practicality',
      'Wood, stone and metal finishes',
      'Bringing existing pieces into a new scheme',
    ],
    process: ['Understand style and practical needs', 'Review the space and existing items', 'Gather options and samples', 'Refine the final selection'],
    related: ['living-room-design', 'bedroom-design', 'space-planning-and-interior-styling'],
  },
  {
    slug: 'whole-home-interior-design',
    title: 'Whole-Home Interior Design',
    short: 'A cohesive design direction carried across the whole home, so every room feels connected.',
    photo: photos.brightOpen,
    alt: 'Spacious open living area with large windows, neutral sofas and a dining space beyond',
    intro: [
      'Whole-home interior design looks at the property as one connected scheme. Rather than designing rooms in isolation, the palette, materials and mood are planned to flow from one space to the next.',
      'This approach can be helpful when moving into a new home or refreshing several rooms at once.',
    ],
    considerations: [
      'A consistent colour and material story',
      'Transitions between rooms and floors',
      'Priorities and the order rooms are tackled',
      'Distinct character for each room within one scheme',
    ],
    process: ['Discuss the home as a whole', 'Walk through each space', 'Explore an overall direction', 'Refine room-by-room details'],
    related: ['residential-interior-design', 'kitchen-interior-design', 'space-planning-and-interior-styling'],
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
