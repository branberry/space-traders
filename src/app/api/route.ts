import { getAgentStatus } from '@/util/agent';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_request: NextRequest) {
  const agentStatus = await getAgentStatus();
  return NextResponse.json(agentStatus);
}
