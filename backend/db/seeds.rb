# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Note.destroy_all

becci= User.create(username: "Becci", password:"Becci123", bio: "student", avatar: nil)

note1 = Note.create(title: "Hello World", content: "Saying Hello to The World", location: "Houston, TX", user: becci)
note2 = Note.create(title: "Good Night", content: "Saying Good Night To The World", location: "Houston, TX", user: becci)

# photo1 = Photo.create(title:"World", image_url: "https://us.123rf.com/450wm/lello4d/lello4d1201/lello4d120100010/11779726-earth-globe-realistic-3-d-rendering-north-america-view-on-white-background-.jpg?ver=6", note: note1 )
# photo2 = Photo.create(title:"Moon", image_url: "https://images.pexels.com/photos/47367/full-moon-moon-bright-sky-47367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350", note: note2)

# schema:
# create_table "photos", force: :cascade do |t|
#   t.string "title"
#   t.string "image_url"
#   t.bigint "note_id"
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
#   t.index ["note_id"], name: "index_photos_on_note_id"
# end
# class CreatePhotos < ActiveRecord::Migration[5.2]
#   def change
#     create_table :photos do |t|
#       t.string :title
#       t.string :image_url
#       t.belongs_to :note, foreign_key: true
#
#       t.timestamps
#     end
#   end
# end
