import {
  BarChart,
  Divider,
  Grid,
  H1,
  H2,
  LineChart,
  Stack,
  Stat,
  Text,
  useHostTheme,
} from "cursor/canvas";

/** Parsed from Vital_Signs__Housing_Affordability CSVs (May 2026 export). Years 2009–2024. */
const YEARS = [
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
];

const COUNTY_RENTER_SHARE_35PCT = {
  Alameda: [
    38.8, 44.2, 43.7, 43.4, 42.9, 41.7, 41.5, 40.2, 40.1, 40.3, 38.7, 39.5, 41.4, 43.5, 43.7, 42.9,
  ],
  "Contra Costa": [
    44.7, 46.4, 47.6, 46.5, 45.2, 44.9, 43.3, 43.0, 45.2, 44.3, 41.3, 43.5, 50.4, 47.5, 46.7, 48.9,
  ],
  Marin: [45.4, 51.4, 47.9, 46.6, 42.9, 44.8, 37.5, 42.5, 46.6, 42.0, 42.2, 41.6, 51.3, 43.6, 46.3, 47.2],
  Napa: [38.6, 42.5, 44.3, 42.7, 40.5, 44.4, 44.2, 41.9, 42.5, 44.0, 42.5, 43.2, 44.4, 43.3, 43.3, 44.9],
  "San Francisco": [
    37.2, 36.5, 36.9, 38.7, 36.2, 35.3, 32.0, 30.9, 28.4, 28.4, 24.3, 29.0, 34.0, 29.9, 31.6, 31.3,
  ],
  "San Mateo": [
    42.2, 37.7, 43.4, 44.3, 41.6, 41.3, 42.0, 40.6, 41.3, 40.1, 37.7, 39.7, 42.8, 43.5, 39.2, 37.2,
  ],
  "Santa Clara": [
    37.1, 38.0, 39.1, 39.7, 40.6, 39.7, 39.2, 37.1, 38.0, 36.4, 36.2, 36.1, 34.7, 37.0, 37.4, 36.9,
  ],
  Solano: [47.3, 46.2, 45.2, 48.6, 50.4, 42.4, 50.0, 41.8, 43.4, 40.2, 40.7, 42.9, 49.5, 50.1, 47.1, 49.4],
  Sonoma: [43.9, 49.7, 48.1, 48.3, 47.2, 44.6, 44.5, 45.3, 46.1, 45.8, 41.6, 44.5, 44.9, 42.5, 44.6, 44.5],
};

const REGION_RENTER_35 = [
  40.0, 41.7, 42.3, 42.8, 41.9, 40.8, 40.0, 38.6, 38.8, 37.9, 36.0, 37.8, 40.6, 40.1, 40.0, 39.9,
];
const REGION_OWNER_35 = [
  32.8, 32.1, 30.3, 27.4, 24.7, 23.7, 23.3, 23.1, 22.6, 21.9, 21.4, 22.5, 22.8, 22.7, 23.8, 23.7,
];

/** Region, 2024: share of households in each income bracket paying ≥35% of income on housing (sum of 35–39%, 40–49%, ≥50% buckets). */
const INCOME_HIGH_BURDEN_2024_PCT: { label: string; value: number }[] = [
  { label: "Under $10k", value: 95.4 },
  { label: "$10k–$20k", value: 81.1 },
  { label: "$20k–$35k", value: 80.8 },
  { label: "$35k–$50k", value: 72.2 },
  { label: "$50k–$75k", value: 61.9 },
  { label: "$75k–$100k", value: 42.5 },
  { label: "$100k+", value: 9.8 },
];

export default function BayAreaHousingVitalSigns() {
  const theme = useHostTheme();
  const countySeries = Object.entries(COUNTY_RENTER_SHARE_35PCT).map(([name, data]) => ({
    name,
    data,
  }));

  return (
    <Stack gap={20} style={{ padding: 16, maxWidth: 960, color: theme.text.primary }}>
      <H1 style={{ margin: 0 }}>Bay Area housing cost pressure</H1>
      <Text tone="secondary" size="small">
        Source: four Vital Signs &ldquo;Housing Affordability&rdquo; extracts (ACS). These tables describe
        housing-cost-to-income shares, not median rent, home prices, tech employment, or population. A
        rising line here means a larger share of households in that group pay at least 35% of income on
        housing.
      </Text>

      <H2 style={{ margin: 0 }}>Renters: share paying ≥35% of income on housing, by county</H2>
      <LineChart
        categories={YEARS}
        series={countySeries}
        height={280}
        valueSuffix="%"
        style={{ border: `1px solid ${theme.stroke.tertiary}` }}
      />

      <Divider />

      <H2 style={{ margin: 0 }}>Nine-county region: renters vs owners (≥35% of income)</H2>
      <LineChart
        categories={YEARS}
        series={[
          { name: "Renters", data: REGION_RENTER_35, tone: "info" },
          { name: "Owners", data: REGION_OWNER_35, tone: "neutral" },
        ]}
        height={220}
        valueSuffix="%"
        style={{ border: `1px solid ${theme.stroke.tertiary}` }}
      />
      <Text tone="secondary" size="small">
        Regional renter severe-burden share is roughly flat across this window; owner severe-burden share
        declines—consistent with tenure and mortgage dynamics, not a direct read on list prices or rents.
      </Text>

      <Divider />

      <H2 style={{ margin: 0 }}>2024 snapshot: housing stress by household income (region)</H2>
      <Grid columns="1fr 1fr" gap={16} align="stretch">
        <BarChart
          categories={INCOME_HIGH_BURDEN_2024_PCT.map((d) => d.label)}
          series={[{ name: "Paying ≥35% of income on housing", data: INCOME_HIGH_BURDEN_2024_PCT.map((d) => d.value) }]}
          horizontal
          height={220}
          valueSuffix="%"
          style={{ border: `1px solid ${theme.stroke.tertiary}` }}
        />
        <Stack gap={12}>
          <Stat value="9.8%" label="Households earning $100k+ paying ≥35% on housing (2024)" />
          <Text tone="secondary" size="small">
            Tech employment and population are not fields in these four Housing Affordability extracts, so
            correlation with tech job growth cannot be computed from this bundle alone.
          </Text>
          <Text tone="secondary" size="small">
            The by-income files in this export are single-year (2024), so they do not support a time-series
            comparison of income growth to housing-cost growth. To answer correlation with tech employment you
            would need a separate employment series aligned on year and geography.
          </Text>
        </Stack>
      </Grid>
    </Stack>
  );
}
