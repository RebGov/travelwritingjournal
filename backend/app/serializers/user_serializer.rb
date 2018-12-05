class UserSerializer < ActiveModel::Serializer
  attributes :username, :avatar, :bio, :notes 
end
