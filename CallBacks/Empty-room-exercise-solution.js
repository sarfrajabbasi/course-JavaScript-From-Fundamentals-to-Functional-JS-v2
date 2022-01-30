const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];




//reduce gonna loop through top level
// intital value is empty array
// return array of room[] 

const notInRoom = suspect => {

    // suspect is top level
    const emptyRooms = reduce(suspect.rooms ,(room,memo) => {
        // we want to push that value to our memo
        if(room === false) memo.push(room);
        return memo;

    },[]);
    return emptyRooms;

};
notInRoom = _.map(newDevelopment,notInRoom)

[
    ['kitchen','ballroom','billiard room'],
    ['kitchen','ballroom']
]

// ['kitchen','ballroom','billiard room'],
// ['kitchen','ballroom']

_.intersection(...notInRoom)//=>['kitchen','ballroom']
