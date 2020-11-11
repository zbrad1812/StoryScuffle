class Comment < ApplicationRecord
  validates :commentContent, presence: true

  belongs_to :story
end