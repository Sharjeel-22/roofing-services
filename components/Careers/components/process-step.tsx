interface ProcessStepProps {
  title: string
  description: string
}

export function ProcessStep({ title, description }: ProcessStepProps) {
  return (
    <div className="text-center">
      <h3 className="text-xl font-bold text-accent mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
