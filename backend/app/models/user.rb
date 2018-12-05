class User < ApplicationRecord
  has_many :notes
  has_secure_password
  # validates :avatar, presence: false
  validates :username, uniqueness: { case_sensitive: false } 
end
