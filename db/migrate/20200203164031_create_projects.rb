class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :category, null: false
      t.integer :creator_id, foreign_key: true, null: false
      t.integer :funding_required, null: false
      t.string :FAQs
      t.datetime :campaign_end_date, null: false
      t.index :title, unique: true

      t.timestamps
    end
  end
end
