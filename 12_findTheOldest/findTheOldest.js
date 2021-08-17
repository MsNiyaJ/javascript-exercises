const findTheOldest = function(people) {
    let oldestPerson = people[0];   //initilize first person as the oldest
    let oldestPersonsAge = getAge(people[0]); 
    
    people.forEach(person => {
        let personsAge = getAge(person);
        if(personsAge > oldestPersonsAge){
            oldestPerson = person;
            oldestPersonsAge = personsAge;
        }
    });

return oldestPerson;

};

//Returns the age of a person
function getAge(person){
    //If the person is still alive, get their age as of today
    if(person.yearOfDeath == undefined){
        const d = new Date(); 
        let ageAsOfToday = d.getFullYear() - person.yearOfBirth; //today's year - year of birth
        return ageAsOfToday;
    }
    //Else determine what their age was before they died
    let age = person.yearOfDeath - person.yearOfBirth;
        return age;
}

module.exports = findTheOldest;
