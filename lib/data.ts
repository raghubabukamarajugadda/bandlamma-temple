/* ── Sri Bhagalamukhi Devi (Bandlamma) Devastanam, Chandole — site data ── */

export const TEMPLE = {
  name: "Sri Bhagalamukhi Devi (Bandlamma) Devastanam",
  nameTe: "శ్రీ బగళాముఖి దేవి (బండ్లమ్మ) దేవస్థానము",
  place: "Chandole",
  placeTe: "చందోలు",
  invocation: "శ్రీ బగళాముఖ్యై నమః",
  address:
    "Sri Bhagalamukhi Devi Devastanam, NH-216, Chandole, Pittalavanipalem Mandal, Bapatla Dist., Andhra Pradesh 522311",
  phone: "086432 55155",
  mobile: "+91 94404 34336",
  email: "chandolegrouptemples@gmail.com",
  youtube: "https://www.youtube.com/@bagalamukhitemplechandole416",
  mapsUrl: "https://maps.google.com/?q=16.0067706,80.6086728",
  mapsEmbed: "https://www.google.com/maps?q=16.0067706,80.6086728&z=15&output=embed",
};

export const DARSHAN_TIMINGS = {
  morning: { open: "6:00 AM", close: "12:00 PM", openH: 6, closeH: 12 },
  evening: { open: "4:30 PM", close: "8:00 PM", openH: 16.5, closeH: 20 },
  note: "Timings may extend on Amavasya, Fridays, Jayanthi & Navaratri days.",
};

export type Seva = {
  id: string;
  name: string;
  nameTe: string;
  price: number;
  category: "nitya" | "homam" | "special" | "darshan";
  image: string;
  desc: string;
  when: string;
};

export const SEVAS: Seva[] = [
  {
    id: "sarvadarshan",
    name: "Sarva Darshanam",
    nameTe: "సర్వ దర్శనం",
    price: 0,
    category: "darshan",
    image: "/images/temple-chandole.webp",
    desc: "Free darshan of Sri Bandlamma Ammavaru for all devotees during temple hours.",
    when: "Daily · 6:00 AM – 12:00 PM, 4:30 – 8:00 PM",
  },
  {
    id: "special-darshan",
    name: "Special Darshanam",
    nameTe: "ప్రత్యేక దర్శనం",
    price: 50,
    category: "darshan",
    image: "/images/temple-real.webp",
    desc: "Priority queue darshan for devotees on busy days and weekends.",
    when: "Daily · subject to crowd",
  },
  {
    id: "archana",
    name: "Archana",
    nameTe: "అర్చన",
    price: 51,
    category: "nitya",
    image: "/images/abhishekam.webp",
    desc: "Namarchana offered in the devotee's name, gotram and nakshatram by the temple archaka.",
    when: "Daily · morning & evening",
  },
  {
    id: "kumkumarchana",
    name: "Kumkumarchana",
    nameTe: "కుంకుమార్చన",
    price: 216,
    category: "nitya",
    image: "/images/abhishekam.webp",
    desc: "Kumkuma and turmeric archana to Ammavaru — especially dear to Bandlamma Thalli.",
    when: "Daily · Fridays special",
  },
  {
    id: "abhishekam",
    name: "Nitya Abhishekam",
    nameTe: "నిత్య అభిషేకం",
    price: 1116,
    category: "nitya",
    image: "/images/deepalu.webp",
    desc: "Sacred bath to the Goddess with panchamrutam, turmeric water and flowers with veda parayanam.",
    when: "Daily · 7:00 AM",
  },
  {
    id: "amavasya-homam",
    name: "Amavasya Divya Homam",
    nameTe: "అమావాస్య దివ్య హోమం",
    price: 1516,
    category: "homam",
    image: "/images/homam.webp",
    desc: "The signature homam of this kshetram performed on every Amavasya for shatru-nashana and manah-shanti.",
    when: "Every Amavasya · evening",
  },
  {
    id: "navavarna-puja",
    name: "Navavarana Puja",
    nameTe: "నవావరణ పూజ",
    price: 2116,
    category: "homam",
    image: "/images/real-puja-card.webp",
    desc: "Srividya-tradition Navavarana puja to Bagalamukhi Devi with detailed avarana archana.",
    when: "Pournami & special days",
  },
  {
    id: "chandi-homam",
    name: "Chandi Homam",
    nameTe: "చండీ హోమం",
    price: 2516,
    category: "homam",
    image: "/images/homam.webp",
    desc: "Chandi parayana with homam performed for victory over obstacles, court matters and debts.",
    when: "Sundays & by sponsorship",
  },
  {
    id: "sahasranama-kumkumarchana",
    name: "Sahasranama Kumkumarchana",
    nameTe: "సహస్రనామ కుంకుమార్చన",
    price: 516,
    category: "special",
    image: "/images/real-deity-card.webp",
    desc: "Archana with the thousand names of the Goddess using kumkuma — offered on behalf of the devotee.",
    when: "Fridays & festival days",
  },
  {
    id: "annadanam",
    name: "Nitya Annadanam",
    nameTe: "నిత్య అన్నదానం",
    price: 5016,
    category: "special",
    image: "/images/annadanam.webp",
    desc: "Sponsor a full day's anna-prasadam served to devotees. Annadanam is the greatest daanam.",
    when: "Choose any day",
  },
  {
    id: "laksha-kumkumarchana",
    name: "Laksha Kumkumarchana",
    nameTe: "లక్ష కుంకుమార్చన",
    price: 11116,
    category: "special",
    image: "/images/festival-utsavam.webp",
    desc: "Grand one-lakh-count kumkumarchana conducted over a day with multiple archakas — a once-in-a-lifetime offering.",
    when: "By prior arrangement",
  },
];

export type Festival = {
  name: string;
  nameTe: string;
  when: string;
  desc: string;
  highlight?: boolean;
};

export const FESTIVALS: Festival[] = [
  {
    name: "Bagalamukhi Jayanthi",
    nameTe: "బగళాముఖి జయంతి",
    when: "Vaishakha Sudda Ashtami (Apr–May)",
    desc: "The appearance day of the Goddess — grand abhishekam, special homams, alankaram and rathotsavam. Thousands of devotees throng Chandole on this day.",
    highlight: true,
  },
  {
    name: "Amavasya Divya Homam",
    nameTe: "అమావాస్య దివ్య హోమం",
    when: "Every Amavasya (new moon)",
    desc: "The most beloved seva of this kshetram — a divya homam performed for the removal of enemies, doshas and mental unrest, followed by prasadam.",
    highlight: true,
  },
  {
    name: "Sharad Navaratri & Dasara",
    nameTe: "శరన్నవరాత్రి & దసరా",
    when: "Ashwayuja masam (Sep–Oct)",
    desc: "Nine nights of special alankarams — Ammavaru is decorated in a different avatar each day, with daily homams and cultural programmes.",
    highlight: true,
  },
  {
    name: "Deepavali",
    nameTe: "దీపావళి",
    when: "Ashwayuja Amavasya (Oct–Nov)",
    desc: "Deepotsavam — the temple glows with thousands of lamps; special divya darshanam of Ammavaru.",
  },
  {
    name: "Ugadi — Panchanga Sravanam",
    nameTe: "ఉగాది పంచాంగ శ్రవణం",
    when: "Chaitra Sudda Padyami (Mar–Apr)",
    desc: "Telugu New Year with panchanga sravanam, special puja and distribution of ugadi pachadi.",
  },
  {
    name: "Karthika Deepotsavam",
    nameTe: "కార్తీక దీపోత్సవం",
    when: "Karthika masam (Nov–Dec)",
    desc: "Vanabhojanam and deepa seva through the holy month; the prakaram is lit with deepalu every evening.",
  },
  {
    name: "Maha Shivaratri",
    nameTe: "మహా శివరాత్రి",
    when: "Magha Bahula Chaturdasi (Feb–Mar)",
    desc: "Special pujas at the ancient Sri Lingodbhava Swamy temple in the same kshetra complex.",
  },
  {
    name: "Magasara / Village Jatara",
    nameTe: "గ్రామోత్సవం",
    when: "Summer (as announced)",
    desc: "Traditional village utsavam with prabhalu, kolatam and folk offerings — Bandlamma as the grama-devata.",
  },
];

export type TempleVideo = {
  id: string;
  title: string;
  titleTe?: string;
  tag: "live" | "seva" | "darshan" | "special";
  date?: string;
};

/* Real uploads from the temple's official YouTube channel
   @bagalamukhitemplechandole416 — latest items first. */
export const VIDEOS: TempleVideo[] = [
  {
    id: "_rbejv8yfJo",
    title: "Amavasya Divya Homam — 94th Ashwayuja masam",
    titleTe: "అమావాస్య దివ్య హోమము",
    tag: "live",
    date: "8 Nov 2026",
  },
  {
    id: "PSYooJT7cqw",
    title: "Ancient Sri Bandlamma – Sri Bhagalamukhi Ammavari Charitra · Part 1",
    titleTe: "అమ్మవారి చరిత్ర",
    tag: "special",
    date: "7 Nov 2026",
  },
  {
    id: "Akq8dEyQ0BQ",
    title: "Sri Ammavaru in Mahalakshmi Devi Alankaram",
    titleTe: "మహాలక్ష్మి అలంకరణ",
    tag: "darshan",
    date: "8 Nov 2026",
  },
  {
    id: "kvYXQ3O0Yzc",
    title: "Deepavali — Divya Darshanam of Sri Ammavari",
    titleTe: "దీపావళి దివ్య దర్శనం",
    tag: "darshan",
    date: "8 Nov 2026",
  },
  {
    id: "vChzGpmta3g",
    title: "Pradosha Kala Doopa Seva",
    titleTe: "ప్రదోషకాల దూప సేవ",
    tag: "seva",
    date: "6 Nov 2026",
  },
  {
    id: "mreJaCw4mKg",
    title: "Sri Ghantasala Narasimhamurthy garu",
    titleTe: "ఘంటసాల నరసింహమూర్తి",
    tag: "special",
    date: "7 Nov 2026",
  },
  {
    id: "-QoPJ3xYlrY",
    title: "Evening Seva — Nivedana & Harathi",
    titleTe: "సాయంత్రం సేవ",
    tag: "seva",
    date: "8 Nov 2026",
  },
  {
    id: "7b5_ihOraFg",
    title: "Morning Abhishekam & Alankaram",
    titleTe: "ఉదయం అభిషేకం",
    tag: "seva",
    date: "8 Nov 2026",
  },
  {
    id: "Pdi31IKHuOU",
    title: "Ammavari Divya Darshanam",
    titleTe: "దివ్య దర్శనం",
    tag: "darshan",
    date: "8 Nov 2026",
  },
  {
    id: "mf6v9ZeLi7c",
    title: "Suprabhata Seva — Temple opening",
    titleTe: "సుప్రభాత సేవ",
    tag: "seva",
    date: "8 Nov 2026",
  },
  {
    id: "hrVDsNht1do",
    title: "Evening Pooja & Mangala Harathi",
    titleTe: "మంగళ హారతి",
    tag: "seva",
    date: "6 Nov 2026",
  },
  {
    id: "3a6WYK_ndvk",
    title: "Daily Archana — Kumkumarchana",
    titleTe: "కుంకుమార్చన",
    tag: "seva",
    date: "6 Nov 2026",
  },
];

export const DONATION_CAUSES = [
  {
    id: "annadanam",
    name: "Nitya Annadanam",
    nameTe: "నిత్య అన్నదానం",
    image: "/images/annadanam.webp",
    min: 101,
    suggested: [5016, 10116, 25116],
    desc: "Feed devotees who visit the kshetram. One day's annadanam can be sponsored in your name or in memory of your elders.",
  },
  {
    id: "homam-fund",
    name: "Amavasya Homam Fund",
    nameTe: "హోమ నిధి",
    image: "/images/homam.webp",
    min: 101,
    suggested: [516, 1516, 5016],
    desc: "Support the monthly divya homam — samagri, ghee, dravya and dakshina for the rigvedi archakas.",
  },
  {
    id: "temple-dev",
    name: "Temple Development",
    nameTe: "దేవస్థాన అభివృద్ధి",
    image: "/images/prakaram.webp",
    min: 101,
    suggested: [1116, 11116, 51116],
    desc: "Prakaram restoration, mandapam upkeep, pushkarini steps, lighting and devotee amenities at this Chola-era kshetram.",
  },
  {
    id: "deepa-seva",
    name: "Nitya Deepa Seva",
    nameTe: "నిత్య దీప సేవ",
    image: "/images/deepalu.webp",
    min: 51,
    suggested: [216, 516, 1116],
    desc: "Oil and wicks for the lamps that burn before Ammavaru each day — the simplest and sweetest offering.",
  },
];

export const GOTRAS = [
  "Bharadwaja", "Kashyapa", "Vasishta", "Vishwamitra", "Gautama", "Jamadagni",
  "Atri", "Agastya", "Koundinya", "Harita", "Srivatsa", "Mudgala", "Sandilya",
  "Shatananda", "Krishnatri", "Vadula", "Other",
];

export const NAKSHATRAS = [
  "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu",
  "Pushyami", "Ashlesha", "Magha", "Pubba", "Uttara", "Hasta", "Chitra", "Swati",
  "Vishakha", "Anuradha", "Jyeshtha", "Moola", "Poorvashadha", "Uttarashadha",
  "Shravana", "Dhanishta", "Shatabhisha", "Poorvabhadra", "Uttarabhadra", "Revati",
];

export const RASIS = [
  "Mesha", "Vrishabha", "Mithuna", "Karka", "Simha", "Kanya", "Tula",
  "Vrischika", "Dhanus", "Makara", "Kumbha", "Meena",
];
