
// API functions for property management
import { toast } from "sonner";
import { Property } from "@/types/property";
import { supabase } from "@/integrations/supabase/client";
import { slugify } from "@/lib/utils";

// Create a new property
export const createProperty = async (propertyData: Omit<Property, "id">): Promise<Property> => {
  try {
    // Make sure slug is based on name if not provided
    if (!propertyData.slug) {
      propertyData.slug = slugify(propertyData.name);
    }
    
    // Convert property data to match database column names (camelCase to snake_case)
    const dbPropertyData = {
      name: propertyData.name,
      description: propertyData.description,
      location: propertyData.location,
      propertytype: propertyData.propertyType,
      amenities: propertyData.amenities,
      pricepernight: propertyData.pricePerNight,
      cleaningfee: propertyData.cleaningFee,
      servicefee: propertyData.serviceFee,
      bedrooms: propertyData.bedrooms,
      bathrooms: propertyData.bathrooms,
      maxguests: propertyData.maxGuests,
      images: propertyData.images,
      isavailable: propertyData.isAvailable,
      aboutproperty: propertyData.aboutProperty,
      popularamenities: propertyData.popularAmenities,
      bedroomdetails: propertyData.bedroomDetails,
      bathroomdetails: propertyData.bathroomDetails,
      spaces: propertyData.spaces,
      essentials: propertyData.essentials,
      kitchen: propertyData.kitchen,
      poolandspa: propertyData.poolAndSpa,
      entertainment: propertyData.entertainment,
      babyandtoddler: propertyData.babyAndToddler,
      laundry: propertyData.laundry,
      parking: propertyData.parking,
      safety: propertyData.safety,
      accessibility: propertyData.accessibility,
      locationtype: propertyData.locationType,
      services: propertyData.services,
      suitability: propertyData.suitability,
      slug: propertyData.slug
    };
    
    const { data, error } = await supabase
      .from('properties')
      .insert(dbPropertyData)
      .select()
      .single();
    
    if (error) throw error;
    
    // Convert database response back to Property interface format (snake_case to camelCase)
    return mapDbPropertyToProperty(data);
  } catch (error) {
    console.error("Error creating property:", error);
    toast.error("Failed to create property");
    throw error;
  }
};

// Get all properties
export const getProperties = async (): Promise<Property[]> => {
  try {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    // Convert all properties from database format to Property interface format
    return (data || []).map(mapDbPropertyToProperty);
  } catch (error) {
    console.error("Error fetching properties:", error);
    toast.error("Failed to fetch properties");
    throw error;
  }
};

// Get a single property by ID
export const getProperty = async (id: string): Promise<Property> => {
  try {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    
    // Convert database response to Property interface format
    return mapDbPropertyToProperty(data);
  } catch (error) {
    console.error("Error fetching property:", error);
    toast.error("Failed to fetch property");
    throw error;
  }
};

// Get a single property by slug
export const getPropertyBySlug = async (slug: string): Promise<Property> => {
  try {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('slug', slug)
      .single();
    
    if (error) throw error;
    
    // Convert database response to Property interface format
    return mapDbPropertyToProperty(data);
  } catch (error) {
    console.error("Error fetching property by slug:", error);
    toast.error("Failed to fetch property");
    throw error;
  }
};

// Update a property
export const updateProperty = async (updatedProperty: Property): Promise<Property> => {
  try {
    // Make sure slug is based on name if not provided
    if (!updatedProperty.slug) {
      updatedProperty.slug = slugify(updatedProperty.name);
    }
    
    // Convert property data to match database column names (camelCase to snake_case)
    const dbPropertyData = {
      name: updatedProperty.name,
      description: updatedProperty.description,
      location: updatedProperty.location,
      propertytype: updatedProperty.propertyType,
      amenities: updatedProperty.amenities,
      pricepernight: updatedProperty.pricePerNight,
      cleaningfee: updatedProperty.cleaningFee,
      servicefee: updatedProperty.serviceFee,
      bedrooms: updatedProperty.bedrooms,
      bathrooms: updatedProperty.bathrooms,
      maxguests: updatedProperty.maxGuests,
      images: updatedProperty.images,
      isavailable: updatedProperty.isAvailable,
      aboutproperty: updatedProperty.aboutProperty,
      popularamenities: updatedProperty.popularAmenities,
      bedroomdetails: updatedProperty.bedroomDetails,
      bathroomdetails: updatedProperty.bathroomDetails,
      spaces: updatedProperty.spaces,
      essentials: updatedProperty.essentials,
      kitchen: updatedProperty.kitchen,
      poolandspa: updatedProperty.poolAndSpa,
      entertainment: updatedProperty.entertainment,
      babyandtoddler: updatedProperty.babyAndToddler,
      laundry: updatedProperty.laundry,
      parking: updatedProperty.parking,
      safety: updatedProperty.safety,
      accessibility: updatedProperty.accessibility,
      locationtype: updatedProperty.locationType,
      services: updatedProperty.services,
      suitability: updatedProperty.suitability,
      slug: updatedProperty.slug
    };
    
    const { data, error } = await supabase
      .from('properties')
      .update(dbPropertyData)
      .eq('id', updatedProperty.id)
      .select()
      .single();
    
    if (error) throw error;
    
    // Convert database response back to Property interface format
    return mapDbPropertyToProperty(data);
  } catch (error) {
    console.error("Error updating property:", error);
    toast.error("Failed to update property");
    throw error;
  }
};

// Delete a property
export const deleteProperty = async (id: string): Promise<void> => {
  try {
    const { error } = await supabase
      .from('properties')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  } catch (error) {
    console.error("Error deleting property:", error);
    toast.error("Failed to delete property");
    throw error;
  }
};

// Helper function to map database property to Property interface
const mapDbPropertyToProperty = (dbProperty: any): Property => {
  return {
    id: dbProperty.id,
    name: dbProperty.name,
    description: dbProperty.description,
    location: dbProperty.location,
    propertyType: dbProperty.propertytype,
    amenities: dbProperty.amenities || [],
    pricePerNight: dbProperty.pricepernight,
    cleaningFee: dbProperty.cleaningfee || 0,
    serviceFee: dbProperty.servicefee || 0,
    bedrooms: dbProperty.bedrooms,
    bathrooms: dbProperty.bathrooms,
    maxGuests: dbProperty.maxguests,
    images: dbProperty.images || [],
    isAvailable: dbProperty.isavailable,
    aboutProperty: dbProperty.aboutproperty,
    popularAmenities: dbProperty.popularamenities || [],
    bedroomDetails: dbProperty.bedroomdetails || [],
    bathroomDetails: dbProperty.bathroomdetails || [],
    spaces: dbProperty.spaces || [],
    essentials: dbProperty.essentials,
    kitchen: dbProperty.kitchen,
    poolAndSpa: dbProperty.poolandspa,
    entertainment: dbProperty.entertainment,
    babyAndToddler: dbProperty.babyandtoddler,
    laundry: dbProperty.laundry,
    parking: dbProperty.parking,
    safety: dbProperty.safety,
    accessibility: dbProperty.accessibility,
    locationType: dbProperty.locationtype,
    services: dbProperty.services,
    suitability: dbProperty.suitability,
    slug: dbProperty.slug,
    created_at: dbProperty.created_at,
    updated_at: dbProperty.updated_at
  };
};
