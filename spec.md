# Specifications for the Rails Assessment

Specs:
- [x] Using Ruby on Rails for the project
- [x] Include at least one has_many relationship (x has_many y e.g. User has_many Recipes) 
- User has_many visits & Country has_many visits

- [x] Include at least one belongs_to relationship (x belongs_to y e.g. Post belongs_to User)
- Visit belongs_to User & Visit belongs_to Country

- [x] Include at least one has_many through relationship (x has_many y through z e.g. Recipe has_many Items through Ingredients)
-User has_many :countries, through: :visits & Country has_many :users, through: :visits

- [x] The "through" part of the has_many through includes at least one user submittable attribute (attribute_name e.g. ingredients.quantity)
- visit has visit_date & vist_places

- [x] Include reasonable validations for simple model objects (list of model objects with validations e.g. User, Recipe, Ingredient, Item)
- User validates_presence_of :email, :email & Country validates_presence_of :name, :continent, :city 

- [x] Include a class level ActiveRecord scope method (model object & class method name and URL to see the working feature e.g. User.most_recipes URL: /users/most_recipes)


- [x] Include signup (how e.g. Devise)
- [x] Include login (how e.g. Devise)
- [x] Include logout (how e.g. Devise)
- [x] Include third party signup/login (how e.g. Devise/OmniAuth)
- google-oauth gem

- [x] Include nested resource show or index (URL e.g. users/2/recipes)
- Show page >> /countries/2/visits/2

- [x] Include nested resource "new" form (URL e.g. recipes/1/ingredients)
- /countries/2/visits

- [x] Include form display of validation errors (form URL e.g. /recipes/new)
- validation error via controller

Confirm:
- [x] The application is pretty DRY
- [x] Limited logic in controllers
- [x] Views use helper methods if appropriate
- [x] Views use partials if appropriate
