import { Pool } from "pg";
import { PRODUCTS_CATALOGUE } from "./products-data";

// Global pool connection instance for Next.js in development
const globalForPg = globalThis as unknown as { pgPool?: Pool };

export const pool =
  globalForPg.pgPool ??
  new Pool({
    connectionString:
      process.env.DATABASE_URL ||
      "postgresql://velastia:velastia_dev@localhost:5432/guardxo",
    ssl:
      process.env.NODE_ENV === "production" && process.env.DATABASE_SSL === "true"
        ? { rejectUnauthorized: false }
        : false,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 3000,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPg.pgPool = pool;
}

/**
 * Execute a query with safe error handling
 */
export async function query<T = any>(
  text: string,
  params?: any[]
): Promise<{ rows: T[]; rowCount: number | null }> {
  try {
    const res = await pool.query(text, params);
    return { rows: res.rows as T[], rowCount: res.rowCount };
  } catch (error) {
    console.warn("[PostgreSQL] Query execution error:", error);
    throw error;
  }
}

let dbInitialized = false;

/**
 * Auto-initialize database tables and seed initial data if empty
 */
export async function initializeDatabase() {
  if (dbInitialized) return;

  const schemaSql = `
    CREATE TABLE IF NOT EXISTS inquiries (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      industry_sector VARCHAR(255),
      target_grade VARCHAR(255),
      formulation_details TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS categories (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) UNIQUE NOT NULL,
      slug VARCHAR(255) UNIQUE NOT NULL,
      description TEXT,
      display_order INT DEFAULT 0,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS products (
      id VARCHAR(100) PRIMARY KEY,
      num VARCHAR(20) NOT NULL,
      grade VARCHAR(255) NOT NULL,
      slug VARCHAR(255) UNIQUE NOT NULL,
      family VARCHAR(255) NOT NULL,
      category_id INT REFERENCES categories(id) ON DELETE SET NULL,
      active_ingredient VARCHAR(255),
      cas_number VARCHAR(100),
      target_application TEXT NOT NULL,
      description TEXT NOT NULL,
      features JSONB DEFAULT '[]'::jsonb,
      dosage_guide VARCHAR(255),
      ph_stability VARCHAR(100),
      temperature_limit VARCHAR(100),
      appearance VARCHAR(255),
      packaging VARCHAR(255),
      image_url TEXT,
      tds_url TEXT,
      msds_url TEXT,
      badge VARCHAR(100),
      is_featured BOOLEAN DEFAULT true,
      status VARCHAR(50) DEFAULT 'active',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(schemaSql);

    // 1. Seed categories if empty
    const catCheck = await pool.query("SELECT COUNT(*) FROM categories");
    if (parseInt(catCheck.rows[0].count) === 0) {
      await pool.query(`
        INSERT INTO categories (name, slug, description, display_order) VALUES
        ('In-Can Preservatives', 'in-can-preservatives', 'Liquid-state protection against bacterial spoilage, enzymatic viscosity loss, and foul odor in containers.', 1),
        ('Industrial Biocides', 'industrial-biocides', 'Broad-spectrum microbicides engineered for recirculating cooling water, industrial loops, and process fluid systems.', 2),
        ('Dry Film Preservatives', 'dry-film-preservatives', 'Long-term surface defense against fungal bloom, algae colonization, and mold on exterior cured films.', 3)
      `);
      console.log("[PostgreSQL] Seeded initial product categories.");
    }

    // 2. Seed products if empty
    const prodCheck = await pool.query("SELECT COUNT(*) FROM products");
    if (parseInt(prodCheck.rows[0].count) === 0) {
      const catsResult = await pool.query("SELECT id, name FROM categories");
      const catMap = new Map<string, number>();
      catsResult.rows.forEach((r: { id: number; name: string }) => {
        catMap.set(r.name, r.id);
      });

      const initialProducts = [
        {
          id: "prod-01",
          num: "01",
          grade: "GuardExo FMT",
          slug: "guardexo-fmt",
          family: "In-Can Preservatives",
          active_ingredient: "1,2-Benzisothiazolin-3-one + Methylisothiazolinone (BIT/MIT)",
          cas_number: "2634-33-5 / 2682-20-4",
          target_application: "Emulsions, PVA slurries, formaldehyde-free architectural coatings",
          description: "Advanced formaldehyde-free wet-state preservation designed specifically for polymer emulsions and architectural coatings.",
          features: JSON.stringify([
            "Formaldehyde-free and VOC-compliant formulation",
            "Broad spectrum bactericidal and fungistatic performance",
            "Rapid wet-state headspace equilibration",
            "Non-yellowing in white emulsion finishes"
          ]),
          dosage_guide: "0.10% – 0.25% w/w",
          ph_stability: "pH 3.0 – 9.5",
          temperature_limit: "Up to 60°C",
          appearance: "Clear, pale yellow liquid",
          packaging: "25kg carboys / 200kg drums / 1,000kg IBCs",
          image_url: "/images/product-bt20-canister.jpg",
          badge: "Eco-Compliant",
          is_featured: true
        },
        {
          id: "prod-02",
          num: "02",
          grade: "GuardExo CMT 15",
          slug: "guardexo-cmt-15",
          family: "In-Can Preservatives",
          active_ingredient: "5-Chloro-2-methyl-4-isothiazolin-3-one + 2-Methyl-4-isothiazolin-3-one (CMIT/MIT 3:1)",
          cas_number: "55965-84-9",
          target_application: "CMIT/MIT 1.5% aqueous solution, high shock resistance for wet paints",
          description: "Broad-spectrum microbicide providing rapid kill kinetics and robust headspace protection in aqueous manufacturing environments.",
          features: [
            "Ultra-fast biocidal knockdown under 4 hours",
            "Excellent cost-effectiveness for bulk paint slurries",
            "Stabilized with divalent magnesium nitrate salts",
            "Complete biodegradability upon discharge dilution"
          ],
          dosage_guide: "0.05% – 0.15% w/w",
          ph_stability: "pH 2.0 – 8.5",
          temperature_limit: "Up to 50°C",
          appearance: "Light green-amber aqueous liquid",
          packaging: "25kg carboys / 200kg drums / 1,000kg IBC",
          image_url: "/images/product-bt20-canister.jpg",
          badge: "Rapid Knockdown",
          is_featured: true
        },
        {
          id: "prod-03",
          num: "03",
          grade: "GuardExo CMT 14",
          slug: "guardexo-cmt-14",
          family: "Industrial Biocides",
          active_ingredient: "CMIT/MIT 14% technical concentrate",
          cas_number: "55965-84-9",
          target_application: "Recirculating industrial cooling water, broad pH 2-9 systems",
          description: "Engineered biocide for cooling towers and industrial loop defense, preventing aggressive slime and biofilm accumulation.",
          features: [
            "High concentration 14% active ingredient for bulk dosing",
            "Penetrates industrial extracellular polysaccharide biofilm",
            "Controls Legionella pneumophila and sulfate reducers",
            "Compatible with standard corrosion and scale inhibitors"
          ],
          dosage_guide: "15 – 50 ppm shock dose",
          ph_stability: "pH 2.0 – 9.0",
          temperature_limit: "Up to 65°C",
          appearance: "Amber clear liquid",
          packaging: "250kg drums / 1,200kg IBCs",
          image_url: "/images/product-bt20-canister.jpg",
          badge: "Heavy Duty",
          is_featured: true
        },
        {
          id: "prod-04",
          num: "04",
          grade: "GuardExo BT 20P",
          slug: "guardexo-bt-20p",
          family: "In-Can Preservatives",
          active_ingredient: "1,2-Benzisothiazolin-3-one 20% in Propylene Glycol",
          cas_number: "2634-33-5",
          target_application: "BIT 20% in propylene glycol, zero VOC compliance",
          description: "High-purity Benzisothiazolinone formulated in glycol for eco-compliant zero-VOC paints, slurries, and adhesives.",
          features: [
            "Zero VOC solvent carrier compliant with EU Ecolabel & Green Seal",
            "High chemical stability against enzymatic hydrolysis",
            "Exceptional alkaline longevity in lime paints and plaster",
            "Non-corrosive to standard mild steel industrial vessels"
          ],
          dosage_guide: "0.10% – 0.25% w/w",
          ph_stability: "pH 2.0 – 12.0",
          temperature_limit: "Up to 100°C",
          appearance: "Clear yellow to amber liquid",
          packaging: "25kg carboys / 200kg drums / 1,000kg IBC",
          image_url: "/images/product-bt20-canister.jpg",
          badge: "Zero VOC",
          is_featured: true
        },
        {
          id: "prod-05",
          num: "05",
          grade: "GuardExo BT 20",
          slug: "guardexo-bt-20",
          family: "In-Can Preservatives",
          active_ingredient: "1,2-Benzisothiazolin-3-one (20% BIT in DPG)",
          cas_number: "2634-33-5",
          target_application: "Standard dipropylene glycol biocide for plant systems and architectural emulsions",
          description: "Dependable long-term preservation for industrial fluid reservoirs, process waters, and alkaline chemical systems.",
          features: [
            "Benchmark 20% BIT industry standard biocide",
            "Withstands thermal processing spikes up to 100°C",
            "Outstanding stability at high pH levels up to 12.5",
            "Global regulatory approvals including US EPA, REACH, and BPR"
          ],
          dosage_guide: "0.08% – 0.25% w/w",
          ph_stability: "pH 2.5 – 12.5",
          temperature_limit: "Up to 100°C",
          appearance: "Clear amber viscous solution",
          packaging: "25kg jerrycans / 200kg HDPE drums / 1,000kg IBC",
          image_url: "/images/product-bt20-canister.jpg",
          badge: "Flagship Grade",
          is_featured: true
        },
        {
          id: "prod-06",
          num: "06",
          grade: "GuardExo BT 20D",
          slug: "guardexo-bt-20d",
          family: "In-Can Preservatives",
          active_ingredient: "1,2-Benzisothiazolin-3-one 20% aqueous particulate dispersion",
          cas_number: "2634-33-5",
          target_application: "Aqueous dispersion BIT for alkaline construction pastes and tile mortars",
          description: "Specialized water-based BIT dispersion for plaster, tile adhesives, cementitious mortars, and high-pH construction products.",
          features: [
            "Solvent-free water dispersion designed for mineral slurries",
            "Prevents flocculation in calcium carbonate and clay slips",
            "Zero glycol content, perfectly odorless",
            "Sustains bactericidal efficacy in wet stucco up to 12 months"
          ],
          dosage_guide: "0.10% – 0.30% w/w",
          ph_stability: "pH 4.0 – 13.0",
          temperature_limit: "Up to 80°C",
          appearance: "Off-white milky liquid dispersion",
          packaging: "25kg carboys / 1,000kg IBCs",
          image_url: "/images/product-bt20-canister.jpg",
          badge: "Solvent Free",
          is_featured: true
        },
        {
          id: "prod-07",
          num: "07",
          grade: "GuardExo BT 10 MW",
          slug: "guardexo-bt-10-mw",
          family: "Dry Film Preservatives",
          active_ingredient: "BIT 10% + 2-n-Octyl-4-isothiazolin-3-one (OIT) Synergistic Blend",
          cas_number: "2634-33-5 / 26530-20-1",
          target_application: "Synergistic BIT + OIT dispersion for exterior masonry and weather coats",
          description: "High-potency synergistic blend delivering multi-year resistance against fungal bloom and black algae under tropical humidity.",
          features: [
            "Dual-mechanism wet-state + cured dry film dual protection",
            "Prevents black Aspergillus mold and green Chlorella algae growth",
            "Extremely low water leachability under heavy tropical rainfall",
            "Resists UV degradation and discoloration on exterior facades"
          ],
          dosage_guide: "0.3% – 0.8% w/w",
          ph_stability: "pH 4.0 – 10.5",
          temperature_limit: "Up to 75°C",
          appearance: "Cream colored stable fluid emulsion",
          packaging: "25kg carboys / 200kg drums / 1,000kg IBC",
          image_url: "/images/product-bt20-canister.jpg",
          badge: "Anti-Algae & Mold",
          is_featured: true
        },
        {
          id: "prod-08",
          num: "08",
          grade: "GuardExo MBT",
          slug: "guardexo-mbt",
          family: "Industrial Biocides",
          active_ingredient: "Methylene bis(thiocyanate) 10%",
          cas_number: "6317-18-6",
          target_application: "Methylene bis-thiocyanate fast broad-spectrum bactericide for paper mills & oils",
          description: "Ultra-fast contact biocide for acute shock dosing against anaerobic sulfate-reducing bacteria in process loops.",
          features: [
            "Instantaneous enzymatic disruption in biofilm matrices",
            "Targeted action against sulfate-reducing Desulfovibrio bacteria",
            "Effective slime control in paper machine wet ends",
            "Short environmental half-life for safe wastewater discharge"
          ],
          dosage_guide: "10 – 30 ppm shock dose",
          ph_stability: "pH 5.0 – 8.5",
          temperature_limit: "Up to 55°C",
          appearance: "Clear amber to reddish liquid",
          packaging: "200kg drums / 1,000kg IBC",
          image_url: "/images/product-bt20-canister.jpg",
          badge: "Slime Control",
          is_featured: true
        }
      ];

      for (const prod of initialProducts) {
        const catId = catMap.get(prod.family) || null;
        await pool.query(
          `INSERT INTO products (
            id, num, grade, slug, family, category_id, active_ingredient, cas_number,
            target_application, description, features, dosage_guide, ph_stability,
            temperature_limit, appearance, packaging, image_url, badge, is_featured
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
          ON CONFLICT (slug) DO NOTHING`,
          [
            prod.id,
            prod.num,
            prod.grade,
            prod.slug,
            prod.family,
            catId,
            prod.active_ingredient,
            prod.cas_number,
            prod.target_application,
            prod.description,
            JSON.stringify(prod.features),
            prod.dosage_guide,
            prod.ph_stability,
            prod.temperature_limit,
            prod.appearance,
            prod.packaging,
            prod.image_url,
            prod.badge,
            prod.is_featured
          ]
        );
      }
      console.log("[PostgreSQL] Seeded initial 8 GuardXO catalog products.");
    }

    dbInitialized = true;
    console.log("[PostgreSQL] GuardXO database schema verified and ready.");
  } catch (err) {
    console.warn(
      "[PostgreSQL] Local database init warning (fallback mode active):",
      (err as Error).message
    );
  }
}
