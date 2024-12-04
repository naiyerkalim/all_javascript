const arr1 = [

    {
        "role": "manager",
        "teams": [
            "team1"],

        "users": [

            "user1",

            "user2"

        ]

    },

    {

        "role": "supervisor",

        "teams": ["supervisor teams"]

    }

]


const arr2 = [{

    "role": "manager",

    "users": [

        "user3",

        "user4"

    ],

    "teams": []

}]


const arr3=[...arr1, ...arr2];
console.log(arr3)