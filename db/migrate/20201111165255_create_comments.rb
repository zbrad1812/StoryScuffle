class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :commentContent, null: false 
      t.belongs_to :story, null: false

      t.timestamps
    end
  end
end
