# TODO

- "nearby" locations?

## UI

- Add amount of acquired heart pieces/gold skulltulas on locations index page
- Make entire header portion of CollectableDetail clickable instead of just the checkbox???
- Add "has things left to collect" filters to locations page
- Add title for soft soil locations
- 'active' Navbar link
- Sticky navbar
- create ButtonGroup component
- Create 'Heading' and 'Paragraph' components
- "everything collected in this location" indicator on index/details page
- Tone the region themes down on LocationIndex - smaller color indicator of the theme
- Add 'reset everything' button, or abilities to have multiple slots?
- Add something to home screen
- Smarter 'scroll to top' ing - I wish it would save my scroll top on the locations index page
- Use 'text.color.interactive' instead of 'text.color.secondary'
- add progress bars to collectables
- Fix themes so there is a more obvious color to use for hover/focus/active states
- Better indicator which region is currently filtered on LocationIndexPage

## Data

- Separate data/state from context provider/consumers

- Add bottles
- Add big poes
- Add songs
- Add stones/medallions
- Add masks
- Add "item" collectable (hookshot etc)
- associate collectables to "required" other collectables or location
  -Pull image stuff into a separate object, create "CollectableImage" type

- Set up 'location links to' associations - e.g kokiri forest -> lost woods, hyrule field

- ZELDA_DUNGEON_BASE_URL should be part of sourceImageUrl - fetchImages/utils.js

# Done

- Add styled components theme
- Add react helmet to enable adding stuff to head
- normalize css
- Add react router
- Add gold skulltula boilerplate page
- Add locations page
- Move data up the tree using the context api
- Grab gold skulltula images from source
- Add gold skulltula data to gold skulltula page
- Add soft soil locations
- Fix annoying scroll issue between page transitions
- Consolidate styles I've copied and pasted everywhere
- Region-specific styles (Zora's domain, Goron land etc)
- Change "heart pieces: 0" to "heart pieces: 2/2" for locations
- Fix "2/2" bug - should filter collectable by location
- Clean up all of these typescript warnings
- Add "3/4" to Locations index page
- Add soft soil images to UI
- Fix number padding - "#0100" for "100"
- Navbar left + right sections
- Add 'back link' component
- Group 'heart pieces', 'gold skulltulas', and 'soft soil locations' into 'collectables' url/page group
- Make checkbox look nicer
- Clean up App\*\*\*\* components - put into separate subdirectory
- Clean up types + remove @ts-ignores
- Dedupe 'kakariko graveyard' and 'kakariko villiage graveyard'
- Dedupe 'market' and 'castle town'
- Group locations on index page by proximity?
- Add region on backend, not 'getRegionFromTitle'
- Ability to filter locations index by region
- Sort locations index locations by region
- Fix checkbox overflow but on LocationDetailsPage
- Add great fairy fountains
- The checkbox overflow bug is still happening on Collectables pages
- checkbox outline goes outside of sticky h2 on LocationDetailPage
- Clean up those image alt warnings
