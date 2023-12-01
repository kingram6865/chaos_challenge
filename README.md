
## 1. Title
Chaos Challenge
## 2. Description
Chaos Challenge is short for D&D Chaos Challenge Character Generator

This app is based on a [post](https://www.facebook.com/Kaligant/posts/316594909056037?__tn__=%2CO*F] "Source Material") in the facebook group
"Antics at the Armory". 

A member posted a [hand drawn graphic](https://res.cloudinary.com/dk8xr0vts/image/upload/c_scale,w_250/v1599204601/Project%201/Project%202/NoReRolls_q88icg.jpg) suggesting a player character creation scenario based on rolling a d8 and a d12, to generate a class and a race.

This was a humorous take on character creation, as often players spend hours crafting a character to play, researching the many rulebooks. "Crafting" a character with two die rolls and essentially playing with an unknown character is "edgy".
## 3. Wireframes

### Mobile
![Chaos Challenge Wireframe at Cloundinary](https://res.cloudinary.com/dk8xr0vts/image/upload/v1599201954/Project%201/Project%202/D_D_Chaos_Challenge_Character_Generator_nvmxjk.png)
### Desktop
![Chaos Challenge Wireframe at Cloundinary](https://res.cloudinary.com/dk8xr0vts/image/upload/c_scale,w_445/v1599237792/Project%201/Project%202/D_D_Chaos_Challenge_Character_Generator_Desktop_bea9lh.png)

### Tablet
![Chaos Challenge Wireframe at Cloundinary](https://res.cloudinary.com/dk8xr0vts/image/upload/c_scale,w_411/v1599239439/Project%201/Project%202/D_D_Chaos_Challenge_Character_Generator_Tablet_elt4if.png)

## 4. Component Hierarchy
```pre
Main Container (App)
| --- Input Form (Player Name, Character Name, character stats)
    | --- Input fields => Input specific individual stat
    | --- Buttons (6) => Randomly generate individual stat value
    | --- Button => Randomly generate all stats at once
| --- Result Display (Show the details for the character generated)
    | --- Character Bio (Update API)
    | --- Character Image (Update API) 
| --- Saved Character list (Users archive of generated characters)
```

## 5. API
```  
{
    "records": [
        {
            "id": "recztKhOQhT8R0UfY",
            "fields": {
                "intelligence": 10,
                "characterName": "Splash",
                "strength": 4,
                "objid": 1,
                "dexterity": 13,
                "playerName": "Ken",
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
                "characterName": "Random Randall ",
                "strength": 9,
                "objid": 2,
                "dexterity": 12,
                "playerName": "Mark",
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
                "characterName": "Mack",
                "strength": 11,
                "objid": 3,
                "dexterity": 13,
                "playerName": "Willie",
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

## 6. MVP
Minimum features:
 - Generate a character
 - Save a Character

## 7. Post-MVP

 - Show character Info when character selected on list
 - Character Inventory Table
 - Randomly select inventory
 - Button => Randomly generate character names
 - Component => Add a character image (svg, jpg, gif, png)
 - Component => Character bio
 - Gamemaster version => A repository of games and associated characters, tied to a player (user's) character

## 8. SWOT Analysis

- Strengths and opportunities are that the app is simple.

- Weaknesses: Styling
- Threats: Time demands on achieving the best styling between media query options

## 9. Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Build Components | H | 4 hrs |6hrs  |6.5hrs  |
| Code Components | H | 12 hrs |16hrs  |16hrs  |
| Organize Layout (CSS) | H | 12 hr  |11hrs |11hrs |
| Media Query Adjustments| H | 6 hrs |4hrs | 4hrs |
| Post-MVP| L | 15 hrs |2hrs  |2hrs |
| Total                             | H | 49 hrs|42hrs  |39.5hrs  |
