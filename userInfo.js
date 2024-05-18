
let userIdCounter = 1;

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        const userProfile = {
            originalName: name,
            modifiedName: modifiedNames[index],
            id: userIdCounter++
        };
        return userProfile;
    });
}

namesArray = ["Dorothy","Caleb","Bernice","Kelvin","Abigail"];
modifiedNamesArray =["math", "HELLO WORLD", "lecture", "INDOMIE","baby"] ;
const userProfiles = createUserProfiles(namesArray, modifiedNamesArray);

console.log(userProfiles);
