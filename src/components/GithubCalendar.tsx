'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { type FunctionComponent, useCallback, useEffect, useState } from 'react'
import { ActivityCalendar, type Props as ActivityCalendarProps } from 'react-activity-calendar'

interface Props extends Omit<ActivityCalendarProps, 'data' | 'theme'> {
  username: string
  year?: number
}

async function fetchCalendarData(username: string, year?: number): Promise<ApiResponse> {
  const currentYear = new Date().getFullYear()
  const yearParam = year || currentYear
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=${yearParam}`,
  )
  const data: ApiResponse | ApiErrorResponse = await response.json()

  if (!response.ok) {
    throw Error(
      `Fetching GitHub contribution data for "${username}" failed: ${
        (data as ApiErrorResponse).error
      }`,
    )
  }

  return data as ApiResponse
}

const GithubCalendar: FunctionComponent<Props> = ({ username, year, ...props }) => {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [isDark, setIsDark] = useState(false)

  const fetchData = useCallback(() => {
    setLoading(true)
    setError(null)
    fetchCalendarData(username, year)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [username, year])

  useEffect(fetchData, [fetchData])

  // Check theme on mount and when it changes
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.getAttribute('data-theme') === 'dark')
    }
    
    checkTheme()
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
    
    return () => observer.disconnect()
  }, [])

  // Theme colors using Rustic Charm palette
  // Carbon Black (#252422), Charcoal Brown (#403d39), Silver (#ccc5b9), Spicy Paprika (#eb5e28)
  const theme = {
    dark: [
      '#252422', // Carbon Black - no contributions
      '#403d39', // Charcoal Brown - level 1
      '#6b4d3a', // Medium brown - level 2
      '#a85a2e', // Medium orange - level 3
      '#eb5e28', // Spicy Paprika - max level 4
    ],
    light: [
      '#ccc5b9', // Silver - no contributions
      '#d4c4b0', // Light silver-brown - level 1
      '#c99a7a', // Light brown - level 2
      '#d87a4a', // Medium orange - level 3
      '#eb5e28', // Spicy Paprika - max level 4
    ],
  }
  
  const colorScheme = isDark ? 'dark' : 'light'

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <p className="text-muted-foreground text-center text-sm">
          Unable to load GitHub contributions.
        </p>
      </div>
    )
  }

  if (loading || !data) {
    return <Skeleton className="h-[150px] w-full" />
  }

  // Filter contributions for the specified year (or current year)
  const targetYear = year || new Date().getFullYear()
  const yearData = data.contributions.filter((activity) => {
    const activityDate = new Date(activity.date)
    return activityDate.getFullYear() === targetYear
  })

  return (
    <div className="[&_.react-activity-calendar\\_\\_legend-month]:text-foreground/80 w-full overflow-x-auto flex justify-center">
      <ActivityCalendar
        data={yearData}
        theme={theme}
        colorScheme={colorScheme}
        blockSize={12}
        blockMargin={4}
        blockRadius={3}
        {...props}
        maxLevel={4}
        weekStart={0}
      />
    </div>
  )
}

interface Activity {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

interface ApiResponse {
  total: {
    [year: number]: number
    [year: string]: number
  }
  contributions: Array<Activity>
}

interface ApiErrorResponse {
  error: string
}

export default GithubCalendar
