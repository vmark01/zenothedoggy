import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab'
import { Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import type {Event} from '../components/Event'
import { useTranslation } from "react-i18next";



export default function TimelinePage() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const { t } = useTranslation();

  const events: Event[] = [
  {
    title: t('places.szentFerencName'),
    date: '2023-04-15',
    description: t('places.szentFerencDesc'),
  },
  {
    title: t('places.balatonszemesName'),
    date: '2023-07-03',
    description: t('places.balatonszemesDesc'),
  },
  {
    title: t('places.tahitotfaluName'),
    date: '2023-07-22',
    description: t('places.tahitotfaluDesc'),
  },
  {
    title: t('places.arboretumName'),
    date: '2023-08-13',
    description: t('places.arboretumDesc'),
  },
  {
    title: t('places.reptarName'),
    date: '2023-08-19',
    description: t('places.reptarDesc'),
  },
  {
    title: t('places.aggtelekName'),
    date: '2023-12-16',
    description: t('places.aggtelekDesc'),
  },
  {
    title: t('places.balatonboglarName'),
    date: '2024-06-22',
    description: t('places.balatonboglarDesc'),
  },
  {
    title: t('places.DesedaName'),
    date: '2024-06-24',
    description: t('places.DesedaDesc'),
  },
  {
    title: t('places.kisBaktoiName'),
    date: '2024-07-21',
    description: t('places.kisBaktoiDesc'),
  },
  {
    title: t('places.mosonmagyarovarName'),
    date: '2024-08-09',
    description: t('places.mosonmagyarovarDesc'),
  },
  {
    title: t('places.rovinjName'),
    date: '2024-09-12',
    description: t('places.rovinjDesc'),
  },
  {
    title: t('places.kranjskaName'),
    date: '2025-04-21',
    description: t('places.kranjskaDesc'),
  },
  {
    title: t('places.kisBaktoiName'),
    date: '2025-07-27',
    description: t('places.kisBaktoiDesc'),
  },
]

  const sortedEvents = [...events].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4"> {t('zenokaland')} </h2>
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