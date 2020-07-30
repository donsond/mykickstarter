class RemoveFaQsFromProducts < ActiveRecord::Migration[5.2]
  def change
    remove_column :projects, :FAQs
  end
end
