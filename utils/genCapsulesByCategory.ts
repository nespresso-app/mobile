import { CapsuleT } from "../types";

export const genCapsulesByCategory = (capsules: CapsuleT[]) => {
  const capsulesByCategory: {
    [category: string]: CapsuleT[];
  } = {};

  capsules.forEach((cap) => {
    if (cap.category in capsulesByCategory) {
      capsulesByCategory[cap.category].push(cap);
    } else {
      capsulesByCategory[cap.category] = [cap];
    }
  });

  return capsulesByCategory;
};
