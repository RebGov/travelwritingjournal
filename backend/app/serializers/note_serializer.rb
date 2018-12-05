class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :location, :user_id
end
