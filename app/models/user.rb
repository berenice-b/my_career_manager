class User < ApplicationRecord
  after_create :welcome_send
  after_create :assign_defaultisadmintonone
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  has_many :applications
  has_many :steps, through: :applications

  validates :email, presence: true, uniqueness: true, format: { with: /\A[\w+-.]+@[a-z\d-]+(.[a-z\d-]+)*.[a-z]+\z/i, message: "please enter a valid e-mail adress" }
  validates :password, presence: true, length: {minimum: 6}

  def welcome_send
    UserMailer.welcome_email(self).deliver_now
  end

  def assign_defaultisadmintonone
    self.is_admin = false
    self.save
  end

end
