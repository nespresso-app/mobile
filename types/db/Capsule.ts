export type CapsuleT = {
  id: string;
  category: CapsuleCategoryT;
  name: string;
  description: string;
  intensity: CapsuleIntensityT;
  cupSizes: CapsuleCupSizeT[];
  price: number;
  color: string;
  thumbnailUrl: string;
  headerUrl: string;
  isFavorite: boolean;
  inStock: number;
  aromaticProfile?: string;
  aromaticNotes?: string;
  origin?: string;
};

export type CapsuleCategoryT =
  | "Master Origins"
  | "Ispirazione Italiana"
  | "Espresso & Lungo"
  | "Barista Creations";

export type CapsuleIntensityT =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13;

export type CapsuleCupSizeT = "sm" | "md" | "lg";
