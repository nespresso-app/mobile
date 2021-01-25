import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { CapsuleT } from "../../types";

export const createCapsule = (
  data: Omit<CapsuleT, "id" | "isFavorite" | "inStock">
): CapsuleT => {
  const id = uuidv4();
  return {
    ...data,
    id,
    isFavorite: false,
    inStock: 0,
  };
};
