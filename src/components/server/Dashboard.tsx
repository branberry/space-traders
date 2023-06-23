import { getAgentToken } from '@/util/secrets';
import { Scene } from '../client/three/Scene';

async function getLocation() {
  const accountToken = getAgentToken();
}
export async function Dashboard() {
  return (
    <div className="absolute h-screen w-screen">
      <Scene />
    </div>
  );
}
