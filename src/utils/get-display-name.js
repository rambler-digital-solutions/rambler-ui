export default function getDisplayName(Target) {
  return Target.displayName || Target.name || 'Component'
}
