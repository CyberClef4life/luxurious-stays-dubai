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
import { createProperty, getProperty, updateProperty, Property } from "@/lib/api";
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
})

type FormValues = z.infer<typeof formSchema>;

interface PropertyFormProps {
  onCancel?: () => void;
  onSuccess?: () => void;
}

const PropertyForm: React.FC<PropertyFormProps> = ({ onCancel, onSuccess }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [newImages, setNewImages] = useState<File[]>([]);

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
    },
    mode: "onChange"
  });

  useEffect(() => {
    if (id) {
      setIsEditMode(true);
    }
  }, [id]);

  const { data: propertyData, isLoading } = useQuery({
    queryKey: ['property', id],
    queryFn: () => getProperty(id as string),
    enabled: isEditMode && !!id,
  });

  useEffect(() => {
    if (propertyData) {
      setImages(propertyData.images || []);
      form.reset({
        ...propertyData,
        pricePerNight: propertyData.pricePerNight,
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

        if (isEditMode && id) {
          update({
            id,
            ...values,
            images: allImages
          } as Property);
        } else {
          create({
            ...values,
            images: allImages
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
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="A beautiful villa with a pool and a view."
                      className="resize-none"
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
            <FormField
              control={form.control}
              name="amenities"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amenities</FormLabel>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="wifi" checked={field.value?.includes("wifi")} onCheckedChange={(checked) => {
                        if (checked) {
                          field.onChange([...(field.value || []), "wifi"])
                        } else {
                          field.onChange(field.value?.filter((v) => v !== "wifi"))
                        }
                      }} />
                      <label htmlFor="wifi" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Wifi
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="pool" checked={field.value?.includes("pool")} onCheckedChange={(checked) => {
                        if (checked) {
                          field.onChange([...(field.value || []), "pool"])
                        } else {
                          field.onChange(field.value?.filter((v) => v !== "pool"))
                        }
                      }} />
                      <label htmlFor="pool" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Pool
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="parking" checked={field.value?.includes("parking")} onCheckedChange={(checked) => {
                        if (checked) {
                          field.onChange([...(field.value || []), "parking"])
                        } else {
                          field.onChange(field.value?.filter((v) => v !== "parking"))
                        }
                      }} />
                      <label htmlFor="parking" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Parking
                      </label>
                    </div>
                  </div>
                  <FormDescription>
                    Select the amenities that the property offers.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pricePerNight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price Per Night</FormLabel>
                  <FormControl>
                    <Slider
                      defaultValue={[field.value]}
                      max={1000}
                      step={10}
                      onValueChange={(value) => field.onChange(value[0])}
                    />
                  </FormControl>
                  <FormDescription>
                    Set the price per night for the property.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="bedrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bedrooms</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="1" {...field} onChange={e => field.onChange(parseInt(e.target.value))} />
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
                      <Input type="number" placeholder="1" {...field} onChange={e => field.onChange(parseInt(e.target.value))} />
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
                      <Input type="number" placeholder="1" {...field} onChange={e => field.onChange(parseInt(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="isAvailable"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
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
            <div>
              <FormLabel>Images</FormLabel>
              <FormDescription>
                Upload images of the property.
              </FormDescription>
              <Input
                id="upload"
                type="file"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
              <Button asChild variant="outline">
                <label htmlFor="upload" className="cursor-pointer">
                  <ImageIcon className="mr-2 h-4 w-4" />
                  <span>Upload Images</span>
                </label>
              </Button>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img src={image} alt={`Property Image ${index + 1}`} className="rounded-md aspect-square object-cover" />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() => removeImage(index)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <Button disabled={isCreatePending || isUpdatePending || loading} type="submit">
              {isEditMode ? (isUpdatePending ? "Updating..." : "Update Property") : (isCreatePending ? "Creating..." : "Create Property")}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PropertyForm;
