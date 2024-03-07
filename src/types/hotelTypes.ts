export interface Hotel {
    id: number;
    userId: number;
    name: string;
    description: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    checkInTime: string;
    checkOutTime: string;
    latitude: number;
    longitude: number;
    country: string;
    contactEmail: string;
    contactPhone: string;
    ratings: number;
    reviewCount: number;
    price: number;
    facilities: string[];
    roomTypes: string[];
    images: Image[];
    amenities: string[];
    availability: boolean;
    website: string;
    policies: string;
    updatedAt: string;
    createdAt: string;
}

export interface Image {
    assetId: string;
    imageUrl: string;
    publicId: string;
}

export interface HotelResponseList {
    message: string,
    hotels: Hotel[],
    pagination: {
        totalPages: number,
        currentPage: number,
        totalItems: number
    }
}
