-- GuardXO / Chemtiver Database Schema

-- 1. Inquiries Table (captures submissions from Section 14)
CREATE TABLE IF NOT EXISTS inquiries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  industry_sector VARCHAR(255),
  target_grade VARCHAR(255),
  formulation_details TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Products Table (stores standard technical assays catalogue from Section 10)
CREATE TABLE IF NOT EXISTS products (
  id VARCHAR(50) PRIMARY KEY,
  num VARCHAR(10) NOT NULL,
  grade VARCHAR(255) NOT NULL,
  family VARCHAR(255) NOT NULL,
  target_application TEXT NOT NULL,
  description TEXT NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Initial seed data for products
INSERT INTO products (id, num, grade, family, target_application, description, slug)
VALUES
  ('prod-01', '01', 'GuardExo FMT', 'In-Can Preservatives', 'Emulsions, PVA slurries, formaldehyde-free matrix', 'Advanced formaldehyde-free wet-state preservation designed specifically for polymer emulsions and architectural coatings.', 'guardexo-fmt'),
  ('prod-02', '02', 'GuardExo CMT 15', 'In-Can Preservatives', 'CMIT/MIT 1.5% aqueous solution, high shock resistance', 'Broad-spectrum microbicide providing rapid kill kinetics and robust headspace protection in aqueous manufacturing environments.', 'guardexo-cmt-15'),
  ('prod-03', '03', 'GuardExo CMT 14', 'Industrial Biocides', 'Recirculating industrial cooling water, broad pH 2-9', 'Engineered biocide for cooling towers and industrial loop defense, preventing aggressive slime and biofilm accumulation.', 'guardexo-cmt-14'),
  ('prod-04', '04', 'GuardExo BT 20P', 'In-Can Preservatives', 'BIT 20% in propylene glycol, zero VOC compliance', 'High-purity Benzisothiazolinone formulated in glycol for eco-compliant zero-VOC paints, slurries, and adhesives.', 'guardexo-bt-20p'),
  ('prod-05', '05', 'GuardExo BT 20', 'Industrial Biocides', 'Standard dipropylene glycol biocide for plant systems', 'Dependable long-term preservation for industrial fluid reservoirs, process waters, and alkaline chemical systems.', 'guardexo-bt-20'),
  ('prod-06', '06', 'GuardExo BT 20D', 'In-Can Preservatives', 'Aqueous dispersion BIT for alkaline construction pastes', 'Specialized water-based BIT dispersion for plaster, tile adhesives, cementitious mortars, and high-pH construction products.', 'guardexo-bt-20d'),
  ('prod-07', '07', 'GuardExo BT 10 MW', 'Dry Film Preservatives', 'Synergistic BIT + OIT dispersion for exterior masonry', 'High-potency synergistic blend delivering multi-year resistance against fungal bloom and black algae under tropical humidity.', 'guardexo-bt-10-mw'),
  ('prod-08', '08', 'GuardExo MBT', 'Industrial Biocides', 'Methylene bis-thiocyanate fast broad-spectrum bactericide', 'Ultra-fast contact biocide for acute shock dosing against anaerobic sulfate-reducing bacteria in process loops.', 'guardexo-mbt')
ON CONFLICT (id) DO NOTHING;
