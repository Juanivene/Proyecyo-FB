export class Customer {
  constructor(
    name,
    lastname,
    birthdate,
    dni,
    email,
    gender,
    nationality,
    phonenumber,
    flightSelected
  ) {
    this.id = window.self.crypto.randomUUID();
    this.name = name;
    this.lastname = lastname;
    this.birthdate = birthdate;
    this.dni = dni;
    this.email = email;
    this.gender = gender;
    this.nationality = nationality;
    this.phonenumber = phonenumber;
    this.flightSelected = flightSelected;
  }
}
