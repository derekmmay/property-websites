import { supabase } from '@/integrations/supabase/client';

export interface PropertyData {
  id: number;
  address: string | null;
  city: string | null;
  state: string | null;
  zip_code?: string | null;
  price: string | null;
  beds: string | null;
  baths: string | null;
  area: string | null;
  description?: string | null;
  images?: any;
  county: string;
  listing_agent?: string | null;
  listing_date?: string | null;
  days_on_market?: string | null;
  hoa?: string | null;
  year_build?: string | null;
  // Add other fields as needed based on your database schema
}

export async function fetchPropertyByAddress(address: string): Promise<PropertyData | null> {
  try {
    // Try both tables - you might want to specify which table based on the address
    const { data: laData, error: laError } = await supabase
      .from('Los Angeles County $2.5M+')
      .select('*')
      .ilike('address', `%${address}%`)
      .single();

    if (laData && !laError) {
      return { ...laData, county: 'Los Angeles' };
    }

    const { data: ocData, error: ocError } = await supabase
      .from('Orange County $2.5M+')
      .select('*')
      .ilike('address', `%${address}%`)
      .single();

    if (ocData && !ocError) {
      return { ...ocData, county: 'Orange' };
    }

    console.error('Property not found in either table');
    return null;
  } catch (error) {
    console.error('Error fetching property:', error);
    return null;
  }
}

export async function fetchAllProperties(): Promise<PropertyData[]> {
  try {
    const [laResponse, ocResponse] = await Promise.all([
      supabase.from('Los Angeles County $2.5M+').select('*'),
      supabase.from('Orange County $2.5M+').select('*')
    ]);

    const laProperties = laResponse.data?.map(p => ({ ...p, county: 'Los Angeles' })) || [];
    const ocProperties = ocResponse.data?.map(p => ({ ...p, county: 'Orange' })) || [];

    return [...laProperties, ...ocProperties];
  } catch (error) {
    console.error('Error fetching all properties:', error);
    return [];
  }
}