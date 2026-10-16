export const SITE_ORIGIN = "https://www.multiespacios.com.co";

export const ANALYTICS = {
  gtmId: "GT-MJSZCMJ",
};

export const CONTACT = {
  whatsappNumber: "573125575477",
  primaryPhone: "+573125575477",
  secondaryPhone: "+573138004323",
  displayPhones: "312 557 54 77 – 313 800 43 23",
  email: "comercial@multiespacios.com.co",
};

export const MAPS = {
  embedUrl:
    "https://maps.google.com/maps?q=Multiespacios+SAS,+Bogota&t=&z=15&ie=UTF8&iwloc=&output=embed",
  placeUrl:
    "https://www.google.com/maps/place/Multiespacios+SAS/@4.7071916,-74.0991715,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f84cadb68466d:0xc2d8f2839d6d3c14!8m2!3d4.7071916!4d-74.0991715!16s%2Fg%2F1pv05jl89?hl=es-419&entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D",
};

export function buildWhatsAppUrl(text: string): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function buildReferenceUrl(path: string): string {
  return `${SITE_ORIGIN}${path}`;
}
