export type SubmitRequest = {
    transactionId: string,
    personal: {
        title: string,
        driverFirstName: string,
        driverMiddleName: string,
        driverLastName: string,
        email: string,
        phone: string,
        previousAliases: {
            firstName: string,
            middleName: string,
            lastName: string,
        }[],
        gender: string,
        dob: string,
        birthCountry: string,
    },
    driver: {
        licenceNumber: string,
        expiryDate: string,
        hasLicenceForMin6Months: boolean,
        hasTerritoryLicence: boolean,
        territoryLicenceState?: string[],
        hasDriverAccreditationNumber?: string,
        vehicleClasses: string[],
        tendency: boolean
    },
    consent: {
        understandInformation: boolean,
        informationTrue: boolean,
        informationConsidered: boolean,
        medicalVicRoadsPoliceCheckConsent: boolean,
        consentToDisclosing: boolean,
        indemnifyAgainstLiability: boolean,
        accCheckConsent: boolean,
        childrenCheckConsent: boolean,
        personalInfoCheckConsent: boolean,
        trafficOffences: boolean,
        assessAccCheckConsent: boolean,
        criminalOffences: boolean,
        licenceCancelledSuspended: boolean,
        sexOffendersReporting: boolean,
        ausWorkRights: boolean,
        additionalInformation: string,
    },
    payment: {
        creditCardToken: string
    }
};
// UI
type PaymentRequest = SubmitRequest['payment'];
type PreviousAliasRequest = SubmitRequest['personal']['previousAliases'][0];

export function getPayment():
    // SubmitRequest['payment']
    // or
    PaymentRequest
{
    return {
        creditCardToken: '12hbha37895nabhd61bdkjad'
    }
}

