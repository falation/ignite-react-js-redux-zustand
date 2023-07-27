import { PlayCircle, Video } from 'lucide-react'

interface LessonProps {
  name: string
  duration: string
  isCurrent: boolean
  onPlay: () => {}
}

export function Lesson({ isCurrent = false, name, duration, onPlay }: LessonProps) {
  return (
    <button
      className='flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100'
      data-active={isCurrent}
      disabled={isCurrent}
      onClick={onPlay}
    >
      {isCurrent ? <PlayCircle className='w-4 h-4 text-emerald-400' /> : <Video className='w-4 h-4 text-zinc-500' />}
      <span>{name}</span>
      <span className='ml-auto font-mono text-xs text-zinc-500'>{duration}</span>
    </button>
  )
}