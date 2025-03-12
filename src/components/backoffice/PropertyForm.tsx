import React, { useState, useEffect } from 'react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Slider
} from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash, ImageIcon } from 'lucide-react';
import { toast } from "sonner"
import { useMutation, useQuery } from "@tanstack/react-query";
import { createProperty, getProperty, updateProperty } from "@/lib/api";
import { Property } from "@/types/property";
import { useParams, useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { uploadFile } from '@/lib/upload';
import { deleteFile } from '@/lib/delete';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Property name must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  location: z.string().min(2, {
    message: "Location must be at least 2 characters.",
  }),
  propertyType: z.string().min(2, {
    message: "Property type must be selected.",
  }),
  amenities: z.array(z.string()).optional(),
  pricePerNight: z.number().min(1, {
    message: "Price per night must be at least 1.",
  }),
  bedrooms: z.number().min(1, {
    message: "Bedrooms must be at least 1.",
  }),
  bathrooms: z.number().min(1, {
    message: "Bathrooms must be at least 1.",
  }),
  maxGuests: z.number().min(1, {
    message: "Max guests must be at least 1.",
  }),
  images: z.array(z.string()).optional(),
  isAvailable: z.boolean().optional(),
  aboutProperty: z.string().optional(),
  popularAmenities: z.array(z.string()).optional(),
  spaces: z.array(z.string()).optional(),
  cleaningFee: z.number().optional(),
  serviceFee: z.number().optional(),
})

type FormValues = z.infer<typeof formSchema>;

interface PropertyFormProps {
  propertyId?: string | null;
  onCancel?: () => void;
  onSuccess?: () => void;
}

const PropertyForm: React.FC<PropertyFormProps> = ({ propertyId, onCancel, onSuccess }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [newImages, setNewImages] = useState<File[]>([]);

  const propertyIdToUse = propertyId || id;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      location: "",
      propertyType: "",
      amenities: [],
      pricePerNight: 100,
      bedrooms: 1,
      bathrooms: 1,
      maxGuests: 1,
      images: [],
      isAvailable: true,
      aboutProperty: "",
      popularAmenities: [],
      spaces: [],
      cleaningFee: 50,
      serviceFee: 30,
    },
    mode: "onChange"
  });

  useEffect(() => {
    if (propertyIdToUse) {
      setIsEditMode(true);
    }
  }, [propertyIdToUse]);

  const { data: propertyData, isLoading } = useQuery({
    queryKey: ['property', propertyIdToUse],
    queryFn: () => getProperty(propertyIdToUse as string),
    enabled: isEditMode && !!propertyIdToUse,
  });

  useEffect(() => {
    if (propertyData) {
      setImages(propertyData.images || []);
      form.reset({
        ...propertyData,
        pricePerNight: propertyData.pricePerNight,
        cleaningFee: propertyData.cleaningFee || 50,
        serviceFee: propertyData.serviceFee || 30,
        amenities: propertyData.amenities || [],
        popularAmenities: propertyData.popularAmenities || [],
        spaces: propertyData.spaces || [],
        aboutProperty: propertyData.aboutProperty || "",
      });
    }
  }, [propertyData, form]);

  const { mutate: create, isPending: isCreatePending } = useMutation({
    mutationFn: createProperty,
    onSuccess: () => {
      toast.success("Property created successfully.");
      form.reset();
      if (onSuccess) onSuccess();
      navigate('/backoffice');
    },
    onError: (error: Error) => {
      toast.error("Something went wrong. " + error.message);
    },
  });

  const { mutate: update, isPending: isUpdatePending } = useMutation({
    mutationFn: updateProperty,
    onSuccess: () => {
      toast.success("Property updated successfully.");
      if (onSuccess) onSuccess();
      navigate('/backoffice');
    },
    onError: (error: Error) => {
      toast.error("Something went wrong. " + error.message);
    },
  });

  function onSubmit(values: FormValues) {
    setLoading(true);
    Promise.all(
      newImages.map(async (image) => {
        try {
          const url = await uploadFile(image);
          return url;
        } catch (error) {
          console.error("Error uploading image:", error);
          toast.error("Error uploading image. Please try again.");
          return null;
        }
      })
    )
      .then(async (newImageUrls) => {
        const validImageUrls = newImageUrls.filter((url): url is string => url !== null);
        const allImages = [...images, ...validImageUrls];

        const propertyData = {
          ...values,
          images: allImages,
          essentials: {
            wifi: values.amenities?.includes("wifi") || false,
            internet: values.amenities?.includes("internet") || false,
            towels: values.amenities?.includes("towels") || false,
            linens: values.amenities?.includes("linens") || false,
            airConditioning: values.amenities?.includes("airConditioning") || false,
            hairDryer: values.amenities?.includes("hairDryer") || false,
            fitnessEquipment: values.amenities?.includes("fitnessEquipment") || false,
          },
          kitchen: {
            available: values.amenities?.includes("kitchen") || false,
            refrigerator: values.amenities?.includes("refrigerator") || false,
            dishwasher: values.amenities?.includes("dishwasher") || false,
            microwave: values.amenities?.includes("microwave") || false,
            stove: values.amenities?.includes("stove") || false,
            oven: values.amenities?.includes("oven") || false,
            grill: values.amenities?.includes("grill") || false,
            dishes: values.amenities?.includes("dishes") || false,
            coffeeMaker: values.amenities?.includes("coffeeMaker") || false,
            toaster: values.amenities?.includes("toaster") || false,
          },
          poolAndSpa: {
            communalPool: values.amenities?.includes("communalPool") || false,
            privatePool: values.amenities?.includes("privatePool") || false,
          },
          entertainment: {
            games: values.amenities?.includes("games") || false,
            books: values.amenities?.includes("books") || false,
            television: values.amenities?.includes("television") || false,
            satelliteCable: values.amenities?.includes("satelliteCable") || false,
          },
          babyAndToddler: {
            travelCot: values.amenities?.includes("travelCot") || false,
            highchair: values.amenities?.includes("highchair") || false,
            toys: values.amenities?.includes("babyToys") || false,
          },
          laundry: {
            washingMachine: values.amenities?.includes("washingMachine") || false,
            clothesDryer: values.amenities?.includes("clothesDryer") || false,
            iron: values.amenities?.includes("iron") || false,
          },
          parking: values.amenities?.includes("parking") || false,
          safety: {
            carbonMonoxideDetector: values.amenities?.includes("carbonMonoxideDetector") || false,
            smokeDetector: values.amenities?.includes("smokeDetector") || false,
            fireExtinguisher: values.amenities?.includes("fireExtinguisher") || false,
            firstAidKit: values.amenities?.includes("firstAidKit") || false,
          },
          accessibility: {
            wheelchairAccessible: values.amenities?.includes("wheelchairAccessible") || false,
            lift: values.amenities?.includes("lift") || false,
          },
          locationType: {
            beach: values.amenities?.includes("beach") || false,
            nearOcean: values.amenities?.includes("nearOcean") || false,
            cityCenter: values.amenities?.includes("cityCenter") || false,
            town: values.amenities?.includes("town") || false,
            oceanView: values.amenities?.includes("oceanView") || false,
            beachView: values.amenities?.includes("beachView") || false,
          },
          services: {
            concierge: values.amenities?.includes("concierge") || false,
          },
          suitability: {
            minimumAgeLimit: 18,
            petsAllowed: values.amenities?.includes("petsAllowed") || false,
          }
        };

        if (isEditMode && propertyIdToUse) {
          update({
            id: propertyIdToUse,
            ...propertyData
          } as Property);
        } else {
          create({
            ...propertyData
          } as Omit<Property, "id">);
        }
      })
      .catch((error) => {
        console.error("Error in image upload process:", error);
        toast.error("Error in image upload process. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    setNewImages(files);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = async (index: number) => {
    const imageToRemove = images[index];
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);

    if (imageToRemove.startsWith("https://")) {
      try {
        const publicId = imageToRemove.split('/').pop()?.split('.')[0];
        if (publicId) {
          await deleteFile(publicId);
        } else {
          console.warn("Could not extract public ID from URL:", imageToRemove);
        }
      } catch (error) {
        console.error("Error deleting image:", error);
        toast.error("Error deleting image. Please try again.");
      }
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-[350px]" />
        <Skeleton className="h-4 w-[350px]" />
        <Skeleton className="h-4 w-[350px]" />
        <Skeleton className="h-4 w-[350px]" />
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isEditMode ? "Edit Property" : "Create Property"}</CardTitle>
        <CardDescription>
          {isEditMode ? "Edit the property details." : "Add a new property to the platform."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Property Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Luxury Villa" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the name of the property that will be displayed to users.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="Dubai Marina" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter the location of the property.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="propertyType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Property Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Villa">Villa</SelectItem>
                          <SelectItem value="Apartment">Apartment</SelectItem>
                          <SelectItem value="Hotel">Hotel</SelectItem>
                          <SelectItem value="Resort">Resort</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Select the type of property.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="A beautiful villa with a pool and a view."
                          className="resize-none h-36"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Write a detailed description of the property.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="aboutProperty"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>About This Property</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Additional details about this property..."
                          className="resize-none h-20"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Provide more details about what makes this property special.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 bg-gray-50 p-4 rounded-md">
              <FormField
                control={form.control}
                name="pricePerNight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price Per Night ($)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        min={1} 
                        {...field}
                        onChange={e => field.onChange(parseFloat(e.target.value))} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="cleaningFee"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cleaning Fee ($)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        min={0} 
                        {...field}
                        onChange={e => field.onChange(parseFloat(e.target.value))} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="serviceFee"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Fee ($)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        min={0} 
                        {...field}
                        onChange={e => field.onChange(parseFloat(e.target.value))} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="bedrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bedrooms</FormLabel>
                    <FormControl>
                      <Input type="number" min={1} {...field} onChange={e => field.onChange(parseInt(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bathrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bathrooms</FormLabel>
                    <FormControl>
                      <Input type="number" min={1} {...field} onChange={e => field.onChange(parseInt(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="maxGuests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Max Guests</FormLabel>
                    <FormControl>
                      <Input type="number" min={1} {...field} onChange={e => field.onChange(parseInt(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Amenities & Features</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-3">Essentials</h4>
                  <FormField
                    control={form.control}
                    name="amenities"
                    render={({ field }) => (
                      <FormItem>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <Switch 
                              id="wifi" 
                              checked={field.value?.includes("wifi")} 
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...(field.value || []), "wifi"])
                                } else {
                                  field.onChange(field.value?.filter((v) => v !== "wifi"))
                                }
                              }} 
                            />
                            <label htmlFor="wifi" className="text-sm">WiFi</label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Switch 
                              id="internet"
                              checked={field.value?.includes("internet")} 
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...(field.value || []), "internet"])
                                } else {
                                  field.onChange(field.value?.filter((v) => v !== "internet"))
                                }
                              }} 
                            />
                            <label htmlFor="internet" className="text-sm">Internet</label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Switch 
                              id="towels"
                              checked={field.value?.includes("towels")} 
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...(field.value || []), "towels"])
                                } else {
                                  field.onChange(field.value?.filter((v) => v !== "towels"))
                                }
                              }} 
                            />
                            <label htmlFor="towels" className="text-sm">Towels</label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Switch 
                              id="linens"
                              checked={field.value?.includes("linens")} 
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...(field.value || []), "linens"])
                                } else {
                                  field.onChange(field.value?.filter((v) => v !== "linens"))
                                }
                              }} 
                            />
                            <label htmlFor="linens" className="text-sm">Linens</label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Switch 
                              id="airConditioning"
                              checked={field.value?.includes("airConditioning")} 
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...(field.value || []), "airConditioning"])
                                } else {
                                  field.onChange(field.value?.filter((v) => v !== "airConditioning"))
                                }
                              }} 
                            />
                            <label htmlFor="airConditioning" className="text-sm">Air Conditioning</label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Switch 
                              id="hairDryer"
                              checked={field.value?.includes("hairDryer")} 
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...(field.value || []), "hairDryer"])
                                } else {
                                  field.onChange(field.value?.filter((v) => v !== "hairDryer"))
                                }
                              }} 
                            />
                            <label htmlFor="hairDryer" className="text-sm">Hair Dryer</label>
                          </div>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-3">Kitchen</h4>
                  <FormField
                    control={form.control}
                    name="amenities"
                    render={({ field }) => (
                      <FormItem>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <Switch 
                              id="kitchen"
                              checked={field.value?.includes("kitchen")} 
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...(field.value || []), "kitchen"])
                                } else {
                                  field.onChange(field.value?.filter((v) => v !== "kitchen"))
                                }
                              }} 
                            />
                            <label htmlFor="kitchen" className="text-sm">Kitchen</label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Switch 
                              id="refrigerator"
                              checked={field.value?.includes("refrigerator")} 
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...(field.value || []), "refrigerator"])
                                } else {
                                  field.onChange(field.value?.filter((v) => v !== "refrigerator"))
                                }
                              }} 
                            />
                            <label htmlFor="refrigerator" className="text-sm">Refrigerator</label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Switch 
                              id="dishwasher"
                              checked={field.value?.includes("dishwasher")} 
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...(field.value || []), "dishwasher"])
                                } else {
                                  field.onChange(field.value?.filter((v) => v !== "dishwasher"))
                                }
                              }} 
                            />
                            <label htmlFor="dishwasher" className="text-sm">Dishwasher</label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Switch 
                              id="microwave"
                              checked={field.value?.includes("microwave")} 
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...(field.value || []), "microwave"])
                                } else {
                                  field.onChange(field.value?.filter((v) => v !== "microwave"))
                                }
                              }} 
                            />
                            <label htmlFor="microwave" className="text-sm">Microwave</label>
                          </div>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-3">Safety</h4>
                  <FormField
                    control={form.control}
                    name="amenities"
                    render={({ field }) => (
                      <FormItem>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <Switch 
                              id="smokeDetector"
                              checked={field.value?.includes("smokeDetector")} 
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...(field.value || []), "smokeDetector"])
                                } else {
                                  field.onChange(field.value?.filter((v) => v !== "smokeDetector"))
                                }
                              }} 
                            />
                            <label htmlFor="smokeDetector" className="text-sm">Smoke Detector</label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Switch 
                              id="carbonMonoxideDetector"
                              checked={field.value?.includes("carbonMonoxideDetector")} 
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...(field.value || []), "carbonMonoxideDetector"])
                                } else {
                                  field.onChange(field.value?.filter((v) => v !== "carbonMonoxideDetector"))
                                }
                              }} 
                            />
                            <label htmlFor="carbonMonoxideDetector" className="text-sm">Carbon Monoxide Detector</label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Switch 
                              id="fireExtinguisher"
                              checked={field.value?.includes("fireExtinguisher")} 
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...(field.value || []), "fireExtinguisher"])
                                } else {
                                  field.onChange(field.value?.filter((v) => v !== "fireExtinguisher"))
                                }
                              }} 
                            />
                            <label htmlFor="fireExtinguisher" className="text-sm">Fire Extinguisher</label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Switch 
                              id="firstAidKit"
                              checked={field.value?.includes("firstAidKit")} 
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...(field.value || []), "firstAidKit"])
                                } else {
                                  field.onChange(field.value?.filter((v) => v !== "firstAidKit"))
                                }
                              }} 
                            />
                            <label htmlFor="firstAidKit" className="text-sm">First Aid Kit</label>
                          </div>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-3">Accessibility</h4>
                  <FormField
                    control={form.control}
                    name="amenities"
                    render={({ field }) => (
                      <FormItem>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <Switch 
                              id="wheelchairAccessible"
                              checked={field.value?.includes("wheelchairAccessible")} 
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...(field.value || []), "wheelchairAccessible"])
                                } else {
                                  field.onChange(field.value?.filter((v) => v !== "wheelchairAccessible"))
                                }
                              }} 
                            />
                            <label htmlFor="wheelchairAccessible" className="text-sm">Wheelchair Accessible</label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Switch 
                              id="lift"
                              checked={field.value?.includes("lift")} 
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...(field.value || []), "lift"])
                                } else {
                                  field.onChange(field.value?.filter((v) => v !== "lift"))
                                }
                              }} 
                            />
                            <label htmlFor="lift" className="text-sm">Lift</label>
                          </div>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <FormField
              control={form.control}
              name="isAvailable"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 mt-6">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Availability</FormLabel>
                    <FormDescription>
                      Set the availability of the property.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="mt-6">
              <FormLabel>Images</FormLabel>
              <FormDescription>
                Upload images of the property.
              </FormDescription>
              <Input
                id="upload"
                type="file"
                multiple
                onChange={(e) => {
                  if (!e.target.files) return;
                  const files = Array.from(e.target.files);
                  setNewImages(prev => [...prev, ...files]);
                  
                  files.forEach((file) => {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setImages((prevImages) => [...prevImages, reader.result as string]);
                    };
                    reader.readAsDataURL(file);
                  });
                }}
                className="hidden"
              />
              <Button asChild variant="outline">
                <label htmlFor="upload" className="cursor-pointer">
                  <ImageIcon className="mr-2 h-4 w-4" />
                  <span>Upload Images</span>
                </label>
              </Button>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img src={image} alt={`Property Image ${index + 1}`} className="rounded-md aspect-square object-cover" />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() => {
                        const updatedImages = [...images];
                        updatedImages.splice(index, 1);
                        setImages(updatedImages);
                      }}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-8 pt-4 border-t">
              {onCancel && (
                <Button type="button" variant="outline" onClick={onCancel}>
                  Cancel
                </Button>
              )}
              <Button disabled={isCreatePending || isUpdatePending || loading} type="submit">
                {isEditMode 
                  ? (isUpdatePending ? "Updating..." : "Update Property") 
                  : (isCreatePending ? "Creating..." : "Create Property")}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PropertyForm;
