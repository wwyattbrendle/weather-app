class data {
    constructor(
        city,
        region,
        country,
        condition,
        tempS,
        tempM,
        humidity,
        speedS,
        speedM
    ) {
        this.city = city;
        this.region = region;
        this.country = country;
        this.condition = condition;
        this.tempS = tempS;
        this.tempM = tempM;
        this.humidity = humidity;
        this.speedS = speedS;
        this.speedM = speedM;
    }
}

export { data };