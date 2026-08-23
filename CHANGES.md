# Changes Made

This document details the files modified to implement the agreed-upon SEO strategy for the B2P International LED Wall Rental page, while stripping out all unverified claims (such as P3/P4 specs).

### 1. `src/components/Contact.jsx`
- Added the `<option value="led-wall">LED Wall & Stage Rental</option>` to the service dropdown within the contact form.

### 2. `src/components/ThrissurLocation.jsx`
- Added a clear contextual internal link to the `/led-wall` page inside the introductory paragraph to push event-related intent to the proper page without hurting the LED Van SEO.

### 3. `src/components/LedWall.jsx`
- Re-worded H1 and H2 tags to clearly indicate "Event & Stage LED Screen Solutions".
- Re-worded the "Our Recent LED Wall Setups" section to "Our Work: Recent LED Wall Projects & Case Studies".
- Replaced the stock image grid in the "Our Work" section with a placeholder box reading "Project Photos & Case Studies Coming Soon" so we don't present fake/unverified clients.
- Removed all unverified P3/P4, exact pixel pitch, and viewing distance claims from the FAQ schema, visible FAQ, feature cards, and technical specs sections.
- Cleaned the `Service` JSON-LD schema to accurately reflect "Indoor and outdoor LED screens available." without inventing technical specifications.

### 4. `src/components/Blog.jsx`
- Removed unverified "P3" and "P4" pixel pitch claims and specific viewing distance (3m) from the blog text, replacing them with professional generic terms ("Indoor screens" and "Outdoor screens").

### 5. `src/components/HomeSeo.jsx`
- Removed "P3 & P4" from the meta description in the `SiteNavigationElement` schema for the LED Wall Rental link.

### 6. `src/components/LedVanAdvertising.jsx`
- Removed unverified "P3" and "P4" specifications from the body text, feature blocks, and FAQ section.
- Ensured the language strictly promises "daylight-visible outdoor screens" without fabricating exact model strings.

### 7. `src/components/Services.jsx`
- Removed "P3/P4" from the LED Van and LED Wall service card descriptions.
- Updated the link for the LED Wall service card from `/led-wall-rental` to `/led-wall`.
