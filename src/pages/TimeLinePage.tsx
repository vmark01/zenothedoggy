import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab'
import { Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import type {Event} from '../components/Event'

const events: Event[] = [
  {
    title: 'Szent Ferenc Állatotthon',
    date: '2023-04-15',
    description: "Örökbefogadásom napja",
  },
  {
    title: 'Balatonszemes',
    date: '2023-07-03',
    description: "Első fürdés a Balatonban",
  },
  {
    title: 'Tahtitótfalu, sátrazás',
    date: '2023-07-22',
    description: 'Első éjszakám sátorban',
  },
  {
    title: 'Szarvas',
    date: '2023-08-13',
    description: "Arborétum és wellness",
  },
  {
    title: 'RepTár, Szolnok',
    date: '2023-08-19',
    description: 'Beengedtek egy kiállításra',
  },
  {
    title: 'Aggtelek',
    date: '2023-12-16',
    description: 'Rengeteg kirándulás a hidegben',
  },
  {
    title: 'Balatonboglár',
    date: '2024-06-22',
    description: 'Kilátó',
  },
  {
    title: 'Deseda',
    date: '2024-06-24',
    description: 'Csónakázás',
  },
  {
    title: 'Szeged',
    date: '2024-07-21',
    description: "Saját házikó",
  },
  {
    title: 'Mosonmagyaróvár',
    date: '2024-08-09',
    description: 'Városnézés',
  },
  {
    title: 'Rovinj, Horvátország',
    date: '2024-09-12',
    description: 'Első fürdés a tengerben',
  },
  {
    title: 'Kranjska Gora, Szlovénia',
    date: '2025-04-21',
    description: 'Hegymászás és rengeteg kirándulás',
  },
  {
    title: 'Kis Baktói Vendégház, Szeged',
    date: '2025-07-27',
    description: 'Legjobb kutyabarát vendégház Szegeden',
  },
]

export default function TimelinePage() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const sortedEvents = [...events].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Zénó kalandjai:</h2>
      <Timeline position={isSmallScreen ? 'right' : 'alternate'}>
        {sortedEvents.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              color="text.secondary"
              sx={{
                display: isSmallScreen ? 'none' : 'block',
              }}
            >
              {new Date(event.date).toLocaleDateString()}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index < sortedEvents.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">{event.title}</Typography>
              <Typography variant="body2">{event.description}</Typography>
              {isSmallScreen && (
                <Typography variant="caption" color="text.secondary">
                  {new Date(event.date).toLocaleDateString()}
                </Typography>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}