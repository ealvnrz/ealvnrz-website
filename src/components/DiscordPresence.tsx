import { useMemo, useState, useEffect } from 'react'
import { useLanyard } from 'react-use-lanyard'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import AvatarComponent from '@/components/ui/avatar'

type DiscordStatus = 'online' | 'idle' | 'dnd' | 'offline'

interface Activity {
  type: number
  application_id?: string
  name?: string
  details?: string
  state?: string
  timestamps?: {
    start?: number
    end?: number
  }
  assets?: {
    large_image?: string
    small_image?: string
  }
}

const DiscordSkeleton = () => (
  <div className="relative overflow-hidden">
    <div className="grid size-full grid-rows-4">
      <Skeleton className="bg-muted/50" />
      <div className="row-span-3 flex flex-col gap-3 p-3">
        <div className="flex justify-between gap-x-1">
          <Skeleton className="-mt-[3rem] aspect-square size-20 rounded-full" />
          <Skeleton className="h-6 w-[118px] rounded-xl" />
        </div>
        <Skeleton className="flex h-[62px] flex-col gap-y-1 rounded-xl p-3" />
        <Skeleton className="flex min-h-[80px] grow rounded-xl p-2" />
      </div>
    </div>
  </div>
)

const StatusIndicator = ({ status }: { status: DiscordStatus }) => {
  const statusClasses = {
    online: 'bg-primary flex items-center justify-center',
    idle: 'bg-primary',
    dnd: 'bg-destructive flex items-center justify-center',
    offline: 'bg-muted-foreground flex items-center justify-center',
  }

  return (
    <div
      className={cn(
        'border-background absolute right-0 bottom-0 size-6 rounded-full border-4',
        statusClasses[status],
      )}
    >
      {status === 'idle' && (
        <div className="bg-background size-[10px] rounded-full" />
      )}
      {status === 'dnd' && (
        <div className="bg-background h-[4px] w-[11px] rounded-full" />
      )}
      {status === 'offline' && (
        <div className="bg-background size-2 rounded-full" />
      )}
    </div>
  )
}

const ActivityDisplay = ({ activity }: { activity: Activity }) => {
  const [elapsedTime, setElapsedTime] = useState('')
  const [spotifyProgress, setSpotifyProgress] = useState<{
    currentTime: string
    totalTime: string
    progress: number
    isFinished: boolean
  } | null>(null)

  useEffect(() => {
    if (!activity?.timestamps?.start) return

    const isSpotify = activity.name === 'Spotify' && activity.type === 2

    const updateProgress = () => {
      if (isSpotify) {
        const progress = getSpotifyProgress()
        setSpotifyProgress(progress)
      } else {
        if (activity.timestamps?.start) {
          setElapsedTime(getElapsedTime(activity.timestamps.start))
        }
      }
    }

    updateProgress()
    const intervalId = setInterval(updateProgress, 1000)

    return () => clearInterval(intervalId)
  }, [activity])

  const getActivityImageUrl = (imageKey: 'large_image' | 'small_image') => {
    const imageValue = activity.assets?.[imageKey]
    if (!imageValue) return ''

    // Spotify image
    if (imageValue.startsWith('spotify:')) {
      const spotifyImageId = imageValue.replace('spotify:', '')
      return `https://i.scdn.co/image/${spotifyImageId}`
    }
    // External image (mp:external)
    else if (imageValue.startsWith('mp:external/')) {
      return processExternalImageUrl(imageValue)
    }
    // Discord media proxy
    else if (imageValue.startsWith('mp:')) {
      return `https://media.discordapp.net/${imageValue.replace('mp:', '')}`
    }
    // Default Discord CDN
    else {
      return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${imageValue}`
    }
  }

  const getElapsedTime = (unixTimestamp: number): string => {
    const createdAt = new Date(unixTimestamp)
    const now = new Date()
    let difference = now.getTime() - createdAt.getTime()
    const hours = Math.floor(difference / (1000 * 60 * 60))
    difference -= hours * (1000 * 60 * 60)
    const minutes = Math.floor(difference / (1000 * 60))
    difference -= minutes * (1000 * 60)
    const seconds = Math.floor(difference / 1000)
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')} elapsed`
  }

  const formatTime = (ms: number): string => {
    const seconds = Math.floor(ms / 1000)
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const getSpotifyProgress = () => {
    if (!activity.timestamps?.start || !activity.timestamps?.end) return null

    const now = Date.now()
    const start = activity.timestamps.start
    const end = activity.timestamps.end
    const duration = end - start
    const elapsed = now - start

    const isFinished = elapsed >= duration
    const progress = Math.max(0, Math.min(1, elapsed / duration))

    return {
      currentTime: formatTime(isFinished ? duration : Math.max(0, elapsed)),
      totalTime: formatTime(duration),
      progress: progress * 100,
      isFinished,
    }
  }

  const processExternalImageUrl = (imageValue: string) => {
    const fullPath = imageValue.replace('mp:external/', '')
    const firstSlashIndex = fullPath.indexOf('/')

    if (firstSlashIndex !== -1) {
      const urlPath = fullPath.substring(firstSlashIndex + 1)

      try {
        if (urlPath.startsWith('https/')) {
          const decodedPath = decodeURIComponent(urlPath.substring(6))
          return 'https://' + decodedPath
        } else if (urlPath.startsWith('http/')) {
          const decodedPath = decodeURIComponent(urlPath.substring(5))
          return 'http://' + decodedPath
        }
      } catch (e) {
        console.error('Error decoding URL:', e)
      }
    }

    return ''
  }

  const isSpotify = activity.name === 'Spotify' && activity.type === 2

  return (
    <div className="flex w-full items-center gap-x-3">
      <div
        className="relative aspect-square h-full w-auto flex-shrink-0 rounded-md bg-contain"
        style={{
          backgroundImage: `url('${getActivityImageUrl('large_image')}')`,
        }}
      >
        {activity.assets?.small_image && (
          <img
            src={getActivityImageUrl('small_image')}
            alt="Now Playing"
            width={20}
            height={20}
            className="absolute -right-1 -bottom-1 rounded-full border-2"
          />
        )}
      </div>
      <div className="my-2 flex min-w-0 flex-1 flex-col gap-y-1 overflow-hidden">
        {activity.name && (
          <div className="mb-0.5 truncate text-xs leading-none">
            {activity.name}
          </div>
        )}
        {activity.details && (
          <div className="text-muted-foreground truncate text-[10px] leading-none">
            {activity.details}
          </div>
        )}
        {activity.state && (
          <div className="text-muted-foreground truncate text-[10px] leading-none">
            {activity.state}
          </div>
        )}

        {isSpotify && spotifyProgress ? (
          <div className="flex items-center gap-x-2 mt-1">
            <span className="text-muted-foreground font-mono text-[9px] leading-none">
              {spotifyProgress.currentTime}
            </span>
            <div className="bg-muted-foreground/20 h-1 flex-1 overflow-hidden rounded-full">
              <div
                className="bg-primary h-full transition-all duration-1000 ease-linear"
                style={{
                  width: `${spotifyProgress.progress}%`,
                }}
              />
            </div>
            <span className="text-muted-foreground font-mono text-[9px] leading-none">
              {spotifyProgress.totalTime}
            </span>
          </div>
        ) : (
          elapsedTime && (
            <div className="text-muted-foreground text-[11px] leading-none mt-1">
              {elapsedTime}
            </div>
          )
        )}
      </div>
    </div>
  )
}

interface DiscordPresenceProps {
  userId: string
  username?: string
  avatarSrc?: string
}

const DiscordPresence = ({ userId, username = 'peperclipp', avatarSrc }: DiscordPresenceProps) => {
  const { data: lanyard, isLoading, error } = useLanyard({
    userId: userId,
  })

  const mainActivity = useMemo(() => {
    if (!lanyard?.data?.activities) return null

    // Priority: Custom status (type 0) -> Spotify (type 2)
    const codingActivity = lanyard.data.activities.find(
      (activity: Activity) => activity.type === 0 && activity.assets,
    )

    if (codingActivity) return codingActivity

    // Then check for Spotify activity
    const spotifyActivity = lanyard.data.activities.find(
      (activity: Activity) =>
        activity.type === 2 && activity.name === 'Spotify',
    )

    return spotifyActivity || null
  }, [lanyard?.data?.activities])

  if (isLoading) {
    return <DiscordSkeleton />
  }

  if (error || !lanyard || !lanyard.data) {
    return (
      <section className="border bg-muted/30">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-3">Now Playing</h2>
          <div className="text-muted-foreground text-sm space-y-2">
            <p>
              Discord presence not available. To enable this feature:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-2">
              <li>Join the Lanyard Discord server: <a href="https://discord.gg/lanyard" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">discord.gg/lanyard</a></li>
              <li>Run the command: <code className="bg-muted px-1 rounded">/subscribe</code></li>
              <li>Make sure Discord Rich Presence is enabled in Discord Settings → Activity Privacy</li>
              <li>Connect Spotify in Discord Settings → Connections → Spotify</li>
            </ol>
            <p className="text-xs mt-3 opacity-75">
              The Lanyard API requires you to opt-in by joining their Discord server and subscribing.
            </p>
          </div>
        </div>
      </section>
    )
  }

  const status = lanyard.data.discord_status as DiscordStatus
  const avatarUrl = lanyard.data.discord_user?.avatar
    ? `https://cdn.discordapp.com/avatars/${userId}/${lanyard.data.discord_user.avatar}.png`
    : avatarSrc

  return (
    <section className="border bg-muted/30">
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">Now Playing</h2>
          {username && (
            <a
              href={`https://discord.com/users/${userId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary underline"
            >
              @{username}
            </a>
          )}
        </div>

        <div className="relative">
          <div className="grid grid-rows-4">
            <div className="bg-muted/50"></div>
            <div className="row-span-3 flex flex-col gap-3 p-3">
              {/* Avatar and status */}
              <div className="flex justify-between gap-x-1">
                <div className="relative">
                  <AvatarComponent
                    src={avatarUrl}
                    alt="Discord Avatar"
                    fallback={username.charAt(0).toUpperCase()}
                    className="-mt-[3rem] aspect-square size-20 rounded-full"
                  />
                  <StatusIndicator status={status} />
                </div>
              </div>

              {/* Username */}
              <div className="bg-muted/50 flex flex-col gap-y-1 rounded-xl p-3">
                <span className="text-base leading-none">{username}</span>
                <span className="text-muted-foreground text-xs leading-none">
                  {lanyard.data.discord_user?.username || username}
                </span>
              </div>

              {/* Activity */}
              <div className="bg-muted/50 flex min-h-[80px] grow rounded-xl px-3 py-2">
                {mainActivity ? (
                  <ActivityDisplay activity={mainActivity as Activity} />
                ) : (
                  <div className="flex size-full flex-col items-center justify-center gap-1">
                    <div className="text-muted-foreground text-[10px]">
                      No status!
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiscordPresence
