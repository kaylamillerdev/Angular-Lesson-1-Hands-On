interface person {
    firstName: string;
    lastName?: string;
}

interface contact {
    phoneNumber: number;
    email?: string;
}

class contactCard implements person, contact {
    firstName: string;
    phoneNumber: number;

    constructor (firstName: string, phoneNumber: number) {
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
    }

    sendMessage() {
        console.log("Name: " + this.firstName + ", Phone Number: " + this.phoneNumber)
    };

}

const newPerson: contactCard = new contactCard("Henry", 1234567890);
newPerson.sendMessage();