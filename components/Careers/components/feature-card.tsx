interface FeatureCardProps {
  title: string
  description: string
  image: string
}

export function FeatureCard({ title, description, image }: FeatureCardProps) {
  return (
    <div className="bg-background rounded-lg overflow-hidden shadow-sm border">
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
