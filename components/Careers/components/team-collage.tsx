export function TeamCollage() {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <img
            src="/professional-team-member-working-at-desk.jpg"
            alt="Team member working"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="/team-collaboration.png"
            alt="Team collaboration"
            className="w-full h-36 object-cover rounded-lg"
          />
        </div>
        <div className="space-y-4 pt-8">
          <img
            src="/office-workspace-setup.jpg"
            alt="Office workspace"
            className="w-full h-32 object-cover rounded-lg"
          />
          <img
            src="/team-member-with-laptop-working.jpg"
            alt="Team member working"
            className="w-full h-44 object-cover rounded-lg"
          />
          <img
            src="/professional-workspace-laptop.png"
            alt="Professional workspace"
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}
