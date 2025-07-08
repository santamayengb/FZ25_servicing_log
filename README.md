# Bike Maintenance Log

This project maintains a log of bike servicing and part replacements in the `bike_maintenance.json` file.

## Data Format

Each entry in the JSON file represents a single service event and follows this structure:

```json
[
  {
    "date": "YYYY-MM-DD",
    "total_kilometer": <number>,
    "service_number": <number>,
    "next_service_km": <number>,
    "items": [
      {
        "item": "<item_type>",
        "name": "<product_name>",
        "quantity": <number>,
        "unit": "<unit_of_measure>",
        "unit_cost": <number>,
        "total_cost": <number>
      }
    ],
    "total_invoice": <number>
  }
]
```

### Field Descriptions

*   **date**: The date of the service in `YYYY-MM-DD` format.
*   **total_kilometer**: The total kilometer reading on the bike at the time of service.
*   **service_number**: The service number (e.g., 1st, 2nd, 6th).
*   **next_service_km**: The recommended kilometer reading for the next service.
*   **items**: A list of items or services from that day.
    *   **item**: The general type of item (e.g., "Engine Oil", "Air Filter").
    *   **name**: The specific product name (e.g., "Yamalube Sporty Premium"). Can be `null`.
    *   **quantity**: The number of units.
    *   **unit**: The unit of measurement (e.g., "liter", "piece").
    *   **unit_cost**: The cost for a single unit.
    *   **total_cost**: The total cost for that item (`quantity` * `unit_cost`).
*   **total_invoice**: The sum of `total_cost` for all items in the service.

## How to Add Entries

To add a new entry, provide the details of the service in plain English. For example:

"Today I changed the air filter, which cost 550, and bought a bottle of chain lube for 250. The odometer was at 15600km, and this was my 6th service."