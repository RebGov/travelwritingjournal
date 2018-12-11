class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :title
      t.string :content
      t.string :location
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
