class Todo
  include Mongoid::Document
  include Mongoid::Timestamps
  field :title, type: String
  field :details, type: String
  field :when, type: DateTime
end
