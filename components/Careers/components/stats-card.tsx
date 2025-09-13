interface StatsCardProps {
  icon: string
  title: string
  subtitle?: string
  description: string
}

export function StatsCard({ icon, title, subtitle, description }: StatsCardProps) {
  return (
    <div className="flex items-center gap-4 p-6 bg-card rounded-lg border">
      <div className="text-3xl">{icon}</div>
      <div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-bold text-accent">{title}</h3>
          {subtitle && <span className="text-sm text-accent">{subtitle}</span>}
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
