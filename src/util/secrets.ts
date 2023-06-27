export function getAgentToken(): string {
  const { AGENT_TOKEN } = process.env;
  if (!AGENT_TOKEN) throw new Error('Agent token is not defined');
  return AGENT_TOKEN;
}

const agentToken = getAgentToken();

const options: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${agentToken}`,
  },
};

export function getRequestOptions() {
  return options;
}
