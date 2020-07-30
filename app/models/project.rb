require 'date'

class Project < ApplicationRecord
    validates :title, :category, :creator_id, :funding_required, :campaign_end_date, presence: true

    validates :title, uniqueness: true

    belongs_to :creator,
    class_name: :User,
    foreign_key: :creator_id

    has_one_attached :video
    # has_many :faqs,
    # class_name: :FAQs,
    # foreign_key: :project_id

    # def campaign_end_date=(campaign_end_date)

    # end

end
