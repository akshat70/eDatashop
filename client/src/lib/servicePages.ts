export type ServicePage = {
  slug: string;
  title: string;
  category: string;
  categoryPath: string;
  label: string;
  intro: string;
  body: string;
  bullets: string[];
  workflow: string[];
  deliverables: string[];
  industries: string[];
  sourceNote: string;
};

export const servicePages: ServicePage[] = [];

export function getServicePage(slug: string) { return servicePages.find((service) => service.slug === slug); }
