/**
 * Mbuvi Farm Delivery Zones and Schedule
 * Transparent flat-rate and town-specific fees across Nairobi, Machakos, and Kiambu counties.
 */

export const deliveryZones = [
  {
    id: 'nairobi-east-cbd',
    county: 'Nairobi',
    name: 'Nairobi CBD & Eastlands',
    areas: ['CBD', 'Upper Hill', 'Industrial Area', 'Donholm', 'Buruburu', 'Umoja', 'South B & C'],
    feeKES: 250,
    schedule: 'Daily (Morning delivery: 7:30 AM – 11:30 AM)',
    cutoffTime: 'Order before 8:30 PM for next morning delivery',
  },
  {
    id: 'nairobi-westlands-kilimani',
    county: 'Nairobi',
    name: 'Nairobi Westlands & Kilimani',
    areas: ['Westlands', 'Parklands', 'Kilimani', 'Kileleshwa', 'Lavington', 'Riverside'],
    feeKES: 300,
    schedule: 'Daily (Morning & Midday: 8:30 AM – 1:00 PM)',
    cutoffTime: 'Order before 8:30 PM for next morning delivery',
  },
  {
    id: 'nairobi-karen-langata',
    county: 'Nairobi',
    name: 'Nairobi South-West (Karen / Langata)',
    areas: ['Karen', 'Langata', 'Ngong Road', 'Rongai Gate'],
    feeKES: 350,
    schedule: 'Tuesdays, Thursdays, Saturdays (9:00 AM – 2:00 PM)',
    cutoffTime: 'Order day prior before 8:00 PM',
  },
  {
    id: 'nairobi-thika-road',
    county: 'Nairobi / Kiambu',
    name: 'Thika Road & Kiambu Environs',
    areas: ['Roysambu', 'Kasarani', 'Kahawa Sukari', 'Ruiru Town', 'Kiambu Road', 'Fourways'],
    feeKES: 350,
    schedule: 'Mondays, Wednesdays, Fridays, Saturdays (8:30 AM – 1:30 PM)',
    cutoffTime: 'Order day prior before 8:00 PM',
  },
  {
    id: 'machakos-corridor',
    county: 'Machakos',
    name: 'Machakos County & Kangundo Corridor',
    areas: ['Machakos Town', 'Tala', 'Kangundo', 'Joska', 'Kamulu', 'Malaas'],
    feeKES: 200,
    schedule: 'Daily Farm-Gate Dispatch (7:00 AM – 11:00 AM)',
    cutoffTime: 'Order before 9:00 PM for same-morning harvest',
  },
  {
    id: 'syokimau-athi-kitengela',
    county: 'Machakos / Kajiado',
    name: 'Mombasa Road Corridor',
    areas: ['Syokimau', 'Mlolongo', 'Athi River', 'Kitengela Town', 'Greenpark'],
    feeKES: 250,
    schedule: 'Daily (Morning: 8:00 AM – 12:00 PM)',
    cutoffTime: 'Order before 8:30 PM for next morning delivery',
  },
];

export const getDeliveryFee = (zoneId, subtotalKES, freeDeliveryThresholdKES = 2500) => {
  if (subtotalKES >= freeDeliveryThresholdKES) {
    return 0; // Free delivery unlocked
  }
  const zone = deliveryZones.find(z => z.id === zoneId);
  return zone ? zone.feeKES : 250;
};
