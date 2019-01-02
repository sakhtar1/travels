# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])


#   Character.create(name: 'Luke', movie: movies.first)

#Country.create(country: 'Germany', continent: 'Europe', city: 'Berlin', description: 'Berlin Wall')
#Country.create(country: 'France', continent: 'Europe', city: 'Paris', description: 'Eiffel Tower')
#Country.create(country: 'Belgium', continent: 'Europe', city: 'Brussels', description: 'Chocolate Village')
#Country.create(country: 'Netherlands', continent: 'Europe', city: 'Amsterdam', description: 'Museums')
#User.destroy_all
#Country.destroy_all
#Visit.destroy_all
#Continent.destroy_all
user = User.create(:name => 'Sharmina Akh', :email => 'sakht318@gmail', :password => 'flower') 
germany = Country.create(:name => 'Germany', continent: 'Europe', city: 'Berlin', description: 'Berlin Wall')

user.visits.create(:visit_date => 'September', :visit_places => 'Museum', :country => germany)


Continent.create(name:'South America', description:"South America is a continent located in the Western Hemisphere, mostly in the Southern Hemisphere, with a relatively small portion in the Northern Hemisphere. It may also be considered a subcontinent of the Americas, which is how it is viewed in the Spanish and Portuguese-speaking regions of the Americas.")
Continent.create(name:'North America', description:"North America is a continent entirely within the Northern Hemisphere and almost all within the Western Hemisphere; it is also considered by some to be a northern subcontinent of the Americas. It is bordered to the north by the Arctic Ocean, to the east by the Atlantic Ocean, to the west and south by the Pacific Ocean, and to the southeast by South America and the Caribbean Sea.")
Continent.create(name:'Asia', description:"Asia is Earth's largest and most populous continent, located primarily in the Eastern and Northern Hemispheres. It shares the continental landmass of Eurasia with the continent of Europe and the continental landmass of Afro-Eurasia with both Europe and Africa. Asia covers an area of 44,579,000 square kilometres (17,212,000 sq mi), about 30 percent of Earth's total land area and 8.7 percent of the Earth's total surface area. The continent, which has long been home to the majority of the human population, was the site of many of the first civilizations. Asia is notable for not only its overall large size and population, but also dense and large settlements, as well as vast barely populated regions. Its 4.5 billion people constitute roughly 60 percent of the world's population.")
Continent.create(name:'Europe', description:"Europe encompasses an area of 10,180,000km² (3,930,000 square miles), stretching from Asia to the Atlantic, and from Africa to the Arctic. European countries welcome more than 480 million international visitors per year, more than half of the global market, and 7 of the 10 most visited countries are European nations.")
Continent.create(name:'Africa', description:"Africa is the world's second largest and second most-populous continent (the first being Asia in both categories). At about 30.3 million km2 (11.7 million square miles) including adjacent islands, it covers 6 percent of Earth's total surface area and 20 percent of its total land area. With 1.2 billion people as of 2016, it accounts for about 16 percent of the world's human population. The continent is surrounded by the Mediterranean Sea to the north, the Isthmus of Suez and the Red Sea to the northeast, the Indian Ocean to the southeast and the Atlantic Ocean to the west. The continent includes Madagascar and various archipelagos. It contains 54 fully recognised sovereign states (countries), nine territories and two de facto independent states with limited or no recognition. The majority of the continent and its countries are in the Northern Hemisphere, with a substantial portion and number of countries in the Southern Hemisphere.")
Continent.create(name:'Antartica', description:"Antarctica is Earth's southernmost continent. It contains the geographic South Pole and is situated in the Antarctic region of the Southern Hemisphere, almost entirely south of the Antarctic Circle, and is surrounded by the Southern Ocean. At 14,000,000 square kilometres (5,400,000 square miles), it is the fifth-largest continent. For comparison, Antarctica is nearly twice the size of Australia. About 98 percent of Antarctica is covered by ice that averages 1.9 km (1.2 mi; 6,200 ft) in thickness, which extends to all but the northernmost reaches of the Antarctic Peninsula.")
Continent.create(name:'Australia', description:"Australia officially the Commonwealth of Australia,[12] is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania and numerous smaller islands. It is the largest country in Oceania and the world's sixth-largest country by total area. The neighbouring countries are Papua New Guinea, Indonesia and East Timor to the north; the Solomon Islands and Vanuatu to the north-east.")