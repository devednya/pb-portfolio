export const events = [
  {
    id: 'mental-health-workshop',
    title: 'A Space for Feelings',
    date: '2025-03-15',
    time: '2:00 PM',
    venue: 'TBD',
    description: 'A guided art session on black canvas. After watching a short two minute film about feelings, you\'re invited to draw whatever arises, no right or wrong, just what you felt in the moment. A supportive space for self-expression and gentle reflection.',
    imageFolder: 'mental-health-workshop',
    tags: ['Wellness', 'Mindfulness', 'Community'],
    past: false,
    bookingUrl: null,
  },
  {
    id: 'sip-and-paint',
    title: 'Sip and Paint',
    date: '2025-03-22',
    time: '6:00 PM',
    venue: 'TBD',
    description: 'Unwind with a drink and paint, no experience needed. A social evening of creativity and connection.',
    imageFolder: 'sip-and-paint',
    tags: ['Social', 'Painting', 'Beginners'],
    past: false,
    bookingUrl: null,
  },
  {
    id: 'tote-bag-painting',
    title: 'Tote Bag Painting',
    date: '2025-04-05',
    time: '3:00 PM',
    venue: 'TBD',
    description: 'A Friendship\'s Day special. Guided drawings and tracing paper were provided so everyone could create whatever they liked and personalise their tote bag. Design and paint your own to take home, a fun craft for all skill levels.',
    imageFolder: 'tote-bag-painting',
    tags: ['Crafts', 'DIY', 'Take home'],
    past: false,
    bookingUrl: null,
  },
]

export function getEventById(id) {
  return events.find((e) => e.id === id)
}

export function getUpcomingEvents() {
  return events.filter((e) => !e.past)
}

export function getPastEvents() {
  return events.filter((e) => e.past)
}
