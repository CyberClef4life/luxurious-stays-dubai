
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
    
    const { data, error } = await supabase
      .from('properties')
      .insert(propertyData)
      .select()
      .single();
    
    if (error) throw error;
    
    return data;
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
    
    return data || [];
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
    
    return data;
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
    
    return data;
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
    
    const { data, error } = await supabase
      .from('properties')
      .update(updatedProperty)
      .eq('id', updatedProperty.id)
      .select()
      .single();
    
    if (error) throw error;
    
    return data;
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
