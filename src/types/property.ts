
export interface Property {
  id: string;
  name: string;
  description: string;
  location: string;
  propertyType: string;
  amenities: string[];
  pricePerNight: number;
  cleaningFee: number;
  serviceFee: number;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  images: string[];
  isAvailable: boolean;
  
  // Extended property details
  aboutProperty?: string;
  popularAmenities?: string[];
  
  // Rooms & beds
  bedroomDetails?: {
    roomName: string;
    bedType: string;
    bedCount: number;
  }[];
  
  // Bathrooms
  bathroomDetails?: {
    roomName: string;
    features: string[];
  }[];
  
  // Spaces
  spaces?: string[];
  
  // Essentials
  essentials?: {
    wifi: boolean;
    internet: boolean;
    towels: boolean;
    linens: boolean;
    airConditioning: boolean;
    hairDryer: boolean;
    fitnessEquipment: boolean;
  };
  
  // Kitchen
  kitchen?: {
    available: boolean;
    refrigerator: boolean;
    dishwasher: boolean;
    microwave: boolean;
    stove: boolean;
    oven: boolean;
    grill: boolean;
    dishes: boolean;
    coffeeMaker: boolean;
    toaster: boolean;
  };
  
  // Pool & spa
  poolAndSpa?: {
    communalPool: boolean;
    privatePool: boolean;
  };
  
  // Entertainment
  entertainment?: {
    games: boolean;
    books: boolean;
    television: boolean;
    satelliteCable: boolean;
  };
  
  // Baby & toddler
  babyAndToddler?: {
    travelCot: boolean;
    highchair: boolean;
    toys: boolean;
  };
  
  // Laundry
  laundry?: {
    washingMachine: boolean;
    clothesDryer: boolean;
    iron: boolean;
  };
  
  // Parking
  parking?: boolean;
  
  // Safety
  safety?: {
    carbonMonoxideDetector: boolean;
    smokeDetector: boolean;
    fireExtinguisher: boolean;
    firstAidKit: boolean;
  };
  
  // Accessibility
  accessibility?: {
    wheelchairAccessible: boolean;
    lift: boolean;
  };
  
  // Location type
  locationType?: {
    beach: boolean;
    nearOcean: boolean;
    cityCenter: boolean;
    town: boolean;
    oceanView: boolean;
    beachView: boolean;
  };
  
  // Services
  services?: {
    concierge: boolean;
  };
  
  // Suitability
  suitability?: {
    minimumAgeLimit: number;
    petsAllowed: boolean;
  };
  
  // SEO
  slug?: string;
  
  // Timestamps
  created_at?: string;
  updated_at?: string;
}
