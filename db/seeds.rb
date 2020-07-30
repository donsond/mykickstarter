# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'
User.destroy_all
Project.destroy_all

don = User.create!(name: "Don Sondapperumaarachchi", email: "ayesh98@gmail.com", email_confirmation: "ayesh98@gmail.com", password_confirmation: "123456", password: "123456");
andy = User.create!(name: "Andy Wynkoup", email: "testing@myKickstarter.com", email_confirmation: "testing@myKickstarter.com" , password_confirmation: "123456", password: "123456");

Project.create!(title: "Electric Skateboard", category: "Technology", 
                funding_required: 10000, creator_id: don.id, campaign_end_date: DateTime.new(2020,12,30), 
                video_url: "https://player.vimeo.com/video/127547570?color=f9dc27", 
                body: "Buy this skateboard and change your life")

Project.create!(title: "SuperBowl I Video", category: "Film", 
                funding_required: 1000, creator_id: andy.id, campaign_end_date: DateTime.new(2020,04,12), 
                video_url: "https://www.youtube.com/embed/-ihLXZ2-l7A", 
                body: "Relive the first SuperBowl between the Packers and Chiefs")

Project.create!(title: "Candy Crunch", category: "Games", 
                funding_required: 5000, creator_id: andy.id, campaign_end_date: DateTime.new(2020,03,03), 
                video_url: "https://www.youtube.com/embed/6Lsz6FK0uIM", 
                body: "The best new puzzle game")

Project.create!(title: "Travel Hoodie", category: "Fashion", 
                funding_required: 2500, creator_id: don.id, campaign_end_date: DateTime.new(2020,07,17), 
                video_url: "https://www.youtube.com/embed/tGP4VzC4Iyc", 
                body: "This travel hoodie is made completely from recycled plastic and upcycled cotton")