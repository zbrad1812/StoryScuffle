# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Story.destroy_all #Why is this so dramatic?

s1 = Story.create!(
  title: "The Virginia Scare",
  description: "A spectre haunts a small town in Virginia...",
  content: "  One day, a man by the name of Tom entered the state of Virginia
  with his sister, Mary. They had always been close, but lately things had felt
  tense. It could've been there's fathers death, but he thought that it was
  probably more complicated than that. I'd really like to actually try to
  write an interesting story right now but this is just seed data for my website
  and I should *really* be programming right now... But hey, having a long story
  will definitely be helpful for styling, since that's going to be something
  that gets thrown at me... lots of obstacles to maneuver, lots of problems to
  solve, but its fine... I'm just being dramatic I'm really just trying to make
  this longer. Thanks for reading this whole thing you are great thanks for
  looking at my website, I hope you like it young man."
  )
s2 = Story.create!(title: "The Scarytime of Maryland", description: "A spectre haunts a small town in Maryland...", content: "Okay so one day there was this guy and he went to a place and some conflict happened and it was kind of scary for a bit but it got resolved in a pretty satisfying way, it was pretty unique and crazy")
s3 = Story.create!(title: "The Nasty Ghost Guy of Massachusetts", description: "A spectre haunts a small town in Massachusetts...", content: "Okay so one day there was this guy and he went to a place and some conflict happened and it was kind of scary for a bit but it got resolved in a pretty satisfying way, it was pretty unique and crazy")
s4 = Story.create!(title: "The Freaky Fright of South Carolina", description: "A spectre haunts a small town in South Carolina...", content: "Okay so one day there was this guy and he went to a place and some conflict happened and it was kind of scary for a bit but it got resolved in a pretty satisfying way, it was pretty unique and crazy")
s5 = Story.create!(title: "The Horror of North Dakota", description: "A spectre haunts a small town in North Dakota...", content: "Okay so one day there was this guy and he went to a place and some conflict happened and it was kind of scary for a bit but it got resolved in a pretty satisfying way, it was pretty unique and crazy")

Comment.destroy_all

c1 = Comment.create!(commentContent: "This story is the craziest story ever!", story: s1)
c2 = Comment.create!(commentContent: "This story is awesome!", story: s2)
c3 = Comment.create!(commentContent: "This story is epic!", story: s1)
c4 = Comment.create!(commentContent: "This story is freaking wild!", story: s2)
c5 = Comment.create!(commentContent: "This story is awesome!", story: s3)