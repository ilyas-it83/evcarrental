# Add New Car Prompt

Add a new vehicle to the car rental inventory.

## Data Structure
Add the new car object to `data/cars.json` following this format:

```json
{
  "id": "car-XXX",
  "name": "[Make] [Model]",
  "type": "[Sedan|SUV|Hatchback|Luxury|Electric|Van]",
  "year": 2024,
  "seats": 5,
  "transmission": "[Automatic|Manual]",
  "fuelType": "[Petrol|Diesel|Hybrid|Electric]",
  "pricePerDay": 65,
  "pricePerWeek": 400,
  "deposit": 200,
  "features": ["AC", "Bluetooth", "USB Charging", "Backup Camera"],
  "images": ["car-XXX-1.jpg", "car-XXX-2.jpg"],
  "available": true,
  "featured": false,
  "description": "Brief description of the vehicle and its best use cases."
}
```

## Required Fields
- **id**: Unique identifier (format: car-XXX)
- **name**: Full vehicle name
- **type**: Must be one of the defined vehicle types
- **year**: Model year
- **seats**: Passenger capacity
- **transmission**: Automatic or Manual
- **fuelType**: Fuel/power type
- **pricePerDay**: Daily rental rate in USD
- **pricePerWeek**: Weekly rental rate in USD
- **deposit**: Security deposit amount in USD
- **features**: Array of features/amenities
- **images**: Array of image filenames
- **available**: Boolean for availability
- **featured**: Boolean for homepage display
- **description**: 1-2 sentence description

## Vehicle Types
- Sedan
- SUV
- Hatchback
- Luxury
- Electric
- Van
