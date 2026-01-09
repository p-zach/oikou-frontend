import { Region } from "@/domain/region";
import { RegionUserData } from "@/domain/user";

// Metadata & user data mock
// TODO: Retrieve from API instead
export const mock_region_data: Record<Region, RegionUserData> = {
  europe: {
    mastery: {
      capitals: .6,
      flags: .12,
      neighbors: .2,
    },
  },
  americas: {
    mastery: {
      capitals: .4,
      flags: .3,
      neighbors: .7,
    },
  },
  africa: {
    mastery: {
      capitals: .9,
      flags: .1,
      neighbors: .8,
    },
  },
}