interface RentalOptions {
  dailyRate: number;
  numberOfDays: number;
  discount?: number; // Optional discount percentage
  taxRate?: number; // Optional tax percentage
}

export function calculateCarRent(options: RentalOptions): number {
  const { dailyRate, numberOfDays, discount = 0, taxRate = 0 } = options;

  let totalCost = dailyRate * numberOfDays;

  // Apply discount
  if (discount > 0) {
    totalCost -= totalCost * (discount / 100);
  }

  // Apply tax
  if (taxRate > 0) {
    totalCost += totalCost * (taxRate / 100);
  }

  return totalCost;
}

// Example usage:
const rentalCost = calculateCarRent({
  dailyRate: 50,
  numberOfDays: 5,
  discount: 10, // 10% discount
  taxRate: 8, // 8% tax
});

// console.log(`Total rental cost: $${rentalCost}`);
