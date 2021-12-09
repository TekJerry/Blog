# The Anglers Guide

## Project Name

The Anglers Guide ---> https://61b12abb3683380007b10146--musing-joliot-2fa60f.netlify.app/

## Project Description

A fishing blog. Where anglers from all over the world can show their catches of the day. They'll have to be descriptive though, by inserting type of fish, location, freshwater or saltwater, bait they used, etc. Everything they post will be inputed into my airtable API, that soon once it has enough data, anglers will be able to see what are the patterns of bait and location, certain fish like to bite or be at. Basically, its a blog, where anglers help anglers.

## Wireframes

Wireframes link here ---> https://whimsical.com/JKKNYMMZVgF9ACpQPdg94x

## Component Hierarchy

Component Hierarchy link here ---> https://whimsical.com/component-hierarchy-JTVRZ35V31oro5GcV6wCut

## API and Data Sample

```json
{
  "records": [
    {
      "id": "recCKxafUXMwJmt8Q",
      "fields": {
        "angler": "Ricky Gonzalez",
        "description": "lorem",
        "lure-bait": "Blue Rattletrap",
        "state": "Texas",
        "city": "Zapata",
        "lake-river-pond-ocean": "Falcon Lake",
        "freshwater-saltwater": "Freshwater",
        "bank-boat": "Boat",
        "fish": "Largemouth Bass"
      },
      "createdTime": "2021-12-01T21:54:00.000Z"
    },
    {
      "id": "recIPfaffwhfuzK2i",
      "fields": {
        "angler": "Carlos Alvarez",
        "description": "lorem",
        "state": "Texas",
        "freshwater-saltwater": "Freshwater",
        "bank-boat": "Boat",
        "city": "San Ignacio",
        "lake-river-pond-ocean": "Rio Grande River",
        "fish": "Blue Catfish",
        "lure-bait": "Liver"
      },
      "createdTime": "2021-12-01T21:54:00.000Z"
    },
    {
      "id": "recXPOYRcOzrXqnAN",
      "fields": {
        "angler": "Jerry Gonzalez",
        "description": "lorem alot of information is going to go here.skldjflksdjf",
        "lure-bait": "Texas Rig Senko",
        "state": "Texas",
        "city": "Laredo",
        "lake-river-pond-ocean": "Casa Blanca Lake",
        "freshwater-saltwater": "Freshwater",
        "bank-boat": "Bank",
        "fish": "Largemouth Bass"
      },
      "createdTime": "2021-12-01T21:54:00.000Z"
    }
  ]
}
```

### MVP/PostMVP

#### MVP

- Use my own Airtable API
- Render data on page using React
- Allow users to post their own catches (using API POST request)
- Navbar using "Link"

#### PostMVP

- Add a google maps API(similar)
- Use local storage to save user favorites
- Insert a Like on post and save how many likes it has

## Project Schedule

| Day     | Deliverable                                        | Status     |
| ------- | -------------------------------------------------- | ---------- |
| Dec 1-2 | Prompt / Wireframes / Priority Matrix / Timeframes | Complete   |
| Dec 2   | Project Approval                                   | Complete   |
| Dec 2-5 | React / Pseudocode / actual code                   | Complete   |
| Dec 6-7 | Css / Grid or Flexbox                              | Complete   |
| Dec 8   | MVP                                                | Complete   |
| Dec 9   | Presentations                                      | Incomplete |

## Timeframes

| Component            | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------- | :------: | :------------: | :-----------: | :---------: |
| Working on App file  |    H     |      4hrs      |     3hrs      |             |
| Get request from API |    H     |      3hrs      |     3hrs      |             |
| React jsx Blogs      |    H     |      4hrs      |     4hrs      |             |
| Css for each post    |    H     |      3hrs      |     2hrs      |             |
| Css for Blogs page   |    H     |      3hrs      |     5hrs      |             |
| Post request to API  |    H     |      4hrs      |     5hrs      |             |
| React Form blog      |    H     |      3hrs      |     4hrs      |             |
| Navbar               |    H     |      3hrs      |     4hrs      |             |
| Styling Homepage     |    H     |      3hrs      |     3hrs      |             |
| Footer               |    H     |      1hrs      |     2hrs      |             |
| Header               |    H     |      1hrs      |     1hrs      |             |
| Total                |    H     |     32hrs      |     36hrs     |             |

## SWOT Analysis

### Strengths:

I have a pretty good understanding on React, not perfect thought. I also know what I want my page to look like so all I have to focus on is the actual coding, once that is done Css, should be really easy.

### Weaknesses:

There are parts of React that still are a little bit confusing, but the answers are just one or two google searches away. If by some miracle I can't find it on google, I'll just look at our previous excersises.

### Opportunities:

As a angler myself, I've always looked for awesome fishing apps that can let anglers post about their catches, and there is honestly only one maybe two good ones, so this would be an awesome time to make my own and have all the fun I can with it, and hopefully comes out like it looks like in my mind.

### Threats:

Time wasted, sometimes when I'm going at a really good pace, I tend to take longer breaks, but then towards the end, I'll hit a roadblock where I can't find solutions and then I'm back to trying to hurry up some stuff and doesn't come out like I want. I will definitely just have to stick to a schedule I'll set for myself.
