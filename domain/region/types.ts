import { REGION_METADATA } from './constants';

export type Region = keyof typeof REGION_METADATA;

export type RegionMetadata = typeof REGION_METADATA[Region];
