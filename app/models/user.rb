class User < ApplicationRecord
  has_one :guest
end
