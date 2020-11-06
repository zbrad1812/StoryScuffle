# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Story.destroy_all #Why is this so dramatic?

Story.create!(title: "The Horror of Virginia", description: "A spectre haunts a small town in Virginia...", content: "Okay so one day there was this guy and he went to a place and some conflict happened and it was kind of scary for a bit but it got resolved in a pretty satisfying way, it was pretty unique and crazy")
Story.create!(title: "The Scarytime of Maryland", description: "A spectre haunts a small town in Maryland...", content: "Okay so one day there was this guy and he went to a place and some conflict happened and it was kind of scary for a bit but it got resolved in a pretty satisfying way, it was pretty unique and crazy")
Story.create!(title: "The Nasty Ghost Guy of Massachusetts", description: "A spectre haunts a small town in Massachusetts...", content: "Okay so one day there was this guy and he went to a place and some conflict happened and it was kind of scary for a bit but it got resolved in a pretty satisfying way, it was pretty unique and crazy")
Story.create!(title: "The Freaky Fright of South Carolina", description: "A spectre haunts a small town in South Carolina...", content: "Okay so one day there was this guy and he went to a place and some conflict happened and it was kind of scary for a bit but it got resolved in a pretty satisfying way, it was pretty unique and crazy")
Story.create!(title: "The Horror of North Dakota", description: "A spectre haunts a small town in North Dakota...", content: "Okay so one day there was this guy and he went to a place and some conflict happened and it was kind of scary for a bit but it got resolved in a pretty satisfying way, it was pretty unique and crazy")