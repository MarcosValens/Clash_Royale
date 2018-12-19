export function Location(id, name, isCountry, countryCode) {
    this.id = id;
    this.name = name;
    this.isCountry = isCountry || false;
    this.countryCode = countryCode || false;
}
