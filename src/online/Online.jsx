import { useOnline } from './OnlineHook'

export default function Online() {
  const isOnline = useOnline()
  return <h1>{isOnline ? 'Online 🟢' : 'Offline 🔴'}</h1>
}
