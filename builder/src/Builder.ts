export interface Builder {
    reset(): void;
    setSeats(seatCount: Number): void;
    setEngine(engineCapacity: Number): void;
    setTripComputer(tripComputer: Boolean): void;
    setGPS(hasGPS: Boolean): void;
}