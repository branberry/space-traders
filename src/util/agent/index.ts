import { getRequestOptions } from '../secrets';

export async function getAgentStatus() {
  const options = getRequestOptions();
  console.log(options);

  const agentStatus = await fetch(
    'https://api.spacetraders.io/v2/my/agent',
    options
  );

  return agentStatus.json();
}

export async function getAgentLocation() {}
