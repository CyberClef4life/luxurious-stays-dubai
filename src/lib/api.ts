
// Mock API functions for property management
import { toast } from "sonner";

export type Property = {
  id: string;
  name: string;
  description: string;
  location: string;
  propertyType: string;
  amenities: string[];
  pricePerNight: number;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  images: string[];
  isAvailable: boolean;
};

// Simulated database
let properties: Property[] = [
  {
    id: "1",
    name: "Luxury Villa",
    description: "A beautiful villa with a pool and a view.",
    location: "Dubai Marina",
    propertyType: "Villa",
    amenities: ["wifi", "pool", "parking"],
    pricePerNight: 500,
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914"],
    isAvailable: true,
  },
];

// Create a new property
export const createProperty = async (propertyData: Omit<Property, "id">): Promise<Property> => {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newProperty = {
      ...propertyData,
      id: Math.random().toString(36).substring(2, 15),
    };
    
    properties.push(newProperty);
    return newProperty;
  } catch (error) {
    console.error("Error creating property:", error);
    toast.error("Failed to create property");
    throw error;
  }
};

// Get all properties
export const getProperties = async (): Promise<Property[]> => {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    toast.error("Failed to fetch properties");
    throw error;
  }
};

// Get a single property by ID
export const getProperty = async (id: string): Promise<Property> => {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const property = properties.find(p => p.id === id);
    
    if (!property) {
      throw new Error("Property not found");
    }
    
    return property;
  } catch (error) {
    console.error("Error fetching property:", error);
    toast.error("Failed to fetch property");
    throw error;
  }
};

// Update a property
export const updateProperty = async (updatedProperty: Property): Promise<Property> => {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const index = properties.findIndex(p => p.id === updatedProperty.id);
    
    if (index === -1) {
      throw new Error("Property not found");
    }
    
    properties[index] = updatedProperty;
    return updatedProperty;
  } catch (error) {
    console.error("Error updating property:", error);
    toast.error("Failed to update property");
    throw error;
  }
};

// Delete a property
export const deleteProperty = async (id: string): Promise<void> => {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const index = properties.findIndex(p => p.id === id);
    
    if (index === -1) {
      throw new Error("Property not found");
    }
    
    properties.splice(index, 1);
  } catch (error) {
    console.error("Error deleting property:", error);
    toast.error("Failed to delete property");
    throw error;
  }
};
