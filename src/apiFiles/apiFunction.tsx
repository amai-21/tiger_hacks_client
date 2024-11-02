

interface WaterCycleStage {
    stage: string, // Name for the watering stage, i.e., "Bi-weekly."
    intervalDays: number, // Interval in days, (i.e., 14 for two weeks).
    lastWatered: Date, // Date of the last watering
    nextWatered: Date, // Date when the next watering should occur.

}



// Crops interface
interface cropsInformation {
    //Personal crops
    image: string,
    name: string,
    waterCycle: string,
    guide: string,
    specialTool: string
        //Dependent on climate and location for user.

}