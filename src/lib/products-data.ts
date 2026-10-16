export interface ProductGrade {
  id: string;
  num: string;
  grade: string;
  family: "In-Can Preservatives" | "Industrial Biocides" | "Dry Film Preservatives";
  targetApplication: string;
  badge?: string;
  description: string;
  slug: string;
}

export const PRODUCTS_CATALOGUE: ProductGrade[] = [
  {
    id: "prod-01",
    num: "01",
    grade: "GuardExo FMT",
    family: "In-Can Preservatives",
    targetApplication: "Emulsions, PVA slurries, formaldehyde-free matrix",
    description: "Advanced formaldehyde-free wet-state preservation designed specifically for polymer emulsions and architectural coatings.",
    slug: "guardexo-fmt"
  },
  {
    id: "prod-02",
    num: "02",
    grade: "GuardExo CMT 15",
    family: "In-Can Preservatives",
    targetApplication: "CMIT/MIT 1.5% aqueous solution, high shock resistance",
    description: "Broad-spectrum microbicide providing rapid kill kinetics and robust headspace protection in aqueous manufacturing environments.",
    slug: "guardexo-cmt-15"
  },
  {
    id: "prod-03",
    num: "03",
    grade: "GuardExo CMT 14",
    family: "Industrial Biocides",
    targetApplication: "Recirculating industrial cooling water, broad pH 2-9",
    description: "Engineered biocide for cooling towers and industrial loop defense, preventing aggressive slime and biofilm accumulation.",
    slug: "guardexo-cmt-14"
  },
  {
    id: "prod-04",
    num: "04",
    grade: "GuardExo BT 20P",
    family: "In-Can Preservatives",
    targetApplication: "BIT 20% in propylene glycol, zero VOC compliance",
    description: "High-purity Benzisothiazolinone formulated in glycol for eco-compliant zero-VOC paints, slurries, and adhesives.",
    slug: "guardexo-bt-20p"
  },
  {
    id: "prod-05",
    num: "05",
    grade: "GuardExo BT 20",
    family: "Industrial Biocides",
    targetApplication: "Standard dipropylene glycol biocide for plant systems",
    description: "Dependable long-term preservation for industrial fluid reservoirs, process waters, and alkaline chemical systems.",
    slug: "guardexo-bt-20"
  },
  {
    id: "prod-06",
    num: "06",
    grade: "GuardExo BT 20D",
    family: "In-Can Preservatives",
    targetApplication: "Aqueous dispersion BIT for alkaline construction pastes",
    description: "Specialized water-based BIT dispersion for plaster, tile adhesives, cementitious mortars, and high-pH construction products.",
    slug: "guardexo-bt-20d"
  },
  {
    id: "prod-07",
    num: "07",
    grade: "GuardExo BT 10 MW",
    family: "Dry Film Preservatives",
    targetApplication: "Synergistic BIT + OIT dispersion for exterior masonry",
    description: "High-potency synergistic blend delivering multi-year resistance against fungal bloom and black algae under tropical humidity.",
    slug: "guardexo-bt-10-mw"
  },
  {
    id: "prod-08",
    num: "08",
    grade: "GuardExo MBT",
    family: "Industrial Biocides",
    targetApplication: "Methylene bis-thiocyanate fast broad-spectrum bactericide",
    description: "Ultra-fast contact biocide for acute shock dosing against anaerobic sulfate-reducing bacteria in process loops.",
    slug: "guardexo-mbt"
  }
];
