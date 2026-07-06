const range = (start, end) => Array.from({ length: end - start + 1 }, (_, index) => start + index);

export const ARTICLE_MENU_COLUMNS = [
  {
    title: 'Diagnostics',
    hubs: [
      {
        slug: 'battery',
        title: 'Battery',
        href: '/articles/battery/',
        description: 'health, drain & degradation',
        metaDescription: 'Android battery guides for checking battery health, battery drain, cycle count, degradation signs, replacement timing, and settings that affect power use.',
        sourceNumbers: [...range(11, 20), ...range(21, 36)],
        sections: [
          { title: 'Health', sourceNumbers: range(11, 20) },
          { title: 'Drain', sourceNumbers: range(21, 36) },
        ],
      },
      {
        slug: 'charging',
        title: 'Charging',
        href: '/articles/charging/',
        description: 'habits, speeds & charger testing',
        metaDescription: 'Charging guides for Android phones, covering fast charging, wireless charging, charger testing, overnight charging, heat while charging, and battery-friendly habits.',
        sourceNumbers: range(37, 52),
      },
      {
        slug: 'thermal',
        title: 'Thermal',
        href: '/articles/thermal/',
        description: 'overheating, throttling & cooling',
        metaDescription: 'Thermal guides for Android overheating, phone temperature checks, thermal throttling, charging heat, hot weather use, cases, gaming, and cooling steps.',
        sourceNumbers: range(53, 63),
      },
      {
        slug: 'network',
        title: 'Network',
        href: '/articles/network/',
        description: 'signal, speed & connectivity',
        metaDescription: 'Network guides for Android signal strength, Wi-Fi problems, mobile data speed, Bluetooth issues, latency tests, 5G support, VPN effects, and connection stability.',
        sourceNumbers: range(90, 103),
      },
      {
        slug: 'storage',
        title: 'Storage',
        href: '/articles/storage/',
        description: 'space, cleanup & storage health',
        metaDescription: 'Storage guides for Android cleanup, full storage warnings, large files, downloads, cache, SD cards, cloud transfers, APK files, and flash storage health.',
        sourceNumbers: range(79, 89),
      },
    ],
  },
  {
    title: 'Performance & Repair',
    hubs: [
      {
        slug: 'performance',
        title: 'Speed & Performance',
        href: '/articles/performance/',
        description: 'slowdowns, freezes & fixes',
        metaDescription: 'Android performance guides for slow phones, freezing, app crashes, restarts, memory pressure, bloatware, safe mode, animation settings, and cache recovery.',
        sourceNumbers: range(64, 78),
      },
      {
        slug: 'hardware',
        title: 'Hardware & Sensors',
        href: '/articles/hardware/',
        description: 'screen, camera, GPS & sensor tests',
        metaDescription: 'Hardware guides for Android diagnostics, sensors, screens, cameras, speakers, microphones, fingerprint readers, NFC, charging ports, water damage, and service codes.',
        sourceNumbers: range(104, 118),
      },
      {
        slug: 'software',
        title: 'Software & Updates',
        href: '/articles/software/',
        description: 'Android versions, patches & security',
        metaDescription: 'Software guides for Android versions, security patches, system updates, Play system updates, malware checks, app permissions, Safe mode, and factory reset choices.',
        sourceNumbers: range(119, 130),
      },
      {
        slug: 'physical-damage',
        title: 'Physical Damage',
        href: '/articles/physical-damage/',
        description: 'drops, water & screen damage',
        metaDescription: 'Physical damage guides for Android phones, covering drop checks, internal damage signs, water exposure, cracked screens, burn-in, frame bends, and safe cleaning.',
        sourceNumbers: range(131, 137),
      },
    ],
  },
  {
    title: 'Guides & Answers',
    hubs: [
      {
        slug: 'device-health',
        title: 'Device Health Basics',
        href: '/articles/device-health/',
        description: 'maintenance, lifespan & health scores',
        metaDescription: 'Device health guides for Android diagnostics, health scores, maintenance, lifespan, backups, troubleshooting preparation, and choosing a phone health check app.',
        sourceNumbers: [1, 3, 7, 8, 9, 10, 138, 139, 140],
      },
      {
        slug: 'buying-selling',
        title: 'Buying & Selling',
        href: '/articles/buying-selling/',
        description: 'used phones, repair vs replace, trade-in',
        metaDescription: 'Buying and selling guides for used Android phones, including condition checks, resale preparation, trade-in value, repair versus replacement, and upgrade timing.',
        sourceNumbers: [2, 4, 5, 6, ...range(141, 144)],
      },
      {
        slug: 'myths',
        title: 'Myths Debunked',
        href: '/articles/myths/',
        description: 'battery and performance myths',
        metaDescription: 'Android myth guides that separate useful advice from common battery, charging, Wi-Fi, RAM cleaner, factory reset, and performance misconceptions.',
        sourceNumbers: range(145, 152),
      },
      {
        slug: 'brands',
        title: 'Brand Guides',
        href: '/articles/brands/',
        description: 'Samsung, Pixel, Xiaomi, OnePlus',
        metaDescription: 'Brand-specific Android guides for Samsung, Google Pixel, Xiaomi, POCO, and OnePlus diagnostics, battery health screens, service menus, and support tools.',
        sourceNumbers: range(153, 160),
      },
    ],
  },
];

export const ARTICLE_HUBS = ARTICLE_MENU_COLUMNS.flatMap((column) => column.hubs);
export const articleHubBySlug = new Map(ARTICLE_HUBS.map((hub) => [hub.slug, hub]));
export const articleNumberToHub = new Map();

for (const hub of ARTICLE_HUBS) {
  for (const sourceNumber of hub.sourceNumbers) {
    if (articleNumberToHub.has(sourceNumber)) {
      throw new Error(`Article ${sourceNumber} is assigned to more than one hub.`);
    }

    articleNumberToHub.set(sourceNumber, hub);
  }
}
