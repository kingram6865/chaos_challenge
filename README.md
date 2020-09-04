
#### 1. Title
Chaos Challenge (D&D Chaos Challenge Character Generator)
#### 2. Description
This app is based on a [post](https://www.facebook.com/Kaligant/posts/316594909056037?__tn__=%2CO*F] "Source Material") in the facebook group
"Antics at the Armory". A member posted a hand drawn
graphic suggesting a player character creation scenario based
on rolling a d8 and a d12, to generate a class and a race.

This is an interesting scenario, because not all classes and 
races pair in an optimal way. A class could eliminate certain
benefits of a race, and vice versa.

Turning a hand-drawn idea into a quick app.
Idea source 
[Ha Ha!](https://res.cloudinary.com/dk8xr0vts/image/upload/c_scale,w_250/v1599204601/Project%201/Project%202/NoReRolls_q88icg.jpg)
#### 3. Wireframes

![Chaos Challenge Wireframe at Cloundinary](https://res.cloudinary.com/dk8xr0vts/image/upload/v1599201954/Project%201/Project%202/D_D_Chaos_Challenge_Character_Generator_nvmxjk.png)

#### 4. Component Hierarchy
Main Container (App)
-Input Form (Player Name, Character Name, character stats)
	-Input fields => Input specific individual stat
	-Button => Randomly generate individual stat value
	-Button => Randomly generate all stats at once
-Result Display (Show the details for the character generated)
-Saved Character list (Users archive of generated characters)
-Character Bio (Update API)
-Character Image (Update API)

#### 5. API
```  
{
    "records": [
        {
            "id": "recztKhOQhT8R0UfY",
            "fields": {
                "intelligence": 10,
                "character_name": "Splash",
                "strength": 4,
                "objid": 1,
                "Field dexterity": 13,
                "player_name": "Ken",
                "class": "Druid",
                "race": "Elf",
                "charisma": 8,
                "wisdom": 10,
                "constitution": 8
            },
            "createdTime": "2020-09-04T06:49:05.000Z"
        },
        {
            "id": "recLErkJbnCVAmg4P",
            "fields": {
                "intelligence": 10,
                "character_name": "Random Randall ",
                "strength": 9,
                "objid": 2,
                "Field dexterity": 12,
                "player_name": "Mark",
                "class": "Barbarian",
                "race": "Half-Orc",
                "charisma": 10,
                "wisdom": 7,
                "constitution": 16
            },
            "createdTime": "2020-09-04T06:49:05.000Z"
        },
        {
            "id": "recqwjrHKgQ1vSbqq",
            "fields": {
                "intelligence": 16,
                "character_name": "Mack",
                "strength": 11,
                "objid": 3,
                "Field dexterity": 13,
                "player_name": "Willie",
                "class": "Monk",
                "race": "Half-Orc",
                "charisma": 13,
                "wisdom": 9,
                "constitution": 13
            },
            "createdTime": "2020-09-04T06:49:05.000Z"
        }
    ],
    "offset": "recqwjrHKgQ1vSbqq"
}
```

#### 6. MVP
  Minimum features:
	-Generate a character
	-Save a Character

#### 7. Post-MVP
	Most of the post-MVP requires an RDBMS or NoSQL database
	-Character Inventory Table
	-Randomly select inventory
	-Button => Randomly generate character names
	-Component => Add a character image (svg, jpg, gif, png)
	-Component => Character bio
	-Gamemaster version => A repository of games and associated characters, tied to a player (user's) character

#### 8. SWOT Analysis
	-Strengths
	-Weaknesses
	-Opportunities
	-Threats