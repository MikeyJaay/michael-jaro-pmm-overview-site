

# Hero Section Layout & Spacing Improvements

Looking at the screenshot vs. the code, the main issues are:

1. **Headline is too small** — needs to be larger and bolder to match the reference's dominant presence
2. **Spacing between elements is too uniform/tight** — needs more breathing room between the headline, subheadline, supporting text, and CTA
3. **Subheadline could be larger** — bump from `text-lg/xl` to `text-xl/2xl` for better hierarchy
4. **Supporting paragraph needs more separation** from the subheadline — increase top margin and add a subtle visual break
5. **CTA button needs more top margin** — more whitespace before the button
6. **Overall section padding** could increase slightly

## Changes (single file: `src/components/HeroSection.tsx`)

| Element | Current | Proposed |
|---|---|---|
| Section padding | `py-28 md:py-40` | `py-32 md:py-48` |
| Eyebrow bottom margin | `mb-4` | `mb-6` |
| Headline size | `text-4xl md:text-6xl lg:text-7xl` | `text-5xl md:text-7xl lg:text-8xl` |
| Headline bottom spacing (gap to sub) | `mt-6` on subheadline | `mt-8 md:mt-10` |
| Subheadline size | `text-lg md:text-xl` | `text-xl md:text-2xl` |
| Subheadline max-width | `max-w-2xl` | `max-w-3xl` |
| Supporting text margin | `mt-4` | `mt-6 md:mt-8` |
| Supporting text size | `text-sm` | `text-base` |
| Supporting text max-width | `max-w-xl` | `max-w-2xl` |
| CTA margin | `mt-10` | `mt-12 md:mt-14` |
| CTA button | `size="lg" px-8` | `size="lg" px-10 py-6 text-base` |

This creates a clear size-based hierarchy: massive headline > medium subheadline > smaller supporting text, with generous whitespace between each tier.

