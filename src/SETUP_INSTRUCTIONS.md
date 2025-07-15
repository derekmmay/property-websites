# Dynamic Property Pages Setup

## What's Been Implemented

✅ **Dynamic routing** for `/:propertyAddress`
✅ **PropertyPage component** that fetches property data
✅ **API service** to connect to your external Supabase
✅ **Updated components** (Hero, PropertyDescription, PhotoGallery) to display dynamic property data

## Next Steps Required

### 1. Add Your Supabase Anon Key

In `src/services/propertyApiService.ts`, replace:
```typescript
const supabaseKey = 'YOUR_ANON_KEY'; // You'll need to provide this
```

With your actual Supabase anon key from: https://ghysnghgmsnhqxwltqgp.supabase.co

### 2. Update Database Field Names

The PropertyData interface assumes these field names:
- `address`
- `city` 
- `state`
- `zip_code`
- `price`
- `bedrooms`
- `bathrooms`
- `square_feet`
- `description`
- `images`

Update the interface in `propertyApiService.ts` to match your actual database columns.

### 3. Test the Setup

Try accessing: `yoursite.com/123-main-street` (or any property address from your database)

### 4. Email Function Integration

Your email function should send links like:
`brandsynk.com/[formatted-property-address]`

The address will be used to query your Supabase database.

## How It Works

1. User visits `/some-property-address`
2. `PropertyPage` component loads
3. Fetches property data from your external Supabase using the address
4. Displays the property using the existing beautiful components
5. Falls back to default data if property not found

## Troubleshooting

- Make sure your database has data
- Check the browser console for API errors
- Verify the Supabase URL and key are correct
- Ensure table names match: "Los Angeles County $2.5M+" and "Orange County $2.5M+"