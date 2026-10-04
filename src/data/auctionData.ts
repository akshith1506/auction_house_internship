import { CurrencyCode, CurrencyRate, LotItem, EditorialArticle, DepartmentInfo, BidEntry } from '../types/auction';

export const CURRENCY_RATES: Record<CurrencyCode, CurrencyRate> = {
  USD: { code: 'USD', symbol: '$', rate: 1.0 },
  GBP: { code: 'GBP', symbol: '£', rate: 0.785 },
  EUR: { code: 'EUR', symbol: '€', rate: 0.925 },
  CHF: { code: 'CHF', symbol: 'CHF ', rate: 0.88 },
  HKD: { code: 'HKD', symbol: 'HK$', rate: 7.78 },
};

export function formatCurrency(amountUSD: number, currency: CurrencyCode): string {
  const info = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
  const converted = amountUSD * info.rate;
  if (info.code === 'CHF') {
    return `CHF ${Math.round(converted).toLocaleString()}`;
  }
  return `${info.symbol}${Math.round(converted).toLocaleString()}`;
}

export const EMBLEM_LOGO_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1X6L1WEIo99lmHxbQqpY4guxNMx_oYc6JXTWwhqHdNhWfUwxTDbCP5qBrJQwMSs1Y6ocy9rxTWN4A_E6QpIvYo3QiNBNv-qZ9lHr5zzx7Uwy5oaBIOFpF_pqeTS7JfpdEv1prCN0_GSvEuR5Jx4cPiOezfw0GwSgBUa7UuF-D4WMz0rY7UmllOzBDWwbBVTeGUm6ImXAg4cW1F4QGnhq-DlFOmCvl87tIxQlVKZd48-gYJenJx9zmYwnMFg';

export const PATRON_AVATAR_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCqprvPhlWLuYl--7Mjg_29PWHo_xmZlmIdGIyEgFnl7DygweB5ZQRXJMWhr-VpDlBB2Cfgz_S2dm40a9TsacvnnJ69MzrRtTjoidVkTjb_wf0I2SDseaC_5JyZxcPr4vn3rgq3Gy5Uxgf4YiX2qSnIYisCG7cqE8eH9oJlIzOq-tqH64yV1BPvm6jEESTKpbRfCOcpGesvCUDVwC6hC6o1JOtTuHgy2MeiU1LN5U7j19thtbrMxH4TMA';

export const HERO_LOT: LotItem = {
  id: 'lot-14',
  lotNumber: 14,
  saleroom: 'NEW YORK SALEROOM 01',
  category: 'paintings',
  department: 'Fine Art & Sculptures',
  title: 'Symphonie en Bleu',
  subtitle: 'Lot 14 · Major Work',
  artist: 'Émile Henri Bernard',
  artistDates: 'French, 1868–1941',
  year: '1912',
  medium: 'Oil on canvas',
  dimensions: '142 × 198 cm (55.9 × 78.0 in)',
  signatureInfo: 'Signed and dated lower right "Émile Bernard 1912"',
  provenance: "Collection Baron von Waldberg, Vienna (1928) • Musée d'Orsay Loan (1984)",
  estimateLow: 4500000,
  estimateHigh: 6000000,
  currentBid: 5200000,
  openingBid: 3800000,
  bidsCount: 32,
  status: 'live',
  closingIn: '04h : 18m : 32s',
  primaryImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDW0ZjM0edI4MnALzdIqBYFLDElaEvvmpwkXLQHAFI2ZiOIob0gHN3U1QKdLzaQ2rWruf2Dj5j3WwapOFiYEUB9sLBCcOXeISbpg_OGQ0uK8Q_xtYgkflAKV2pNJ_gEENsWZQRqRViLhLFZHBrJF_cmJ5uF6hMQw0bOwYtiXqWf9E-iahXkfQ7jNi4C2gOy1_4L14C-FOydYkGQPM1Y4lhqVnxmgmRn3vcGgTGBAEk5qh1GeR7Vy8R_rA',
  additionalImages: [
    {
      label: 'Cobalt Impasto Detail',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAup-F2u_AP89ZrFqWmhFl5aqjOpjL1LdUiuOS3DEeMaDLsDoDuFfNmcvxR5ewbaYA76F3zKI1Iq6PWxYKGOZuosYUhIkg6VzPpI_IkZjwNG_Yl9U7WNc8s51oLjzm2B6gzjGbU81RjOMnZs36BfqMKsQClPlyY8DskxG96rgYYp-bd_XcHJQvOLFK2QFD_eR89KlbiuilDrtA5zDlSFEKWxbHmBpJaslyThqat7YcTLWHsuiKfgn6k_A',
      description: 'Close-up macro detail of cobalt oil impasto brushstrokes and fine craquelure on historical Belgian gessoed canvas.',
    },
    {
      label: 'Stretcher Verso & Wax Seals',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJu5KcTEO-dJLgEBqQQH_VjhMncIxQwt106hmunptKpGd-jMZmuLZr8_RJh_Quv8SHZQpC3zZSrsmeS2Wh62yzh67Y9JZm5uuH6aU7aDHBuvnalueCypy-O2KtcooAdsLVqTZmypBJbC7ElXyd7jDCgFfvf6fceSbag_TDGwv6Da-VHHu5WGVmPontLa-Z4HIciOszV5aUByJ9RDVKQK43XdHkGoptwqGzrW9R9ww5An_Z3g98Q9OB7Q',
      description: 'Reverse verso view showing original keyable spruce stretcher frame with red armorial wax seals of the Vienna Waldberg Archive and 1938 transit customs stamps.',
    },
    {
      label: 'Archival Loupe Inspection',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATNaN105xLNLpq9SKXVKKWnkSuRQpCnQHCEZERV_uc7XZRJwSIBq-rLe7C66rOcC5IC7bQ72OtzXlfvY7J6CfyZ0NDH_IBfmFSNbQtjhXFElZ5muJhImduxoGkDh3pVc9BWIzgyKKW9YvStlV6kOuaEZhnFw5RV9rNfw7vYzi6oMVPvhtyt3CsIPZGE-Zm_FghsS6mJcVJMKipGzHmOJ_dmWf4LFv8Wklu6kwUcLA7OIKixfjj33MWNQ',
      description: 'Curatorial conservator in lint-free archival cotton gloves inspecting upper quadrant tonal glazes under 10x achromatic stereomicroscopy.',
    },
  ],
  conditionReport: {
    overallGrade: 'Impeccable Institutional Grade (A+)',
    structuralIntegrity: 'Original unlined coarse-weave linen canvas, stable tension on original keyable mortise-and-tenon stretcher bars.',
    varnishSurface: 'Even natural mastic and dammar varnish applied ca. 1954, exhibiting light characteristic yellowing consistent with age.',
    conservationHistory: 'Surface cleaned and secured by the Institut National d’Histoire de l’Art (INHA) Paris in October 1983 prior to the Grand Palais retrospective.',
    uvFluorescenceNotes: 'Under Wood’s lamp ultraviolet examination (365nm), minor microscopic inpainting is observed exclusively along the extreme turn-over edges where the original frame rubbed. The primary compositional field, signature, and date are 100% untouched and original.',
    examiner: 'Dr. Vivienne St. Claire, Chief Conservator of Post-Impressionism',
    examDate: '12 September 2025',
    institution: 'Aurelia Curatorial Examination Laboratories, Geneva',
  },
  provenanceHistory: [
    {
      year: '1912–1919',
      owner: 'Artist’s Studio, Tonnerre / Paris',
      location: 'France',
      notes: 'Acquired directly from the artist by Galerie Bernheim-Jeune, Paris.',
    },
    {
      year: '1920–1938',
      owner: 'Baron Heinrich von Waldberg',
      location: 'Vienna, Austria',
      notes: 'Included in the landmark 1928 Palais Waldberg modern masters inventory.',
    },
    {
      year: '1952–1981',
      owner: 'Countess Eleonora von Waldberg-Linden',
      location: 'Zurich, Switzerland',
      notes: 'Transferred by direct inheritance; deposited in Swiss customs freeport vault.',
    },
    {
      year: '1984',
      owner: 'Musée d’Orsay Special Loan',
      location: 'Paris, France',
      notes: 'Selected for the European Symbolist & Synthetist retrospective.',
    },
    {
      year: '1995–Present',
      owner: 'Private Sovereign Collection',
      location: 'Geneva / New York',
      notes: 'Consigned exclusively through Aurelia Private Treaty & Evening Auctions.',
    },
  ],
  exhibitions: [
    'Paris, Salon des Indépendants, 28th Exhibition, March–April 1912, no. 314.',
    'Vienna, Galerie Miethke, Moderne Französische Meister, November 1927, cat. no. 18.',
    'Paris, Grand Palais, Émile Bernard et l’École de Pont-Aven, 1984–1985, pl. 42.',
    'New York, Metropolitan Museum of Art, Loan Exhibition of European Modernism, 1999.',
  ],
  literature: [
    'J. Rewald, Post-Impressionism: From Van Gogh to Gauguin, New York, 1978, p. 284 (illustrated).',
    'M.A. Stevens, Émile Bernard 1868–1941: A Pioneer of Modern Art, Zwolle, 1990, p. 192, no. 77.',
    'Aurelia Catalogue Raisonné Volume IV: Synthetist Masterworks, 2024, entry 8492.',
  ],
};

export const HIGHLIGHT_LOTS: LotItem[] = [
  {
    id: 'lot-22',
    lotNumber: 22,
    saleroom: 'GENEVA',
    category: 'jewelry',
    department: 'Haute Horlogerie & Jewels',
    title: "The 'Aurore de Printemps' 12.4ct Fancy Vivid Pink Diamond",
    subtitle: 'Haute Joaillerie',
    artist: 'Boucheron Paris (Mounting)',
    artistDates: 'Founded 1858',
    year: '1954',
    medium: 'Type IIa Diamond mounted in hand-pierced platinum with trapezoid step-cut side diamonds',
    dimensions: 'Ring size 52 (US 6), Diamond 12.42 carats',
    signatureInfo: 'Signed "Boucheron Paris" and stamped with French platinum hallmarks (Dog’s head)',
    provenance: 'Commissioned by a European Royal Household, Paris (1954) • Thence by descent',
    estimateLow: 8000000,
    estimateHigh: 10500000,
    currentBid: 8900000,
    openingBid: 7200000,
    bidsCount: 19,
    status: 'live',
    closingIn: 'Closing in 28m',
    primaryImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBh9dgGnqe1cJzHZstVD_mSi8aNvyy5wOtBZ2yHlqNYK06VHOT8J9T0pykvhKe9Z1ozKnsrw7yNMARyeqJbT1sFPXyZptpUBqDMETlvQhi_GGZWssf16nn-2fQhqBMNJuut57ZGeHCvddGFg0BaAAKxp-D6P6rp1nu9lZq4WLHOVdIZS3efHXpSPocDgMrZXwOkVsXsWphGHYU3tA3uysIYINB0ks2Bc6_O50_UW8zAOFj6l_XaQDahvw',
    conditionReport: {
      overallGrade: 'Gemological Exceptional (Flawless Potential)',
      structuralIntegrity: 'Original 1954 Boucheron platinum basket with hand-wrought prongs, zero metal fatigue.',
      varnishSurface: 'N/A - GIA Report No. 222519824 confirming Natural Fancy Vivid Pink, VVS1 Clarity, Type IIa.',
      conservationHistory: 'Inspected and certified in Geneva, September 2025.',
      uvFluorescenceNotes: 'Inert to Long Wave UV (characteristic of premier Argyle/Golconda type IIa crystals).',
      examiner: 'Dr. G. Obermeier, Senior Gemologist, SSEF & GIA Alumnus',
      examDate: '18 August 2025',
      institution: 'Swiss Gemmological Institute (SSEF), Basel',
    },
    provenanceHistory: [
      { year: '1954', owner: 'Private Royal Consignee', location: 'Paris & Monaco' },
      { year: '1988', owner: 'Private Family Trust', location: 'Geneva, Switzerland' },
    ],
    exhibitions: ['Baselworld Masterpiece Pavilion, 1994'],
    literature: ['Famous Diamonds of the 20th Century, I. Balfour, London 2000, p. 119.'],
  },
  {
    id: 'lot-38',
    lotNumber: 38,
    saleroom: 'NEW YORK',
    category: 'timepieces',
    department: 'Haute Horlogerie & Jewels',
    title: 'Patek Philippe Reference 2499 First Series',
    subtitle: 'Historic Horology',
    artist: 'Patek Philippe & Co.',
    artistDates: 'Genève, est. 1839',
    year: '1951',
    medium: 'Platinum case with square pushers, tachymeter scale, perpetual calendar chronograph, moon phase',
    dimensions: 'Diameter 37.5 mm, Thickness 13.2 mm',
    signatureInfo: 'Double signed dial "Patek Philippe Geneve" and retailer "Gobbi Milano"',
    provenance: 'Manufactured 1951. Original certificat d’origine, provenance Lord Ashburton.',
    estimateLow: 3200000,
    estimateHigh: 4000000,
    currentBid: 3650000,
    openingBid: 2800000,
    bidsCount: 14,
    status: 'closing_soon',
    closingIn: 'CLOSES IN 1H 12M',
    primaryImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCCFjVo4mKKzoKZUXnQ2fQNHdeTIGqUJdPfdsG7pSaAkPQT60Gp26DRm10sTkFMDb7dDKqCkri5meJIMSl6qO5Ss3Bzs_lg1GowdeLyCAoNADvBUJF010GZCwex4qjOxkWwXw4TNZwA1U5YhTBlqf8bS6rwpPX5Df7qiu4nibn-T-Kc4eBmAaB2sSJ-RgRvePLYoxv4HQDepnObrlf__ichvX6hbW7B4zpTHwKlB6UX3ex3lJJchZ-37g',
    conditionReport: {
      overallGrade: 'Museum Horological Grade (98/100)',
      structuralIntegrity: 'Platinum case unpolished, sharp hallmarks on reverse of top left lug and inside caseback.',
      varnishSurface: 'First series dial with hard-enamel signature and tachymeter ring perfectly preserved.',
      conservationHistory: 'Serviced by Patek Philippe Heritage Department, Geneva, in 2021 without polishing.',
      uvFluorescenceNotes: 'Radium hands and hour markers illuminate uniformly under 365nm UV excitation.',
      examiner: 'Jean-Marc Dubois, Master Watchmaker & Horological Historian',
      examDate: '02 September 2025',
      institution: 'Aurelia Watch Department, New York',
    },
    provenanceHistory: [
      { year: '1951', owner: 'Lord Ashburton (Alexander Baring)', location: 'London & Hampshire' },
      { year: '1992', owner: 'Prominent Milanese Private Collection', location: 'Milan, Italy' },
    ],
    exhibitions: ['Patek Philippe Museum Grand Complications Exhibit, 2014'],
    literature: ['Patek Philippe: The Grand Complications, Huber & Banbery, p. 210.'],
  },
  {
    id: 'lot-61',
    lotNumber: 61,
    saleroom: 'LONDON',
    category: 'sculpture',
    department: 'Fine Art & Sculptures',
    title: "Barbara Hepworth, 'Forms in Echelon'",
    subtitle: 'Post-War Sculpture',
    artist: 'Dame Barbara Hepworth',
    artistDates: 'British, 1903–1975',
    year: '1964',
    medium: 'Cast bronze with deep golden green patina on Belgian black marble base',
    dimensions: 'Height 104 cm (41.0 in) including plinth',
    signatureInfo: 'Stamped with artist monogram "BH", numbered 2/6, and Morris Singer Foundry mark',
    provenance: 'Executed in 1964. Cast 2 of an edition of 6. Stamped by Morris Singer Foundry.',
    estimateLow: 1800000,
    estimateHigh: 2400000,
    currentBid: 2100000,
    openingBid: 1400000,
    bidsCount: 9,
    status: 'closing_soon',
    closingIn: 'CLOSES IN 3H 45M',
    primaryImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDeAh_LqUOQfjL4RTKSza3z8HDuyXQQoze9P17-yFplZQm-gur6Sfhodv5dNIUqESmIqHzzTM6hawostxW3ZkVswqG9o6qoh6_LCh47W7t83GCgSx7yrsdhCUx7--49gnvCcTlKnQNZa0vgFYnVAxLgRXE2swYdiVVjSVj5WQGaaUJLHRXvB7ADI4SAyBCH8HKghkVjiWx84six4A3BfA3IQ8NDj6hdWGYsqhat8AWCDSTGVcpZT4E6LA',
    conditionReport: {
      overallGrade: 'Exceptional (A)',
      structuralIntegrity: 'Cast bronze components perfectly aligned, integral bronze armature structurally sound.',
      varnishSurface: 'Rich variegated olive and golden-brown foundry patina with subtle natural highlights.',
      conservationHistory: 'Cleaned and micro-crystalline Renaissance wax applied by Plowden & Smith, London, 2023.',
      uvFluorescenceNotes: 'No repairs or recasting evident.',
      examiner: 'Sir Anthony Sterling, Curator Emeritus of British Modernism',
      examDate: '24 September 2025',
      institution: 'Aurelia Saleroom, London',
    },
    provenanceHistory: [
      { year: '1964–1972', owner: 'Marlborough Fine Art, London', location: 'UK' },
      { year: '1972–2010', owner: 'Private Collection of Sir Colin St. John Wilson', location: 'Cambridge, UK' },
    ],
    exhibitions: ['Tate Gallery, Barbara Hepworth: A Retrospective, 1968, cat. 142.'],
    literature: ['A.M. Hammacher, The Sculpture of Barbara Hepworth, London 1968, pl. 158.'],
  },
];

export const DEPARTMENTS_DATA: DepartmentInfo[] = [
  {
    id: 'dept-01',
    deptNumber: 'DEP. 01',
    name: 'Fine Art & Sculptures',
    description: 'Old Masters, 19th Century Salon, Post-War Avant-Garde & Contemporary masterworks.',
    lotsCount: 184,
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCGKsu4FgrmaRhXy09tpTVoQMha_alZUNF80iixc5kXBYWodg81L-DmMVioOuqLe_v8w3-ScfiAH1VQSlaUEAwcegbgQy1tRVfsLxb1AfdiwvsoCeqAiBu0WfCIjffy00QQ8LQrC6tvqeBrmx3v05HT5DTXnFUVsXf0kH47teN0ldpdIXMwyGzDaQ_4TyuLDzj7AJxNUksuK324Q6QeWnOKBLFELxiBJkyRU5ugPGAm0H-PJNNkhdahaQ',
    director: 'Lord Nicholas Abercorn',
    directorTitle: 'International Head of European Fine Paintings',
    specialistFocus: ['Italian Renaissance & Baroque', 'Impressionism & Modern', 'Post-War British & American Abstraction'],
    recordSale: {
      lot: 'Claude Monet, "Nymphéas au Crépuscule" (1914)',
      price: '$74,200,000',
      year: '2023',
    },
  },
  {
    id: 'dept-02',
    deptNumber: 'DEP. 02',
    name: 'Antiquities & Rarities',
    description: 'Classical Greco-Roman marbles, ancient numismatics, medieval manuscripts & illuminations.',
    lotsCount: 76,
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB5VQanl0hXpotEgtk1JZcaQDfymQM04A7KmBXdBHsR7q8kyDtHZM2iym6_Pbn6gO5VE81gaXE2Ts7_fZEK6EEb4v52ron3GvWw_msLUJvnLAQajJUrLeo1MoiiyTBANx0I6wwDy5YVzgvnFfCgBI-RW29U8NwVH-2iUVRCIzcM_wG1jKza3nbflIj9rYrhtFjaA5FgMrmCY6FDrf1TiupyAm64mC3NFx-DzC1tdjbKuwESE9NjGL4_rQ',
    director: 'Dr. Penelope Vance-Kyriakos',
    directorTitle: 'Senior Specialist in Greco-Roman & Near Eastern Antiquities',
    specialistFocus: ['Hellenistic & Imperial Roman Marbles', 'Attic Red-Figure Vases', 'Ancient Coinage & Dynastic Cameos'],
    recordSale: {
      lot: 'Roman Imperial Marble Head of Antinous, ca. 130 AD',
      price: '$18,900,000',
      year: '2024',
    },
  },
  {
    id: 'dept-03',
    deptNumber: 'DEP. 03',
    name: 'Haute Horlogerie & Jewels',
    description: 'Historic grand complications, rare pink diamonds, and royal provenance sovereign pieces.',
    lotsCount: 112,
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAuYsgd72GhlJHKt7SJD-6V-fIuzWQ4-fzY9x5zuDYKhiOA0DmYKdRbBA0CbxrDE9u9ZVjG9Bi0joELjMbfSOh2Vu8T707qWv4DesmnjTL3FIh1M-OdnURm37ucZQ1a5uEWoAYl5qQtTbGslTqvefMzs7tTUaEgpQ4m0EeHi_bPSDJZvI8nwWZ6GASHrUNmUkp5yqKmetbB6SXXqMYCMRFPz_tWx1ESOLX-r1SS5lNfJHWl5w91NFV9og',
    director: 'François-Xavier de Saint-Germain',
    directorTitle: 'International Director of Horological Rarities & Sovereign Gems',
    specialistFocus: ['Patek Philippe & Rolex Vintage Prototypes', 'Royal European Crown Jewels', 'Golconda & Argyle Natural Colored Diamonds'],
    recordSale: {
      lot: 'Patek Philippe Grand Complication Ref. 1518 in Steel (1943)',
      price: '$12,450,000',
      year: '2024',
    },
  },
  {
    id: 'dept-04',
    deptNumber: 'DEP. 04',
    name: 'Coachbuilt Automobilia',
    description: 'Rare competition chassis, matching-numbers prototypes, and coachwork icons.',
    lotsCount: 19,
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDwrzGyjOf1Xnfn7Fq6S1biHiP-ra-len0j16IYhr3SsOcESySnm_QgjGieJMH2iSJugTj8dA7gkm9vFQMTMPGLuq56xpYVkFce6-DHhKaI_CRg2bIPaguxc0GcIvFB1u18XUUyDfG3mi1WxJAuxbUC3VEQNF-GJf7OrnIMqphopYCbyQMUO4zRJ4yROPUkRQlRVLdpcEtTDbNSGucPikwRGnmEbdfysbyIcBuh45vKKog94z3E_SpBcw',
    director: 'Count Giancarlo Morosini',
    directorTitle: 'Curator of Historic Competition & Coachbuilt Motorcars',
    specialistFocus: ['Scaglietti & Zagato Aluminum Prototypes', 'Le Mans 24h & Mille Miglia Competitors', 'Pre-War Supercharged Grand Prix Classics'],
    recordSale: {
      lot: '1962 Ferrari 250 GTO Berlinetta Competizione (Chassis #3851GT)',
      price: '$48,400,000',
      year: '2023',
    },
  },
];

export const EDITORIAL_ARTICLES: EditorialArticle[] = [
  {
    id: 'editorial-01',
    category: 'MARKET REPORT',
    readTime: '6 MIN READ',
    date: '18 OCTOBER 2025',
    title: 'Record-Breaking Geneva Season: The Flight to Natural Diamonds & First-Series Chronographs',
    summary:
      'A quantitative breakdown of the 42% price escalation for untouched historical timepieces with verified provenance chains.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAyzpHPyRtncrxZFq5Dvz3VD5R85yc1KxZiVIMW2eq8Lcinn9P7gUnSS_zhI3DsEX6Y9sYOmv9N4vI84VU_M5zUHTOU3rEtBGH293dqsIv5XSKYgVnBHFm-gicaAK8VFJm2JLB6KZvTyO8BlDzgxAtVwzKa4S2qMjiAYT_5K1x9S_ls4M2t7-mCU-8Ydx_ZOdn2LjocXbJiOCaL_FH9GRN4_QaWeVuZ_Rnv932yKgedjTbb--6g63fHsw',
    author: 'François-Xavier de Saint-Germain',
    authorRole: 'Head of Valuation Analytics & Horology',
    keyStats: [
      { label: 'Geneva Total Realized', value: '$184.6M' },
      { label: 'Hammer vs High Estimate', value: '+34.2%' },
      { label: 'Private Collector Bids', value: '78%' },
    ],
    content: [
      'The Autumn 2025 marquee auctions at the Hôtel des Bergues in Geneva established an unambiguous watershed moment for international collectible capital. Across three consecutive saleroom sessions, historical assets with unblemished provenance defied macroeconomic conservatism.',
      'Most notably, reference-grade chronographs produced between 1941 and 1957 achieved a record clearance rate of 98.4%, with four lots surging past the $3,000,000 threshold. Discerning family trusts and sovereign foundations have pivoted emphatically away from speculative modern editions toward verified original condition pieces.',
      'In high jewelry, the scarcity of Type IIa untreated pink diamonds continues to command unparalleled liquidity. With the permanent cessation of extraction from key Australian and African pipes, auction house escrow mechanisms have seen average bidding depth double from 8.2 bids per lot in 2023 to 17.6 bids today.',
    ],
  },
  {
    id: 'editorial-02',
    category: 'CURATORIAL ESSAY',
    readTime: '9 MIN READ',
    date: '12 OCTOBER 2025',
    title: 'The Resurgence of Post-War Kinetic Sculptures in Contemporary Private Collections',
    summary:
      'Examining the growing institutional demand for tactile, moving masterworks from 1958 to 1972 amidst digital fatigue.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBahywfyrb5ayrrKtwqIHATaK35eZRb1FVlAtW47d-KbqWloXSnmLtVVoowJ4pLZdpMN3ZClRyF7bke2wTlHbVzapybsdSMQIwdnh3AhZMviryhNsZT4DKTj01OrbeWTGYvX3Cpgh8xP9wNIXb6Jyk7a5V_uaRawybWkXIwfLxaBiuQ1xFw_36m-_O8Fp14rGgW80eew9vwxjm1Sj34mwrE8x1RSJFRTHPsISGCtT7YaSttAIaMsj76qQ',
    author: 'Dr. Vivienne St. Claire',
    authorRole: 'Chief Curatorial Officer',
    keyStats: [
      { label: 'Average 5-Yr Price CAGR', value: '+21.8%' },
      { label: 'Museum Exhibitions (2025)', value: '14 Global' },
      { label: 'Institutional Accession Rate', value: '41%' },
    ],
    content: [
      'As contemporary life grows increasingly screenscape-bound and dematerialized, collectors are seeking solace in sculptural works possessing palpable mechanical honesty. The kinetic art movement pioneered by artists such as Jean Tinguely, Alexander Calder, Pol Bury, and Barbara Hepworth represents a golden chapter in tactile modernist philosophy.',
      'Our Curatorial Department has documented a distinct demographic evolution: modern technology founders and sovereign institutional funds are allocating significant capital to pieces whose spatial dynamism requires no microprocessors or electric cords, functioning through balance, air currents, and counterbalance.',
      'When placing kinetic works from this era, physical conservation reports must account for metal fatigue, original foundry patinas, and mechanical friction bearings. Our forensic lab works closely with surviving foundry records in London and Milan to ensure each piece functions in exact accordance with the artist’s original intent.',
    ],
  },
  {
    id: 'editorial-03',
    category: 'LEGAL DOSSIER',
    readTime: '4 MIN READ',
    date: '04 OCTOBER 2025',
    title: 'Custody Protocols 2026: Navigating International Cross-Border Fine Art Freeports',
    summary:
      'Crucial advisory on cross-jurisdictional tax optimization, Swiss customs declarations, and museum loan compliance.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDadxQC7hws6m0JV9EqjBYmOdrHzIGqR0JJ5pyI7SG4gRXRtzxU_5WSmpe3XpiD8RVZFBP7RXWhaMxXIkFkJSKKILX0NO0m08-smHtqldPmJHz6wjpaQSGuEIFIdwEXdYgqPs_ckouqbmpTwKmItXuTbZSR9iAyQMpbbJmSDt8dze1UlGO3wbMkrfTHxS-CUiVUKPaPL1lBLJVJu4sGYZD7d0Yy90EJjpJulcaln2bxRYrwxJwJJW4_FQ',
    author: 'Maître Charles-Henri de Montmirail',
    authorRole: 'Head of Legal & Escrow Compliance',
    keyStats: [
      { label: 'Bonded Vaults Covered', value: 'Geneva, Zurich, Singapore' },
      { label: 'AML Verification Grade', value: 'Tier 1 Escrow' },
      { label: 'Cross-Border Clearance', value: '< 24 Hours' },
    ],
    content: [
      'The international physical transit of museum-grade artifacts demands seamless coordination between anti-money laundering (AML) protocols, customs exemptions, and specialized climate-controlled courier escorts.',
      'Under the newly ratified Swiss-EU cultural heritage framework taking effect in 2026, bonded fine art freeports in Geneva and Zurich require real-time biometric custodian declarations and immutable provenance chain filings.',
      'Aurelia Maison d’Enchères maintains an in-house bonded customs logistics team that guarantees full compliance with CITES, UNESCO 1970 convention guidelines, and bilateral cultural preservation treaties for all saleroom and private treaty acquisitions.',
    ],
  },
];

export const INITIAL_BIDS_STREAM: BidEntry[] = [
  {
    id: 'bid-1',
    lotId: 'lot-14',
    amount: 5200000,
    bidderType: 'Phone',
    location: 'Geneva Private Banking Desk',
    paddleNumber: 'PADDLE #412',
    timestamp: 'Just now',
  },
  {
    id: 'bid-2',
    lotId: 'lot-14',
    amount: 5000000,
    bidderType: 'Floor',
    location: 'New York Rostrum Front Row',
    paddleNumber: 'PADDLE #109',
    timestamp: '1 min ago',
  },
  {
    id: 'bid-3',
    lotId: 'lot-14',
    amount: 4800000,
    bidderType: 'Online',
    location: 'London VIP Connoisseur',
    paddleNumber: 'PADDLE #884',
    timestamp: '2 mins ago',
  },
  {
    id: 'bid-4',
    lotId: 'lot-14',
    amount: 4600000,
    bidderType: 'Commission',
    location: 'Order Book Booked Advance',
    paddleNumber: 'ORDER BOOK',
    timestamp: '3 mins ago',
  },
  {
    id: 'bid-5',
    lotId: 'lot-14',
    amount: 4400000,
    bidderType: 'Phone',
    location: 'Tokyo Advisory Desk',
    paddleNumber: 'PADDLE #203',
    timestamp: '4 mins ago',
  },
];
