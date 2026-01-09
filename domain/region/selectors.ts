import { REGION_METADATA } from './constants';
import type { Region } from './types';

export function getAllRegions(): Region[] {
  return Object.keys(REGION_METADATA) as Region[];
}

export function getRegionTitle(region: Region): string {
  return REGION_METADATA[region].title;
}
