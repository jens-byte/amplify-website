import { defineCollection, z } from 'astro:content';

const home = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hero: z.object({
      badge: z.string(),
      title: z.string(),
      subtitle: z.string(),
      cta1_text: z.string(),
      cta1_href: z.string(),
      cta2_text: z.string(),
      cta2_href: z.string(),
    }),
    value_props: z.object({
      title: z.string(),
      intro: z.string(),
      slimmer_title: z.string(),
      slimmer_body: z.string(),
      overtuigender_title: z.string(),
      overtuigender_body: z.string(),
      sneller_title: z.string(),
      sneller_body: z.string(),
    }),
    audience: z.object({
      title: z.string(),
      intro: z.string(),
      vastgoed: z.string(),
      ecommerce: z.string(),
      musea: z.string(),
    }),
    how: z.object({
      title: z.string(),
      intro: z.string(),
      step1_title: z.string(),
      step1_body: z.string(),
      step2_title: z.string(),
      step2_body: z.string(),
      step3_title: z.string(),
      step3_body: z.string(),
    }),
    why: z.object({
      title: z.string(),
      intro: z.string(),
      items: z.array(z.object({ title: z.string(), body: z.string() })),
    }),
    testimonial: z.object({
      quote: z.string(),
      attribution: z.string(),
    }),
    cta: z.object({
      title: z.string(),
      body: z.string(),
      cta_text: z.string(),
    }),
  }),
});

const sectors = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      subtitle: z.string(),
    }),
    problem: z.object({
      title: z.string(),
      intro: z.string(),
      items: z.array(z.string()),
    }),
    foundation_intro: z.string(),
    foundation_products: z.array(z.object({
      name: z.string(),
      href: z.string(),
      body: z.string(),
    })),
    addon_intro: z.string(),
    addon_products: z.array(z.object({
      name: z.string(),
      href: z.string(),
      body: z.string(),
    })),
    steps_title: z.string(),
    steps_intro: z.string(),
    steps: z.array(z.object({ title: z.string(), body: z.string() })),
    why_title: z.string(),
    why_items: z.array(z.object({ title: z.string(), body: z.string() })),
    cta_title: z.string(),
    cta_body: z.string(),
  }),
});

export const collections = { home, sectors };
