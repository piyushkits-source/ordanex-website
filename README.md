# Ordanex Public Website

This folder contains the standalone public website for `ordanex.ai`.

## What it includes

- Public marketing homepage
- Products and services sections
- Demo request form
- Mobile-friendly layout with a polished landing-page design

## Demo request flow

The form opens a prefilled email draft to `hello@ordanex.ai` by default.
If you want, you can later replace that with:

- a Cloudflare Worker
- a CRM webhook
- a form service like HubSpot, Formspark, or Basin

## Hosting

The site is static and can be deployed directly to Cloudflare Pages.

Suggested root:

```text
website/
```

## Local preview

Open `website/index.html` in a browser, or serve the folder with any static file server.
