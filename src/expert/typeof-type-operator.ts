const center_TTO = {
    x: 0,
    y: 0,
    z: 0,
};
type Point_TTO = typeof center_TTO;
// Letter
const unit_TTO: Point_TTO = {
    x: center_TTO.x + 1,
    y: center_TTO.y + 1,
    z: center_TTO.z + 1,
};
// --- END ---

const personResponse = {
    "name": "jon",
    "email": "jon@example.com",
    "firstName": "Jon",
    "lastName": "Doe",
};
type PersonResponse = typeof personResponse;
function processResponse(person: PersonResponse): void {
    console.log("Full Name:", `${person.firstName} ${person.lastName}`);
}
// --- END ---
