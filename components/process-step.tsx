interface ProcessStepProps {
  title: string
  description: string
}

export function ProcessStep({ title, description }: ProcessStepProps) {
  return (
    <div className="p-9 border-[#EFF0F6] border">
      <h3 className="text-xl text-[#63CDF6] mb-4 border-b border-b-[#EFF0F6]">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}