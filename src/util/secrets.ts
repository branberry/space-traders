import { readFileSync } from 'fs';
import { join } from 'path';
import { AgentInfo } from './types';

const accountInfoPath = join(__dirname, '../../../secret.json');
let accountInfo: AgentInfo;

export function getAgentToken(): string {
  if (accountInfo) {
    return accountInfo.data.token;
  }

  try {
    accountInfo = JSON.parse(readFileSync(accountInfoPath).toString());
    return accountInfo.data.token;
  } catch (e) {
    return '';
  }
}
