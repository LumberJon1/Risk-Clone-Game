export class Player {

    constructor() {
        this.money = 100;
        this.morale = 100;
        this.ammunition = 100;
        this.fuel = 100;
        this.unitGroups = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
    }

    // Functions and things
    addUnit(unitGroupIndex, unit) {
        // Specify the unit group as an index within unitGroups
        this.unitGroups[unitGroupIndex].push(unit)
        console.log("Pushed "+unit+"to unit group "+unitGroupIndex);
    }
}
