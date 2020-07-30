class AddVideoUrlToProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :video_url, :string, null: false
  end
end
