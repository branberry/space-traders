import { readFileSync } from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';

const accountInfoPath = join(__dirname, '../../../../secret.json');
const accountInfo = JSON.parse(readFileSync(accountInfoPath).toString());

export async function GET(_request: NextRequest) {
  return NextResponse.json({ ...accountInfo });
}
