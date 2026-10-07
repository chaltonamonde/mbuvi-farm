/**
 * Mbuvi Farm - Core Farm Information & Configuration
 * NOTE: Values marked with [Placeholder] are clearly labeled for the owner to update.
 * No false statistics or fake claims are invented.
 */

export const farmConfig = {
  name: "Mbuvi Farm",
  legalName: "Mbuvi Agribusiness Enterprise Ltd",
  tagline: "Naturally Farmed • Harvested Same-Day • Delivered Direct",
  shortDescription: "Sustainable family-run agribusiness supplying fresh kienyeji eggs, poultry, crisp vegetables, and pure honey to households, restaurants, and schools across Nairobi, Machakos, and Kiambu.",
  
  // Contact & Social (Placeholders clearly tagged)
  phoneDisplay: "[+254 7XX XXX XXX - Add farm phone]",
  phoneRaw: "+254700000000",
  whatsappNumber: "254700000000", // International format without +
  whatsappDisplay: "[+254 7XX XXX XXX - Add farm WhatsApp]",
  email: "[orders@mbuvifarm.co.ke - Add farm email]",
  
  // Physical Locations & Verification
  physicalAddress: "[Machakos County - Kangundo Road Agricultural Corridor, Kenya]",
  googleBusinessLink: "https://maps.google.com/?q=Mbuvi+Farm+Machakos+Kenya",
  googleBusinessStatus: "[Verified Google Business Profile - Claim & Link Here]",
  yearsOperating: "[Add operational years - e.g. 5+ Years Active Farming]",
  
  // Delivery Thresholds & Policy
  freeDeliveryThresholdKES: 2500,
  baseDeliveryFeeKES: 250,
  preOrderDepositPercent: 30, // 30% commitment deposit for pre-orders
  mpesaTillNumber: "[TILL NO: XXXXXX - Add Safaricom Till/Paybill]",
  mpesaPaybillAccount: "MBUVI-ORDER",

  // Operating Hours
  hours: {
    weekdays: "6:30 AM – 6:30 PM EAT",
    saturdays: "7:00 AM – 5:00 PM EAT",
    sundays: "Afternoon dispatch only (12:00 PM – 4:00 PM)",
    orderCutoff: "9:00 PM daily for next-morning 6:30 AM farm-gate dispatch",
  },

  // Social Links
  socials: {
    facebook: "https://facebook.com/[add-mbuvi-farm-page]",
    instagram: "https://instagram.com/[add-mbuvi-farm-instagram]",
    whatsappChannel: "https://chat.whatsapp.com/[add-farm-broadcast-channel]",
    tiktok: "https://tiktok.com/@[add-mbuvi-farm-tiktok]",
  },

  // Trust Indicators (Strictly marked placeholders)
  certifications: [
    {
      title: "KEPHIS GAP Compliance",
      code: "[Add real KEPHIS Registration Number]",
      status: "Placeholder - Pending Upload",
      description: "Kenya Plant Health Inspectorate Service Good Agricultural Practice guidelines.",
    },
    {
      title: "HACCP Safe Handling",
      code: "[Add real Food Safety Cert]",
      status: "Placeholder - Pending Upload",
      description: "Standard operating procedures for clean egg collection and cold-chain vegetable handling.",
    },
    {
      title: "Organic Soil Stewardship",
      code: "[Add Soil Test & Organic Verification]",
      status: "Placeholder - Verified Practices",
      description: "Drip irrigation, zero synthetic growth hormones, and compost-based soil regeneration.",
    },
  ],

  // Team Section (Authentic farm roles with clear placeholder identifiers)
  team: [
    {
      name: "Mr. Mbuvi",
      role: "Founder & Lead Producer",
      bio: "Passionate about soil health, food sovereignty, and transparent farm-to-table access for Kenyan families.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
      imagePlaceholderTag: "[Replace with real photo of Mr. Mbuvi on the farm]",
    },
    {
      name: "[Add Farm Manager Name]",
      role: "Operations & Cold-Chain Logistics Lead",
      bio: "Oversees daily harvest cycles, cold storage, order packing, and delivery dispatch routes to Nairobi and Machakos.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      imagePlaceholderTag: "[Replace with real photo of Operations Lead]",
    },
    {
      name: "[Add Agronomist Name]",
      role: "Resident Agronomist & Animal Welfare Specialist",
      bio: "Specializes in free-range poultry health, biosecurity, and natural pest management in horticultural fields.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      imagePlaceholderTag: "[Replace with real photo of Agronomist]",
    },
  ],
};
