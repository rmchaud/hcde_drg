# How the Two Visualizations Support Your Project

**Project:** Housing Affordability and Displacement in the Bay Area  

**Contrasting pair:**

1. **Mainstream / dominant framing** — Housing prices over time, economic growth metrics (neutral aggregate story).
2. **Counter-visualization** — Hidden impacts, displacement, racial disparities, neighborhood-level changes (what dominant charts omit).

**Goals:** Challenge assumptions that rising housing costs are inevitable or neutral, that economic growth benefits everyone equally, and that aggregate data accurately represents lived experience. Reframe toward **who** is being displaced, **where** displacement is happening, and **what stories** are missing from typical housing visualizations.

---

## 1. Mainstream-style visualization (Vital Signs canvas)

**File:** `output/bay-area-housing-vital-signs.canvas.tsx` (also available under Cursor’s managed `canvases/` folder for live preview.)

### What it supports in your project

- It **anchors the dominant story’s usual ingredients**: time on the x-axis, a single housing-stress metric, geography collapsed to **counties**, and a relatively **neutral** tone (lines and shares, not moral language).
- It uses the same **conceptual backbone** as many policy dashboards: housing cost as **share of income**—aligned with ACS tables such as **B25074 / B25095** and with a **burden ratio** framing, disaggregated by tenure (**renter vs owner**), matching the pattern that **renter burden is higher** than owner burden in Bay Area regional data.

### How it challenges assumptions (when you narrate it that way)

- It **does not** show median rent or GDP. If you present it as “what ‘neutral’ affordability charts usually show,” it **exposes what gets left out** when conversation stays on **prices** or **aggregate growth** without **income distribution, race, or tract geography**.
- County averages **smooth away** “who” and “where”—so the viz can double as evidence for your thesis that **aggregate views misrepresent lived experience** unless you add variables such as **HINCP / HHINCOME**, **RAC1P / HISP**, **GEOID** (tract), or **PUMA** (PUMS geography).

### Honest limit for displacement

- It **cannot** answer displacement (who leaves, where Black or Latino population share shifts) without tract- or PUMA-level population and migration-style logic. Treat it as the **baseline / dominant frame** that the counter-visualization reacts to—not as proof of displacement.

---

## 2. Counter-visualization (HTML story scaffold)

**File:** `output/housing-inequity-counterstory.html`

### What it supports

- It **reframes affordability** from price lines alone to **burden stratification**: who faces the most housing-income stress, using **income brackets × burden** shares (conceptually aligned with combining **HINCP / HHINCOME** with housing cost to think about burden—not row-level PUMS in this build, but the same analytic idea).
- It **foregrounds inequality**: **>30%** and **>50%** of income going to housing, broken out by income band, answers **who is most affected** within the data you have—low-income brackets dominate severe burden; high earners do not.
- It **challenges inevitability and “growth helps everyone”** by showing **divergent county paths** (e.g. change 2009→2024 in renter severe-burden share) and by **calling out** that a **falling** burden series in one place does **not** mean communities are not under displacement pressure—**composition** and **who remains** in the renter pool matter; **PUMS**, tenure, and race cross-tabs would be needed to say more.
- It **names missing stories** (race, tracts, vouchers, MTC-style displacement) and **points to** Bay Area Equity Atlas, California Housing Cost Burden (data.ca.gov), and MTC displacement/housing materials—i.e. where **RAC1P / HISP**, **B25063** (gross rent), **GEOID**, and voucher layers enter.

### Honest limit

- The “map” is a **county schematic**, not a **GEOID**-linked basemap. It supports your **argument structure** and **variable logic** more than literal **neighborhood** displacement geography until tract data are joined.

---

## Mapping Your Exploratory Variables to Each Visualization

| Variable / idea | Mainstream viz (canvas) | Counter-viz (HTML) |
|-----------------|-------------------------|---------------------|
| **B25074 / B25095** (burden as % of income) | Core metric (e.g. ≥35% shares; renter vs owner) | Finer **>30% / >50%** story via income cross-tabs |
| **TEN** (tenure) | Renter vs owner regional lines | Same logic in narrative; timeline layer emphasizes renters |
| **HINCP / HHINCOME + burden ratio** | Coarse buckets only in these extracts | Income brackets make “ratio stress” visible by earnings |
| **B25063** (gross rent) | Not in these Vital Signs CSVs | Not present; framed as gap / external datasets |
| **RAC1P / HISP** | Not in these CSVs | Explicit gap + links (Equity Atlas, CHHS, etc.) |
| **PUMA / GEOID** | County only | County schematic; tract work deferred to MTC + joins |
| **NP** (household size) | Not in these CSVs | Not modeled; noted as path for per-capita / poverty sensitivity |
| **PUMS** (household-level) | Not used | Framed as next step for **who** is displaced and selection into who remains |

---

## One-Sentence Project Summary (Copy-Ready)

The first visualization performs the familiar, aggregate “housing stress over time” story so readers recognize the default frame; the second breaks that frame by stratifying burden by income, foregrounding who bears the weight, and documenting what tract-level race, rent, and voucher data must be joined next—so displacement is centered as **political and spatial**, not as an automatic by-product of a single county trend line.

---

## File Locations (Repository)

| Artifact | Path |
|----------|------|
| Mainstream / aggregate framing (Cursor canvas) | `hcde_drg/output/bay-area-housing-vital-signs.canvas.tsx` |
| Counter-visualization (standalone HTML) | `hcde_drg/output/housing-inequity-counterstory.html` |
| These notes | `hcde_drg/output/visualization-framing-notes.md` |

**Data sources cited in the HTML:** All five CSVs under `hcde_drg/data/raw/` (Vital Signs Housing Affordability extracts plus the parallel region-by-income export). External links in the HTML point to Bay Area Equity Atlas, California Housing Cost Burden (data.ca.gov), and MTC displacement/housing resources for the analyses the local extracts alone cannot supply.
